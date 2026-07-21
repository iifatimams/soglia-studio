import Link from "next/link";
import type { Locale } from "@soglia/types";
import type { Product } from "../lib/catalog";
import { formatPrice, getDefaultVariant, getProductPrice } from "../lib/catalog";
import { dictionary } from "../lib/i18n";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductPlate } from "./product-plate";

export function ProductCard({ locale, product }: Readonly<{ locale: Locale; product: Product }>) {
  const copy = dictionary[locale].shop;
  const defaultVariant = getDefaultVariant(product);

  return (
    <article className="grid gap-4 border-t border-rule pt-4">
      <Link href={`/${locale}/shop/${product.slug}`}>
        <ProductPlate product={product} label={product.name[locale]} locale={locale} />
      </Link>
      <div className="grid gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl leading-none text-ink">{product.name[locale]}</h2>
            <p className="mt-2 text-sm leading-6 text-ink-soft">{product.description[locale]}</p>
          </div>
          <p className="font-mono text-xs uppercase tracking-meta text-oxblood">
            {formatPrice(getProductPrice(product), locale)}
          </p>
        </div>
        {defaultVariant?.stemCount ? (
          <p className="font-mono text-[11px] uppercase tracking-meta text-ink-soft">
            {defaultVariant.stemCount} {locale === "ar" ? "سيقان" : "stems"}
          </p>
        ) : null}
        <div className="flex items-center gap-2">
          <AddToCartButton locale={locale} product={product} />
          <Link
            className="inline-flex h-10 items-center justify-center border border-rule px-4 text-sm text-ink hover:bg-bone"
            href={`/${locale}/shop/${product.slug}`}
          >
            {copy.view}
          </Link>
        </div>
      </div>
    </article>
  );
}
