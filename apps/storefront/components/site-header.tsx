import Link from "next/link";
import type { Locale } from "@soglia/types";
import { Wordmark } from "@soglia/ui";
import { dictionary } from "../lib/i18n";
import { CartDrawer } from "./cart-drawer";

function BrandMark({ locale }: Readonly<{ locale: Locale }>) {
  if (locale === "ar") {
    return (
      <span className="font-display text-4xl font-light leading-none tracking-mark text-ink">
        سوغليا
      </span>
    );
  }

  return <Wordmark />;
}

export function SiteHeader({ locale }: Readonly<{ locale: Locale }>) {
  const copy = dictionary[locale].nav;
  const nextLocale = locale === "en" ? "ar" : "en";
  const menuItems = [
    { href: `/${locale}/about`, label: copy.about },
    { href: `/${locale}/journal`, label: copy.journal },
    { href: `/${locale}/loyalty`, label: copy.loyalty },
    { href: `/${locale}/contact`, label: copy.contact }
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/95 px-5 py-4 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-brand items-center justify-between gap-5">
        <Link aria-label={locale === "ar" ? "سوغليا" : "Soglia"} href={`/${locale}`}>
          <BrandMark locale={locale} />
        </Link>
        <nav className="flex items-center gap-5 font-sans text-xs text-ink-soft md:gap-8">
          <Link href={`/${locale}/shop`}>{copy.shop}</Link>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-ink-soft">
              <span className="grid gap-1" aria-hidden="true">
                <span className="h-px w-4 bg-ink"></span>
                <span className="h-px w-4 bg-ink"></span>
                <span className="h-px w-4 bg-ink"></span>
              </span>
              <span>{copy.menu}</span>
            </summary>
            <div className="absolute end-0 top-8 z-20 grid min-w-44 gap-3 border border-rule bg-paper p-4 shadow-[0_18px_60px_rgba(27,26,24,0.12)]">
              {menuItems.map((item) => (
                <Link className="text-ink-soft hover:text-ink" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link className="font-mono uppercase tracking-meta text-ink" href={`/${nextLocale}`}>
            {nextLocale}
          </Link>
          <CartDrawer locale={locale} />
        </nav>
      </div>
    </header>
  );
}
