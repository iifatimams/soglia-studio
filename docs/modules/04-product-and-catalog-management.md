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
- Admin catalog overview at `/catalog`.
- Admin product draft form shell.
- Storefront catalog connected to the shared catalog fixture.
- Product sizes and stem counts on product cards and product pages.
- English SEO title and description per product, with Arabic fields also required in the data model.
- Draft product support for products that exist operationally but should not appear in the storefront yet.

## Excluded

- Authenticated admin writes.
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
- Admin catalog shows:
  - Published product count.
  - Draft product count.
  - Variant/size count.
  - Launch collections.
  - Products with English/Arabic names, status, availability label, default price, and sizes.
  - Product draft form shell for the future write flow.
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
- Admin `/catalog` loads product and collection overview.
- Admin `/catalog` shows draft products without publishing them to storefront.
- API `/catalog/products` returns catalog products.
- API `/catalog/products/last-white-orchid` returns one product.
- API `/catalog/products/missing-product` returns 404.

## Commit Message

```text
feat(catalog): add product management foundation
```
