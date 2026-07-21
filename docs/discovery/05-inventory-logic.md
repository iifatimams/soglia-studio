# Phase 0 Discovery: Section E - Inventory Logic

## Current Phase

Phase 0: Discovery and Alignment.

## Summary of Your Answers

Soglia needs detailed inventory tracking from the beginning because flowers, bouquets, add-ons, and packaging all affect availability and margin.

Raw flower stems should be tracked by stem count.

Flower inventory should include attributes such as:

- Flower type.
- Color.
- Supplier.
- Cost per stem.
- Arrival date.
- Expiry or usable-until date.
- Condition.

Packaging materials should be tracked as inventory, including:

- Wrapping paper.
- Ribbons.
- Cards.
- Oasis / floral foam.

Vases should be tracked as inventory, with each vase style treated as its own stock item.

Finished bouquet inventory should be mixed:

- Most bouquets are made from components after an order comes in.
- Some finished bouquets may exist in-store for walk-ins, display, or photography.
- The system should support both component-based bouquet building and finished bouquet stock when needed.
- Finished bouquets should have sell-by dates.

Staff should be able to record:

- Spoiled flowers.
- Damaged materials.
- Unusable inventory.
- Manual stock adjustments.

Perishable flowers should have expiry dates or usable-until dates.

Supplier purchase orders should be supported.

Stock alerts should warn the team when flowers or materials fall below minimum quantity.

When an order is paid, the system should reserve or deduct the required inventory automatically. Reserved stock should not be available for walk-in/POS orders.

Florists should be allowed to substitute components when recipe items are unavailable. The actual components used should be tracked.

Substitutions should follow a founder-approved manual. The manual should list possible replacements for each type of flower, so florists can make approved substitutions without asking for founder approval each time.

The system should track cost per stem and per material so bouquet cost and margin can be calculated.

## Recommended Default

The MVP inventory model should support:

- Raw flower stems.
- Packaging materials.
- Vases.
- Finished bouquet stock when needed.
- BOM-based bouquet recipes.
- Inventory reservation at payment.
- Actual-use adjustment during preparation.
- Spoilage and waste logs.
- Supplier purchase orders.
- Low-stock alerts.
- Cost and margin reporting.

For bouquets, the best workflow is:

1. Order is paid.
2. Recipe components are reserved.
3. Florist prepares the bouquet.
4. Florist updates substitutions or actual usage if needed.
5. Inventory deduction becomes final.
6. Cost and margin are calculated from actual usage.

For finished bouquets:

1. Staff creates a finished bouquet from components.
2. Component inventory is deducted.
3. Finished bouquet stock increases.
4. A sell-by date is assigned.
5. POS or order fulfillment can sell that finished bouquet directly.

## Risks and Tradeoffs

Inventory will be one of the most important modules. If it is too simple, Soglia will lose visibility into cost, spoilage, and margin. If it is too detailed, staff may avoid using it.

Supplier purchase orders are useful, but they add operational weight. The interface must be fast enough for a small team.

Expiry and spoilage tracking are necessary for realistic flower margins. Without them, reports will make the business look healthier than it is.

Substitution tracking is important because flower availability changes. The system must not punish florists for making good substitutions, but it should still record what was actually used.

## Open Questions

- Whether stock alerts should be based on fixed minimums or sales forecasts later.
- Whether expiry dates are entered manually or calculated from flower type.
- Whether supplier purchase orders should support partial receiving.
- Whether inventory reservation becomes final deduction at payment, preparation, or completion for accounting reports.
