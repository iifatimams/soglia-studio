# Phase 0 Discovery: Section D - Product Structure

## Current Phase

Phase 0: Discovery and Alignment.

## Summary of Your Answers

Soglia will sell simple products, composite products, and custom orders.

Simple stock products at launch:

- Vases.
- Cards.
- Wrapping paper.
- Oasis / floral foam.
- Flower bunches.

Soglia will not sell single loose flowers. Flower bunches should be sold in fixed quantities, such as 5 stems or 10 stems.

Every bouquet should have a bill of materials / recipe behind it. This should allow the system to understand which flowers and materials are used when a bouquet is sold.

Ready-made bouquet styles should be mostly fixed, but flexible when availability problems happen. The preferred model is fixed recipes, with allowed substitutions when stock changes.

Flower bunches should always have a fixed stem count.

Launch add-ons should stay flower-related and brand-owned:

- Cards.
- Wrapping paper.
- Ribbons.

Soglia should not sell chocolates, candles, plush toys, or unrelated gift-shop products.

Seasonal products should not be built as launch products by default. They should be added when each season comes.

Limited-quantity drops are a possible yes. They fit the brand, but need inventory and capacity controls.

Custom orders should allow customers to request a budget and mood. Soglia confirms the final design, price, and details before payment.

Custom orders should be paid after confirmation, not upfront before Soglia reviews the request.

All products should have English and Arabic names and descriptions from launch.

## Recommended Default

The MVP product model should include:

- Simple products for stock-backed items.
- Flower bunch products with fixed stem counts.
- Composite bouquet products with BOM recipes.
- Bouquet recipe substitutions for availability problems.
- Add-ons limited to cards, wrapping paper, and ribbons.
- Draft custom orders that become payable only after staff confirmation.
- Bilingual product fields from day one.

For bouquets, the best default is a fixed base recipe with controlled substitutions. This gives florists enough flexibility without losing inventory and margin tracking.

## Risks and Tradeoffs

If bouquet recipes are too rigid, stock shortages will block sales even when a florist could make a strong alternative.

If bouquet recipes are too flexible, inventory reports and cost-of-goods calculations become unreliable.

Limited drops can strengthen the brand, but only if quantities are capped correctly. Otherwise, they create operational stress.

Bilingual product content must be part of the data model from the beginning. Adding Arabic later as an afterthought would create duplicate content work and SEO problems.

## Open Questions

- Whether substitutions need manager approval or florist approval is enough.
- Whether customers should see substitutions before checkout, or only see final bouquet photography/style.
- Whether limited drops should have hard stock caps or order capacity caps.
- Whether bouquet recipes should track exact stems, estimated stems, or both.
- Whether ribbons and wrapping paper are add-ons, recipe components, or both depending on product.
