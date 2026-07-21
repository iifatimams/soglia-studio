import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3EFE7",
        ink: "#1B1A18",
        oxblood: "#5A1A1A",
        stone: "#A89C8A",
        bone: "#E8E1D2"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Inconsolata", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
