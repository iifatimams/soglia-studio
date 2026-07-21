# Phase 0 Discovery: Section C - Operational Workflow

## Current Phase

Phase 0: Discovery and Alignment.

## Summary of Your Answers

Website orders should go straight to confirmed after the customer pays. They should not wait for manual approval by default.

POS and WhatsApp/custom orders can be created by both you and the florist team.

Flowers will be prepared by hired florists at launch.

Inventory will be checked by you and the florist team. The system should deduct or reserve inventory automatically, but the initial team will double-check that the deduction and available stock are correct.

Inventory should be deducted or reserved when the customer pays. The reserved items should be isolated in the store so they are not accidentally used for a walk-in order.

For online orders, dispatch should ideally be handled by the system. If that is not possible at first, you or the florist will dispatch manually.

Delivery will mostly use a third-party delivery provider, but you may sometimes deliver internally.

Customers should be able to choose delivery date and time slot online from day one.

Customers should also be able to choose pickup date and time slot online from day one.

Pickup and delivery slots should respect availability and florist workload. The system should eventually prevent customers from choosing unavailable or overloaded slots.

Launch products are mixed:

- Some products are ready-style products shown on the website or Instagram.
- Most bouquets are prepared after the order comes in.
- One of each style may exist for website or Instagram photography, but the store should not assume all styles are always ready for immediate pickup.

Custom bouquet requests should be tracked as draft orders until price, details, and timing are confirmed.

Custom orders may use payment links when handled online and payment is needed before bouquet work begins. Some custom orders may require a deposit before preparation.

If an order is cancelled before processing starts, reserved inventory should be released automatically. If processing has already started, reserved inventory should not be released automatically and should require staff review.

## Recommended Default

The MVP should use an order workflow like this:

1. Customer places and pays for a website order.
2. Order becomes confirmed automatically.
3. Inventory components are reserved immediately.
4. Reserved stock is marked as unavailable for walk-in/POS use.
5. Florist sees the confirmed order in the preparation queue.
6. Florist prepares the order.
7. Order moves to quality check or ready status.
8. Customer pickup or delivery dispatch happens in the chosen slot.
9. Inventory reservation becomes final deduction when the order is completed.

For custom orders:

1. Staff creates a draft order.
2. Soglia confirms details, price, date, and slot.
3. Customer pays in full or pays the required deposit.
4. The order becomes confirmed.
5. Inventory is reserved.

## Risks and Tradeoffs

Automatic confirmation makes checkout feel clean, but inventory accuracy must be strong. If the system allows overselling, the brand promise breaks quickly.

Reserving inventory at payment is the right default. Cancelled orders need two paths: automatic release before processing, staff-reviewed release after processing starts.

Delivery automation depends on the third-party provider. If the provider does not have a reliable API, dispatch may start as a manual admin action.

Slot availability needs rules. Without capacity limits, customers may choose more orders than the florist team can prepare in one window.

Internal delivery should be supported as an option because it will happen sometimes, but it should not be treated as the default delivery model.

## Open Questions

- Which third-party delivery provider will be used first.
- Whether the delivery provider has an API.
- How many orders the florist team can handle per slot.
- Whether slot capacity differs between bouquets, bunches, and custom orders.
- Whether inventory reservation should become final deduction at payment or at completion for accounting reports.
