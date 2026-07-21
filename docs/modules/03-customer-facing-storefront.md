# Module 3: Customer-Facing Storefront

## Status

Implemented after Module 2.

## Purpose

Create the first customer-facing storefront experience without connecting payment, inventory, or admin catalog logic too early.

## Included

- Locale routes for `/en` and `/ar`.
- Root redirect to `/en`.
- Editorial homepage with shop cues.
- About page placeholder.
- Shop listing page using typed mock products.
- Product detail pages using typed mock products.
- Collection pages.
- Contact page shell for loyalty and order inquiries.
- Cart drawer with local browser storage.
- Add-to-cart behavior for mock products.
- Product-page add-ons, including paid vase add-on and free message-card option.
- Checkout preview page.
- Journal/community page with local submission storage and local published-note display.
- Journal phone field with country-code selection, GCC numbers first, and country-specific placeholders.
- Private launch loyalty page.
- Local loyalty-card nomination form.
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
- Real contact form delivery.
- Real loyalty card lookup, validation, nomination approval, and issuing.

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

Journal moderation is not implemented yet. Submitted notes display immediately in the local browser until the content module adds founder review, database storage, and publishing controls.

## UI Changes

- Storefront route tree now supports English and Arabic.
- Navigation includes shop, journal, loyalty, language switch, and bag.
- Secondary navigation sits inside a compact menu to avoid crowding the header.
- Header dropdowns use custom buttons, not native disclosure markers, so no stray browser arrows appear between controls.
- Arabic surfaces use `سوغليا` for the brand name where text is localized.
- Product cards use Soglia editorial plate styling.
- Arabic product plates use `س.` instead of `S.`.
- The cart drawer stores selected mock products in `localStorage`.
- The cart no longer overwrites stored items when switching between `/en` and `/ar`.
- Journal submissions store entries in `localStorage` and render on the journal page.
- Message cards are not modeled as paid products. They appear as a free order option on product pages.
- Loyalty page explains the launch reward: every 6 eligible purchases gives 30% off the next eligible purchase.
- Loyalty nomination form stores nominations locally until the loyalty/admin module adds real issuing.

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
- Product detail pages show add-ons.
- Add a product to the bag and refresh. The bag should keep the item.
- Remove an item from the bag.
- Continue from bag to checkout preview.
- Switch from `/en` to `/ar` and confirm the bag count does not reset.
- Submit a journal note. The success message should appear and the note should render on the page.
- Change the journal phone country code. The phone placeholder should update, with UAE showing `5x-xxxxxxx`.
- Loyalty page contact action should go to `/contact`, not `/journal`.
- Loyalty cardholders can enter a card ID and nominee details in the local nomination form.
- Loyalty page loads and does not expose cobalt as a public storefront color.

## Commit Message

```text
feat(storefront): add bilingual storefront shell
```
