import type { Metadata } from "next";
import type { ReactNode } from "react";
import { sogliaFontClassNames } from "../lib/fonts";
import "@soglia/ui/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soglia Admin",
  description: "Soglia Studio operating system."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={sogliaFontClassNames}>
      <body>{children}</body>
    </html>
  );
}
