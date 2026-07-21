# Module 3: Customer-Facing Storefront

## Status

Implemented after Module 2.

## Purpose

Create the first customer-facing storefront experience without connecting payment, inventory, or admin catalog logic too early.

## Included

- Locale routes for `/en` and `/ar`.
- Root redirect to `/en`.
- Editorial homepage with shop cues.
- Shop listing page using typed mock products.
- Product detail pages using typed mock products.
- Collection pages.
- Cart drawer with local browser storage.
- Add-to-cart behavior for mock products.
- Checkout preview page.
- Journal/community page with local submission storage.
- Private launch loyalty page.
- Dynamic metadata for major pages.
- `robots.ts`.
- `sitemap.ts`.

## Excluded

- Real product database.
- Real inventory checks.
- Payment gateway checkout.
- Delivery slot selection.
- Customer accounts.
- Admin catalog management.
- Blog moderation backend.
- Real media storage.

## Psychology Notes

- The homepage acts like an editorial issue cover, not a loud sales page.
- The primary action is still visible above the fold: shop flowers.
- Product choice is intentionally narrow to avoid decision overload.
- Scarcity is framed through studio capacity and flower availability, not fake urgency.
- Loyalty is private by invitation, not a public discount program.

## Database Changes

None. Products are typed mock data until the catalog module.

## API Changes

None. Journal submissions and cart data are local-only in this module.

## UI Changes

- Storefront route tree now supports English and Arabic.
- Navigation includes shop, journal, loyalty, language switch, and bag.
- Product cards use Soglia editorial plate styling.
- The cart drawer stores selected mock products in `localStorage`.
- Journal submissions store pending entries in `localStorage`.

## Validation Commands

```bash
corepack pnpm format:check
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
corepack pnpm build
```

## Manual QA

- `/` redirects to `/en`.
- `/en` and `/ar` load.
- `/en/shop` and `/ar/shop` load.
- Product detail pages load from product cards.
- Add a product to the bag and refresh. The bag should keep the item.
- Remove an item from the bag.
- Continue from bag to checkout preview.
- Submit a journal note. The success message should appear.
- Loyalty page loads and does not expose cobalt as a public storefront color.

## Commit Message

```text
feat(storefront): add bilingual storefront shell
```
