export const publicBrandColors = {
  paper: "#F3EFE7",
  ink: "#1B1A18",
  inkSoft: "#5B5750",
  rule: "#D2C8B9",
  oxblood: "#5A1A1A",
  stone: "#A89C8A",
  bone: "#E8E1D2"
} as const;

export const privateFounderColors = {
  cobalt: "#1F3A6B"
} as const;

export const brandColors = {
  ...publicBrandColors,
  founderCobalt: privateFounderColors.cobalt
} as const;

export const brandFonts = {
  display: "Cormorant Garamond",
  sans: "Inter",
  mono: "Inconsolata"
} as const;

export const brandRadii = {
  brand: "2px",
  control: "6px",
  pill: "999px"
} as const;

export const brandRules = {
  publicAccent: "oxblood",
  privateFounderAccent: "cobalt",
  markRule: "Wordmark-led. Italic Cormorant, upright S, full stop.",
  colorRule: "Ink and Ember in public. Cobalt private to the founder."
} as const;
