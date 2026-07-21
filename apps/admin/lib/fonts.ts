import { Cormorant_Garamond, Inconsolata, Inter } from "next/font/google";

export const sogliaDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-soglia-display",
  display: "swap"
});

export const sogliaSans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-soglia-sans",
  display: "swap"
});

export const sogliaMono = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-soglia-mono",
  display: "swap"
});

export const sogliaFontClassNames = [
  sogliaDisplay.variable,
  sogliaSans.variable,
  sogliaMono.variable
].join(" ");
