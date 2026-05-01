import {
  CreditType,
  Currency,
  DocumentStatus,
  DocumentType,
  LeadStatus,
  LeadTemperature,
  LeadType,
  MembershipRole,
  OperationType,
  PaymentType,
  PlanType,
  PrismaClient,
  PropertyStatus,
  PropertyType,
  TaskStatus,
  TimelineStepStatus,
  TransactionStage,
  TransactionStatus,
  UserRole,
} from "@prisma/client";
import { hashPassword } from "better-auth/crypto";

const prisma = new PrismaClient();

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type SeedUser = {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  membershipRole: MembershipRole;
};

const SEED_USERS: SeedUser[] = [
  { id: "seed-user-admin", email: "admin@habitra.mx", name: "Admin Habitra", phone: "3331001000", role: UserRole.ADMIN, membershipRole: MembershipRole.OWNER },
  { id: "seed-user-broker", email: "broker@habitra.mx", name: "Fernanda Rivera", phone: "3331001001", role: UserRole.BROKER_OWNER, membershipRole: MembershipRole.OWNER },
  { id: "seed-user-agent-1", email: "agente1@habitra.mx", name: "Luis Hernandez", phone: "3331001002", role: UserRole.AGENT, membershipRole: MembershipRole.AGENT },
  { id: "seed-user-agent-2", email: "agente2@habitra.mx", name: "Camila Ortega", phone: "3331001003", role: UserRole.AGENT, membershipRole: MembershipRole.AGENT },
  { id: "seed-user-agent-3", email: "agente3@habitra.mx", name: "Ricardo Sosa", phone: "3331001004", role: UserRole.AGENT, membershipRole: MembershipRole.AGENT },
  { id: "seed-user-buyer", email: "buyer@habitra.mx", name: "Mariana Gomez", phone: "3331001005", role: UserRole.BUYER, membershipRole: MembershipRole.MEMBER },
  { id: "seed-user-seller", email: "seller@habitra.mx", name: "Jorge Martinez", phone: "3331001006", role: UserRole.SELLER, membershipRole: MembershipRole.MEMBER },
];

async function main() {
  const passwordHash = await hashPassword("Habitra123!");

  const plans = [
    { type: PlanType.STARTER, name: "Starter", priceMxn: 1200, billingCadence: "mensual", minUsers: 1, maxUsers: 1, description: "Para agentes independientes.", successFeePercent: 0.35 },
    { type: PlanType.GROWTH, name: "Growth", priceMxn: 2200, billingCadence: "mensual por agente", minUsers: 5, maxUsers: null, description: "Para inmobiliarias pequenas y medianas.", successFeePercent: 0.3 },
    { type: PlanType.SCALE, name: "Scale", priceMxn: 1800, billingCadence: "mensual por agente", minUsers: 20, maxUsers: null, description: "Para inmobiliarias grandes.", successFeePercent: 0.25 },
    { type: PlanType.ENTERPRISE, name: "Enterprise", priceMxn: 50000, billingCadence: "mensual", minUsers: 30, maxUsers: null, description: "Para desarrolladores y operacion avanzada.", successFeePercent: 0.2 },
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { type: plan.type },
      update: plan,
      create: plan,
    });
  }

  const organization = await prisma.organization.upsert({
    where: { slug: "habitra-demo-realty" },
    update: { name: "Habitra Demo Realty", city: "Guadalajara", state: "Jalisco", country: "Mexico" },
    create: { id: "seed-org-habitra", slug: "habitra-demo-realty", name: "Habitra Demo Realty", city: "Guadalajara", state: "Jalisco", country: "Mexico" },
  });

  const growthPlan = await prisma.plan.findUniqueOrThrow({ where: { type: PlanType.GROWTH } });
  await prisma.subscription.upsert({
    where: { id: "seed-subscription-main" },
    update: { organizationId: organization.id, planId: growthPlan.id, seats: 8, status: "ACTIVE" },
    create: {
      id: "seed-subscription-main",
      organizationId: organization.id,
      planId: growthPlan.id,
      seats: 8,
      status: "ACTIVE",
      startDate: new Date(),
    },
  });

  for (const user of SEED_USERS) {
    const created = await prisma.user.upsert({
      where: { email: user.email },
      update: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        role: user.role,
        emailVerified: true,
        isActive: true,
      },
      create: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        role: user.role,
        emailVerified: true,
      },
    });

    await prisma.account.upsert({
      where: {
        providerId_accountId: {
          providerId: "credential",
          accountId: created.email,
        },
      },
      update: { userId: created.id, password: passwordHash },
      create: {
        id: `seed-account-${created.id}`,
        userId: created.id,
        accountId: created.email,
        providerId: "credential",
        password: passwordHash,
      },
    });

    await prisma.membership.upsert({
      where: {
        userId_organizationId: {
          userId: created.id,
          organizationId: organization.id,
        },
      },
      update: { role: user.membershipRole },
      create: {
        id: `seed-membership-${created.id}`,
        userId: created.id,
        organizationId: organization.id,
        role: user.membershipRole,
      },
    });
  }

  const userByEmail = new Map((await prisma.user.findMany({ where: { email: { in: SEED_USERS.map((u) => u.email) } } })).map((u) => [u.email, u]));
  const admin = userByEmail.get("admin@habitra.mx")!;
  const broker = userByEmail.get("broker@habitra.mx")!;
  const agent1 = userByEmail.get("agente1@habitra.mx")!;
  const agent2 = userByEmail.get("agente2@habitra.mx")!;
  const agent3 = userByEmail.get("agente3@habitra.mx")!;
  const buyerUser = userByEmail.get("buyer@habitra.mx")!;
  const sellerUser = userByEmail.get("seller@habitra.mx")!;
  const agentIds = [agent1.id, agent2.id, agent3.id];

  const leadsInput = [
    { id: "seed-lead-1", name: "Alberto Pineda", type: LeadType.COMPRADOR, source: "landing", city: "Guadalajara" },
    { id: "seed-lead-2", name: "Paola Diaz", type: LeadType.VENDEDOR, source: "referido", city: "Zapopan" },
    { id: "seed-lead-3", name: "Hector Salas", type: LeadType.INVERSIONISTA, source: "campana", city: "CDMX" },
    { id: "seed-lead-4", name: "Erika Mora", type: LeadType.COMPRADOR, source: "portal", city: "Monterrey" },
    { id: "seed-lead-5", name: "Daniela Cardenas", type: LeadType.VENDEDOR, source: "manual", city: "Guadalajara" },
    { id: "seed-lead-6", name: "Raul Vargas", type: LeadType.COMPRADOR, source: "landing", city: "Zapopan" },
    { id: "seed-lead-7", name: "Sofia Lozano", type: LeadType.COMPRADOR, source: "referido", city: "CDMX" },
    { id: "seed-lead-8", name: "Arturo Neri", type: LeadType.VENDEDOR, source: "portal", city: "Monterrey" },
    { id: "seed-lead-9", name: "Valeria Leon", type: LeadType.COMPRADOR, source: "campana", city: "Queretaro" },
    { id: "seed-lead-10", name: "Miguel Alarcon", type: LeadType.ARRENDATARIO, source: "otro", city: "Puebla" },
  ];

  for (let i = 0; i < leadsInput.length; i += 1) {
    const lead = leadsInput[i];
    await prisma.lead.upsert({
      where: { id: lead.id },
      update: {
        organizationId: organization.id,
        name: lead.name,
        email: `${slugify(lead.name)}@mail.com`,
        phone: `33100010${i.toString().padStart(2, "0")}`,
        type: lead.type,
        source: lead.source,
        status: i < 3 ? LeadStatus.CALIFICADO : i < 8 ? LeadStatus.CONTACTADO : LeadStatus.NUEVO,
        temperature: i % 3 === 0 ? LeadTemperature.CALIENTE : i % 3 === 1 ? LeadTemperature.TIBIO : LeadTemperature.FRIO,
        assignedAgentId: agentIds[i % agentIds.length],
        notesText: `Lead de ${lead.city} con interes en servicio inmobiliario.`,
        lastContactAt: new Date(Date.now() - i * 86400000),
      },
      create: {
        id: lead.id,
        organizationId: organization.id,
        name: lead.name,
        email: `${slugify(lead.name)}@mail.com`,
        phone: `33100010${i.toString().padStart(2, "0")}`,
        type: lead.type,
        source: lead.source,
        status: i < 3 ? LeadStatus.CALIFICADO : i < 8 ? LeadStatus.CONTACTADO : LeadStatus.NUEVO,
        temperature: i % 3 === 0 ? LeadTemperature.CALIENTE : i % 3 === 1 ? LeadTemperature.TIBIO : LeadTemperature.FRIO,
        assignedAgentId: agentIds[i % agentIds.length],
        notesText: `Lead de ${lead.city} con interes en servicio inmobiliario.`,
        lastContactAt: new Date(Date.now() - i * 86400000),
      },
    });
  }

  const buyersInput = [
    { id: "seed-buyer-1", name: "Mariana Gomez", zone: "Providencia, Guadalajara", userId: buyerUser.id, leadRef: "seed-lead-1" },
    { id: "seed-buyer-2", name: "Andres Navarro", zone: "Puerta de Hierro, Zapopan", leadRef: "seed-lead-4" },
    { id: "seed-buyer-3", name: "Lucia Sandoval", zone: "Del Valle, CDMX", leadRef: "seed-lead-6" },
    { id: "seed-buyer-4", name: "Ivan Carrillo", zone: "San Jeronimo, Monterrey", leadRef: "seed-lead-7" },
    { id: "seed-buyer-5", name: "Patricia Luna", zone: "Juriquilla, Queretaro" },
    { id: "seed-buyer-6", name: "Victor Beltran", zone: "Angelopolis, Puebla" },
  ];

  for (let i = 0; i < buyersInput.length; i += 1) {
    const buyer = buyersInput[i];
    const payload = {
      organizationId: organization.id,
      userId: buyer.userId,
      sourceLeadId: buyer.leadRef,
      name: buyer.name,
      email: `${slugify(buyer.name)}@mail.com`,
      phone: `33200020${i.toString().padStart(2, "0")}`,
      maxBudget: 2200000 + i * 450000,
      downPayment: 350000 + i * 50000,
      monthlyIncome: 52000 + i * 8000,
      creditType: i % 2 === 0 ? CreditType.BANCARIO : CreditType.COFINAVIT,
      desiredZone: buyer.zone,
      desiredPropertyType: i % 2 === 0 ? PropertyType.DEPARTAMENTO : PropertyType.CASA,
      bedrooms: i % 2 === 0 ? 2 : 3,
      bathrooms: 2,
      urgency: (i % 5) + 1,
      buyingScore: 62 + i * 4,
      assignedAgentId: agentIds[i % agentIds.length],
    };
    if (buyer.userId) {
      await prisma.buyer.upsert({
        where: { userId: buyer.userId },
        update: payload,
        create: { id: buyer.id, ...payload },
      });
    } else {
      await prisma.buyer.upsert({
        where: { id: buyer.id },
        update: payload,
        create: { id: buyer.id, ...payload },
      });
    }
  }

  const sellersInput = [
    { id: "seed-seller-1", name: "Jorge Martinez", city: "Guadalajara", userId: sellerUser.id, leadRef: "seed-lead-2" },
    { id: "seed-seller-2", name: "Alicia Correa", city: "Zapopan", leadRef: "seed-lead-5" },
    { id: "seed-seller-3", name: "Roberto Mijares", city: "CDMX", leadRef: "seed-lead-8" },
    { id: "seed-seller-4", name: "Nora Figueroa", city: "Monterrey" },
    { id: "seed-seller-5", name: "Mario Escamilla", city: "Queretaro" },
    { id: "seed-seller-6", name: "Rebeca Ponce", city: "Puebla" },
  ];

  for (let i = 0; i < sellersInput.length; i += 1) {
    const seller = sellersInput[i];
    const payload = {
      organizationId: organization.id,
      userId: seller.userId,
      sourceLeadId: seller.leadRef,
      name: seller.name,
      email: `${slugify(seller.name)}@mail.com`,
      phone: `33300030${i.toString().padStart(2, "0")}`,
      urgency: (i % 5) + 1,
      expectedPrice: 2800000 + i * 550000,
      sellingReason: i % 2 === 0 ? "Cambio de ciudad" : "Inversion en otro activo",
      assignedAgentId: agentIds[i % agentIds.length],
    };
    if (seller.userId) {
      await prisma.seller.upsert({
        where: { userId: seller.userId },
        update: payload,
        create: { id: seller.id, ...payload },
      });
    } else {
      await prisma.seller.upsert({
        where: { id: seller.id },
        update: payload,
        create: { id: seller.id, ...payload },
      });
    }
  }

  const zoneCatalog = [
    { city: "Guadalajara", state: "Jalisco", neighborhood: "Providencia" },
    { city: "Guadalajara", state: "Jalisco", neighborhood: "Chapalita" },
    { city: "Zapopan", state: "Jalisco", neighborhood: "Puerta de Hierro" },
    { city: "Zapopan", state: "Jalisco", neighborhood: "Solares" },
    { city: "CDMX", state: "Ciudad de Mexico", neighborhood: "Del Valle" },
    { city: "CDMX", state: "Ciudad de Mexico", neighborhood: "Polanco" },
    { city: "Monterrey", state: "Nuevo Leon", neighborhood: "San Jeronimo" },
    { city: "Monterrey", state: "Nuevo Leon", neighborhood: "Valle Oriente" },
    { city: "Queretaro", state: "Queretaro", neighborhood: "Juriquilla" },
    { city: "Puebla", state: "Puebla", neighborhood: "Angelopolis" },
  ];
  const sellerRows = await prisma.seller.findMany({
    where: { organizationId: organization.id },
    orderBy: { createdAt: "asc" },
  });

  const propertyCount = 36;
  for (let i = 0; i < propertyCount; i += 1) {
    const zone = zoneCatalog[i % zoneCatalog.length];
    const sellerId = sellerRows[i % sellerRows.length]?.id ?? null;
    const agentId = agentIds[i % agentIds.length];
    const propertyType = i % 3 === 0 ? PropertyType.CASA : i % 3 === 1 ? PropertyType.DEPARTAMENTO : PropertyType.PENTHOUSE;
    const operationType = i % 5 === 0 ? OperationType.RENTA : OperationType.VENTA;
    const title = `${propertyType === PropertyType.CASA ? "Casa" : propertyType === PropertyType.PENTHOUSE ? "Penthouse" : "Departamento"} en ${zone.neighborhood}`;
    const basePrice = operationType === OperationType.RENTA ? 18000 + i * 750 : 2500000 + i * 195000;
    const slug = `${slugify(title)}-${zone.city.toLowerCase()}-${i + 1}`;

    await prisma.property.upsert({
      where: { slug },
      update: {
        organizationId: organization.id,
        title,
        description: `Propiedad en ${zone.neighborhood}, ${zone.city} con enfoque B2C.`,
        fullDescription: "Incluye analisis de readiness, claridad documental y estimacion de gastos de cierre.",
        propertyType,
        operationType,
        price: basePrice,
        currency: Currency.MXN,
        address: `Av. ${zone.neighborhood} ${120 + i}`,
        city: zone.city,
        state: zone.state,
        neighborhood: zone.neighborhood,
        postalCode: `44${(100 + i).toString().padStart(3, "0")}`,
        latitude: 20.6 + i * 0.01,
        longitude: -103.3 + i * 0.01,
        bedrooms: operationType === OperationType.RENTA ? 2 : (i % 3) + 2,
        bathrooms: operationType === OperationType.RENTA ? 1 : 2 + (i % 2),
        parkingSpaces: 1 + (i % 2),
        landArea: 82 + i * 4,
        constructionArea: 75 + i * 3,
        age: 2 + (i % 12),
        status: i < 30 ? PropertyStatus.PUBLICADA : PropertyStatus.EN_NEGOCIACION,
        sellerId,
        assignedAgentId: agentId,
        readinessScore: 55 + (i % 35),
        suggestedPriceMin: operationType === OperationType.RENTA ? null : basePrice * 0.95,
        suggestedPriceMax: operationType === OperationType.RENTA ? null : basePrice * 1.08,
        suggestedPriceTarget: operationType === OperationType.RENTA ? null : basePrice * 1.02,
        risks: i % 4 === 0 ? ["Predial pendiente", "Avaluo por actualizar"] : i % 3 === 0 ? ["Expediente notarial en revision"] : ["Sin riesgos criticos"],
        isFeatured: i % 6 === 0,
      },
      create: {
        id: `seed-property-${i + 1}`,
        organizationId: organization.id,
        slug,
        title,
        description: `Propiedad en ${zone.neighborhood}, ${zone.city} con enfoque B2C.`,
        fullDescription: "Incluye analisis de readiness, claridad documental y estimacion de gastos de cierre.",
        propertyType,
        operationType,
        price: basePrice,
        currency: Currency.MXN,
        address: `Av. ${zone.neighborhood} ${120 + i}`,
        city: zone.city,
        state: zone.state,
        neighborhood: zone.neighborhood,
        postalCode: `44${(100 + i).toString().padStart(3, "0")}`,
        latitude: 20.6 + i * 0.01,
        longitude: -103.3 + i * 0.01,
        bedrooms: operationType === OperationType.RENTA ? 2 : (i % 3) + 2,
        bathrooms: operationType === OperationType.RENTA ? 1 : 2 + (i % 2),
        parkingSpaces: 1 + (i % 2),
        landArea: 82 + i * 4,
        constructionArea: 75 + i * 3,
        age: 2 + (i % 12),
        status: i < 30 ? PropertyStatus.PUBLICADA : PropertyStatus.EN_NEGOCIACION,
        sellerId,
        assignedAgentId: agentId,
        readinessScore: 55 + (i % 35),
        suggestedPriceMin: operationType === OperationType.RENTA ? null : basePrice * 0.95,
        suggestedPriceMax: operationType === OperationType.RENTA ? null : basePrice * 1.08,
        suggestedPriceTarget: operationType === OperationType.RENTA ? null : basePrice * 1.02,
        risks: i % 4 === 0 ? ["Predial pendiente", "Avaluo por actualizar"] : i % 3 === 0 ? ["Expediente notarial en revision"] : ["Sin riesgos criticos"],
        isFeatured: i % 6 === 0,
      },
    });
  }

  const properties = await prisma.property.findMany({
    where: { organizationId: organization.id },
    orderBy: { createdAt: "asc" },
  });

  for (const property of properties) {
    await prisma.propertyImage.upsert({
      where: { id: `seed-image-${property.id}-1` },
      update: {
        propertyId: property.id,
        url: `https://picsum.photos/seed/${property.slug}-1/1200/800`,
        alt: `Fachada ${property.title}`,
        isPrimary: true,
        order: 0,
      },
      create: {
        id: `seed-image-${property.id}-1`,
        propertyId: property.id,
        url: `https://picsum.photos/seed/${property.slug}-1/1200/800`,
        alt: `Fachada ${property.title}`,
        isPrimary: true,
        order: 0,
      },
    });
    await prisma.propertyImage.upsert({
      where: { id: `seed-image-${property.id}-2` },
      update: {
        propertyId: property.id,
        url: `https://picsum.photos/seed/${property.slug}-2/1200/800`,
        alt: `Interior ${property.title}`,
        isPrimary: false,
        order: 1,
      },
      create: {
        id: `seed-image-${property.id}-2`,
        propertyId: property.id,
        url: `https://picsum.photos/seed/${property.slug}-2/1200/800`,
        alt: `Interior ${property.title}`,
        isPrimary: false,
        order: 1,
      },
    });

    await prisma.propertyAmenity.upsert({
      where: { propertyId_name: { propertyId: property.id, name: "Seguridad 24/7" } },
      update: {},
      create: { id: `seed-amenity-${property.id}-1`, propertyId: property.id, name: "Seguridad 24/7" },
    });
    await prisma.propertyAmenity.upsert({
      where: { propertyId_name: { propertyId: property.id, name: "Cerca de vias principales" } },
      update: {},
      create: { id: `seed-amenity-${property.id}-2`, propertyId: property.id, name: "Cerca de vias principales" },
    });
    await prisma.propertyAmenity.upsert({
      where: { propertyId_name: { propertyId: property.id, name: "Acabados premium" } },
      update: {},
      create: { id: `seed-amenity-${property.id}-3`, propertyId: property.id, name: "Acabados premium" },
    });
  }

  const buyers = await prisma.buyer.findMany({ where: { organizationId: organization.id }, orderBy: { createdAt: "asc" } });
  const sellers = await prisma.seller.findMany({ where: { organizationId: organization.id }, orderBy: { createdAt: "asc" } });

  const saleProperties = properties.filter((p) => p.operationType === OperationType.VENTA).slice(0, 8);
  for (let i = 0; i < saleProperties.length; i += 1) {
    const property = saleProperties[i];
    const buyer = buyers[i % buyers.length];
    const seller = sellers[i % sellers.length];
    const agentId = property.assignedAgentId ?? agentIds[i % agentIds.length];
    const transactionId = `seed-transaction-${i + 1}`;
    const offeredPrice = Number(property.price) * 0.96;
    const acceptedPrice = Number(property.price) * 0.985;

    await prisma.transaction.upsert({
      where: { id: transactionId },
      update: {
        organizationId: organization.id,
        propertyId: property.id,
        buyerId: buyer.id,
        sellerId: seller.id,
        agentId,
        offeredPrice,
        acceptedPrice,
        status: i >= 6 ? TransactionStatus.EN_RIESGO : TransactionStatus.ACTIVA,
        currentStage: [TransactionStage.OFERTA_ENVIADA, TransactionStage.OFERTA_ACEPTADA, TransactionStage.CREDITO_EN_PROCESO, TransactionStage.AVALUO_COMPLETADO, TransactionStage.EXPEDIENTE_NOTARIAL, TransactionStage.FIRMA_PROGRAMADA, TransactionStage.REGISTRO_EN_PROCESO, TransactionStage.ENTREGA_COMPLETADA][i],
        estimatedClosingDate: new Date(Date.now() + (40 + i * 9) * 86400000),
        paymentType: i % 3 === 0 ? PaymentType.CREDITO : PaymentType.MIXTO,
        creditType: i % 2 === 0 ? CreditType.BANCARIO : CreditType.INFONAVIT,
        notaryName: `Notaria ${15 + i} de ${property.city}`,
        appraiserName: `Valuaciones ${property.city}`,
        bankName: i % 2 === 0 ? "BBVA" : "Banorte",
        probabilityToClose: 80 - i * 7,
        notesText: "Operacion monitoreada en tablero semanal de cierre.",
      },
      create: {
        id: transactionId,
        organizationId: organization.id,
        propertyId: property.id,
        buyerId: buyer.id,
        sellerId: seller.id,
        agentId,
        offeredPrice,
        acceptedPrice,
        status: i >= 6 ? TransactionStatus.EN_RIESGO : TransactionStatus.ACTIVA,
        currentStage: [TransactionStage.OFERTA_ENVIADA, TransactionStage.OFERTA_ACEPTADA, TransactionStage.CREDITO_EN_PROCESO, TransactionStage.AVALUO_COMPLETADO, TransactionStage.EXPEDIENTE_NOTARIAL, TransactionStage.FIRMA_PROGRAMADA, TransactionStage.REGISTRO_EN_PROCESO, TransactionStage.ENTREGA_COMPLETADA][i],
        estimatedClosingDate: new Date(Date.now() + (40 + i * 9) * 86400000),
        paymentType: i % 3 === 0 ? PaymentType.CREDITO : PaymentType.MIXTO,
        creditType: i % 2 === 0 ? CreditType.BANCARIO : CreditType.INFONAVIT,
        notaryName: `Notaria ${15 + i} de ${property.city}`,
        appraiserName: `Valuaciones ${property.city}`,
        bankName: i % 2 === 0 ? "BBVA" : "Banorte",
        probabilityToClose: 80 - i * 7,
        notesText: "Operacion monitoreada en tablero semanal de cierre.",
      },
    });
  }

  const transactions = await prisma.transaction.findMany({ where: { organizationId: organization.id }, orderBy: { createdAt: "asc" } });
  const timelineTemplate = [
    { name: "Lead creado", role: UserRole.AGENT },
    { name: "Comprador calificado", role: UserRole.AGENT },
    { name: "Oferta enviada", role: UserRole.BUYER },
    { name: "Credito en proceso", role: UserRole.BUYER },
    { name: "Expediente notarial", role: UserRole.BROKER_OWNER },
    { name: "Firma programada", role: UserRole.SELLER },
  ];

  for (const transaction of transactions) {
    for (let i = 0; i < timelineTemplate.length; i += 1) {
      const step = timelineTemplate[i];
      await prisma.transactionTimelineStep.upsert({
        where: { id: `seed-timeline-${transaction.id}-${i + 1}` },
        update: {
          transactionId: transaction.id,
          name: step.name,
          description: `Paso ${i + 1} del proceso de cierre`,
          responsibleRole: step.role,
          estimatedDate: new Date(Date.now() + (i + 4) * 86400000),
          completedDate: i < 3 ? new Date(Date.now() - (3 - i) * 86400000) : null,
          status: i < 3 ? TimelineStepStatus.COMPLETADO : i === 3 ? TimelineStepStatus.EN_PROGRESO : TimelineStepStatus.PENDIENTE,
          notes: i === 4 ? "Pendiente integrar certificado de libertad de gravamen." : null,
          order: i,
        },
        create: {
          id: `seed-timeline-${transaction.id}-${i + 1}`,
          transactionId: transaction.id,
          name: step.name,
          description: `Paso ${i + 1} del proceso de cierre`,
          responsibleRole: step.role,
          estimatedDate: new Date(Date.now() + (i + 4) * 86400000),
          completedDate: i < 3 ? new Date(Date.now() - (3 - i) * 86400000) : null,
          status: i < 3 ? TimelineStepStatus.COMPLETADO : i === 3 ? TimelineStepStatus.EN_PROGRESO : TimelineStepStatus.PENDIENTE,
          notes: i === 4 ? "Pendiente integrar certificado de libertad de gravamen." : null,
          order: i,
        },
      });
    }
  }

  for (let i = 0; i < transactions.length; i += 1) {
    const trx = transactions[i];
    const property = properties.find((p) => p.id === trx.propertyId)!;
    const buyer = buyers.find((b) => b.id === trx.buyerId)!;

    const docs = [
      { type: DocumentType.ESCRITURA, status: i % 2 === 0 ? DocumentStatus.APROBADO : DocumentStatus.EN_REVISION, title: "Escritura de propiedad" },
      { type: DocumentType.PREDIAL, status: i % 3 === 0 ? DocumentStatus.PENDIENTE : DocumentStatus.CARGADO, title: "Pago predial" },
      { type: DocumentType.AGUA, status: i % 4 === 0 ? DocumentStatus.PENDIENTE : DocumentStatus.CARGADO, title: "Comprobante de agua" },
      { type: DocumentType.LIBERTAD_GRAVAMEN, status: i >= 6 ? DocumentStatus.PENDIENTE : DocumentStatus.CARGADO, title: "Certificado de libertad de gravamen" },
      { type: DocumentType.IDENTIFICACION, status: DocumentStatus.CARGADO, title: "INE comprador" },
    ];

    for (let d = 0; d < docs.length; d += 1) {
      const doc = docs[d];
      await prisma.document.upsert({
        where: { id: `seed-document-${trx.id}-${d + 1}` },
        update: {
          organizationId: organization.id,
          type: doc.type,
          status: doc.status,
          title: doc.title,
          fileName: `${slugify(doc.title)}-${i + 1}.pdf`,
          fileUrl: `https://example.com/docs/${slugify(doc.title)}-${i + 1}.pdf`,
          mimeType: "application/pdf",
          propertyId: trx.propertyId,
          buyerId: doc.type === DocumentType.IDENTIFICACION ? trx.buyerId : null,
          sellerId: trx.sellerId,
          transactionId: trx.id,
          uploadedByUserId: agentIds[(i + d) % agentIds.length],
        },
        create: {
          id: `seed-document-${trx.id}-${d + 1}`,
          organizationId: organization.id,
          type: doc.type,
          status: doc.status,
          title: doc.title,
          fileName: `${slugify(doc.title)}-${i + 1}.pdf`,
          fileUrl: `https://example.com/docs/${slugify(doc.title)}-${i + 1}.pdf`,
          mimeType: "application/pdf",
          propertyId: trx.propertyId,
          buyerId: doc.type === DocumentType.IDENTIFICACION ? trx.buyerId : null,
          sellerId: trx.sellerId,
          transactionId: trx.id,
          uploadedByUserId: agentIds[(i + d) % agentIds.length],
        },
      });
    }

    const propertyPrice = Number(property.price);
    const downPayment = propertyPrice * 0.2;
    const notaryPct = 5.5;
    const appraisal = 8500;
    const otherCosts = 19500;
    const closing = propertyPrice * (notaryPct / 100) + appraisal + otherCosts;
    const monthly = (propertyPrice - downPayment) * 0.0102;
    const income = Number(buyer.monthlyIncome ?? 60000);
    const ratio = monthly / income;

    await prisma.financialSimulation.upsert({
      where: { id: `seed-simulation-${trx.id}` },
      update: {
        organizationId: organization.id,
        buyerId: trx.buyerId,
        propertyId: trx.propertyId,
        transactionId: trx.id,
        propertyPrice,
        downPayment,
        years: 20,
        annualRate: 10.9,
        creditType: buyer.creditType,
        notaryCostPct: notaryPct,
        appraisalCost: appraisal,
        otherCosts,
        estimatedMonthly: monthly,
        estimatedClosingCosts: closing,
        initialTotalNeeded: downPayment + closing,
        affordabilityRatio: ratio,
        recommendation: ratio <= 0.3 ? "viable" : ratio <= 0.4 ? "ajustado" : "no recomendable",
      },
      create: {
        id: `seed-simulation-${trx.id}`,
        organizationId: organization.id,
        buyerId: trx.buyerId,
        propertyId: trx.propertyId,
        transactionId: trx.id,
        propertyPrice,
        downPayment,
        years: 20,
        annualRate: 10.9,
        creditType: buyer.creditType,
        notaryCostPct: notaryPct,
        appraisalCost: appraisal,
        otherCosts,
        estimatedMonthly: monthly,
        estimatedClosingCosts: closing,
        initialTotalNeeded: downPayment + closing,
        affordabilityRatio: ratio,
        recommendation: ratio <= 0.3 ? "viable" : ratio <= 0.4 ? "ajustado" : "no recomendable",
      },
    });

    await prisma.task.upsert({
      where: { id: `seed-task-${trx.id}-1` },
      update: {
        organizationId: organization.id,
        title: "Validar expediente del vendedor",
        description: "Confirmar escritura, predial y comprobante de agua.",
        status: i < 4 ? TaskStatus.COMPLETADA : TaskStatus.EN_PROGRESO,
        dueDate: new Date(Date.now() + (i + 2) * 86400000),
        assigneeId: agentIds[i % agentIds.length],
        transactionId: trx.id,
        propertyId: trx.propertyId,
        sellerId: trx.sellerId,
      },
      create: {
        id: `seed-task-${trx.id}-1`,
        organizationId: organization.id,
        title: "Validar expediente del vendedor",
        description: "Confirmar escritura, predial y comprobante de agua.",
        status: i < 4 ? TaskStatus.COMPLETADA : TaskStatus.EN_PROGRESO,
        dueDate: new Date(Date.now() + (i + 2) * 86400000),
        assigneeId: agentIds[i % agentIds.length],
        transactionId: trx.id,
        propertyId: trx.propertyId,
        sellerId: trx.sellerId,
      },
    });
  }

  await prisma.note.upsert({
    where: { id: "seed-note-1" },
    update: {
      organizationId: organization.id,
      content: "Cliente comprador solicita visita adicional con familiar.",
      authorId: agent1.id,
      transactionId: transactions[0]?.id ?? null,
      buyerId: transactions[0]?.buyerId ?? null,
    },
    create: {
      id: "seed-note-1",
      organizationId: organization.id,
      content: "Cliente comprador solicita visita adicional con familiar.",
      authorId: agent1.id,
      transactionId: transactions[0]?.id ?? null,
      buyerId: transactions[0]?.buyerId ?? null,
    },
  });

  await prisma.activityLog.upsert({
    where: { id: "seed-activity-1" },
    update: {
      organizationId: organization.id,
      actorId: broker.id,
      action: "SEED_REFRESH",
      entityType: "Organization",
      entityId: organization.id,
      description: "Refresh de seed B2C con datos ampliados y idempotentes.",
    },
    create: {
      id: "seed-activity-1",
      organizationId: organization.id,
      actorId: broker.id,
      action: "SEED_REFRESH",
      entityType: "Organization",
      entityId: organization.id,
      description: "Refresh de seed B2C con datos ampliados y idempotentes.",
    },
  });

  if (transactions.length > 0) {
    await prisma.message.upsert({
      where: { id: "seed-message-1" },
      update: {
        organizationId: organization.id,
        senderId: agent1.id,
        receiverId: buyerUser.id,
        transactionId: transactions[0].id,
        content: "Tu expediente de credito va en buen avance, hoy enviamos actualizacion.",
      },
      create: {
        id: "seed-message-1",
        organizationId: organization.id,
        senderId: agent1.id,
        receiverId: buyerUser.id,
        transactionId: transactions[0].id,
        content: "Tu expediente de credito va en buen avance, hoy enviamos actualizacion.",
      },
    });
  }

  console.log("Seed B2C FASE 10 completado (idempotente con upsert).");
  console.log("Credenciales demo: admin@habitra.mx, broker@habitra.mx, agente1@habitra.mx");
  console.log("Credenciales buyer/seller: buyer@habitra.mx, seller@habitra.mx");
  console.log("Password demo: Habitra123!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
