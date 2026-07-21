"use client";

import Link from "next/link";
import type { Locale } from "@soglia/types";
import { Button } from "@soglia/ui";
import { formatPrice } from "../lib/catalog";
import { dictionary } from "../lib/i18n";
import { useCart } from "./cart-context";

export function CartDrawer({ locale }: Readonly<{ locale: Locale }>) {
  const copy = dictionary[locale].cart;
  const { items, count, total, removeItem, clear } = useCart();

  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none font-mono text-xs uppercase tracking-meta text-oxblood">
        {copy.title} ({count})
      </summary>
      <div className="absolute end-0 top-8 z-20 w-[min(92vw,360px)] border border-rule bg-paper p-5 shadow-[0_18px_60px_rgba(27,26,24,0.12)]">
        <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
          <h2 className="font-display text-3xl italic leading-none text-ink">{copy.title}</h2>
          {items.length > 0 ? (
            <button
              className="font-mono text-[11px] uppercase tracking-meta text-ink-soft"
              onClick={clear}
            >
              {copy.clear}
            </button>
          ) : null}
        </div>
        {items.length === 0 ? (
          <p className="py-6 text-sm text-ink-soft">{copy.empty}</p>
        ) : (
          <div className="flex flex-col gap-4 py-5">
            {items.map((item) => (
              <div
                className="grid grid-cols-[1fr_auto] gap-3 border-b border-rule pb-3"
                key={item.slug}
              >
                <div>
                  <p className="font-sans text-sm text-ink">{item.name}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-meta text-ink-soft">
                    {item.quantity} x {formatPrice(item.price, locale)}
                  </p>
                </div>
                <button
                  className="self-start font-mono text-[11px] uppercase tracking-meta text-oxblood"
                  onClick={() => removeItem(item.slug)}
                >
                  {copy.remove}
                </button>
              </div>
            ))}
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-meta text-ink">
              <span>{copy.total}</span>
              <span>{formatPrice(total, locale)}</span>
            </div>
            <Button asChild className="w-full">
              <Link href={`/${locale}/checkout`}>{copy.checkout}</Link>
            </Button>
          </div>
        )}
      </div>
    </details>
  );
}
