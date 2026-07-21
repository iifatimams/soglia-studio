import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Locale } from "@soglia/types";
import { AddToCartButton } from "../../../../components/add-to-cart-button";
import { ProductPlate } from "../../../../components/product-plate";
import { formatPrice, getProduct, getProductAddOns, products } from "../../../../lib/catalog";
import { dictionary, isLocale, locales } from "../../../../lib/i18n";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name[safeLocale],
    description: product.description[safeLocale]
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const copy = dictionary[locale].product;

  return (
    <main className="mx-auto grid max-w-brand gap-10 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:px-8">
      <ProductPlate
        product={product}
        label={product.name[locale]}
        locale={locale}
        className="md:sticky md:top-28"
      />
      <section className="border-t border-ink pt-5">
        <Link
          className="font-mono text-xs uppercase tracking-meta text-oxblood"
          href={`/${locale}/shop`}
        >
          {copy.back}
        </Link>
        <h1 className="mt-8 font-display text-6xl leading-none tracking-mark text-ink">
          {product.name[locale]}
        </h1>
        <p className="mt-5 font-mono text-xs uppercase tracking-meta text-oxblood">
          {formatPrice(product.price, locale)}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-soft">
          {product.description[locale]}
        </p>
        <div className="mt-10 grid gap-8 border-t border-rule pt-7 md:grid-cols-2">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-meta text-ink">{copy.included}</h2>
            <ul className="mt-4 grid gap-3 text-sm text-ink-soft">
              {product.included[locale].map((item) => (
                <li className="border-b border-rule pb-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-meta text-ink">
              {copy.availability}
            </h2>
            <p className="mt-4 text-sm leading-6 text-ink-soft">{product.note[locale]}</p>
          </div>
        </div>
        <div className="mt-10 border-t border-rule pt-7">
          <h2 className="font-mono text-xs uppercase tracking-meta text-ink">{copy.addOns}</h2>
          <div className="mt-4 grid gap-3">
            {getProductAddOns(product.slug).map((addOn) => (
              <div
                className="grid gap-3 border border-rule bg-bone p-4 md:grid-cols-[1fr_auto]"
                key={addOn.type}
              >
                <div>
                  <p className="font-display text-2xl leading-none text-ink">
                    {addOn.name[locale]}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{addOn.note[locale]}</p>
                </div>
                {addOn.product ? <AddToCartButton locale={locale} product={addOn.product} /> : null}
              </div>
            ))}
          </div>
        </div>
        <AddToCartButton className="mt-10" locale={locale} product={product} />
      </section>
    </main>
  );
}
