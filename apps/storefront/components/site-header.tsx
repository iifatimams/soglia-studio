import Link from "next/link";
import type { Locale } from "@soglia/types";
import { Wordmark } from "@soglia/ui";
import { dictionary } from "../lib/i18n";
import { CartDrawer } from "./cart-drawer";

export function SiteHeader({ locale }: Readonly<{ locale: Locale }>) {
  const copy = dictionary[locale].nav;
  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/95 px-5 py-4 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-brand items-center justify-between gap-5">
        <Link aria-label="Soglia" href={`/${locale}`} className="text-3xl">
          <Wordmark />
        </Link>
        <nav className="flex items-center gap-5 font-sans text-xs text-ink-soft md:gap-8">
          <Link href={`/${locale}/shop`}>{copy.shop}</Link>
          <Link href={`/${locale}/journal`}>{copy.journal}</Link>
          <Link href={`/${locale}/loyalty`}>{copy.loyalty}</Link>
          <Link className="font-mono uppercase tracking-meta text-ink" href={`/${nextLocale}`}>
            {nextLocale}
          </Link>
          <CartDrawer locale={locale} />
        </nav>
      </div>
    </header>
  );
}
