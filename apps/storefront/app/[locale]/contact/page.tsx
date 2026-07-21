import type { Metadata } from "next";
import type { Locale } from "@soglia/types";
import { dictionary, isLocale } from "../../../lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";

  return {
    title: dictionary[safeLocale].contact.title,
    description: dictionary[safeLocale].contact.intro
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = dictionary[locale].contact;

  return (
    <main className="mx-auto max-w-brand px-5 py-10 md:px-8">
      <section className="max-w-2xl border-t border-ink pt-5">
        <p className="font-mono text-[11px] uppercase tracking-meta text-oxblood">
          {locale === "ar" ? "سوغليا · تواصل" : "Soglia · contact"}
        </p>
        <h1 className="mt-8 font-display text-6xl leading-none tracking-mark text-ink">
          {copy.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-soft">{copy.intro}</p>
        <div className="mt-10 grid gap-4 border-t border-rule pt-6 font-mono text-xs uppercase tracking-meta text-ink-soft">
          <p>{copy.whatsapp}</p>
          <p>{copy.visit}</p>
        </div>
      </section>
    </main>
  );
}
