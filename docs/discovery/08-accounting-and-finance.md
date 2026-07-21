# Phase 0 Discovery: Section H - Accounting and Finance

## Current Phase

Phase 0: Discovery and Alignment.

## Summary of Your Answers

Soglia has not chosen a payment gateway yet.

Expected payment methods:

- Online card payments.
- Apple Pay.
- In-store card payments.
- In-store cash payments.
- Payment links for manual/custom orders when online payment is needed before work starts.

In-store payments should support all normal store payment types:

- Card.
- Cash.
- Apple Pay.
- Payment links if useful.

Custom orders may sometimes require deposits before preparation.

Refunds should be founder-only at launch. Later, staff may request or process refunds with approval.

Discounts should be founder-only.

Soglia should be VAT-ready. You expect the business may need VAT, but you are not sure about registration timing or process yet.

Daily sales reports should include:

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
- Sales by source, such as TikTok, Instagram, WhatsApp, website, and POS.

Expense tracking should exist.

Supplier invoices, supplier costs, flower costs, and material costs should be tracked from launch.

Cost of goods sold should be calculated for each bouquet from the actual stems and materials used.

Bouquet pricing should also account for labor/work margin based on bouquet size, not only raw material cost.

Gross margin and net margin should be visible in founder-only dashboards.

You are not sure which accountant export format or accounting integration is best yet. The system should keep data clean enough for a future accountant.

Future accounting integrations are undecided.

## UAE Payment Gateway Options

This is a practical ranking for Soglia, not a final decision. Fees, onboarding rules, settlement timing, chargeback handling, and subscription support must be checked before choosing.

1. Stripe

Best developer experience if your UAE business qualifies and the required products are available for your account. Strong for ecommerce, subscriptions, Apple Pay, refunds, webhooks, and clean API design.

2. Checkout.com

Strong enterprise-grade option with regional presence and broad payment method support. Usually better when transaction volume and payment operations become more serious.

3. Network International / N-Genius

Strong local UAE option for online and in-person payments. Good fit if you want local acquiring, POS/card machine support, and UAE banking familiarity.

4. Tap Payments

Good regional option for UAE/GCC payments, payment links, cards, wallets, and local support. Worth considering if GCC expansion matters later.

5. Telr

Established UAE gateway with online payments, payment links/QR flows, BNPL options, and Central Bank of UAE regulation. Worth comparing on fees and integration quality.

6. PayTabs

Common regional gateway with cards and wallets. Worth considering, but should be compared carefully against the options above for developer experience, subscriptions, and support.

7. Bank-provided gateway / POS-only setup

Useful for in-store card machines and banking simplicity, but often weaker for custom ecommerce, subscriptions, webhooks, and modern checkout flows.

Recommended starting position:

- Keep the system payment-provider agnostic.
- Prefer Stripe if available and approved for the business.
- Compare Checkout.com, Network/N-Genius, Tap, Telr, and PayTabs before launch.
- Use a provider that supports Apple Pay, cards, refunds, webhooks, payment links, and recurring payments.

## VAT Notes

According to the UAE Federal Tax Authority, VAT registration is mandatory when taxable supplies and imports exceed AED 375,000. Voluntary registration may be available when taxable supplies/imports or taxable expenses exceed AED 187,500.

The system should be VAT-ready from launch, even if VAT is disabled at first.

VAT-ready means:

- Tax settings can be enabled later.
- Products can be marked taxable or non-taxable if needed.
- Orders can store tax amount separately.
- Invoices/receipts can show VAT details once registered.
- Reports can export taxable sales and VAT collected.

You should confirm registration timing with a UAE accountant or tax advisor before launch or as revenue approaches the relevant threshold.

## Recommended Default

The MVP should include finance-ready foundations:

- Payment records.
- Refund records.
- Discount records.
- Cash/card/online payment breakdown.
- Delivery fee tracking.
- Supplier costs.
- Expense tracking.
- Actual COGS per bouquet.
- Labor/work margin by bouquet size.
- Founder-only gross margin.
- Founder-only net margin.
- Daily closing report.
- Sales by source.
- Payment links for custom orders.
- Deposit tracking for custom orders.
- Accountant export.

Best accountant export default:

- Monthly Excel workbook as the main export.
- CSV exports for raw tables.
- PDF summary for human review.

Monthly accountant pack should include:

- Sales summary.
- Order list.
- Payment breakdown.
- Refunds.
- Discounts.
- VAT/tax summary when enabled.
- COGS summary.
- Supplier costs.
- Expenses.
- Gross margin.
- Net margin estimate.

## Risks and Tradeoffs

If supplier costs and actual bouquet usage are not tracked from the beginning, margins will be guesses.

If finance tools become too accountant-heavy too early, the system will slow down daily operations.

Payment gateway choice affects checkout, subscriptions, refunds, payment links, reconciliation, and reporting. It should remain abstracted in the architecture.

VAT should not be improvised after launch. Even if disabled at first, the database and receipts should be able to support it.

Net margin is harder than gross margin because it depends on expense quality. Early net margin should be treated as directional until expense tracking is mature.

## Open Questions

- Final payment gateway.
- Whether VAT registration is active at launch or only VAT-ready.
- Exact labor/work margin rules by bouquet size.
- Whether expenses need approval status.
- Whether supplier invoices should support file uploads.
- Which accounting software to integrate later.
