# Module 4: Product and Catalog Management

## Status

Implemented after Module 3.

## Purpose

Create the catalog foundation for Soglia products before inventory, BOM, checkout stock blocking, and POS depend on it.

## Included

- Shared catalog types for products, variants, collections, statuses, availability labels, and bilingual content.
- Shared validation schemas for catalog product data.
- Prisma catalog schema for products, variants, product images, categories, collections, and collection assignments.
- SQL migration for catalog tables and enums.
- Seed fixture data for launch catalog decisions.
- Read-only API endpoints for catalog collections and products.
- Shopify-like admin catalog manager at `/catalog`.
- Local product create, edit, duplicate, archive, publish, reset, search, and filter flows.
- Local variant/size editing for bouquet and bunch pricing.
- Storefront catalog connected to the shared catalog fixture.
- Product sizes and stem counts on product cards and product pages.
- English SEO title and description per product, with Arabic fields also required in the data model.
- Draft product support for products that exist operationally but should not appear in the storefront yet.

## Excluded

- Authenticated database writes.
- Product image uploads.
- Real database-backed catalog reads.
- Inventory stock blocking.
- BOM recipe management.
- Product-component deduction.
- Catalog audit logs.
- Variant selection in checkout.
- Best-selling or latest product automation.

## Database Changes

Added Prisma models:

- `Product`
- `ProductVariant`
- `ProductImage`
- `Category`
- `Collection`
- `ProductCollection`

Added Prisma enums:

- `ProductKind`
- `ProductStatus`
- `AvailabilityLabel`
- `ProductImageTone`

Added migration:

```text
packages/db/prisma/migrations/20260721000000_add_catalog_models/migration.sql
```

## API Changes

Added read-only endpoints:

```text
GET /catalog/collections
GET /catalog/products
GET /catalog/products/:slug
```

These use shared fixture data until the first real database connection is configured.

## UI Changes

- Admin home links to the catalog surface.
- Admin catalog supports:
  - Published product count.
  - Draft product count.
  - Archived product count.
  - Product search and filters.
  - Product create/edit form.
  - Product publish, archive, duplicate, save, and reset actions.
  - English/Arabic names and descriptions.
  - English SEO title and description.
  - Status, type, collection, image tone, and availability label controls.
  - Product variants, prices, default size, and stem counts.
  - Storefront preview panel.
- Storefront product detail pages show:
  - SEO metadata from product SEO fields.
  - Style summary.
  - Description.
  - Size options.
  - Stem counts where relevant.

## Permissions

Planned, not enforced in this module:

- Founder: create, edit, publish, archive, and feature products.
- Florist: view catalog, view bouquet style notes, view availability labels.
- Future content manager: edit product copy and SEO fields with approval rules.
- Future inventory manager: connect products to inventory/BOM in Module 5.

## Analytics Events

Planned, not emitted in this module:

- `catalog_product_viewed`
- `catalog_collection_viewed`
- `admin_catalog_opened`
- `admin_product_draft_started`
- `admin_product_published`

## Validation Commands

```bash
corepack pnpm install
corepack pnpm format:check
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
corepack pnpm build
```

## Manual QA

- `/en/shop` loads published products only.
- `/ar/shop` loads published products only.
- `/en/shop/last-white-orchid` shows sizes and stem counts.
- `/en/shop/studio-wrap` should not load because it is still draft.
- Admin `/catalog` loads the product manager.
- Create a product, edit fields, add a size, save, refresh, and confirm local changes persist.
- Use search and filters to narrow products.
- Duplicate a product and confirm the duplicate becomes a draft.
- Try publishing a product without required bilingual/SEO/default-price fields and confirm publishing is blocked.
- Admin `/catalog` shows draft products without publishing them to storefront.
- API `/catalog/products` returns catalog products.
- API `/catalog/products/last-white-orchid` returns one product.
- API `/catalog/products/missing-product` returns 404.

## Commit Message

```text
feat(catalog): add product management foundation
```
