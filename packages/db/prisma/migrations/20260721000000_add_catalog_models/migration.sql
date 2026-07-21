CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TYPE "ProductKind" AS ENUM (
  'BOUQUET',
  'BUNCH',
  'VASE',
  'CARD',
  'WRAP',
  'RIBBON',
  'OASIS',
  'CUSTOM_REQUEST'
);

CREATE TYPE "ProductStatus" AS ENUM (
  'DRAFT',
  'PUBLISHED',
  'ARCHIVED'
);

CREATE TYPE "AvailabilityLabel" AS ENUM (
  'AVAILABLE',
  'MADE_TO_ORDER',
  'LIMITED',
  'COMING_SOON'
);

CREATE TYPE "ProductImageTone" AS ENUM (
  'ORCHID',
  'CARNATION',
  'VASE',
  'PAPER',
  'CARD',
  'OASIS'
);

CREATE TABLE "categories" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "slug" TEXT NOT NULL,
  "nameEn" TEXT NOT NULL,
  "nameAr" TEXT NOT NULL,
  "descriptionEn" TEXT NOT NULL,
  "descriptionAr" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ(6) NOT NULL,
  "archivedAt" TIMESTAMPTZ(6),

  CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "collections" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "slug" TEXT NOT NULL,
  "nameEn" TEXT NOT NULL,
  "nameAr" TEXT NOT NULL,
  "descriptionEn" TEXT NOT NULL,
  "descriptionAr" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ(6) NOT NULL,
  "archivedAt" TIMESTAMPTZ(6),

  CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "products" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "slug" TEXT NOT NULL,
  "kind" "ProductKind" NOT NULL,
  "status" "ProductStatus" NOT NULL DEFAULT 'DRAFT',
  "availability" "AvailabilityLabel" NOT NULL DEFAULT 'MADE_TO_ORDER',
  "imageTone" "ProductImageTone" NOT NULL DEFAULT 'ORCHID',
  "nameEn" TEXT NOT NULL,
  "nameAr" TEXT NOT NULL,
  "descriptionEn" TEXT NOT NULL,
  "descriptionAr" TEXT NOT NULL,
  "seoTitleEn" TEXT NOT NULL,
  "seoTitleAr" TEXT NOT NULL,
  "seoDescriptionEn" TEXT NOT NULL,
  "seoDescriptionAr" TEXT NOT NULL,
  "styleSummaryEn" TEXT NOT NULL,
  "styleSummaryAr" TEXT NOT NULL,
  "noteEn" TEXT NOT NULL,
  "noteAr" TEXT NOT NULL,
  "includedEn" TEXT[],
  "includedAr" TEXT[],
  "isLimited" BOOLEAN NOT NULL DEFAULT false,
  "isFeatured" BOOLEAN NOT NULL DEFAULT false,
  "publishedAt" TIMESTAMPTZ(6),
  "archivedAt" TIMESTAMPTZ(6),
  "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ(6) NOT NULL,
  "categoryId" UUID,

  CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "product_variants" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "productId" UUID NOT NULL,
  "slug" TEXT NOT NULL,
  "nameEn" TEXT NOT NULL,
  "nameAr" TEXT NOT NULL,
  "priceAed" INTEGER NOT NULL,
  "stemCount" INTEGER,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "isDefault" BOOLEAN NOT NULL DEFAULT false,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ(6) NOT NULL,

  CONSTRAINT "product_variants_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "product_images" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "productId" UUID NOT NULL,
  "url" TEXT NOT NULL,
  "altEn" TEXT NOT NULL,
  "altAr" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ(6) NOT NULL,

  CONSTRAINT "product_images_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "product_collections" (
  "productId" UUID NOT NULL,
  "collectionId" UUID NOT NULL,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "product_collections_pkey" PRIMARY KEY ("productId", "collectionId")
);

CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");
CREATE UNIQUE INDEX "collections_slug_key" ON "collections"("slug");
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");
CREATE INDEX "products_status_kind_idx" ON "products"("status", "kind");
CREATE INDEX "products_availability_idx" ON "products"("availability");
CREATE INDEX "products_categoryId_idx" ON "products"("categoryId");
CREATE UNIQUE INDEX "product_variants_productId_slug_key" ON "product_variants"("productId", "slug");
CREATE INDEX "product_variants_productId_isDefault_idx" ON "product_variants"("productId", "isDefault");
CREATE INDEX "product_images_productId_sortOrder_idx" ON "product_images"("productId", "sortOrder");
CREATE INDEX "product_collections_collectionId_sortOrder_idx" ON "product_collections"("collectionId", "sortOrder");

ALTER TABLE "products"
  ADD CONSTRAINT "products_categoryId_fkey"
  FOREIGN KEY ("categoryId") REFERENCES "categories"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "product_variants"
  ADD CONSTRAINT "product_variants_productId_fkey"
  FOREIGN KEY ("productId") REFERENCES "products"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "product_images"
  ADD CONSTRAINT "product_images_productId_fkey"
  FOREIGN KEY ("productId") REFERENCES "products"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "product_collections"
  ADD CONSTRAINT "product_collections_productId_fkey"
  FOREIGN KEY ("productId") REFERENCES "products"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "product_collections"
  ADD CONSTRAINT "product_collections_collectionId_fkey"
  FOREIGN KEY ("collectionId") REFERENCES "collections"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
