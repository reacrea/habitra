import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const organization = await prisma.organization.upsert({
    where: { slug: "habitra-demo-realty" },
    update: {},
    create: {
      slug: "habitra-demo-realty",
      name: "Habitra Demo Realty",
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@habitra.mx" },
    update: {},
    create: {
      email: "admin@habitra.mx",
      name: "Admin Habitra",
      passwordHash: "TODO_HASH_Habitra123!",
      role: UserRole.ADMIN,
    },
  });

  await prisma.membership.upsert({
    where: {
      userId_organizationId: {
        userId: admin.id,
        organizationId: organization.id,
      },
    },
    update: {},
    create: {
      userId: admin.id,
      organizationId: organization.id,
      role: UserRole.ADMIN,
    },
  });
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
