# Module 1: Foundation and Project Setup

## Status

Implemented as the first code module.

## Purpose

Create the repo foundation for Soglia Studio without adding business workflows too early.

## Included

- `pnpm` workspace.
- Root scripts for development, build, lint, typecheck, tests, formatting, and Prisma commands.
- Storefront Next.js shell.
- Admin Next.js shell.
- NestJS API shell with `/health`.
- Shared packages for UI, config, database, validation, types, and integrations.
- Prisma PostgreSQL foundation.
- `.env.example` with safe placeholders.
- GitHub Actions CI and deployment placeholders.
- Pull request template.

## Excluded

- Real authentication flows.
- Product catalog.
- Checkout.
- POS.
- Inventory.
- Orders.
- Payments.
- Loyalty cards.
- Blog/community submissions.
- Provider integrations.
- Production deployment credentials.

## Validation Commands

```bash
pnpm install
pnpm db:generate
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Manual QA

- Storefront opens on port `3000`.
- Admin opens on port `3001`.
- API opens on port `4000`.
- API `/health` returns `status: ok`.
- No real secrets are committed.
- Module 1 contains no business workflow implementation.

## Commit Message

```text
chore(repo): initialize monorepo foundation
```
