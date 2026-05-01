# Habitra

Plataforma PropTech para organizar y acelerar compraventas inmobiliarias en Mexico.

## Stack base

- TanStack Start + TanStack Router (file-based)
- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui (config inicial)
- Prisma + PostgreSQL
- Better Auth (preparado para fase siguiente)

## Requisitos

- Node.js 20+
- PostgreSQL 14+

## Puesta en marcha local

```bash
npm install
```

1) Copia `.env.example` a `.env` y actualiza `DATABASE_URL`.

2) Genera cliente Prisma y aplica migracion inicial:

```bash
npm run db:generate
npx prisma migrate dev --name init
```

3) Carga seed base:

```bash
npm run db:seed
```

4) Ejecuta en desarrollo:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Scripts utiles

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run typecheck`
- `npm run routes:generate`
- `npm run db:generate`
- `npm run db:migrate`
- `npm run db:seed`

## Deploy en Vercel (base)

1. Configurar variables de entorno en Vercel.
2. Asegurar `DATABASE_URL` de produccion.
3. Build command: `npm run build`.
4. Start command: `npm run start`.

## Estado actual

FASE 1 completada con estructura base funcional. FASE 2 expandira el schema Prisma completo, enums de dominio y seed realista.
