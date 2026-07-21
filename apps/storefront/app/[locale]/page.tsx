import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@soglia/types";
import { Button } from "@soglia/ui";
import { ProductCard } from "../../components/product-card";
import { products } from "../../lib/catalog";
import { dictionary, isLocale } from "../../lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";

  return {
    title: safeLocale === "ar" ? "سوغليا الشارقة" : "Soglia Studio Sharjah",
    description: dictionary[safeLocale].home.intro
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = dictionary[locale].home;
  const featured = products.slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-brand gap-10 px-5 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-12">
        <div className="flex flex-col justify-between gap-10 border-t border-ink pt-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-meta text-oxblood">
              {copy.eyebrow}
            </p>
            <h1 className="mt-8 max-w-4xl font-display text-6xl font-light leading-display tracking-mark text-ink md:text-8xl">
              {copy.title}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-ink-soft">{copy.intro}</p>
          </div>
          <div className="grid gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link href={`/${locale}/shop`}>{copy.primary}</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={`/${locale}/journal`}>{copy.secondary}</Link>
              </Button>
            </div>
            <p className="max-w-xl font-mono text-[11px] uppercase leading-5 tracking-meta text-ink-soft">
              {copy.note}
            </p>
          </div>
        </div>
        <div className="relative min-h-[480px] overflow-hidden border border-rule bg-[linear-gradient(135deg,#f3efe7,#d2c8b9_42%,#5a1a1a)]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_18px,rgba(27,26,24,0.12)_18px,rgba(27,26,24,0.12)_19px)]" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 text-paper">
            <p className="font-display text-6xl italic leading-none">{copy.issueNumber}</p>
            <p className="max-w-36 text-right font-mono text-[10px] uppercase leading-5 tracking-meta">
              {copy.proof}
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-brand px-5 pb-16 md:px-8">
        <div className="mb-7 flex items-baseline justify-between border-t border-rule pt-5">
          <h2 className="font-display text-4xl leading-none text-ink">{copy.featured}</h2>
          <Link
            className="font-mono text-xs uppercase tracking-meta text-oxblood"
            href={`/${locale}/shop`}
          >
            {copy.primary}
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} locale={locale} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
