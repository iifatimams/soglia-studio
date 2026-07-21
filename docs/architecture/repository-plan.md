# Soglia Studio Repository Plan

## Document Status

Phase 3 draft for approval.

This document plans the repository before implementation. It does not create the app scaffold, install dependencies, or begin coding.

## Repository Strategy

### MVP

Use one TypeScript monorepo.

Reason:

- Storefront, admin, API, database, shared UI, shared validation, and docs need to evolve together.
- Soglia is founder-led at launch. A monorepo keeps changes visible and reviewable.
- Shared domain types reduce drift between checkout, POS, inventory, and admin.

Repository owner:

- Use the founder's personal GitHub account at first.
- Move to a Soglia Studio GitHub organization later when collaborators, production ownership, or staff access make that worth it.

### Future Scale

Keep the monorepo unless deployment, permissions, or team ownership creates real friction.

Possible later split:

- Mobile app.
- Warehouse/reporting service.
- Data warehouse jobs.
- Public API SDK.

## Package Manager

### MVP

Use `pnpm`.

Reasons:

- Good monorepo support.
- Fast installs.
- Strict dependency behavior.
- Works well with Next.js, NestJS, Prisma, and shared packages.

Use `pnpm-workspace.yaml` to define apps and packages.

### Future Scale

Add Turborepo if build orchestration becomes slow or repetitive. Do not add Nx in MVP unless a real need appears.

## Proposed Directory Tree

### MVP

```text
soglia-studio/
  apps/
    storefront/
      app/
        [locale]/
          (shop)/
          (content)/
          account/
          checkout/
        api/
        sitemap.ts
        robots.ts
      components/
      lib/
      public/
      tests/
      next.config.ts
      package.json
      tsconfig.json

    admin/
      app/
        (auth)/
        (dashboard)/
        pos/
        orders/
        inventory/
        catalog/
        loyalty/
        content/
        marketing/
        finance/
        settings/
      components/
      lib/
      tests/
      next.config.ts
      package.json
      tsconfig.json

    api/
      src/
        main.ts
        app.module.ts
        modules/
          auth/
          users/
          roles/
          customers/
          catalog/
          inventory/
          bom/
          orders/
          payments/
          delivery/
          fulfillment/
          pos/
          loyalty/
          content/
          marketing/
          analytics/
          finance/
          settings/
          audit/
        common/
          decorators/
          filters/
          guards/
          interceptors/
          pipes/
          logging/
        integrations/
          payments/
          email/
          sms/
          whatsapp/
          delivery/
          ads/
          storage/
      test/
      package.json
      tsconfig.json

  packages/
    ui/
      src/
        components/
        tokens/
        styles/
        utils/
      package.json
      tsconfig.json

    config/
      eslint/
      prettier/
      tailwind/
      typescript/
      env/
      package.json

    db/
      prisma/
        schema.prisma
        migrations/
        seed/
      src/
        client.ts
      package.json

    validation/
      src/
        catalog/
        orders/
        inventory/
        customers/
        payments/
        content/
      package.json

    types/
      src/
        domain/
        api/
        events/
      package.json

    integrations/
      src/
        payments/
        notifications/
        delivery/
        ads/
        storage/
      package.json

  docs/
    brand/
    discovery/
    prd/
    architecture/
    decisions/
    modules/
    qa/
    deployment/

  .github/
    workflows/
      ci.yml
      deploy-staging.yml
      deploy-production.yml
    pull_request_template.md

  .env.example
  .gitignore
  package.json
  pnpm-workspace.yaml
  turbo.json
  tsconfig.base.json
  eslint.config.mjs
  prettier.config.mjs
  README.md
```

### Future Scale

Add only when needed:

```text
apps/
  worker/
  mobile/
  docs-site/

packages/
  analytics/
  test-utils/
  email-templates/
  reporting/
```

## Naming Conventions

### MVP

General:

- Use kebab-case for files and directories.
- Use PascalCase for React component names.
- Use camelCase for variables and functions.
- Use PascalCase for TypeScript types and interfaces.
- Use singular names for Prisma models.
- Use plural names for database tables.
- Use explicit domain names: `inventory_movements`, not `movements`.

Routes:

- Storefront routes use clean, SEO-safe slugs.
- Locale routes use explicit locale segments.
- Admin routes are plain and operational: `/orders`, `/inventory`, `/pos`, `/finance`.

API:

- REST resources use plural nouns.
- Nested routes only where the relationship is strict.
- Use `POST /orders/:id/cancel`, not overloaded generic updates for important state transitions.

Events:

- Use past-tense event names.
- Examples: `order.confirmed`, `inventory.reserved`, `payment.completed`, `content.submitted`.

Commits:

- Use conventional-style scoped messages.
- Examples:
  - `chore(repo): initialize monorepo tooling`
  - `feat(catalog): add bilingual product model`
  - `feat(inventory): add BOM reservation workflow`
  - `feat(pos): add tablet checkout shell`
  - `fix(orders): release inventory before processing`

## Environment Variable Plan

### MVP

Use `.env.example` with safe placeholders only. Never commit real secrets.

Root/shared:

```text
NODE_ENV=
APP_ENV=
APP_URL=
ADMIN_URL=
API_URL=
```

Database:

```text
DATABASE_URL=
DIRECT_DATABASE_URL=
```

Auth:

```text
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
AUTH_TRUSTED_ORIGINS=
```

Redis:

```text
REDIS_URL=
```

Payments:

```text
PAYMENT_PROVIDER=
STRIPE_SECRET_KEY=
STRIPE_RESTRICTED_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PUBLISHABLE_KEY=
```

Email:

```text
EMAIL_PROVIDER=
EMAIL_FROM=
EMAIL_API_KEY=
```

SMS:

```text
SMS_PROVIDER=
SMS_API_KEY=
SMS_SENDER_ID=
```

WhatsApp:

```text
WHATSAPP_PROVIDER=
WHATSAPP_API_KEY=
WHATSAPP_PHONE_NUMBER_ID=
```

Media:

```text
STORAGE_PROVIDER=
STORAGE_BUCKET=
STORAGE_REGION=
STORAGE_ACCESS_KEY_ID=
STORAGE_SECRET_ACCESS_KEY=
STORAGE_PUBLIC_URL=
```

Analytics and ads:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=
GOOGLE_ADS_CUSTOMER_ID=
GOOGLE_ADS_CONVERSION_ID=
GOOGLE_ADS_CONVERSION_LABEL=
TIKTOK_PIXEL_ID=
TIKTOK_ACCESS_TOKEN=
```

Error monitoring:

```text
SENTRY_DSN=
SENTRY_AUTH_TOKEN=
```

### Future Scale

Add provider-specific variables only when each integration is approved. Do not pre-fill secrets for unused providers.

## Code Quality Tools

### MVP

Use:

- TypeScript strict mode.
- ESLint flat config.
- Prettier.
- `lint-staged`.
- Husky only if it does not become annoying. CI remains the real gate.
- Zod for shared validation.
- Prisma format and migration checks.

Recommended scripts:

```text
pnpm lint
pnpm typecheck
pnpm format:check
pnpm test
pnpm test:e2e
pnpm build
pnpm db:generate
pnpm db:migrate
pnpm db:seed
```

### Future Scale

- Dependency vulnerability scans.
- Secret scanning.
- Bundle analysis.
- API contract tests.
- Database migration drift checks.

## TypeScript Plan

### MVP

Use strict TypeScript everywhere.

Rules:

- `strict: true`.
- `noUncheckedIndexedAccess: true` where practical.
- `exactOptionalPropertyTypes: true` where practical.
- No `any` unless justified with a comment.
- Shared domain types live in `packages/types`.
- Runtime validation lives in `packages/validation`.
- Database-generated types come from Prisma.

Boundary rule:

- Do not trust client input because it is typed. Validate at API boundaries.

## UI System Plan

### MVP

Use shadcn/ui source components in `packages/ui`.

Brand token source:

- `docs/brand/brand-kit.html`.

Core tokens:

- Paper: `#F3EFE7`.
- Ink: `#1B1A18`.
- Oxblood: `#5A1A1A`.
- Stone: `#A89C8A`.
- Bone: `#E8E1D2`.
- Cobalt: private/founder-only contexts only.

Typography:

- Cormorant Garamond for studio voice.
- Inter for product UI and operational UI.
- Inconsolata for metadata.

Component rules:

- Storefront is editorial and restrained.
- Admin/POS is quiet, dense, and easy to scan.
- POS is tablet-first and touch-friendly.
- No generic pastel florist styling.
- No large oxblood fills.
- No cobalt on public customer-facing surfaces.

## Testing Framework

### MVP

Use:

- Vitest for shared package unit tests.
- Jest or Vitest for NestJS depending on scaffold fit.
- Supertest for API integration tests.
- Playwright for E2E and visual QA.
- Testing Library for React component tests where useful.

Required MVP test areas:

- Auth and permission checks.
- Website checkout.
- POS checkout.
- Inventory reservation.
- Cancelled order inventory release rules.
- BOM deduction and actual usage adjustment.
- Substitution manual rules.
- Finished bouquet sell-by dates.
- Custom order deposits/payment links.
- Loyalty card progress and nomination limits.
- Blog/community moderation and anonymous publishing.
- SEO metadata/sitemap basics.

### Future Scale

- Contract tests for payment, delivery, ads, email, SMS, and accounting providers.
- Load tests for checkout and POS.
- Backup restore tests.

## CI/CD Plan

### MVP

GitHub Actions:

- `ci.yml`: lint, typecheck, tests, build.
- `deploy-staging.yml`: deploy after merge to staging branch or manual trigger.
- `deploy-production.yml`: manual approval after staging passes.

CI order:

1. Install dependencies.
2. Generate Prisma client.
3. Check formatting.
4. Lint.
5. Typecheck.
6. Run unit tests.
7. Run API tests.
8. Validate Prisma migrations.
9. Build storefront, admin, and API.
10. Run Playwright smoke tests when apps exist.

Deployment gates:

- Staging deploy before production.
- Manual production approval.
- Production smoke test after deploy.

## Branch Strategy

### MVP

Branches:

- `main`: production-ready.
- `develop`: staging-ready if we want a persistent staging branch.
- `feature/<module-name>`: module work.

Module branches:

- `feature/foundation`
- `feature/brand-system`
- `feature/storefront`
- `feature/catalog`
- `feature/inventory-bom`
- `feature/orders-fulfillment`
- `feature/pos`
- `feature/loyalty`
- `feature/blog-community`

Rule:

- One module should be planned, implemented, tested, documented, and committed before moving to the next module.

## Module Structure

### MVP Module Order

1. Foundation and project setup.
2. Brand system and design tokens.
3. Authentication and permissions foundation.
4. Database foundation and Prisma schema baseline.
5. Product and catalog management.
6. Inventory and BOM.
7. Orders and fulfillment.
8. POS.
9. Storefront checkout.
10. Loyalty cards.
11. Blog/community page.
12. Marketing tracking and SEO.
13. Finance reports and accountant export.
14. Notifications.
15. Deployment and QA hardening.

Reason:

- Inventory and order logic must exist before POS and checkout can be trusted.
- Brand tokens should exist before UI work expands.
- Loyalty and blog are launch features, but they depend on customer/content foundations.

### Future Scale

- Subscriptions.
- Meta Ads.
- Delivery app integration.
- Accounting integration.
- Workshops.
- Corporate/event/wedding modules.
- Advanced analytics.

## Documentation Plan

### MVP

Every module gets a file in `docs/modules/`.

Each module doc includes:

- Purpose.
- Scope.
- Included.
- Excluded.
- Database changes.
- API changes.
- UI screens.
- Permissions.
- Analytics events.
- Tests.
- Manual QA checklist.
- Commit message.

Decision records go in `docs/decisions/`.

Use ADR-style names:

- `001-monorepo-and-pnpm.md`
- `002-nextjs-nestjs-boundary.md`
- `003-payment-provider-abstraction.md`

## GitHub Workflow

### MVP

For each module:

1. Create feature branch.
2. Implement only that module.
3. Run checks.
4. Write module notes.
5. Prepare PR-style summary.
6. Commit with scoped message.
7. Push if GitHub access is available.
8. Wait for approval before moving to the next module.

PR summary template:

```text
## Summary

## Files Changed

## Database Changes

## API Changes

## UI Changes

## Tests

## Manual QA

## Risks

## Follow-ups
```

## Open Questions

### MVP

- Should `develop` be used, or should staging deploy from `main` with manual promotion?
- Should the API deploy on Render or Railway?
- Should Postgres use Neon or Supabase?
- Should media storage use Supabase Storage, S3, or Cloudflare R2?
- Should Better Auth launch with email/password only, or include OTP/passkeys?
- Should Turborepo be added immediately or after the first scaffold proves it is useful?

### Future Scale

- When should the Soglia GitHub organization replace personal account ownership?
- When should infrastructure-as-code be introduced?
- When should reporting split from the operational database?

## Approval Gate

Approve, reject, or revise this repository plan before Module 1: Foundation and Project Setup.

No application code should be generated until this plan is approved.
