import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteHeader } from "../../components/site-header";
import { CartProvider } from "../../components/cart-context";
import { getDirection, isLocale } from "../../lib/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <CartProvider>
      <div dir={getDirection(locale)} lang={locale}>
        <SiteHeader locale={locale} />
        {children}
      </div>
    </CartProvider>
  );
}
