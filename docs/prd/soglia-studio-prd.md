# Soglia Studio Product Requirements Document

## Document Status

Phase 1 draft for approval.

This PRD is based on:

- `AGENTS.md`
- `docs/brand/brand-kit.html`
- `docs/brand/anti-ai-writing-style.md`
- `docs/discovery/`

No implementation should begin until this PRD is approved.

## Product Vision

Soglia Studio needs a business operating system for a boutique floristry studio, not a normal flower shop website.

The product must support three things at once:

- A bilingual customer-facing storefront that feels editorial, restrained, and open to purchase.
- A Shopify-like admin and POS that a small store team can use without fighting the system.
- A scalable operations backbone for inventory, BOM recipes, order fulfillment, marketing, finance, analytics, and future team roles.

The brand promise is clear: Soglia chooses flowers with an editor's eye. The system must protect that. Customers can choose practical details, but Soglia owns the arrangement.

## Target Users

### MVP

- Customers ordering bouquets, bunches, and add-ons online.
- Walk-in customers buying in the Muwaileh store.
- Customers requesting custom bouquets through WhatsApp or social channels.
- Launch loyalty-card holders and their nominees.
- Founder running the business.
- Florist preparing orders, using POS, and managing selected inventory tasks.
- Customers submitting moderated flower/community writing.

### Next Phase

- Subscription customers.
- Staff handling customer support and social inquiries.
- Accountant or external finance reviewer.

### Future Scale

- Marketing manager.
- Content manager.
- Inventory manager.
- POS staff.
- Store manager.
- Delivery staff.
- Analyst.
- Corporate, event, and wedding customers if the business expands into those lines later.

## User Personas

### MVP

**Taste-driven gifter**

Buys flowers for someone specific. Cares about the card, the material, and the gesture. Wants the order to feel chosen, not generic.

Needs:

- Clear product choice without too many options.
- Delivery or pickup slots.
- Card message.
- Bilingual store experience.
- Confidence that the arrangement will feel special.

**Walk-in customer**

Comes into the Muwaileh store and buys a bunch, bouquet, vase, card, paper, ribbon, or oasis.

Needs:

- Fast POS checkout.
- Clear availability.
- Ability to request a bouquet for pickup.

**Founder**

Runs sales, content, marketing, finance, CRM, settings, permissions, and operational decisions.

Needs:

- Today's sales.
- Pending orders.
- Best products.
- Marketing performance.
- Subscription status.
- Low-stock and fulfillment problems.
- Founder-only finance, refunds, discounts, settings, and CRM.

**Florist**

Prepares flowers, handles POS, checks working inventory, records spoilage, and updates actual bouquet usage.

Needs:

- Preparation queue.
- Order details.
- Pickup/delivery slots.
- BOM recipe view.
- Substitution entry.
- Spoilage logging.
- POS access.
- No sensitive finance or CRM data.

**Loyalty member**

Receives a private card, earns a reward after a set number of bouquet purchases, and can nominate one person.

Needs:

- Loyalty progress.
- Reward clarity.
- Invite flow.

### Next Phase

**Subscription customer**

Pays for a weekly plan and expects a new arrangement or DIY bunch without choosing exact flowers.

Needs:

- Clear subscription tier.
- Recurring payment.
- Cancellation before cutoff.
- Delivery or pickup schedule.

**Accountant**

Reviews monthly sales, expenses, supplier costs, COGS, refunds, discounts, tax/VAT, and exports.

Needs:

- Clean monthly Excel workbook.
- CSV exports.
- PDF summary.
- Read-only finance access later.

### Future Scale

**Marketing manager**

Manages campaigns, coupons, ads, landing pages, UTMs, email capture, and reports.

**Inventory manager**

Manages supplier purchase orders, receiving, stock alerts, expiry, spoilage, and inventory audits.

**Store manager**

Closes the day, handles staff workflows, reviews POS, and resolves operational issues.

## Business Pillars

### MVP

1. Storefront and checkout.
2. POS and walk-in sales.
3. Orders and fulfillment.
4. Inventory and BOM.
5. Founder dashboard.
6. Marketing tracking and SEO.
7. Finance-ready records.
8. Role-based access for founder and florist.
9. Launch loyalty program.
10. Launch blog/community page
11. Supplier purchase order depth.

### Next Phase

1. Subscriptions.
2. Loyalty program improvements.
3. Blog/community page improvements.
4. Accountant exports.
5. More structured campaign reporting.

### Future Scale

1. Multi-role team operations.
2. Delivery app integrations.
3. Accounting integrations.
4. Corporate, event, and wedding workflows.
5. Advanced analytics.
6. Multi-emirate expansion.

## Core Workflows

### MVP

**Website order**

1. Customer browses products.
2. Customer chooses bouquet, bunch, or add-ons.
3. Customer adds card message if relevant.
4. Customer chooses delivery or pickup.
5. Customer chooses date and slot.
6. Customer pays.
7. Order becomes confirmed.
8. Inventory is reserved.
9. Florist sees order in preparation queue.
10. Florist prepares order and records actual usage or substitutions.
11. Order moves through fulfillment statuses.
12. Customer receives updates.
13. Inventory deduction is finalized.

**POS order**

1. Staff opens POS.
2. Staff adds product, bunch, finished bouquet, or custom item.
3. Staff takes card, Apple Pay, cash, or supported in-store payment.
4. System records payment method and source.
5. Inventory is deducted or reserved depending on item type.

**Custom bouquet request**

1. Customer contacts through WhatsApp, Instagram, TikTok, or in store.
2. Staff creates draft order.
3. Budget, mood, date, slot, and customer notes are recorded.
4. Soglia confirms design direction and price.
5. Customer pays in full, or pays a deposit when required.
6. Draft becomes confirmed order.
7. Inventory is reserved.

Online custom orders may use payment links when payment is needed before bouquet work starts.

**Inventory receiving**

1. Founder receives stock.
2. Flower stems are entered with supplier, cost, arrival date, usable-until date, and condition.
3. Materials and vases are entered by quantity.
4. Low-stock and expiry alerts update.

**Launch loyalty flow**

1. Founder issues a custom number of initial loyalty cards.
2. Founder can issue more at any given time.  
3. Loyalty-card holders are attached to customer profiles.
4. System tracks qualifying bouquet purchases.
5. Reward progress is visible to founder.
6. Reward triggers after the configured bouquet count.
7. Each holder can nominate one person.

**Daily founder review**

1. Founder opens dashboard.
2. Sees sales, pending orders, best products, marketing performance, and subscription status.
3. Reviews problems: low stock, slot overload, delivery issues, pending draft orders, refunds.
4. Exports or reviews daily report when needed.

### Next Phase

**Subscription order**

1. Customer selects subscription tier.
2. Customer chooses weekly or biweekly frequency.
3. Customer chooses pickup or delivery schedule.
4. Recurring payment is set up.
5. System generates subscription orders.
6. Customer can cancel before cutoff.
7. Florist prepares each arrangement without customer choosing exact flowers.

**Community/blog submission**

1. Customer submits writing.
2. Customer provides name and phone number for founder records.
3. Customer can choose to publish anonymously.
4. Customer can include photos.
5. Submission goes to moderation.
6. Founder approves, edits, rejects, or schedules.
7. Approved content becomes public.

### Future Scale

**Delivery app order**

1. Order enters from external delivery app.
2. System maps source and product.
3. Inventory is reserved.
4. Fulfillment queue updates.
5. Reconciliation reports include delivery app fees.

**Corporate/event inquiry**

1. Customer submits inquiry.
2. Staff manages proposal and quote.
3. Deposit and milestone payments are tracked.
4. Inventory planning and fulfillment are scheduled.

## Feature List

### MVP

**Storefront**

- Bilingual English and Arabic storefront.
- Product listing and product detail pages.
- Bouquet, bunch, vase, card, wrapping paper, ribbon, and oasis products.
- Add-ons.
- Delivery and pickup selection.
- Date and time slots.
- Cart and checkout.
- Online payment integration, provider final.
- Customer account/profile.
- Customer profile editing, with birthday day/month locked after set.
- SEO metadata.
- Landing pages.
- Blog/community page.
- Customer writing submission form.
- Name and phone collection for founder records.
- Optional anonymous public display.
- Customer-submitted photos.
- Moderated publishing workflow.
- Public approved posts from launch.
- Loyalty-card status for invited launch members.

**Admin**

- Founder dashboard.
- Product/catalog management.
- Bilingual product names and descriptions.
- Order management.
- Draft custom orders.
- Custom order payment links.
- Custom order deposit tracking.
- Order source tracking.
- Fulfillment status workflow.
- POS.
- Inventory management.
- BOM recipes.
- Stock reservation.
- Spoilage and waste logs.
- Supplier costs.
- Purchase orders.
- Low-stock alerts.
- Finance reports.
- Daily sales report.
- Coupon codes, founder-only.
- UTM tracking.
- GA4 and Search Console configuration records.
- Campaign dashboard.
- TikTok Ads and Google Ads launch tracking.
- Advanced campaign dashboard planned in MVP per updated discovery, but flagged as high-risk scope.
- Loyalty card management.
- Loyalty reward progress.
- Loyalty nomination tracking.
- Role-based access for founder and florist.

**Notifications**

- Order confirmation.
- Pickup/delivery status updates.
- Transactional SMS only.
- WhatsApp support and order updates only.
- Internal low-stock alerts.

### Next Phase

- Subscription tiers.
- Weekly and biweekly subscription frequencies.
- Recurring payments.
- Subscription cancellation cutoff.
- Subscription order generation.
- Loyalty program improvements.
- Blog/community enhancements.
- Meta Ads.
- Accountant read-only access.
- Supplier purchase order improvements.
- More detailed campaign profitability.

### Future Scale

- Delivery app integrations.
- Corporate/event/wedding modules.
- Full accounting integrations.
- Advanced role editor.
- Forecasting and replenishment.
- Multi-branch support if Soglia expands beyond one store.
- Warehouse or central prep operations.
- Advanced customer segmentation.
- Automated marketing flows.

## MVP Scope

### Included

- Bilingual storefront.
- Public checkout for standard products.
- POS for physical store.
- Product catalog.
- Bouquet BOM.
- Simple products and bunches.
- Add-ons limited to flower-related items.
- Custom draft orders.
- Custom order payment links.
- Custom order deposit support.
- Delivery and pickup slots.
- Inventory reservation at payment.
- Actual component adjustment.
- Substitution manual rules.
- Spoilage tracking.
- Supplier cost tracking.
- Founder dashboard.
- Florist/POS role.
- Coupon codes.
- UTM capture.
- GA4.
- Search Console.
- Google indexing basics.
- Landing pages.
- Email capture.
- Blog/community page.
- Moderated customer submissions.
- No-account blog/community submissions.
- Optional anonymous publishing.
- Customer-submitted photos.
- Public approved posts.
- VAT-ready finance records.
- Daily sales reports.
- Accountant exports.
- TikTok Ads and Google Ads tracking.
- Launch loyalty cards and nomination tracking.
- Full ad platform integrations and advanced campaign dashboards if approved as MVP scope.
- Payment links.

### Excluded

- Workshops.
- Corporate orders.
- Event orders.
- Wedding workflows.
- Same-day delivery automation.
- Delivery app integration.
- Meta Ads.
- Full accounting software integration.
- Large role management UI.
- Full subscription operations if it slows the core launch.

## Phase 2 Scope

Phase 2 should happen after core checkout, POS, inventory, and order fulfillment are stable.

### Next Phase

- Flower subscriptions.
- Recurring billing.
- Cancellation cutoff rules.
- Loyalty reporting and refinements.
- Blog/community enhancements.
- Meta Ads.
- Deeper campaign profitability.
- Accountant role.
- More supplier purchase order functions.
- More delivery automation if provider supports API.

## Phase 3 Scale-Up Scope

### Future Scale

- Corporate florist accounts.
- Events.
- Weddings.
- Delivery app integrations.
- Advanced procurement.
- Forecasting.
- Multi-role team dashboards.
- Advanced analytics.
- Full accounting integrations with Xero, QuickBooks, Zoho Books, or local UAE tools.
- Advanced marketing automation.
- Multi-location readiness.

## Non-Functional Requirements

### MVP

- Fast enough for real store use.
- Simple enough for founder and florist to operate daily.
- Bilingual structure from day one.
- Mobile-first customer storefront.
- Tablet-friendly POS.
- Admin UI should feel closer to Shopify Admin than enterprise software.
- Brand system must follow `docs/brand/brand-kit.html`.
- Customer-facing copy must follow `docs/brand/anti-ai-writing-style.md`.
- No direct storage of payment card details.
- Audit logs for sensitive admin actions.
- Export paths for finance and customer data.

### Next Phase

- More automation without hiding operational control.
- Subscription-safe billing and cancellation.
- Better staff role boundaries.
- More reliable campaign reporting.

### Future Scale

- Multi-team access.
- Higher traffic tolerance.
- More integration monitoring.
- More formal compliance and audit workflows.

## Performance Requirements

### MVP

- Storefront pages should target strong Core Web Vitals.
- Product listing and product detail pages should load quickly on mobile.
- Checkout should avoid unnecessary steps.
- POS should respond quickly on tablet in-store.
- Admin order queue should update without manual refresh where practical.
- Inventory reservation must complete during checkout without race conditions.
- Product images should use optimized formats and responsive sizing.

### Next Phase

- Server-side or queued background work for subscriptions, notifications, reports, and campaign syncs.
- Caching for high-read pages and product data.
- Reporting queries should not slow checkout or POS.

### Future Scale

- Separate reporting workloads if analytics becomes heavy.
- Search indexing for larger catalog/content sets.
- Warehouse-ready inventory performance if product volume grows.

## Security Requirements

### MVP

- Secure authentication.
- Password hashing if password auth is used.
- Session protection.
- Role-based access control.
- Permission checks on every admin action.
- Founder-only access to finance, refunds, discounts, CRM details, settings, and staff permissions.
- Input validation with shared schemas where possible.
- API rate limiting on public endpoints.
- CSRF protection where relevant.
- XSS prevention.
- SQL injection protection through ORM and validated queries.
- Audit logs for refunds, discounts, stock changes, role changes, settings changes, and order edits.
- Payment handled through compliant gateways only.
- No raw card storage.
- Secrets stored in environment variables.
- Separate staging and production secrets.

### Next Phase

- Staff approval workflows for refunds and sensitive actions.
- More detailed audit views.
- Better fraud checks around coupons, loyalty, and subscriptions.

### Future Scale

- Security reviews before major integrations.
- More formal privacy and access policies.
- Automated backup and restore drills.

## SEO Requirements

### MVP

- Bilingual SEO structure.
- Clean routes for English and Arabic.
- Dynamic metadata for products, collections, landing pages, and content.
- XML sitemap.
- `robots.txt`.
- Canonical URLs.
- OpenGraph metadata.
- Product schema.
- LocalBusiness schema.
- Breadcrumb schema where relevant.
- FAQ schema where relevant.
- Search Console setup.
- Google indexing checks.
- Landing pages only where there is real search intent.
- Semantic HTML.
- Image alt text management.
- Fast mobile pages.

### Next Phase

- SEO dashboard for indexing, sitemap, metadata gaps, and redirects.
- More content workflows.
- Redirect management.
- Structured data expansion.

### Future Scale

- Programmatic SEO only if content quality can stay high.
- Multi-city pages when delivery coverage is real, not theoretical.

## Analytics Requirements

### MVP

- GA4 installed.
- Ecommerce events.
- Checkout events.
- Conversion events.
- UTM capture.
- Order source tracking.
- Coupon usage tracking.
- Sales by source.
- TikTok Ads and Google Ads tracking at launch.
- Campaign dashboard.
- Campaign profitability model that can connect spend, sales, coupons, and gross margin.
- Founder dashboard KPIs.
- POS sales included in reporting.
- Loyalty analytics.
- Email capture analytics.
- Community/content performance.

### Next Phase

- Meta Ads.
- Subscription analytics.
- Campaign spend import or manual spend entry.

### Future Scale

- Full ad platform connectors.
- More detailed attribution.
- Product performance by channel.
- Customer lifetime value.
- Cohort reports.
- Forecasting.

## Data Model Overview

### MVP

Core entities:

- `users`
- `roles`
- `permissions`
- `staff_profiles`
- `customers`
- `customer_addresses`
- `products`
- `product_variants`
- `product_images`
- `categories`
- `collections`
- `inventory_items`
- `inventory_movements`
- `product_components`
- `suppliers`
- `purchase_orders`
- `purchase_order_items`
- `orders`
- `order_items`
- `order_status_history`
- `payments`
- `refunds`
- `transactions`
- `discounts`
- `coupons`
- `delivery_zones`
- `delivery_slots`
- `fulfillment_tasks`
- `audit_logs`
- `marketing_campaigns`
- `ad_accounts`
- `ad_platform_metrics`
- `analytics_events`
- `content_pages`
- `content_submissions`
- `moderation_actions`
- `loyalty_cards`
- `loyalty_rewards`
- `loyalty_nominations`
- `media_assets`
- `seo_metadata`
- `settings`
- `payment_links`

Important data rules:

- Products need English and Arabic fields.
- Product types must distinguish simple, bunch, bouquet, finished bouquet, add-on, and custom.
- Bouquets need BOM recipes.
- Inventory must support raw stems, materials, vases, and finished bouquets.
- Inventory movements must record reservations, deductions, spoilage, receiving, substitutions, and manual adjustments.
- Substitutions must follow a founder-approved replacement manual by flower type.
- Finished bouquets need sell-by dates.
- Cancelled orders release reserved inventory automatically only before processing starts.
- Cancelled orders require staff review for inventory release after processing starts.
- Orders need source tracking.
- Payments need provider abstraction.
- Custom orders may require deposits.
- Payment links must be supported for online custom orders where payment is needed before work starts.
- Finance data needs export-friendly structure.
- Loyalty cards are private and invitation-based at launch.
- Loyalty reward logic must be configurable because the exact reward is still open.
- Audit logs must track sensitive admin actions.


### Next Phase

Additional entities:

- `subscriptions`
- `subscription_plans`
- `subscription_orders`

### Future Scale

Additional entities:

- `delivery_app_accounts`
- `external_channel_orders`
- `accounting_integrations`
- `corporate_accounts`
- `event_inquiries`
- `event_quotes`
- `multi_location_inventory`
- `forecasting_snapshots`

## API Overview

### MVP

Public storefront APIs:

- Product list and detail.
- Collections.
- Search/filter.
- Cart.
- Checkout.
- Delivery and pickup slot availability.
- Customer profile.
- Content pages and landing pages.
- Blog/community submission intake.
- Community submission photo upload.

Admin APIs:

- Dashboard metrics.
- Product management.
- Bilingual catalog content.
- Order management.
- Draft custom orders.
- Payment links for custom orders.
- Custom order deposit tracking.
- POS checkout.
- Fulfillment workflow.
- Inventory items.
- Inventory movements.
- Substitution manual.
- BOM recipes.
- Supplier and purchase order records.
- Spoilage logs.
- Coupon management.
- Campaign records.
- Loyalty cards.
- Loyalty rewards.
- Loyalty nominations.
- UTM and analytics event capture.
- Finance reports.
- Accountant exports.
- Staff roles and permissions.
- Settings.

Integration APIs:

- Payment provider.
- GA4 events.
- TikTok Ads tracking.
- Google Ads tracking.
- Search Console setup data where applicable.
- SMS provider for transactional updates.
- WhatsApp support/update provider if chosen.

Real-time events:

- Order created.
- Order confirmed.
- Order status changed.
- Inventory reserved.
- Inventory low-stock alert.
- Fulfillment queue updated.

### Next Phase

- Subscription plan APIs.
- Recurring billing APIs.
- Loyalty reporting/refinement APIs.
- Payment link APIs.
- Blog/community enhancement APIs.
- Meta Ads tracking.
- Accountant read-only reporting.

### Future Scale

- Delivery app APIs.
- Accounting integration APIs.
- Corporate/event quote APIs.
- Forecasting APIs.
- Advanced analytics APIs.

## Deployment Plan

### MVP

Recommended default:

- Monorepo.
- Next.js storefront/admin on Vercel.
- NestJS API on Render or Railway.
- PostgreSQL on Neon or Supabase.
- Prisma ORM.
- Managed Redis such as Upstash when needed.
- Managed media storage, final provider to be chosen.
- Staging and production from day one.
- Personal GitHub account first.
- Soglia GitHub organization later.

Deployment requirements:

- Separate staging and production environment variables.
- Database migrations.
- Seed data for local/staging.
- CI checks before deployment.
- Error logging.
- Basic monitoring.
- Database backups.
- Rollback plan.

### Next Phase

- Background job workers.
- More integration jobs.
- Scheduled subscription order generation.
- More reporting exports.
- Stronger monitoring.

### Future Scale

- Infrastructure-as-code if complexity grows.
- More formal incident process.
- Read replicas or warehouse-ready reporting if needed.
- Multi-environment access controls.

## Risk List

### MVP

- Inventory accuracy is the hardest operational risk.
- Ad platform integrations and advanced campaign dashboards may make MVP too large.
- Delivery provider may not support dispatch API.
- Payment gateway choice affects checkout, subscriptions, refunds, payment links, and reconciliation.
- VAT requirements must be checked with an accountant.
- Bilingual content doubles content workload.
- Customer-submitted content needs moderation.
- Blog/community submissions need abuse protection because accounts are not required.
- Loyalty reward rules must be exact enough that members understand them.
- Slot capacity rules need real operational numbers.
- Florist role must have enough access to work, but not enough to expose finance and CRM.

### Next Phase

- Subscriptions add billing complexity.
- Campaign profitability needs clean cost and source data.
- Staff roles become harder as the team grows.

### Future Scale

- Delivery app fees and reconciliation can distort margins.
- Corporate/events/weddings require a different sales pipeline.
- Accounting integrations can be brittle.
- Multi-location inventory requires a deeper stock model.

## Assumptions

### MVP

- Launch store is in Muwaileh, Sharjah.
- AED is the only currency.
- English and Arabic are required.
- Standard products can be purchased fully online.
- Same-day delivery is not automated at launch.
- Founder and florist are the only launch internal roles.
- Founder owns finance, discounts, refunds, content, marketing, CRM, settings, and permissions.
- Florist uses POS and fulfillment workflows.
- Inventory reservation happens at payment.
- Bouquets use BOM recipes.
- Substitutions are allowed and tracked.
- Substitutions follow a founder-approved manual of allowed replacements.
- Finished bouquets have sell-by dates.
- Cancelled orders release reserved inventory automatically only before processing starts.
- Custom orders may use payment links.
- Custom orders may require deposits.
- Blog/community submissions do not require accounts.
- Blog/community submissions collect name and phone number for founder records.
- Customers can choose to publish blog/community submissions anonymously.
- Customer-submitted content can include photos.
- Payment gateway is not final.
- VAT-ready does not mean VAT is charged before registration.
- Loyalty cards launch with 8 initial holders.
- Each launch loyalty holder can nominate one person.

### Next Phase

- Subscriptions launch after core commerce is stable.
- Subscriptions support weekly and biweekly plans.
- Loyalty reporting can deepen after the launch version is stable.
- Meta Ads comes later.

### Future Scale

- Corporate, events, and weddings are not expected for one to two years.
- Soglia may expand delivery coverage beyond Sharjah, Dubai, and Ajman.
- More staff roles will be needed later.

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
- Which auth approach should be used?
- Which media storage provider should be used?

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

## Approval Gate

This PRD should be approved, rejected, or revised before Phase 2: Technical Architecture.

No code should be generated until the PRD is approved.
