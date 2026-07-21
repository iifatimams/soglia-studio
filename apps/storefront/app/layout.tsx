import type { Metadata } from "next";
import type { ReactNode } from "react";
import { sogliaFontClassNames } from "../lib/fonts";
import "@soglia/ui/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Soglia Studio",
    template: "%s | Soglia Studio"
  },
  description: "Editorial floristry from Muwaileh, Sharjah.",
  metadataBase: new URL("https://soglia.studio")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={sogliaFontClassNames}>
      <body>{children}</body>
    </html>
  );
}
