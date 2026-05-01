# Habitra

Plataforma PropTech para organizar y acelerar compraventas inmobiliarias en Mexico.

## Stack base

- TanStack Start + TanStack Router (file-based)
- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui (config inicial)
- Prisma + PostgreSQL
- Better Auth (sesiones, email/contrasena, plugin TanStack Start cookies)

## Requisitos

- Node.js 20+
- PostgreSQL 14+

## Puesta en marcha local

```bash
npm install
```

1) Copia `.env.example` a `.env` y actualiza `DATABASE_URL`, `BETTER_AUTH_SECRET` (minimo 32 caracteres) y `BETTER_AUTH_URL` (misma URL que usas en el navegador, por ejemplo `http://localhost:3000`).

2) Genera cliente Prisma y aplica migraciones (incluyen tablas Better Auth: `session`, `account`, `verification` y columnas de usuario):

```bash
npm run db:generate
npx prisma migrate dev --name auth_and_domain
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

## Auth y rutas protegidas (FASE 3)

- API Better Auth: prefijo `/api/auth/*` (manejado por middleware en `src/start.ts`).
- Login: `/login` (React Hook Form + Zod).
- Area autenticada: `/app/*` (layout en `src/routes/app.tsx` con `beforeLoad` + `getAppSession`).
- Credenciales demo (tras `npm run db:seed`): `admin@habitra.mx`, `broker@habitra.mx`, `agente1@habitra.mx`, `buyer@habitra.mx`, `seller@habitra.mx` con contrasena `Habitra123!`.
- Ejemplo de validacion server-side: `listLeadsForCurrentUser` en `src/server/leads-for-user.ts` (sesion + rol + `organizationId` derivado en servidor).

## Estado actual

FASE 1 base, FASE 2 modelo de datos + seed demo, FASE 3 Better Auth + proteccion `/app` + ejemplo de acceso a datos por organizacion.
