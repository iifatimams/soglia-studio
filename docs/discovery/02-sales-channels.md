# Phase 0 Discovery: Section B - Sales Channels

## Current Phase

Phase 0: Discovery and Alignment.

## Summary of Your Answers

Soglia Studio should accept full normal product orders through the website. Customers should be able to browse, choose products, select delivery or pickup, choose a time slot, pay, and complete checkout online.

WhatsApp should not be the normal product-ordering channel. It should support customer questions, custom bouquet requests, order changes, and manual help.

The physical store in Muwaileh needs POS support from launch. The POS should handle walk-in purchases, pickup orders, custom bouquet orders, and discounts.

Instagram orders should be tracked inside the admin system. TikTok should be tracked the same way. These channels should count as social/manual order sources.

Customers should choose delivery dates and time slots. Pickup should also use slots, such as 4:00 PM to 6:00 PM.

Same-day delivery should not be part of launch by default. It can come later after operations are tested.

Corporate orders, events, and weddings should not be included yet. You expect to consider those one or two years later.

Subscriptions should eventually run online with recurring payment. Customers should be able to cancel any time before a cutoff, with 5 days before the expected payment as the working rule. Subscription pricing should support tiers, such as weekly AED 100 flower subscriptions and AED 300 bouquet subscriptions.

## Recommended Default

For MVP, Soglia should support:

- Website checkout for standard products.
- In-store POS.
- Manual/social order tracking for WhatsApp, Instagram, and TikTok.
- Delivery and pickup time slots.
- No automated same-day delivery.
- No corporate, event, or wedding checkout.

Subscriptions should be planned in the data model early, but built after the core catalog, checkout, orders, payments, and inventory flows are stable.

## Risks and Tradeoffs

Full website checkout means the first build must handle payments, inventory deduction, delivery or pickup slots, order confirmation, and status tracking properly.

Social/manual channels need a simple admin order flow. If it is slow, staff will avoid using it and the data will be incomplete.

Recurring subscriptions are more complex than normal checkout. They need billing tiers, cancellation cutoff rules, payment failure handling, and automatic order generation.

Same-day delivery should wait because it adds pressure to inventory, florist preparation, dispatch, and customer support.

## Open Questions

- Which payment gateway will be used.
- Whether manual/social orders can be paid through payment links.
- Exact delivery slot schedule.
- Exact pickup slot schedule.
- Whether slots differ by city.
- Whether custom bouquet orders require deposits.
