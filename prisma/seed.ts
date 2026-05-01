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

async function main() {
  await prisma.activityLog.deleteMany();
  await prisma.message.deleteMany();
  await prisma.note.deleteMany();
  await prisma.task.deleteMany();
  await prisma.transactionTimelineStep.deleteMany();
  await prisma.document.deleteMany();
  await prisma.financialSimulation.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.propertyImage.deleteMany();
  await prisma.propertyAmenity.deleteMany();
  await prisma.property.deleteMany();
  await prisma.buyer.deleteMany();
  await prisma.seller.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.plan.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.verification.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organization.deleteMany();

  const plans = await Promise.all([
    prisma.plan.create({
      data: {
        type: PlanType.STARTER,
        name: "Starter",
        priceMxn: 1200,
        billingCadence: "mensual",
        minUsers: 1,
        maxUsers: 1,
        description: "Para agentes independientes.",
        successFeePercent: 0.35,
      },
    }),
    prisma.plan.create({
      data: {
        type: PlanType.GROWTH,
        name: "Growth",
        priceMxn: 2200,
        billingCadence: "mensual por agente",
        minUsers: 5,
        description: "Para inmobiliarias pequenas y medianas.",
        successFeePercent: 0.3,
      },
    }),
    prisma.plan.create({
      data: {
        type: PlanType.SCALE,
        name: "Scale",
        priceMxn: 1800,
        billingCadence: "mensual por agente",
        minUsers: 20,
        description: "Para inmobiliarias grandes.",
        successFeePercent: 0.25,
      },
    }),
    prisma.plan.create({
      data: {
        type: PlanType.ENTERPRISE,
        name: "Enterprise",
        priceMxn: 50000,
        billingCadence: "mensual",
        minUsers: 30,
        description: "Para desarrolladores y operacion avanzada.",
        successFeePercent: 0.2,
      },
    }),
  ]);

  const organization = await prisma.organization.create({
    data: {
      slug: "habitra-demo-realty",
      name: "Habitra Demo Realty",
      city: "Guadalajara",
      state: "Jalisco",
    },
  });

  await prisma.subscription.create({
    data: {
      organizationId: organization.id,
      planId: plans.find((plan) => plan.type === PlanType.GROWTH)!.id,
      seats: 8,
      status: "ACTIVE",
      startDate: new Date(),
    },
  });

  const demoPasswordHash = await hashPassword("Habitra123!");

  async function createUserWithCredential(input: {
    email: string;
    name: string;
    phone: string;
    role: UserRole;
  }) {
    const user = await prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
        phone: input.phone,
        emailVerified: true,
        role: input.role,
      },
    });
    await prisma.account.create({
      data: {
        userId: user.id,
        accountId: user.email,
        providerId: "credential",
        password: demoPasswordHash,
      },
    });
    return user;
  }

  const users = await Promise.all([
    createUserWithCredential({
      email: "admin@habitra.mx",
      name: "Admin Habitra",
      phone: "3331001000",
      role: UserRole.ADMIN,
    }),
    createUserWithCredential({
      email: "broker@habitra.mx",
      name: "Fernanda Rivera",
      phone: "3331001001",
      role: UserRole.BROKER_OWNER,
    }),
    createUserWithCredential({
      email: "agente1@habitra.mx",
      name: "Luis Hernandez",
      phone: "3331001002",
      role: UserRole.AGENT,
    }),
    createUserWithCredential({
      email: "agente2@habitra.mx",
      name: "Camila Ortega",
      phone: "3331001003",
      role: UserRole.AGENT,
    }),
    createUserWithCredential({
      email: "agente3@habitra.mx",
      name: "Ricardo Sosa",
      phone: "3331001004",
      role: UserRole.AGENT,
    }),
    createUserWithCredential({
      email: "buyer@habitra.mx",
      name: "Mariana Gomez",
      phone: "3331001005",
      role: UserRole.BUYER,
    }),
    createUserWithCredential({
      email: "seller@habitra.mx",
      name: "Jorge Martinez",
      phone: "3331001006",
      role: UserRole.SELLER,
    }),
  ]);

  const admin = users.find((user) => user.email === "admin@habitra.mx")!;
  const broker = users.find((user) => user.email === "broker@habitra.mx")!;
  const agent1 = users.find((user) => user.email === "agente1@habitra.mx")!;
  const agent2 = users.find((user) => user.email === "agente2@habitra.mx")!;
  const agent3 = users.find((user) => user.email === "agente3@habitra.mx")!;
  const buyerUser = users.find((user) => user.email === "buyer@habitra.mx")!;
  const sellerUser = users.find((user) => user.email === "seller@habitra.mx")!;

  await prisma.membership.createMany({
    data: [
      { userId: admin.id, organizationId: organization.id, role: MembershipRole.OWNER },
      { userId: broker.id, organizationId: organization.id, role: MembershipRole.OWNER },
      { userId: agent1.id, organizationId: organization.id, role: MembershipRole.AGENT },
      { userId: agent2.id, organizationId: organization.id, role: MembershipRole.AGENT },
      { userId: agent3.id, organizationId: organization.id, role: MembershipRole.AGENT },
      { userId: buyerUser.id, organizationId: organization.id, role: MembershipRole.MEMBER },
      { userId: sellerUser.id, organizationId: organization.id, role: MembershipRole.MEMBER },
    ],
  });

  const agentIds = [agent1.id, agent2.id, agent3.id];

  const leadsInput = [
    { name: "Alberto Pineda", type: LeadType.COMPRADOR, source: "landing", city: "Guadalajara" },
    { name: "Paola Diaz", type: LeadType.VENDEDOR, source: "referido", city: "Zapopan" },
    { name: "Hector Salas", type: LeadType.INVERSIONISTA, source: "campana", city: "CDMX" },
    { name: "Erika Mora", type: LeadType.COMPRADOR, source: "portal", city: "Monterrey" },
    { name: "Daniela Cardenas", type: LeadType.VENDEDOR, source: "manual", city: "Guadalajara" },
    { name: "Raul Vargas", type: LeadType.COMPRADOR, source: "landing", city: "Zapopan" },
    { name: "Sofia Lozano", type: LeadType.COMPRADOR, source: "referido", city: "CDMX" },
    { name: "Arturo Neri", type: LeadType.VENDEDOR, source: "portal", city: "Monterrey" },
    { name: "Valeria Leon", type: LeadType.COMPRADOR, source: "campana", city: "Guadalajara" },
    { name: "Miguel Alarcon", type: LeadType.ARRENDATARIO, source: "otro", city: "Zapopan" },
  ];

  const leads = await Promise.all(
    leadsInput.map((lead, index) =>
      prisma.lead.create({
        data: {
          organizationId: organization.id,
          name: lead.name,
          email: `${slugify(lead.name)}@mail.com`,
          phone: `33100010${index.toString().padStart(2, "0")}`,
          type: lead.type,
          source: lead.source,
          status: index < 3 ? LeadStatus.CALIFICADO : index < 8 ? LeadStatus.CONTACTADO : LeadStatus.NUEVO,
          temperature:
            index % 3 === 0
              ? LeadTemperature.CALIENTE
              : index % 3 === 1
                ? LeadTemperature.TIBIO
                : LeadTemperature.FRIO,
          assignedAgentId: agentIds[index % agentIds.length],
          notesText: `Lead de ${lead.city} con interes en servicio inmobiliario.`,
          lastContactAt: new Date(Date.now() - index * 86400000),
        },
      }),
    ),
  );

  const buyersInput = [
    { name: "Mariana Gomez", zone: "Providencia, Guadalajara", userId: buyerUser.id, leadRef: leads[0].id },
    { name: "Andres Navarro", zone: "Puerta de Hierro, Zapopan", leadRef: leads[3].id },
    { name: "Lucia Sandoval", zone: "Del Valle, CDMX", leadRef: leads[5].id },
    { name: "Ivan Carrillo", zone: "San Jeronimo, Monterrey", leadRef: leads[6].id },
    { name: "Patricia Luna", zone: "Chapalita, Guadalajara" },
    { name: "Victor Beltran", zone: "Solares, Zapopan" },
    { name: "Elena Rocha", zone: "Polanco, CDMX" },
    { name: "Gerardo Mena", zone: "Valle Oriente, Monterrey" },
  ];

  const buyers = await Promise.all(
    buyersInput.map((buyer, index) =>
      prisma.buyer.create({
        data: {
          organizationId: organization.id,
          userId: buyer.userId,
          sourceLeadId: buyer.leadRef,
          name: buyer.name,
          email: `${slugify(buyer.name)}@mail.com`,
          phone: `33200020${index.toString().padStart(2, "0")}`,
          maxBudget: 2200000 + index * 450000,
          downPayment: 350000 + index * 50000,
          monthlyIncome: 52000 + index * 8000,
          creditType: index % 2 === 0 ? CreditType.BANCARIO : CreditType.COFINAVIT,
          desiredZone: buyer.zone,
          desiredPropertyType: index % 2 === 0 ? PropertyType.DEPARTAMENTO : PropertyType.CASA,
          bedrooms: index % 2 === 0 ? 2 : 3,
          bathrooms: 2,
          urgency: (index % 5) + 1,
          buyingScore: 62 + index * 4,
          assignedAgentId: agentIds[index % agentIds.length],
        },
      }),
    ),
  );

  const sellersInput = [
    { name: "Jorge Martinez", city: "Guadalajara", userId: sellerUser.id, leadRef: leads[1].id },
    { name: "Alicia Correa", city: "Zapopan", leadRef: leads[4].id },
    { name: "Roberto Mijares", city: "CDMX", leadRef: leads[7].id },
    { name: "Nora Figueroa", city: "Monterrey" },
    { name: "Mario Escamilla", city: "Guadalajara" },
    { name: "Rebeca Ponce", city: "Zapopan" },
  ];

  const sellers = await Promise.all(
    sellersInput.map((seller, index) =>
      prisma.seller.create({
        data: {
          organizationId: organization.id,
          userId: seller.userId,
          sourceLeadId: seller.leadRef,
          name: seller.name,
          email: `${slugify(seller.name)}@mail.com`,
          phone: `33300030${index.toString().padStart(2, "0")}`,
          urgency: (index % 5) + 1,
          expectedPrice: 2800000 + index * 550000,
          sellingReason: index % 2 === 0 ? "Cambio de ciudad" : "Inversion en otro activo",
          assignedAgentId: agentIds[index % agentIds.length],
        },
      }),
    ),
  );

  const cities = [
    { city: "Guadalajara", state: "Jalisco", neighborhood: "Providencia" },
    { city: "Zapopan", state: "Jalisco", neighborhood: "Puerta de Hierro" },
    { city: "CDMX", state: "Ciudad de Mexico", neighborhood: "Del Valle" },
    { city: "Monterrey", state: "Nuevo Leon", neighborhood: "San Jeronimo" },
  ];

  const properties = await Promise.all(
    Array.from({ length: 12 }).map((_, index) => {
      const location = cities[index % cities.length];
      const seller = sellers[index % sellers.length];
      const agentId = agentIds[index % agentIds.length];
      const title = `${index % 2 === 0 ? "Departamento" : "Casa"} premium en ${location.neighborhood}`;
      const basePrice = 2600000 + index * 380000;

      return prisma.property.create({
        data: {
          organizationId: organization.id,
          slug: `${slugify(title)}-${index + 1}`,
          title,
          description: "Propiedad con alto potencial de cierre y documentacion avanzada.",
          fullDescription:
            "Cuenta con ubicacion estrategica, acabados premium y cercania a servicios clave.",
          propertyType: index % 2 === 0 ? PropertyType.DEPARTAMENTO : PropertyType.CASA,
          operationType: OperationType.VENTA,
          price: basePrice,
          currency: Currency.MXN,
          address: `Calle ${index + 10} #${100 + index}`,
          city: location.city,
          state: location.state,
          neighborhood: location.neighborhood,
          postalCode: `44${(100 + index).toString().padStart(3, "0")}`,
          latitude: 20.6597 + index * 0.005,
          longitude: -103.3496 + index * 0.005,
          bedrooms: index % 2 === 0 ? 2 : 3,
          bathrooms: 2 + (index % 2),
          parkingSpaces: 1 + (index % 2),
          landArea: 95 + index * 6,
          constructionArea: 88 + index * 5,
          age: 2 + index,
          status: index < 8 ? PropertyStatus.PUBLICADA : PropertyStatus.EN_NEGOCIACION,
          sellerId: seller.id,
          assignedAgentId: agentId,
          readinessScore: 58 + index * 3,
          suggestedPriceMin: basePrice * 0.94,
          suggestedPriceMax: basePrice * 1.08,
          suggestedPriceTarget: basePrice * 1.02,
          risks: index % 3 === 0 ? ["Predial pendiente"] : ["Sin riesgos criticos"],
          isFeatured: index % 5 === 0,
        },
      });
    }),
  );

  await prisma.propertyImage.createMany({
    data: properties.flatMap((property, index) => [
      {
        propertyId: property.id,
        url: `https://images.unsplash.com/photo-1560185007-${(100000 + index).toString().slice(0, 6)}?auto=format&fit=crop&w=1200&q=80`,
        alt: `Fachada ${property.title}`,
        isPrimary: true,
        order: 0,
      },
      {
        propertyId: property.id,
        url: `https://images.unsplash.com/photo-1484154218962-${(200000 + index).toString().slice(0, 6)}?auto=format&fit=crop&w=1200&q=80`,
        alt: `Interior ${property.title}`,
        isPrimary: false,
        order: 1,
      },
    ]),
  });

  await prisma.propertyAmenity.createMany({
    data: properties.flatMap((property) => [
      { propertyId: property.id, name: "Seguridad 24/7" },
      { propertyId: property.id, name: "Cerca de vias principales" },
      { propertyId: property.id, name: "Acabados premium" },
    ]),
  });

  const transactions = await Promise.all(
    Array.from({ length: 6 }).map((_, index) => {
      const property = properties[index];
      const buyer = buyers[index];
      const seller = sellers[index % sellers.length];
      const agentId = agentIds[index % agentIds.length];

      const stageMap: TransactionStage[] = [
        TransactionStage.OFERTA_ENVIADA,
        TransactionStage.OFERTA_ACEPTADA,
        TransactionStage.CREDITO_EN_PROCESO,
        TransactionStage.AVALUO_SOLICITADO,
        TransactionStage.EXPEDIENTE_NOTARIAL,
        TransactionStage.FIRMA_PROGRAMADA,
      ];

      return prisma.transaction.create({
        data: {
          organizationId: organization.id,
          propertyId: property.id,
          buyerId: buyer.id,
          sellerId: seller.id,
          agentId,
          offeredPrice: Number(property.price) * 0.96,
          acceptedPrice: Number(property.price) * 0.985,
          status: index >= 4 ? TransactionStatus.EN_RIESGO : TransactionStatus.ACTIVA,
          currentStage: stageMap[index],
          estimatedClosingDate: new Date(Date.now() + (30 + index * 10) * 86400000),
          paymentType: index % 3 === 0 ? PaymentType.CREDITO : PaymentType.MIXTO,
          creditType: index % 2 === 0 ? CreditType.BANCARIO : CreditType.INFONAVIT,
          notaryName: `Notaria ${index + 15} de ${property.city}`,
          appraiserName: `Valuaciones ${property.city}`,
          bankName: index % 2 === 0 ? "BBVA" : "Banorte",
          probabilityToClose: 78 - index * 8,
          notesText: "Operacion monitoreada en tablero semanal de cierre.",
        },
      });
    }),
  );

  const timelineTemplate = [
    { name: "Lead creado", role: UserRole.AGENT },
    { name: "Comprador calificado", role: UserRole.AGENT },
    { name: "Oferta enviada", role: UserRole.BUYER },
    { name: "Credito en proceso", role: UserRole.BUYER },
    { name: "Expediente notarial", role: UserRole.BROKER_OWNER },
    { name: "Firma programada", role: UserRole.SELLER },
  ];

  await prisma.transactionTimelineStep.createMany({
    data: transactions.flatMap((transaction) =>
      timelineTemplate.map((step, index) => ({
        transactionId: transaction.id,
        name: step.name,
        description: `Paso ${index + 1} del proceso de cierre`,
        responsibleRole: step.role,
        estimatedDate: new Date(Date.now() + (index + 4) * 86400000),
        completedDate: index < 3 ? new Date(Date.now() - (3 - index) * 86400000) : null,
        status:
          index < 3
            ? TimelineStepStatus.COMPLETADO
            : index === 3
              ? TimelineStepStatus.EN_PROGRESO
              : TimelineStepStatus.PENDIENTE,
        notes: index === 4 ? "Pendiente integrar certificado de libertad de gravamen." : null,
        order: index,
      })),
    ),
  });

  await prisma.document.createMany({
    data: transactions.flatMap((transaction, index) => [
      {
        organizationId: organization.id,
        type: DocumentType.ESCRITURA,
        status: index % 2 === 0 ? DocumentStatus.APROBADO : DocumentStatus.EN_REVISION,
        title: "Escritura de propiedad",
        fileName: `escritura-${index + 1}.pdf`,
        fileUrl: `https://example.com/docs/escritura-${index + 1}.pdf`,
        mimeType: "application/pdf",
        propertyId: transaction.propertyId,
        sellerId: transaction.sellerId,
        transactionId: transaction.id,
        uploadedByUserId: agent1.id,
      },
      {
        organizationId: organization.id,
        type: DocumentType.IDENTIFICACION,
        status: DocumentStatus.CARGADO,
        title: "INE comprador",
        fileName: `ine-comprador-${index + 1}.pdf`,
        fileUrl: `https://example.com/docs/ine-comprador-${index + 1}.pdf`,
        mimeType: "application/pdf",
        buyerId: transaction.buyerId,
        transactionId: transaction.id,
        uploadedByUserId: agent2.id,
      },
      {
        organizationId: organization.id,
        type: DocumentType.LIBERTAD_GRAVAMEN,
        status: index >= 4 ? DocumentStatus.PENDIENTE : DocumentStatus.CARGADO,
        title: "Certificado de libertad de gravamen",
        fileName: `gravamen-${index + 1}.pdf`,
        fileUrl: `https://example.com/docs/gravamen-${index + 1}.pdf`,
        mimeType: "application/pdf",
        propertyId: transaction.propertyId,
        transactionId: transaction.id,
        uploadedByUserId: agent3.id,
      },
    ]),
  });

  await prisma.financialSimulation.createMany({
    data: buyers.slice(0, 6).map((buyer, index) => {
      const property = properties[index];
      const price = Number(property.price);
      const enganche = price * 0.2;
      const mensualidad = (price - enganche) * 0.0102;
      const cierre = price * 0.075;
      const totalInicial = enganche + cierre + 28000;
      const ingreso = Number(buyer.monthlyIncome ?? 60000);
      const ratio = mensualidad / ingreso;

      return {
        organizationId: organization.id,
        buyerId: buyer.id,
        propertyId: property.id,
        transactionId: transactions[index]?.id,
        propertyPrice: price,
        downPayment: enganche,
        years: 20,
        annualRate: 10.9,
        creditType: buyer.creditType,
        notaryCostPct: 5.5,
        appraisalCost: 8500,
        otherCosts: 19500,
        estimatedMonthly: mensualidad,
        estimatedClosingCosts: cierre,
        initialTotalNeeded: totalInicial,
        affordabilityRatio: ratio,
        recommendation:
          ratio <= 0.3 ? "viable" : ratio <= 0.4 ? "ajustado" : "no recomendable",
      };
    }),
  });

  await prisma.task.createMany({
    data: transactions.flatMap((transaction, index) => [
      {
        organizationId: organization.id,
        title: "Validar expediente del vendedor",
        description: "Confirmar escritura, predial y comprobante de agua.",
        status: index < 3 ? TaskStatus.COMPLETADA : TaskStatus.EN_PROGRESO,
        dueDate: new Date(Date.now() + (index + 2) * 86400000),
        assigneeId: agentIds[index % agentIds.length],
        transactionId: transaction.id,
        propertyId: transaction.propertyId,
        sellerId: transaction.sellerId,
      },
      {
        organizationId: organization.id,
        title: "Seguimiento con banco",
        description: "Solicitar estatus de preaprobacion y aforo de credito.",
        status: index % 2 === 0 ? TaskStatus.PENDIENTE : TaskStatus.EN_PROGRESO,
        dueDate: new Date(Date.now() + (index + 4) * 86400000),
        assigneeId: agentIds[(index + 1) % agentIds.length],
        transactionId: transaction.id,
        buyerId: transaction.buyerId,
      },
    ]),
  });

  await prisma.note.createMany({
    data: transactions.flatMap((transaction, index) => [
      {
        organizationId: organization.id,
        content: "Cliente comprador solicita visita adicional con familiar.",
        authorId: agentIds[index % agentIds.length],
        transactionId: transaction.id,
        buyerId: transaction.buyerId,
      },
      {
        organizationId: organization.id,
        content: "Vendedor acepta negociar entrega 15 dias despues de firma.",
        authorId: broker.id,
        transactionId: transaction.id,
        sellerId: transaction.sellerId,
      },
    ]),
  });

  await prisma.activityLog.createMany({
    data: [
      ...leads.map((lead, index) => ({
        organizationId: organization.id,
        actorId: agentIds[index % agentIds.length],
        action: "LEAD_CREATED",
        entityType: "Lead",
        entityId: lead.id,
        description: `Se registro lead ${lead.name} con fuente ${lead.source}.`,
        leadId: lead.id,
      })),
      ...transactions.map((transaction, index) => ({
        organizationId: organization.id,
        actorId: agentIds[index % agentIds.length],
        action: "TRANSACTION_STAGE_UPDATED",
        entityType: "Transaction",
        entityId: transaction.id,
        description: `Operacion movida a etapa ${transaction.currentStage}.`,
        transactionId: transaction.id,
        propertyId: transaction.propertyId,
        buyerId: transaction.buyerId,
        sellerId: transaction.sellerId,
      })),
    ],
  });

  await prisma.message.createMany({
    data: [
      {
        organizationId: organization.id,
        senderId: agent1.id,
        receiverId: buyerUser.id,
        transactionId: transactions[0].id,
        content: "Tu expediente de credito va en buen avance, hoy enviamos actualizacion.",
      },
      {
        organizationId: organization.id,
        senderId: agent2.id,
        receiverId: sellerUser.id,
        transactionId: transactions[1].id,
        content: "Falta cargar recibo de agua para completar checklist documental.",
      },
      {
        organizationId: organization.id,
        senderId: broker.id,
        receiverId: agent3.id,
        transactionId: transactions[4].id,
        content: "Prioriza esta operacion, aparece con riesgo alto en el dashboard.",
      },
    ],
  });

  console.log("Seed FASE 2 completado: datos demo realistas cargados.");
  console.log("Credenciales demo: admin@habitra.mx, broker@habitra.mx, agente1@habitra.mx");
  console.log("Credenciales demo adicionales: buyer@habitra.mx, seller@habitra.mx");
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
