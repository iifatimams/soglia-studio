import { sogliaTailwindPreset } from "@soglia/config/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [sogliaTailwindPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  plugins: []
};

export default config;
