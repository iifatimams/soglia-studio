# Phase 0 Discovery: Section I - Technical Preferences

## Current Phase

Phase 0: Discovery and Alignment.

## Summary of Your Answers

You do not have a fixed hosting, backend hosting, database, or repository preference yet. You want the best practical setup for Soglia based on stability, responsiveness, cost, user experience, and long-term control.

You want the system to feel user-friendly, comparable to Shopify in ease of use, while still being custom-built for Soglia's flower, POS, inventory, order, marketing, and finance workflows.

You are currently using your personal GitHub account and may keep doing that for now because you want the commits on your personal profile. A formal Soglia GitHub organization can come later.

You want staging and production environments from the beginning.

You prefer mostly self-hosted or open-source-first tools, unless a managed service is clearly better for reliability, speed, security, or maintenance.

You want open-source tools preferred when practical.

You want the stack optimized for both control and stable launch.

## Recommended Default Stack

The recommended default is a monorepo with production-grade managed infrastructure around open-source application code.

Frontend and admin:

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Shadcn/ui and Radix UI.
- Hosted on Vercel.

Backend:

- NestJS with TypeScript.
- REST API first, with WebSockets where real-time order updates are needed.
- Hosted on Render or Railway for MVP.

Database:

- PostgreSQL.
- Prisma ORM.
- Neon or Supabase as managed PostgreSQL.

Redis / queues:

- Managed Redis through Upstash or another managed Redis provider.
- Used later for queues, caching, sessions, cart speed, and order automation.

Storage:

- Managed object storage for media assets.
- Candidate options: Supabase Storage, S3-compatible storage, or provider-native storage depending on final stack.

Analytics:

- GA4.
- Google Search Console.
- Server-side event architecture planned.
- UTM capture in database from launch.

Payments:

- Payment-provider abstraction.
- Stripe preferred if UAE onboarding, pricing, Apple Pay, and recurring payments work for the business.
- Compare local UAE options before launch.

## Repository Direction

Use a monorepo.

Suggested structure later:

- `apps/storefront`
- `apps/admin`
- `apps/api`
- `packages/ui`
- `packages/config`
- `packages/types`
- `packages/db`
- `docs`

This keeps shared types, design tokens, validation schemas, and database logic in one place.

## GitHub Direction

Use your personal GitHub account at first if you want the contribution history.

Plan for a Soglia Studio GitHub organization later when:

- More collaborators join.
- Production access needs separation.
- Contractor or staff permissions matter.
- Deployment ownership should move from personal to company-controlled accounts.

## Environments

Use two environments from the beginning:

- Staging.
- Production.

Local development should mirror production services where reasonable, but should not require a complicated setup for daily work.

## Managed vs Self-Hosted

Recommended position:

- Use open-source frameworks and app code.
- Use managed production infrastructure when failure would cost time, money, or reputation.

Self-hosting everything would give control, but it increases maintenance work. Soglia is a business system, not an infrastructure hobby project. The right compromise is open-source application code with managed deployment, managed database, managed Redis, managed backups, and clean export paths.

## Recommended Default

Best default for Soglia MVP:

- Monorepo.
- Vercel for storefront/admin.
- Render or Railway for NestJS API.
- Neon or Supabase for PostgreSQL.
- Prisma.
- Managed Redis through Upstash when needed.
- GitHub personal account first, Soglia organization later.
- Staging and production from day one.
- Open-source-first application stack.
- Managed services where they reduce operational risk.

## Risks and Tradeoffs

Vercel is excellent for Next.js, but costs can grow with traffic and usage. It should be monitored.

AWS gives maximum control, but it is probably too heavy for the first build unless there is a specific reason to absorb that complexity.

Supabase is convenient because it can provide Postgres, auth, storage, and realtime features. The tradeoff is deciding whether Soglia uses Supabase as a full backend platform or mainly as managed Postgres/storage beside a NestJS API.

Neon is strong for managed Postgres and branching. It is a cleaner database-focused choice if the backend remains NestJS-centered.

Railway is fast and developer-friendly. Render is predictable and simple. Final backend host should be chosen after architecture, expected traffic, and cost checks.

Self-hosting later should remain possible by keeping the app portable and avoiding provider-specific logic in core business code.

## Open Questions

- Final frontend host.
- Final backend host.
- Final PostgreSQL provider.
- Final Redis provider.
- Whether auth is handled by Better Auth, Auth.js, Supabase Auth, or a NestJS-centered auth system.
- Whether media storage should live in Supabase Storage, S3, Cloudflare R2, or another provider.
- Whether the Soglia GitHub organization should be created before launch or after launch.
- Whether infrastructure should be managed manually first or defined with infrastructure-as-code later.
