# Phase 0 Discovery Summary

## Current Phase

Phase 0: Discovery and Alignment.

## Business Model

Soglia Studio is a boutique floristry and lifestyle studio launching from a physical store in Muwaileh, Sharjah, UAE.

The brand is not a generic flower shop. The brand kit defines Soglia as editorial floristry: high-fashion publishing, art-gallery restraint, studio-led taste, and flowers chosen with a point of view.

Launch products:

- Flower bouquets.
- Flower bunches.
- Cards.
- Wrapping paper.
- Ribbons.
- Oasis / floral foam.
- Vases.

Later products:

- Flower subscriptions.
- Workshops.

The store is public, but the loyalty program is private. At launch, 8 close friends receive loyalty cards. After around 6 bouquet purchases, they receive a reward such as a discounted bouquet. Each loyalty-card holder can invite one person into the loyalty program.

Launch geography:

- Physical store in Muwaileh, Sharjah.
- Delivery planned first for Sharjah, Dubai, and Ajman.
- Other UAE emirates later.

Languages and currency:

- English.
- Arabic.
- AED only.

## Sales Channels

Launch sales channels:

- Website checkout.
- Physical store POS.
- WhatsApp for custom requests, customer questions, order changes, and support.
- Instagram manual/social orders or inquiries.
- TikTok manual/social orders or inquiries.
- Third-party delivery fulfillment.

Website orders should be fully completed online for standard products.

WhatsApp is not the default channel for normal product orders.

Same-day delivery is not part of launch by default.

Corporate orders, events, and weddings are not in launch scope. They may be considered one or two years later.

Subscriptions should eventually be sold online with recurring payment, tiered prices, and cancellation before a cutoff window, with 5 days before expected payment as the working rule.

## Operational Workflow

Website orders go straight to confirmed after payment.

POS and WhatsApp/custom orders can be created by both founder and florist team.

Flowers are prepared by hired florists.

Inventory should be deducted or reserved automatically when the customer pays. Reserved stock should be isolated so it is not accidentally used for walk-in/POS orders.

Founder and florist double-check inventory, but the system owns the first reservation/deduction.

Online delivery dispatch should ideally be handled by the system. If the delivery provider does not support this, founder or florist can dispatch manually.

Delivery is mostly outsourced, but internal delivery should be supported because it may happen sometimes.

Customers choose delivery date and delivery time slot online.

Customers choose pickup date and pickup time slot online.

Slots should respect florist availability and workload.

Products are mixed:

- Most bouquets are made after an order comes in.
- Some finished bouquets may exist for walk-ins, display, or photography.
- The system should not assume every displayed style is always ready to pick up immediately.

Custom bouquet requests stay as draft orders until price, details, and timing are confirmed.

## Product Structure

Soglia sells simple products, composite products, and custom orders.

Simple products:

- Vases.
- Cards.
- Wrapping paper.
- Oasis / floral foam.
- Flower bunches.

There are no single loose-flower products. Bunches are sold in fixed quantities, such as 5 or 10 stems.

Every bouquet should have a bill of materials / recipe.

Ready-made bouquet styles should be mostly fixed, but flexible when availability problems occur.

Launch add-ons:

- Cards.
- Wrapping paper.
- Ribbons.

Soglia will not sell unrelated gift-shop products such as chocolates, candles, or plush toys.

Seasonal products are not launch products by default. They should be added when each season comes.

Limited-quantity drops are a possible yes.

Custom orders use customer budget and mood, then Soglia confirms final design, price, and details before payment.

Products need English and Arabic names and descriptions from launch.

## Inventory Logic

Inventory must be detailed from the beginning.

Raw flowers are tracked by stem count.

Flower attributes:

- Type.
- Color.
- Supplier.
- Cost per stem.
- Arrival date.
- Expiry or usable-until date.
- Condition.

Tracked materials:

- Wrapping paper.
- Ribbons.
- Cards.
- Oasis / floral foam.
- Vases by style.

Finished bouquet inventory is mixed:

- Most bouquets are made from components after order.
- Some finished bouquets can be created for walk-ins, display, or photography.

Staff can record:

- Spoiled flowers.
- Damaged materials.
- Unusable inventory.
- Manual stock adjustments.

Supplier purchase orders should be supported.

Stock alerts should warn when flowers or materials fall below minimum quantity.

Florists can substitute components when recipe items are unavailable. Actual components used should be tracked.

Cost per stem/material should be tracked so bouquet COGS and margin can be calculated.

## Admin and Team Roles

Launch team:

- Founder.
- Florist.

Founder handles most areas at launch.

Florist focuses on florist work, POS, order preparation, and some inventory tasks.

Founder dashboard should show the best and most important business information first:

- Today's sales.
- Pending orders.
- Best products.
- Marketing performance.
- Subscription status.

Problems and alerts should still be visible, but not dominate the first screen unless urgent.

Founder-only at launch:

- Discounts.
- Refunds.
- Close the day.
- Marketing and growth.
- Content and brand management.
- Finance and accounting reports.
- CRM details.
- System administration.
- Staff invitations and permissions.
- Store, delivery, payment, and integration settings.
- Receive stock.

Founder and florist:

- Create orders.
- Manage POS orders.
- Handle pickup and walk-in workflows.
- Move orders through fulfillment statuses.
- Edit stock where allowed.
- Record spoilage and damaged inventory.
- Update actual components used.
- Enter substitutions.

Staff should only see reports for their area.

Customers can edit their own profile details, but birthday day and month should not be editable after being set.

## Marketing and Ads Requirements

Marketing foundations should exist from launch.

Launch:

- TikTok Ads.
- Google Ads.
- GA4.
- Google Search Console.
- Google indexing basics.
- UTM tracking.
- Founder-only coupon codes.
- Landing pages.
- Email capture.
- Moderated customer/community content.
- Transactional SMS only.
- WhatsApp support and order updates only.
- Full ad platform integrations.
- Advanced campaign dashboards.

Later:

- Meta Ads.


Influencer tracking is not needed at launch. Early growth should focus on word of mouth through the founder's own social circle.

Campaign profitability reporting is required. The system should eventually connect campaign spend, coupon use, product sales, and gross margin.

Landing pages should be part of SEO, but only when they target real search intent. Thin keyword pages should be avoided.

## Accounting and Finance Requirements

Payment gateway is not final.

Expected payment methods:

- Online card payments.
- Apple Pay.
- In-store card payments.
- In-store cash payments.
- Payment links if useful for manual/custom orders.

Recommended payment approach:

- Keep payment logic provider-agnostic.
- Prefer Stripe if UAE onboarding, pricing, Apple Pay, recurring payments, and business eligibility work.
- Compare Checkout.com, Network/N-Genius, Tap, Telr, PayTabs, and bank gateway/POS before launch.

Refunds:

- Founder-only at launch.
- Staff may later process or request refunds with approval.

Discounts:

- Founder-only.

VAT:

- System should be VAT-ready from launch.
- VAT can remain disabled until registration is required or approved.
- VAT registration timing should be confirmed with a UAE accountant or tax advisor.

Daily reports should include:

- Gross sales.
- Net sales.
- Refunds.
- Discounts.
- Cash total.
- Card total.
- Online total.
- Delivery fees.
- Best products.
- Order count.
- Sales by source.

Finance tracking should include:

- Expenses.
- Supplier invoices.
- Supplier costs.
- Flower/material costs.
- Actual COGS per bouquet.
- Labor/work margin based on bouquet size.
- Founder-only gross margin.
- Founder-only net margin.

Recommended accountant export:

- Monthly Excel workbook.
- CSV exports for raw data.
- PDF summary for human review.

## Technical Preferences

You want the best practical stack, not a stack chosen because it is trendy.

You want:

- Stable launch.
- Long-term control.
- User-friendly system.
- Shopify-like ease of use.
- Open-source-first tools where practical.
- Managed services when they are better for reliability.
- Staging and production from the beginning.
- Personal GitHub account first, with Soglia organization later.

Recommended default stack:

- Monorepo.
- Next.js App Router for storefront/admin.
- React.
- TypeScript.
- Tailwind CSS.
- Shadcn/ui and Radix UI.
- NestJS backend.
- PostgreSQL.
- Prisma ORM.
- Managed PostgreSQL through Neon or Supabase.
- Vercel for storefront/admin.
- Render or Railway for backend.
- Managed Redis such as Upstash when needed.
- Payment-provider abstraction.
- Object storage for media.
- GA4 and Search Console from launch.

## MVP Assumptions

MVP should include:

- Bilingual storefront.
- Product catalog.
- Website checkout.
- POS.
- Delivery and pickup slots.
- Manual/custom draft orders.
- Order status workflow.
- Inventory reservation/deduction.
- BOM recipes for bouquets.
- Basic substitution tracking.
- Spoilage tracking.
- Supplier cost tracking.
- Founder dashboard.
- Florist/POS role.
- Coupon codes.
- UTM capture.
- GA4.
- Search Console.
- Landing pages.
- Email capture.
- VAT-ready finance records.
- Daily sales report.
- Accountant export.
- Full ad platform dashboards.

MVP should not include:

- Workshops.
- Corporate orders.
- Weddings.
- Event ordering.
- Full delivery app integration.
- Automated same-day delivery.
- Full accounting software integration.
- Large team role management UI unless needed.

## Open Questions

- Final payment gateway.
- Whether VAT registration is active at launch or only VAT-ready.
- Exact delivery and pickup slot schedule.
- Slot capacity by city and product type.
- First third-party delivery provider.
- Whether delivery provider has an API.
- Exact loyalty reward.
- Whether subscriptions are weekly only or also biweekly.
- Subscription payment provider.
- Whether payment links are needed for custom orders.
- Whether custom orders require deposits in special cases.
- Final labor/work margin rules by bouquet size.
- Whether substitutions require founder approval.
- Whether cancelled orders release reserved inventory automatically.
- Whether finished bouquets need sell-by dates.
- Which email provider to use.
- Which SMS provider to use.
- Whether community/blog submissions require accounts.
- Whether customer-submitted content can include photos.
- Final frontend host.
- Final backend host.
- Final PostgreSQL provider.
- Final Redis provider.
- Final auth approach.
- Final media storage provider.
- Whether to create a Soglia GitHub organization before launch or later.

## Recommended Defaults

Use a narrow, strong MVP:

- Public ecommerce store.
- Physical POS.
- Founder/admin dashboard.
- Florist workflow.
- Inventory and BOM core.
- Delivery/pickup slots.
- Basic marketing tracking.
- Finance-ready records.

Keep the brand open to purchase, but keep loyalty private.

Use studio-led product logic. Customers choose practical details, but Soglia chooses the arrangement.

Use reservation at payment and final deduction after preparation/completion, with actual-use adjustment.

Use founder-only access for finance, discounts, refunds, content, marketing, CRM, and system settings.

Use managed infrastructure for launch reliability, but keep the codebase portable and open-source-first.

Move to Phase 1 only after the discovery summary is approved.
