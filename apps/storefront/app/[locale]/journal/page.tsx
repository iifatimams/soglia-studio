import type { Metadata } from "next";
import type { Locale } from "@soglia/types";
import { JournalSubmissionForm } from "../../../components/journal-submission-form";
import { dictionary, isLocale } from "../../../lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";

  return {
    title: dictionary[safeLocale].journal.title,
    description: dictionary[safeLocale].journal.intro
  };
}

export default async function JournalPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = dictionary[locale].journal;

  return (
    <main className="mx-auto grid max-w-brand gap-10 px-5 py-10 md:grid-cols-[0.85fr_1.15fr] md:px-8">
      <header className="border-t border-ink pt-5">
        <p className="font-mono text-[11px] uppercase tracking-meta text-oxblood">Journal</p>
        <h1 className="mt-8 font-display text-6xl leading-none tracking-mark text-ink">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">{copy.intro}</p>
      </header>
      <JournalSubmissionForm locale={locale} />
    </main>
  );
}
