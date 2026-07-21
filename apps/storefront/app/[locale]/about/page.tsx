import type { Metadata } from "next";
import type { Locale } from "@soglia/types";
import { dictionary, isLocale } from "../../../lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";

  return {
    title: dictionary[safeLocale].about.title,
    description: dictionary[safeLocale].about.intro
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = dictionary[locale].about;

  return (
    <main className="mx-auto max-w-brand px-5 py-10 md:px-8">
      <section className="max-w-3xl border-t border-ink pt-5">
        <p className="font-mono text-[11px] uppercase tracking-meta text-oxblood">
          {locale === "ar" ? "سوغليا · عن الاستوديو" : "Soglia · about"}
        </p>
        <h1 className="mt-8 font-display text-6xl leading-none tracking-mark text-ink">
          {copy.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-soft">{copy.intro}</p>
      </section>
    </main>
  );
}
