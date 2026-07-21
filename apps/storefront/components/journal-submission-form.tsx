"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@soglia/types";
import { Button } from "@soglia/ui";
import { dictionary } from "../lib/i18n";
import { defaultPhoneCountry, phoneCountries } from "../lib/phone-countries";

interface Submission {
  countryIso: string;
  name: string;
  phone: string;
  story: string;
  anonymous: boolean;
  createdAt: string;
}

const storageKey = "soglia-journal-submissions-v1";

function getTextField(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value : "";
}

export function JournalSubmissionForm({ locale }: Readonly<{ locale: Locale }>) {
  const copy = dictionary[locale].journal;
  const [sent, setSent] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedCountryIso, setSelectedCountryIso] = useState("AE");
  const selectedCountry =
    phoneCountries.find((country) => country.iso === selectedCountryIso) ?? defaultPhoneCountry;

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);

    if (!stored) {
      return;
    }

    try {
      setSubmissions(JSON.parse(stored) as Submission[]);
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  return (
    <section className="grid gap-8">
      <form
        className="grid gap-5 border border-rule bg-bone p-5 md:p-7"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const countryIso = getTextField(formData, "countryIso") || selectedCountry.iso;
          const country =
            phoneCountries.find((item) => item.iso === countryIso) ?? defaultPhoneCountry;
          const submission: Submission = {
            countryIso: country.iso,
            name: getTextField(formData, "name"),
            phone: `${country.callingCode} ${getTextField(formData, "phone")}`,
            story: getTextField(formData, "story"),
            anonymous: formData.get("anonymous") === "on",
            createdAt: new Date().toISOString()
          };
          const nextSubmissions = [submission, ...submissions];

          window.localStorage.setItem(storageKey, JSON.stringify(nextSubmissions));
          setSubmissions(nextSubmissions);
          event.currentTarget.reset();
          setSent(true);
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-ink">
            <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
              {copy.name}
            </span>
            <input
              className="h-11 border border-rule bg-paper px-3 outline-none placeholder:text-ink-soft/55"
              name="name"
              placeholder={copy.namePlaceholder}
            />
          </label>
          <label className="grid gap-2 text-sm text-ink md:col-span-2">
            <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
              {copy.phone}
            </span>
            <div className="grid gap-3 md:grid-cols-[minmax(180px,0.36fr)_1fr]">
              <select
                aria-label={copy.phoneCountry}
                className="h-11 border border-rule bg-paper px-3 text-ink-soft outline-none"
                name="countryIso"
                onChange={(event) => setSelectedCountryIso(event.target.value)}
                value={selectedCountryIso}
              >
                {phoneCountries.map((country) => (
                  <option key={country.iso} value={country.iso}>
                    {country.callingCode} {country.name}
                  </option>
                ))}
              </select>
              <input
                className="h-11 border border-rule bg-paper px-3 outline-none placeholder:text-ink-soft/55"
                name="phone"
                pattern={selectedCountry.pattern}
                placeholder={selectedCountry.placeholder}
                required
                title={`${selectedCountry.callingCode} ${selectedCountry.placeholder}`}
              />
            </div>
          </label>
        </div>
        <label className="grid gap-2 text-sm text-ink">
          <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
            {copy.story}
          </span>
          <textarea
            className="min-h-40 resize-y border border-rule bg-paper p-3 outline-none placeholder:text-ink-soft/55"
            name="story"
            placeholder={copy.storyPlaceholder}
            required
          />
        </label>
        <label className="flex items-center gap-3 text-sm text-ink-soft">
          <input className="size-4" name="anonymous" type="checkbox" />
          <span>{copy.anonymous}</span>
        </label>
        <Button className="w-fit" type="submit">
          {copy.submit}
        </Button>
        {sent ? (
          <p className="font-mono text-xs uppercase tracking-meta text-oxblood">{copy.success}</p>
        ) : null}
      </form>

      <div className="border-t border-ink pt-5">
        <h2 className="font-mono text-xs uppercase tracking-meta text-ink">{copy.published}</h2>
        {submissions.length === 0 ? (
          <p className="mt-5 text-sm leading-6 text-ink-soft">{copy.empty}</p>
        ) : (
          <div className="mt-5 grid gap-4">
            {submissions.map((submission) => (
              <article className="border border-rule bg-paper p-5" key={submission.createdAt}>
                <p className="font-display text-2xl italic leading-snug text-ink">
                  {submission.story}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-meta text-ink-soft">
                  <span>
                    {submission.anonymous || submission.name.length === 0
                      ? copy.anonymousName
                      : submission.name}
                  </span>
                  <span>{new Date(submission.createdAt).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
