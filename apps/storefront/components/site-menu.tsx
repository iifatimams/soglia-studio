"use client";

import { useState } from "react";
import Link from "next/link";

interface SiteMenuItem {
  href: string;
  label: string;
}

interface SiteMenuProps {
  items: SiteMenuItem[];
  label: string;
}

export function SiteMenu({ items, label }: Readonly<SiteMenuProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        className="flex h-10 items-center gap-2 text-ink-soft transition hover:text-ink"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <span className="grid gap-1" aria-hidden="true">
          <span className="h-px w-4 bg-current"></span>
          <span className="h-px w-4 bg-current"></span>
          <span className="h-px w-4 bg-current"></span>
        </span>
        <span>{label}</span>
      </button>
      {isOpen ? (
        <div className="absolute end-0 top-11 z-20 grid min-w-44 gap-3 border border-rule bg-paper p-4 shadow-[0_18px_60px_rgba(27,26,24,0.12)]">
          {items.map((item) => (
            <Link
              className="text-ink-soft transition hover:text-ink"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
