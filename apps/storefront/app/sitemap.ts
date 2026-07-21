import type { MetadataRoute } from "next";
import { collections, products } from "../lib/catalog";
import { locales } from "../lib/i18n";

const baseUrl = "https://soglia.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/journal", "/loyalty", "/contact", "/checkout"];

  return [
    ...locales.flatMap((locale) =>
      staticRoutes.map((route) => ({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date()
      }))
    ),
    ...locales.flatMap((locale) =>
      products.map((product) => ({
        url: `${baseUrl}/${locale}/shop/${product.slug}`,
        lastModified: new Date()
      }))
    ),
    ...locales.flatMap((locale) =>
      collections.map((collection) => ({
        url: `${baseUrl}/${locale}/collections/${collection.slug}`,
        lastModified: new Date()
      }))
    )
  ];
}
