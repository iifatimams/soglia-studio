import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Locale } from "@soglia/types";
import { ProductCard } from "../../../../components/product-card";
import { collections, getCollection, products } from "../../../../lib/catalog";
import { dictionary, isLocale, locales } from "../../../../lib/i18n";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    collections.map((collection) => ({ locale, slug: collection.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";
  const collection = getCollection(slug);

  if (!collection) {
    return {};
  }

  return {
    title: collection.name[safeLocale],
    description: collection.description[safeLocale]
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const collection = getCollection(slug);

  if (!collection) {
    notFound();
  }

  const collectionProducts = products.filter((product) => product.collection === collection.slug);

  return (
    <main className="mx-auto max-w-brand px-5 py-10 md:px-8">
      <header className="border-t border-ink pt-5">
        <Link
          className="font-mono text-xs uppercase tracking-meta text-oxblood"
          href={`/${locale}/shop`}
        >
          {dictionary[locale].collection.back}
        </Link>
        <h1 className="mt-8 font-display text-6xl leading-none tracking-mark text-ink">
          {collection.name[locale]}
        </h1>
        <p className="mt-5 max-w-xl leading-7 text-ink-soft">{collection.description[locale]}</p>
      </header>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {collectionProducts.map((product) => (
          <ProductCard key={product.slug} locale={locale} product={product} />
        ))}
      </div>
    </main>
  );
}
