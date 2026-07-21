import type { Config } from "tailwindcss";

export const sogliaTailwindPreset = {
  theme: {
    extend: {
      colors: {
        paper: "var(--soglia-paper)",
        ink: "var(--soglia-ink)",
        "ink-soft": "var(--soglia-ink-soft)",
        rule: "var(--soglia-rule)",
        oxblood: "var(--soglia-oxblood)",
        ember: "var(--soglia-oxblood)",
        stone: "var(--soglia-stone)",
        bone: "var(--soglia-bone)",
        founder: "var(--soglia-founder-cobalt)"
      },
      fontFamily: {
        display: ["var(--font-soglia-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-soglia-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-soglia-mono)", "Inconsolata", "monospace"]
      },
      borderRadius: {
        brand: "2px",
        control: "6px"
      },
      maxWidth: {
        brand: "1180px"
      },
      letterSpacing: {
        meta: "0.16em",
        mark: "-0.02em"
      },
      lineHeight: {
        display: "0.95"
      }
    }
  }
} satisfies Partial<Config>;
