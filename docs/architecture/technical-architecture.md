# Soglia Studio Technical Architecture

## Document Status

Phase 2 draft for approval.

This architecture is based on the approved PRD, the discovery notes, the brand kit, and local best-practice skills for Next.js, React, shadcn/ui, Postgres, Better Auth, Stripe, Playwright, and security review.

No implementation should begin until this document is approved.

## Recommended Stack

### MVP

Use a TypeScript monorepo with separate apps for public storefront, admin/POS, and backend API.

Recommended stack:

- Frontend: Next.js App Router, React, TypeScript.
- Styling: Tailwind CSS, shadcn/ui, Radix UI primitives.
- Animation: Framer Motion, used sparingly for editorial polish and admin feedback.
- Forms: React Hook Form and Zod.
- Server state: TanStack Query for admin/POS client data and real-time views.
- Local UI state: Zustand for POS cart and admin UI state.
- Backend: NestJS with TypeScript.
- API style: REST first, WebSockets for live order/fulfillment updates.
- Database: PostgreSQL.
- ORM: Prisma.
- Auth: Better Auth with Postgres adapter, Redis-backed session/cache where useful, and a custom permission layer for Soglia roles.
- Payments: provider abstraction. Stripe preferred if UAE approval, pricing, Apple Pay, payment links, and subscriptions work. Local UAE options stay possible.
- Queue/cache: Managed Redis, likely Upstash or equivalent.
- Media storage: S3-compatible object storage or Supabase Storage, final provider open.
- Frontend hosting: Vercel.
- Backend hosting: Render or Railway for MVP.
- Database hosting: Neon or Supabase Postgres.
- Monitoring: Sentry or equivalent for app errors, platform metrics for infrastructure.
- QA: Playwright for storefront, checkout, POS, admin, and visual checks.

### Future Scale

- Dedicated worker service for subscriptions, notifications, ad sync, export generation, and inventory alerts.
- Analytics warehouse or reporting replica if dashboard queries become heavy.
- Delivery app connectors.
- Accounting connectors.
- More formal infrastructure-as-code once services and environments grow.

## Tradeoffs

### MVP

**Separate storefront and admin apps**

Best fit. The storefront needs SEO, bilingual routing, and brand-led performance. Admin/POS needs authenticated workflows, denser UI, real-time queues, and tablet ergonomics.

Tradeoff: Two frontend apps add some configuration work. Shared packages reduce duplication.

**NestJS API instead of only Next.js Server Actions**

Best fit for a future operating system. NestJS gives a clear backend boundary for POS, inventory, orders, webhooks, integrations, and future mobile/API clients.

Tradeoff: More setup than a single Next.js app. Worth it because inventory, payment, POS, and audit logic should not live as scattered frontend actions.

**Managed infrastructure around open-source app code**

Best fit for a founder-led launch. Managed Postgres, Redis, hosting, backups, and deployment reduce operational risk.

Tradeoff: Less raw control than self-hosting. Keep the code portable and avoid provider-specific business logic.

**Stripe preferred but not locked**

Stripe has strong developer experience for Checkout, Payment Links, Apple Pay, webhooks, and subscriptions. But UAE availability, onboarding, settlement, and fees must be confirmed.

Tradeoff: Local UAE gateways may be cheaper or easier for bank/POS operations, but usually need more integration care.

## Frontend Architecture

### MVP

Monorepo apps:

- `apps/storefront`: public bilingual ecommerce site.
- `apps/admin`: protected admin, POS, dashboards, fulfillment, inventory, content moderation.
- `apps/api`: NestJS backend.
- `packages/ui`: Soglia design system built on shadcn/ui.
- `packages/config`: TypeScript, ESLint, Tailwind, environment schemas.
- `packages/types`: shared DTO and domain types.
- `packages/validation`: shared Zod schemas.
- `packages/db`: Prisma schema and generated client if kept shared.
- `docs`: product, architecture, QA, deployment, and module docs.

Storefront architecture:

- Next.js App Router with route groups for English and Arabic.
- Server Components by default for product, collection, content, and SEO pages.
- Client Components only for cart, checkout interactions, filters, account forms, and submission forms.
- `generateMetadata` for dynamic product, collection, landing page, and blog metadata.
- Static metadata files for favicon, OpenGraph defaults, robots, and sitemap routes.
- `next/image` for product and editorial photography.
- Brand tokens from `docs/brand/brand-kit.html`: Paper `#F3EFE7`, Ink `#1B1A18`, Oxblood `#5A1A1A`, Stone `#A89C8A`, Bone `#E8E1D2`; Cobalt stays private/founder-only.
- Typography lanes: Cormorant Garamond for studio voice, Inter for utility UI, Inconsolata for metadata.

Admin/POS architecture:

- Next.js App Router protected by auth middleware/session checks.
- POS route optimized for tablet touch, fast product search, cart, discounts, payment method marking, and custom order creation.
- Founder dashboard route focused on best signals first: sales, pending orders, best products, marketing performance, subscription status, then problems.
- TanStack Query for admin data fetching, optimistic updates where safe, and cache invalidation.
- Zustand for POS cart, unsaved draft order state, and local UI state.
- WebSocket client for fulfillment queue and inventory alerts.

shadcn/ui rules:

- Use shadcn components as source code, not opaque UI kit wrappers.
- Compose existing components before custom markup.
- Use semantic tokens instead of raw Tailwind colors.
- Use `FieldGroup`, `Field`, `Input`, `Select`, `ToggleGroup`, `Table`, `Card`, `Badge`, `Dialog`, `Sheet`, `Drawer`, `Tooltip`, `Skeleton`, `Empty`, and `sonner` where appropriate.
- Avoid generic SaaS styling. The admin can be utilitarian, but the storefront must follow Soglia's editorial identity.

React/Next performance rules:

- Avoid data waterfalls. Start independent fetches early and use parallel requests.
- Keep heavy charts and drag/drop tools dynamically loaded.
- Keep non-critical analytics scripts deferred.
- Minimize client component boundaries.
- Do not pass large serialized payloads from Server Components to Client Components.

### Future Scale

- Optional mobile app or staff handheld app can consume the NestJS API.
- Dedicated admin modules can split by team if bundle size or permissions become heavy.
- Search can move from database queries to Meilisearch, Typesense, Algolia, or Postgres full-text depending on catalog/content growth.

## Backend Architecture

### MVP

Use NestJS as the business API and integration boundary.

Core modules:

- Auth/session adapter.
- Users, roles, permissions.
- Customers and addresses.
- Catalog: products, variants, categories, collections, images, bilingual content.
- Inventory: items, movements, reservations, spoilage, sell-by dates, substitutions.
- BOM: product components and approved substitution manual.
- Orders: website orders, POS orders, draft custom orders, status history.
- Payments: provider abstraction, payment records, refunds, deposits, payment links.
- Delivery and pickup slots.
- Fulfillment tasks and WebSocket events.
- POS.
- Loyalty: cards, rewards, nominations.
- Content: pages, landing pages, blog/community submissions, moderation.
- Marketing: campaigns, UTMs, ad accounts, ad metrics.
- Analytics events.
- Finance reports and accountant exports.
- Settings.
- Audit logs.

API style:

- REST for public, admin, POS, and integration APIs.
- WebSockets for order queue, fulfillment updates, and low-stock alerts.
- Webhooks for payment events, ad events where supported, email/SMS callbacks, and delivery provider events if available.
- All write endpoints validate with Zod/class-validator style schemas and enforce permission checks.

Business transaction rules:

- Checkout confirmation and inventory reservation must run in a database transaction.
- Inventory reservation should lock or atomically update available quantities to prevent overselling.
- Cancelled orders release reserved inventory automatically only before processing starts.
- After processing starts, cancellation inventory release requires staff review.
- Finished bouquets have sell-by dates.
- Custom orders can require deposits and payment links before work starts.
- Substitutions use founder-approved replacement manuals.

### Future Scale

- Worker app for background jobs:
  - Subscription order generation.
  - Notification sending.
  - Ad metric sync.
  - Report exports.
  - Low-stock and expiry alerts.
  - Search indexing.
- Separate integration modules for delivery apps, accounting tools, and marketing platforms.
- Read replica or warehouse for heavy analytics.

## Database Architecture

### MVP

Use PostgreSQL with Prisma migrations.

Schema principles:

- UUID primary keys for externally referenced records.
- `timestamptz` for all timestamps.
- `text` over arbitrary `varchar(n)` unless the length has business meaning.
- Soft deletes where records affect history: products, customers, content, staff, suppliers.
- Hard deletes only for safe drafts or ephemeral records.
- Audit logs for sensitive changes.
- Foreign keys for integrity.
- Partial indexes for active records where useful.
- Composite indexes for common filters: order status/date/source, inventory item/type/status, product status/slug, customer phone/email, campaign/source/medium.
- JSONB only for flexible integration payloads, not core relational data.

Core MVP tables:

- `users`, `roles`, `permissions`, `staff_profiles`
- `customers`, `customer_addresses`
- `products`, `product_variants`, `product_images`, `categories`, `collections`
- `inventory_items`, `inventory_movements`, `product_components`
- `substitution_rules`
- `suppliers`, `purchase_orders`, `purchase_order_items`
- `orders`, `order_items`, `order_status_history`, `fulfillment_tasks`
- `payments`, `payment_links`, `refunds`, `transactions`
- `discounts`, `coupons`
- `delivery_zones`, `delivery_slots`
- `loyalty_cards`, `loyalty_rewards`, `loyalty_nominations`
- `marketing_campaigns`, `ad_accounts`, `ad_platform_metrics`, `analytics_events`
- `content_pages`, `content_submissions`, `moderation_actions`
- `media_assets`, `seo_metadata`, `settings`, `audit_logs`

Inventory model:

- Store raw flowers as inventory items with stem count, color, supplier, cost per stem, arrival date, usable-until date, and condition.
- Store packaging materials and vases as inventory items with units.
- Store finished bouquets as inventory items or stock lots with sell-by dates.
- Inventory movement types: receive, reserve, release, deduct, spoilage, damage, adjustment, substitution, finished-bouquet-create.
- Track actual usage separately from expected recipe usage.

Finance model:

- Orders store gross, discount, delivery fee, tax, net, payment status, refund status, and source.
- Payments store provider, provider IDs, method, status, amount, fees when available.
- Deposits and balance payments tie back to custom orders.
- COGS derives from actual inventory usage.
- VAT fields exist but can be disabled until registration.

### Future Scale

- Reporting snapshots for daily sales, inventory, and campaign performance.
- Materialized views for dashboard metrics.
- Warehouse/export pipeline if analytics outgrows app DB.
- Multi-location stock tables if Soglia expands.

## Authentication and Permissions Architecture

### MVP

Use Better Auth as the authentication foundation.

Auth decisions:

- Email/password for staff and customers.
- Optional social login can wait.
- Better Auth sessions backed by database and Redis/secondary storage where useful.
- Separate staging and production secrets.
- Secure cookies in production.
- CSRF and origin checks enabled.
- Rate limiting enabled.
- Email verification and password reset flows planned.

Permission model:

- Better Auth handles identity, sessions, and account security.
- Soglia app handles domain permissions.
- Roles: Founder/Super Admin and Florist/POS Staff at launch.
- Future roles are modeled but not all exposed in UI yet.
- Permission checks happen server-side on every admin/POS API.

Launch permissions:

- Founder: full access.
- Florist/POS: POS, preparation queue, allowed order edits, inventory usage, spoilage, substitution entry, no sensitive finance/CRM/settings.

Founder-only:

- Discounts.
- Refunds.
- Close day.
- Finance reports.
- CRM detail.
- Content publishing.
- Marketing settings.
- Staff invitations.
- Delivery/payment/integration settings.
- Stock receiving.

Customer auth:

- Customers can edit profile details.
- Birthday day/month lock after initial set.
- Blog/community submissions do not require accounts, but collect name/phone privately.

### Future Scale

- Two-factor auth for founder/admin roles.
- Better Auth admin and organization plugins if multi-team management needs it.
- Approval flows for refunds, discounts, and sensitive inventory changes.
- More granular permission editor only after the role set grows.

## Analytics and Event Tracking Architecture

### MVP

Use two layers:

1. External analytics: GA4, TikTok Ads, Google Ads, Search Console.
2. First-party analytics: `analytics_events` table and order attribution fields.

Event rules:

- Capture UTM source, medium, campaign, term, and content on first visit.
- Preserve first-touch and last-touch attribution on customer/order where possible.
- Store order source: website, POS, WhatsApp, Instagram, TikTok, delivery app, manual.
- Track coupon use and loyalty reward use.
- Track checkout events, payment started, payment completed, order confirmed, pickup/delivery selected, blog submission, email capture, custom order request, and POS sale.
- Server-side confirmation events should be treated as source of truth for purchases.

Campaign dashboard MVP:

- Campaign list.
- UTM links.
- Spend entry or imported spend where available.
- Orders.
- Revenue.
- Coupon usage.
- Gross margin where COGS is available.

Ad integrations:

- TikTok Ads and Google Ads launch tracking required.
- Full ad platform integrations and advanced dashboards are high-risk MVP scope. The architecture should support them, but the build plan should phase them if timeline pressure appears.

### Future Scale

- Meta Ads.
- Server-side conversion APIs.
- Customer lifetime value.
- Cohort reports.
- Product performance by channel.
- Reporting replica or warehouse.

## Integration Architecture

### MVP

Use provider interfaces, not hardcoded services.

Payment provider abstraction:

- `PaymentProvider`: create checkout, create payment link, refund, fetch status.
- `SubscriptionProvider`: planned for recurring payments.
- `WebhookVerifier`: verify provider webhooks.

Stripe guidance if selected:

- Use Checkout Sessions for one-time website payments.
- Use Payment Links for simple custom-order payment requests if they fit workflow.
- Use Billing APIs and Checkout Sessions for subscriptions later.
- Do not store card details.
- Verify webhook signatures.
- Prefer restricted API keys where possible.
- Do not hardcode payment method types for online Stripe payments; let dynamic payment methods work from provider settings.

Other provider candidates:

- Checkout.com.
- Network/N-Genius.
- Tap Payments.
- Telr.
- PayTabs.
- Bank POS/card terminal.

Notifications:

- `SmsProvider` for transactional SMS only.
- `WhatsAppProvider` for support/order updates only if an API provider is chosen.
- `EmailProvider` for order emails, verification, reset password, email capture, and later campaigns.

Delivery:

- `DeliveryProvider` interface from day one.
- If third-party delivery provider has no API, use manual dispatch status.
- Internal delivery remains a supported fulfillment mode.

Ads:

- `AdPlatformProvider` interface for TikTok, Google, and later Meta.
- Store raw sync payloads in JSONB and normalized metrics in `ad_platform_metrics`.

### Future Scale

- Delivery app connectors.
- Accounting connectors.
- Email marketing automation provider.
- Server-side conversion APIs.
- Export/import jobs isolated in workers.

## SEO Architecture

### MVP

Use Next.js metadata and file conventions.

Requirements:

- Locale-based routes for English and Arabic.
- Dynamic metadata for product, collection, landing, and blog pages.
- Server Components for SEO pages.
- `sitemap.ts` and `robots.ts`.
- Canonical URLs.
- OpenGraph and Twitter metadata.
- Product schema.
- LocalBusiness schema.
- Breadcrumb schema.
- FAQ schema where useful.
- Image alt text in CMS/product media.
- Indexed landing pages only where the page has real search intent.
- Search Console setup.
- Google indexing checks.

Content rules:

- English and Arabic stay separate.
- Public copy follows the anti-AI writing guide.
- Blog/community posts are moderated before public publishing.
- Customer photos are uploaded through media storage and scanned/validated before public use.

### Future Scale

- Redirect manager.
- SEO dashboard.
- Metadata gap reports.
- Multi-city SEO pages only after service coverage is real.
- Programmatic SEO only if the content stays specific.

## Deployment Architecture

### MVP

Environments:

- Local.
- Staging.
- Production.

Hosting:

- `apps/storefront` on Vercel.
- `apps/admin` on Vercel.
- `apps/api` on Render or Railway.
- PostgreSQL on Neon or Supabase.
- Redis on Upstash or provider equivalent.
- Media storage on final provider.

Deployment flow:

- Feature branch.
- Pull-request style review.
- CI checks.
- Deploy to staging.
- Run smoke tests.
- Promote to production.

Environment isolation:

- Separate database per environment.
- Separate payment keys per environment.
- Separate auth secrets per environment.
- Separate webhook endpoints per environment.

### Future Scale

- Worker service deployed separately.
- Infrastructure-as-code when service count grows.
- Read replica for reporting.
- Custom domain ownership moved to Soglia organization accounts when ready.

## CI/CD Plan

### MVP

CI should run:

- TypeScript checks.
- ESLint.
- Prettier check.
- Unit tests.
- API tests.
- Prisma migration validation.
- Build for storefront, admin, and API.
- Playwright smoke tests for critical flows once implementation starts.

Deployment checks:

- Staging migration.
- Staging smoke test.
- Manual approval before production.
- Production migration.
- Production smoke test.

Branching:

- `main` for production.
- `develop` optional if staging needs a long-running branch.
- Feature branches per module.

Commit style:

- `feat(inventory): add BOM reservation model`
- `feat(pos): add tablet checkout`
- `chore(repo): initialize monorepo tooling`

### Future Scale

- Preview deployments per branch.
- Scheduled backup restore tests.
- Security scans.
- Dependency vulnerability checks.
- Contract tests for provider integrations.

## Logging and Monitoring Plan

### MVP

Application logs:

- Structured logs from NestJS.
- Request IDs.
- User/admin actor IDs for sensitive actions.
- Provider webhook IDs.
- Order IDs and payment IDs, never card data or secrets.

Error monitoring:

- Sentry or equivalent for storefront, admin, and API.
- Alerts for payment webhook failures, checkout failures, inventory reservation failures, and failed notifications.

Operational monitoring:

- Database health.
- API response time.
- Queue health if workers are active.
- Redis health.
- Vercel and backend host deployment health.

Business monitoring:

- Failed payments.
- Oversell attempts.
- Low-stock alerts.
- Expiring flower stock.
- Slot overload.
- Draft custom orders awaiting payment.

### Future Scale

- Uptime monitoring.
- Log retention policy.
- Incident runbooks.
- Provider-specific dashboards.

## Security Plan

### MVP

Risk-first priorities:

- Auth and session security.
- Payment and webhook security.
- Inventory and order integrity.
- Role/permission enforcement.
- Customer privacy.
- Blog submission abuse protection.

Controls:

- Better Auth with secure cookies, CSRF/origin checks, and rate limiting.
- Server-side permission checks on every protected route.
- Audit logs for refunds, discounts, inventory changes, role changes, settings changes, payment link creation, deposit changes, and order edits.
- Zod/class-validator validation at API boundaries.
- ORM-backed queries, no raw SQL unless reviewed.
- Payment provider webhooks signature-verified.
- Secrets stored only in platform secrets/environment variables.
- No secrets in logs.
- Separate staging and production credentials.
- Media uploads restricted by type and size.
- Blog/community submissions rate-limited and moderated.
- Customer phone/name from anonymous posts stored privately.
- Founder-only access to finance, CRM detail, refunds, discounts, settings, and publishing.

Security review:

- Before each module commit, review auth, validation, external calls, value transfer, and data access.
- For high-risk modules such as payments, auth, inventory reservation, refunds, and permissions, use adversarial review before approval.

### Future Scale

- Two-factor auth for founder/admin roles.
- Key rotation process.
- More formal data retention policy.
- Web application firewall if abuse grows.
- Security review before every major provider integration.

## Backup and Rollback Plan

### MVP

Database:

- Managed Postgres automated backups.
- Point-in-time recovery if provider supports it.
- Manual backup before risky migrations.
- Migration rollback plan for every schema change.

Application:

- Vercel deployment rollback for frontend apps.
- Backend host rollback to previous deploy.
- Keep migrations backward-compatible where possible.

Media:

- Object storage versioning if provider supports it.
- Avoid deleting media immediately; use soft-delete metadata first.

Operational:

- Run staging migrations before production.
- Keep payment provider webhooks idempotent.
- Store provider event IDs to avoid duplicate processing.
- Do not permanently delete orders, payments, inventory movements, or audit logs.

### Future Scale

- Scheduled restore drills.
- Backup retention policy by data class.
- Exported accountant packs archived monthly.
- Disaster recovery runbook.

## MVP Architecture

MVP system shape:

- Public storefront for bilingual commerce and content.
- Protected admin/POS for founder and florist.
- NestJS API for business logic.
- Postgres as source of truth.
- Redis for cache/session/queue support where needed.
- Payment-provider abstraction.
- Marketing and analytics capture from launch.
- Founder-only sensitive controls.
- Inventory reservation and BOM deduction built as first-class architecture.

MVP guiding rule:

Build the narrow version deeply enough that orders, stock, POS, payments, loyalty, content moderation, and reporting are trustworthy.

## Future Scale Architecture

Future system shape:

- Worker service for jobs.
- Subscription billing.
- More staff roles.
- Delivery app integration.
- Accounting integrations.
- More analytics and attribution.
- Multi-emirate delivery expansion.
- Optional mobile/staff app.
- Reporting replica or warehouse.
- Multi-location inventory if physical expansion happens.

Future guiding rule:

Do not add scale architecture before the business process is proven. Keep the seams ready, but keep MVP operations readable.

## Risks and Mitigations

### MVP

**Risk: Inventory overselling**

Mitigation: transactional reservations, row-level locking or atomic quantity updates, reservation release rules, and tests around concurrent checkout/POS sales.

**Risk: MVP becomes too large**

Mitigation: keep full ad integrations and advanced dashboards behind a scope checkpoint. Track marketing basics first if timeline pressure appears.

**Risk: Payment gateway choice changes**

Mitigation: provider abstraction and payment records that store provider IDs without leaking provider-specific logic into orders.

**Risk: Delivery provider has no API**

Mitigation: manual dispatch workflow first, provider interface ready for later automation.

**Risk: Blog submissions are abused**

Mitigation: rate limits, moderation, upload validation, private phone/name storage, and no automatic publishing.

**Risk: Florist sees sensitive data**

Mitigation: role permission checks and founder-only finance/CRM/settings routes.

**Risk: bilingual content slows launch**

Mitigation: bilingual fields from day one, but clear admin workflow for draft/published language completeness.

### Future Scale

**Risk: Reporting slows operational database**

Mitigation: materialized views, reporting snapshots, then replica/warehouse if needed.

**Risk: subscriptions complicate operations**

Mitigation: build only after core order, payment, inventory, and fulfillment are stable.

**Risk: integrations become brittle**

Mitigation: provider interfaces, webhook idempotency, raw payload storage, integration health logs.

## Open Questions

### MVP

- Which payment gateway will be used?
- Is VAT active at launch, or only VAT-ready?
- What are the exact delivery and pickup slot schedules?
- What are slot capacities by city and product type?
- Which third-party delivery provider launches first?
- Does the delivery provider have an API?
- What is the exact loyalty reward?
- What are the exact labor/work margin rules by bouquet size?
- Which email provider should be used?
- Which SMS provider should be used?
- Should auth use Better Auth email/password only at launch, or include passkeys/OTP?
- Which media storage provider should be used?
- Should managed Postgres be Neon or Supabase?
- Should backend hosting be Render or Railway?

### Next Phase

- Which provider supports recurring payments best for Soglia?
- Can coupons apply to subscriptions?
- Should accountant role be read-only only or allowed to export?
- Should florist discounts be allowed later with limits?

### Future Scale

- Which accounting system should be integrated?
- Which delivery apps matter first?
- When should a Soglia GitHub organization replace personal account ownership?
- When does infrastructure-as-code become worth the overhead?

## Reference Basis

- Next.js App Router and Metadata API official docs.
- Better Auth local skill guidance and official documentation expectations.
- Stripe local skill guidance for Checkout Sessions, Billing APIs, Payment Links, dynamic payment methods, restricted keys, and webhook verification.
- Postgres local skill guidance for UUID primary keys, `timestamptz`, and domain-meaningful data types.
- shadcn/ui local skill guidance for component composition, semantic tokens, accessible dialogs, forms, tables, and empty states.
- Playwright local skill guidance for functional and visual QA after implementation.
- Security review skill guidance for risk-first review of auth, payments, validation, external calls, and value transfer.
