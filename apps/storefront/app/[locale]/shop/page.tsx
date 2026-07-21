import type { Metadata } from "next";
import type { Locale } from "@soglia/types";
import { ProductCard } from "../../../components/product-card";
import { products } from "../../../lib/catalog";
import { dictionary, isLocale } from "../../../lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";

  return {
    title: dictionary[safeLocale].shop.title,
    description: dictionary[safeLocale].shop.intro
  };
}

export default async function ShopPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = dictionary[locale].shop;

  return (
    <main className="mx-auto max-w-brand px-5 py-10 md:px-8">
      <header className="border-t border-ink pt-5">
        <p className="font-mono text-[11px] uppercase tracking-meta text-oxblood">Shop</p>
        <h1 className="mt-6 font-display text-6xl leading-none tracking-mark text-ink">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-xl leading-7 text-ink-soft">{copy.intro}</p>
      </header>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} locale={locale} product={product} />
        ))}
      </div>
    </main>
  );
}
