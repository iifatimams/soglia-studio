import {
  catalogCollections,
  catalogProducts,
  getDefaultVariant,
  getProductPrice
} from "@soglia/db/catalog-fixtures";
import type { CatalogProduct, Locale } from "@soglia/types";

export type Product = CatalogProduct;

export const products = catalogProducts.filter((product) => product.status === "published");
export const adminProducts = catalogProducts;
export const collections = catalogCollections;

export function formatPrice(price: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-AE" : "en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0
  }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProductAddOns(productSlug: string) {
  const product = getProduct(productSlug);
  const vase = getProduct("threshold-vase");
  const addOns: Array<{
    type: "vase" | "message-card";
    name: Record<Locale, string>;
    note: Record<Locale, string>;
    product?: Product;
  }> = [
    {
      type: "message-card",
      name: { en: "Message card", ar: "بطاقة رسالة" },
      note: {
        en: "Available with the order if you write a note.",
        ar: "متاحة مع الطلب إذا كتبتِ رسالة."
      }
    }
  ];

  if (product && product.kind !== "vase" && vase) {
    addOns.unshift({
      type: "vase",
      name: vase.name,
      note: {
        en: "Add a vase for the arrangement or weekly stems.",
        ar: "أضيفي مزهرية للتنسيق أو للسيقان الأسبوعية."
      },
      product: vase
    });
  }

  return addOns;
}

export { getDefaultVariant, getProductPrice };
