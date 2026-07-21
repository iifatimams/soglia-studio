export type Locale = "en" | "ar";
export type CurrencyCode = "AED";
export type AppEnvironment = "local" | "staging" | "production";

export type LocalizedText = Record<Locale, string>;

export type ProductKind =
  "bouquet" | "bunch" | "vase" | "card" | "wrap" | "ribbon" | "oasis" | "custom_request";

export type ProductStatus = "draft" | "published" | "archived";
export type AvailabilityLabel = "available" | "made_to_order" | "limited" | "coming_soon";
export type CollectionSlug = "ready" | "stems" | "objects";
export type ProductImageTone = "orchid" | "carnation" | "vase" | "paper" | "card" | "oasis";

export interface CatalogCollection {
  slug: CollectionSlug;
  name: LocalizedText;
  description: LocalizedText;
}

export interface CatalogProductVariant {
  slug: string;
  name: LocalizedText;
  price: number;
  stemCount?: number;
  isDefault: boolean;
}

export interface CatalogProduct {
  slug: string;
  kind: ProductKind;
  status: ProductStatus;
  collection: CollectionSlug;
  availability: AvailabilityLabel;
  limited: boolean;
  imageTone: ProductImageTone;
  name: LocalizedText;
  description: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  styleSummary: LocalizedText;
  included: Record<Locale, string[]>;
  note: LocalizedText;
  variants: CatalogProductVariant[];
}
