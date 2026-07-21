"use client";

import { useState } from "react";
import type { Locale } from "@soglia/types";
import { Button } from "@soglia/ui";
import { dictionary } from "../lib/i18n";

interface Nomination {
  cardId: string;
  recipientName: string;
  recipientPhone: string;
  relationship: string;
  createdAt: string;
}

const storageKey = "soglia-loyalty-nominations-v1";

function getTextField(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value : "";
}

export function LoyaltyNominationForm({ locale }: Readonly<{ locale: Locale }>) {
  const copy = dictionary[locale].loyalty;
  const [saved, setSaved] = useState(false);

  return (
    <form
      className="grid gap-5 border border-rule bg-bone p-5 md:p-7"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const nomination: Nomination = {
          cardId: getTextField(formData, "cardId"),
          recipientName: getTextField(formData, "recipientName"),
          recipientPhone: getTextField(formData, "recipientPhone"),
          relationship: getTextField(formData, "relationship"),
          createdAt: new Date().toISOString()
        };
        const current = window.localStorage.getItem(storageKey);
        const nominations = current ? (JSON.parse(current) as Nomination[]) : [];

        window.localStorage.setItem(storageKey, JSON.stringify([nomination, ...nominations]));
        event.currentTarget.reset();
        setSaved(true);
      }}
    >
      <div>
        <h2 className="font-display text-4xl leading-none tracking-mark text-ink">
          {copy.nominationTitle}
        </h2>
        <p className="mt-3 text-sm leading-6 text-ink-soft">{copy.nominationNote}</p>
      </div>
      <label className="grid gap-2 text-sm text-ink">
        <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
          {copy.cardId}
        </span>
        <input
          className="h-11 border border-rule bg-paper px-3 outline-none"
          name="cardId"
          required
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-ink">
          <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
            {copy.recipientName}
          </span>
          <input
            className="h-11 border border-rule bg-paper px-3 outline-none"
            name="recipientName"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-ink">
          <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
            {copy.recipientPhone}
          </span>
          <input
            className="h-11 border border-rule bg-paper px-3 outline-none"
            name="recipientPhone"
            required
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-ink">
        <span className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
          {copy.relationship}
        </span>
        <textarea
          className="min-h-28 resize-y border border-rule bg-paper p-3 outline-none"
          name="relationship"
        />
      </label>
      <Button className="w-fit" type="submit">
        {copy.nominate}
      </Button>
      {saved ? (
        <p className="font-mono text-xs uppercase tracking-meta text-oxblood">
          {copy.nominationSaved}
        </p>
      ) : null}
    </form>
  );
}
