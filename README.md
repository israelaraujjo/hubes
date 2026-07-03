# HUB ES+ Smart Office

Plataforma de gestão administrativa para o HUB ES+, construída como monorepo com frontend em Next.js e backend em NestJS.

## Estrutura do projeto

- `frontend/` - aplicação Next.js 15 com React 19, TypeScript, TailwindCSS e componentes preparados para expansão.
- `backend/` - API NestJS com Prisma ORM, PostgreSQL, JWT e Swagger.
- `docker/` - configuração Docker Compose para banco, backend e frontend.

## Instalação

Pré-requisitos:

- Node.js 20+
- pnpm
- Docker
- Docker Compose

Passos:

1. Instale dependências do workspace:

```bash
cd c:/Users/316735/Desktop/hubes
pnpm install
```

2. Inicie containers:

```bash
pnpm docker:up
```

3. Configure variáveis de ambiente:

- `backend/.env.example` contém exemplos para `DATABASE_URL` e `JWT_SECRET`.

## Scripts

- `pnpm dev:frontend` - inicia frontend Next.js.
- `pnpm dev:backend` - inicia backend NestJS.
- `pnpm build:frontend` - compila frontend.
- `pnpm build:backend` - compila backend.
- `pnpm docker:up` - sobe os serviços em Docker Compose.
- `pnpm docker:down` - derruba os serviços.

## API

A API NestJS expõe documentação Swagger em `http://localhost:3333/docs`.

## Banco de dados

A modelagem Prisma inclui entidades para usuários, perfis, documentos, compras, estoque, equipamentos, ocorrências, eventos, agenda, mensagens, notificações, logs e indicadores.

## Próximos passos

- Implementar módulos NestJS completos para autenticação, usuários, documentos, compras e estoque.
- Criar cadastro de dados de demonstração com seed.
- Estender frontend com páginas reais de CRUD e gráficos dinâmicos.
- Adicionar integração com MinIO/AWS S3 e OCR.
