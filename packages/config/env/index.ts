import { z } from "zod";

export const sharedEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_ENV: z.enum(["local", "staging", "production"]).default("local"),
  APP_URL: z.string().url(),
  ADMIN_URL: z.string().url(),
  API_URL: z.string().url(),
  DATABASE_URL: z.string().min(1),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().url()
});
