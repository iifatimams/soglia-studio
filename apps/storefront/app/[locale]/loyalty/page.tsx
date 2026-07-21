import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@soglia/types";
import { Button, Monogram } from "@soglia/ui";
import { dictionary, isLocale } from "../../../lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";

  return {
    title: dictionary[safeLocale].loyalty.title,
    description: dictionary[safeLocale].loyalty.intro
  };
}

export default async function LoyaltyPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = dictionary[locale].loyalty;

  return (
    <main className="mx-auto grid max-w-brand gap-10 px-5 py-10 md:grid-cols-[1fr_0.9fr] md:px-8">
      <section className="border-t border-ink pt-5">
        <p className="font-mono text-[11px] uppercase tracking-meta text-oxblood">{copy.eyebrow}</p>
        <h1 className="mt-8 font-display text-6xl leading-none tracking-mark text-ink">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">{copy.intro}</p>
        <Button asChild className="mt-8">
          <Link href={`/${locale}/journal`}>{copy.cta}</Link>
        </Button>
      </section>
      <aside className="flex aspect-[5/3.2] flex-col justify-between border border-rule bg-bone p-8">
        <div className="font-mono text-[11px] uppercase tracking-meta text-oxblood">
          No. xiv · 2026
        </div>
        <div className="flex items-end justify-between gap-5">
          <p className="max-w-52 font-display text-3xl italic leading-tight text-ink">
            One stem, set aside, with your name on it.
          </p>
          <Monogram className="text-4xl text-oxblood" tone="oxblood" />
        </div>
      </aside>
    </main>
  );
}
