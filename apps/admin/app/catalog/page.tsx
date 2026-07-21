import Link from "next/link";
import { catalogCollections, catalogProducts, getProductPrice } from "@soglia/db/catalog-fixtures";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0
  }).format(price);
}

function label(value: string) {
  return value.replaceAll("_", " ");
}

export default function CatalogPage() {
  const publishedCount = catalogProducts.filter((product) => product.status === "published").length;
  const draftCount = catalogProducts.filter((product) => product.status === "draft").length;
  const variantCount = catalogProducts.reduce(
    (total, product) => total + product.variants.length,
    0
  );

  return (
    <main className="min-h-screen px-5 py-8 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8">
        <header className="border-t border-ink pt-5">
          <Link className="font-mono text-xs uppercase tracking-[0.18em] text-oxblood" href="/">
            Admin
          </Link>
          <div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
                Module 4
              </p>
              <h1 className="mt-3 font-display text-5xl leading-none text-ink">Product catalog</h1>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-stone">
                Products need English and Arabic content before publishing. English SEO stays the
                primary launch focus for UAE search.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="border border-rule bg-bone p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                  Published
                </p>
                <p className="mt-2 font-display text-4xl leading-none text-ink">{publishedCount}</p>
              </div>
              <div className="border border-rule bg-bone p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                  Draft
                </p>
                <p className="mt-2 font-display text-4xl leading-none text-ink">{draftCount}</p>
              </div>
              <div className="border border-rule bg-bone p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                  Sizes
                </p>
                <p className="mt-2 font-display text-4xl leading-none text-ink">{variantCount}</p>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 border-t border-rule pt-5">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink">Collections</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {catalogCollections.map((collection) => (
              <div className="border border-rule bg-paper p-4" key={collection.slug}>
                <p className="font-display text-2xl leading-none text-ink">{collection.name.en}</p>
                <p className="mt-3 text-sm leading-6 text-stone">{collection.description.en}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-oxblood">
                  {collection.slug}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-x-auto border-t border-rule pt-5">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink">Products</h2>
            <p className="text-sm text-stone">Hard stock blocking arrives in Module 5.</p>
          </div>
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                <th className="py-3 pr-4 font-normal">Product</th>
                <th className="px-4 py-3 font-normal">Type</th>
                <th className="px-4 py-3 font-normal">Collection</th>
                <th className="px-4 py-3 font-normal">Status</th>
                <th className="px-4 py-3 font-normal">Availability</th>
                <th className="px-4 py-3 font-normal">Default price</th>
                <th className="px-4 py-3 font-normal">Sizes</th>
              </tr>
            </thead>
            <tbody>
              {catalogProducts.map((product) => (
                <tr className="border-b border-rule align-top" key={product.slug}>
                  <td className="py-4 pr-4">
                    <p className="font-display text-2xl leading-none text-ink">{product.name.en}</p>
                    <p className="mt-2 text-stone">{product.name.ar}</p>
                    <p className="mt-3 max-w-sm text-xs leading-5 text-stone">
                      {product.seoTitle.en}
                    </p>
                  </td>
                  <td className="px-4 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                    {label(product.kind)}
                  </td>
                  <td className="px-4 py-4">{product.collection}</td>
                  <td className="px-4 py-4">{label(product.status)}</td>
                  <td className="px-4 py-4">{label(product.availability)}</td>
                  <td className="px-4 py-4 font-mono text-xs uppercase tracking-[0.18em] text-oxblood">
                    {formatPrice(getProductPrice(product))}
                  </td>
                  <td className="px-4 py-4">
                    <div className="grid gap-2">
                      {product.variants.map((variant) => (
                        <p key={variant.slug}>
                          {variant.name.en} · {formatPrice(variant.price)}
                          {variant.stemCount ? ` · ${variant.stemCount} stems` : ""}
                        </p>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="border-t border-rule pt-5">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink">
            Product draft shape
          </h2>
          <form className="mt-4 grid gap-4 border border-rule bg-bone p-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-ink">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                English name
              </span>
              <input
                className="h-11 border border-rule bg-paper px-3 outline-none"
                placeholder="The next arrangement"
              />
            </label>
            <label className="grid gap-2 text-sm text-ink">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                Arabic name
              </span>
              <input className="h-11 border border-rule bg-paper px-3 outline-none" />
            </label>
            <label className="grid gap-2 text-sm text-ink">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                Product type
              </span>
              <select className="h-11 border border-rule bg-paper px-3 outline-none">
                <option>Bouquet</option>
                <option>Flower bunch</option>
                <option>Vase</option>
                <option>Card</option>
                <option>Wrapping paper</option>
                <option>Ribbon</option>
                <option>Oasis</option>
                <option>Custom request</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-ink">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                Availability label
              </span>
              <select className="h-11 border border-rule bg-paper px-3 outline-none">
                <option>Made to order</option>
                <option>Available</option>
                <option>Limited</option>
                <option>Coming soon</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-ink md:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                English SEO description
              </span>
              <textarea
                className="min-h-24 border border-rule bg-paper p-3 outline-none"
                placeholder="Built for UAE search. Keep it specific to Sharjah, flowers, and Soglia."
              />
            </label>
            <p className="text-sm leading-6 text-stone md:col-span-2">
              This is a non-saving shell until auth, permissions, and write endpoints are in place.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
