import { z } from "zod";

export const localeSchema = z.enum(["en", "ar"]);
export const currencyCodeSchema = z.literal("AED");
export const appEnvironmentSchema = z.enum(["local", "staging", "production"]);

export const productKindSchema = z.enum([
  "bouquet",
  "bunch",
  "vase",
  "card",
  "wrap",
  "ribbon",
  "oasis",
  "custom_request"
]);

export const productStatusSchema = z.enum(["draft", "published", "archived"]);
export const availabilityLabelSchema = z.enum([
  "available",
  "made_to_order",
  "limited",
  "coming_soon"
]);
export const collectionSlugSchema = z.enum(["ready", "stems", "objects"]);
export const productImageToneSchema = z.enum([
  "orchid",
  "carnation",
  "vase",
  "paper",
  "card",
  "oasis"
]);

export const localizedTextSchema = z.object({
  en: z.string().min(1),
  ar: z.string().min(1)
});

export const catalogProductVariantSchema = z.object({
  slug: z.string().min(1),
  name: localizedTextSchema,
  price: z.number().int().positive(),
  stemCount: z.number().int().positive().optional(),
  isDefault: z.boolean()
});

export const catalogProductSchema = z.object({
  slug: z.string().min(1),
  kind: productKindSchema,
  status: productStatusSchema,
  collection: collectionSlugSchema,
  availability: availabilityLabelSchema,
  limited: z.boolean(),
  imageTone: productImageToneSchema,
  name: localizedTextSchema,
  description: localizedTextSchema,
  seoTitle: localizedTextSchema,
  seoDescription: localizedTextSchema,
  styleSummary: localizedTextSchema,
  included: z.object({
    en: z.array(z.string().min(1)),
    ar: z.array(z.string().min(1))
  }),
  note: localizedTextSchema,
  variants: z.array(catalogProductVariantSchema).min(1)
});
