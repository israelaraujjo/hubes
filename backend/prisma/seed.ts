import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@hubes.gov.br' },
    update: {},
    create: {
      email: 'admin@hubes.gov.br',
      name: 'Administrador HUB ES+',
      role: 'ADMINISTRADOR',
      passwordHash: '$2b$10$examplehash',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });

  await prisma.sector.upsert({
    where: { name: 'Central Administrativa' },
    update: {},
    create: {
      name: 'Central Administrativa',
      description: 'Setor responsável pela coordenação administrativa.'
    }
  });

  await prisma.category.upsert({
    where: { name: 'Contratos' },
    update: {},
    create: {
      name: 'Contratos',
      description: 'Documentos contratuais e regulamentações.'
    }
  });

  await prisma.indicator.upsert({
    where: { key: 'tempo_medio_atendimento' },
    update: { value: 2.4 },
    create: {
      key: 'tempo_medio_atendimento',
      value: 2.4,
      description: 'Tempo médio de atendimento em dias.'
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
