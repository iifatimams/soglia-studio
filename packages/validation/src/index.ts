import { z } from "zod";

export const localeSchema = z.enum(["en", "ar"]);
export const currencyCodeSchema = z.literal("AED");
export const appEnvironmentSchema = z.enum(["local", "staging", "production"]);
