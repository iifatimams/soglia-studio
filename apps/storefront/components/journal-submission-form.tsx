"use client";

import { useState } from "react";
import type { Locale } from "@soglia/types";
import { Button } from "@soglia/ui";
import { dictionary } from "../lib/i18n";

interface Submission {
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

  return (
    <form
      className="grid gap-5 border border-rule bg-bone p-5 md:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const submission: Submission = {
          name: getTextField(formData, "name"),
          phone: getTextField(formData, "phone"),
          story: getTextField(formData, "story"),
          anonymous: formData.get("anonymous") === "on",
          createdAt: new Date().toISOString()
        };
        const current = window.localStorage.getItem(storageKey);
        const submissions = current ? (JSON.parse(current) as Submission[]) : [];

        window.localStorage.setItem(storageKey, JSON.stringify([submission, ...submissions]));
        event.currentTarget.reset();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-ink">
          <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
            {copy.name}
          </span>
          <input className="h-11 border border-rule bg-paper px-3 outline-none" name="name" />
        </label>
        <label className="grid gap-2 text-sm text-ink">
          <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
            {copy.phone}
          </span>
          <input
            className="h-11 border border-rule bg-paper px-3 outline-none"
            name="phone"
            required
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-ink">
        <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
          {copy.story}
        </span>
        <textarea
          className="min-h-40 resize-y border border-rule bg-paper p-3 outline-none"
          name="story"
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
  );
}
