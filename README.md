# Soglia Studio

Production planning and implementation workspace for Soglia Studio.

## Module 1 Foundation

This repo is now structured as a TypeScript monorepo:

- `apps/storefront`: public ecommerce storefront shell.
- `apps/admin`: admin, POS, and operations shell.
- `apps/api`: NestJS API shell.
- `packages/ui`: shared UI primitives and brand tokens.
- `packages/db`: Prisma and PostgreSQL foundation.
- `packages/config`: shared config and environment schemas.
- `packages/types`: shared domain types.
- `packages/validation`: shared Zod validation.
- `packages/integrations`: provider abstraction foundation.

## Local Setup

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm typecheck
pnpm lint
pnpm test
```

Development servers:

```bash
pnpm dev:storefront
pnpm dev:admin
pnpm dev:api
```

Default local ports:

- Storefront: `http://localhost:3000`
- Admin: `http://localhost:3001`
- API: `http://localhost:4000`

## Current State

Module 2 added the Soglia brand-system foundation:

- Shared color, type, radius, and Tailwind tokens.
- Optimized font loading for storefront and admin.
- Reusable wordmark and monogram components.
- Public/private color boundary, with cobalt reserved for founder/admin contexts.

Product catalog, checkout, inventory, POS workflows, loyalty cards, blog submissions, payments, auth, and business logic come in later approved modules.
