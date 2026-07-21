"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type {
  AvailabilityLabel,
  CatalogCollection,
  CatalogProduct,
  CatalogProductVariant,
  ProductImageTone,
  ProductKind,
  ProductStatus
} from "@soglia/types";

const storageKey = "soglia-admin-catalog-drafts-v1";

const productKinds: ProductKind[] = [
  "bouquet",
  "bunch",
  "vase",
  "card",
  "wrap",
  "ribbon",
  "oasis",
  "custom_request"
];

const productStatuses: ProductStatus[] = ["draft", "published", "archived"];
const availabilityLabels: AvailabilityLabel[] = [
  "available",
  "made_to_order",
  "limited",
  "coming_soon"
];
const imageTones: ProductImageTone[] = ["orchid", "carnation", "vase", "paper", "card", "oasis"];

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

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDefaultVariant(product: CatalogProduct) {
  return product.variants.find((variant) => variant.isDefault) ?? product.variants[0];
}

function getProductPrice(product: CatalogProduct) {
  return getDefaultVariant(product)?.price ?? 0;
}

function isPublishable(product: CatalogProduct) {
  return Boolean(
    product.slug &&
    product.name.en &&
    product.name.ar &&
    product.description.en &&
    product.description.ar &&
    product.seoTitle.en &&
    product.seoDescription.en &&
    product.variants.length > 0 &&
    product.variants.some((variant) => variant.isDefault && variant.price > 0)
  );
}

function createProduct(products: CatalogProduct[]): CatalogProduct {
  const count = products.length + 1;

  return {
    slug: `new-product-${count}`,
    kind: "bouquet",
    status: "draft",
    collection: "ready",
    availability: "made_to_order",
    limited: false,
    imageTone: "orchid",
    name: { en: `New product ${count}`, ar: "" },
    description: { en: "", ar: "" },
    seoTitle: { en: "", ar: "" },
    seoDescription: { en: "", ar: "" },
    styleSummary: { en: "", ar: "" },
    included: { en: [], ar: [] },
    note: { en: "", ar: "" },
    variants: [
      {
        slug: "standard",
        name: { en: "Standard", ar: "قياسي" },
        price: 100,
        isDefault: true
      }
    ]
  };
}

function getCompletion(product: CatalogProduct) {
  const fields = [
    product.name.en,
    product.name.ar,
    product.description.en,
    product.description.ar,
    product.seoTitle.en,
    product.seoDescription.en,
    product.styleSummary.en,
    product.note.en
  ];
  const complete = fields.filter(Boolean).length;

  return Math.round((complete / fields.length) * 100);
}

interface CatalogAdminClientProps {
  collections: CatalogCollection[];
  initialProducts: CatalogProduct[];
}

export function CatalogAdminClient({
  collections,
  initialProducts
}: Readonly<CatalogAdminClientProps>) {
  const [products, setProducts] = useState<CatalogProduct[]>(initialProducts);
  const [selectedSlug, setSelectedSlug] = useState(initialProducts[0]?.slug ?? "");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "all">("all");
  const [collectionFilter, setCollectionFilter] = useState<CatalogCollection["slug"] | "all">(
    "all"
  );
  const [notice, setNotice] = useState("Ready");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);

    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored) as CatalogProduct[];

      if (parsed.length > 0) {
        setProducts(parsed);
        setSelectedSlug(parsed[0]?.slug ?? "");
        setNotice("Loaded local catalog changes");
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  const selectedProduct = products.find((product) => product.slug === selectedSlug) ?? products[0];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = `${product.name.en} ${product.name.ar} ${product.slug}`
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesStatus = statusFilter === "all" || product.status === statusFilter;
      const matchesCollection =
        collectionFilter === "all" || product.collection === collectionFilter;

      return matchesQuery && matchesStatus && matchesCollection;
    });
  }, [collectionFilter, products, query, statusFilter]);

  const publishedCount = products.filter((product) => product.status === "published").length;
  const draftCount = products.filter((product) => product.status === "draft").length;
  const archivedCount = products.filter((product) => product.status === "archived").length;

  function saveProducts(nextProducts = products) {
    window.localStorage.setItem(storageKey, JSON.stringify(nextProducts));
    setNotice("Saved locally");
  }

  function resetProducts() {
    setProducts(initialProducts);
    setSelectedSlug(initialProducts[0]?.slug ?? "");
    window.localStorage.removeItem(storageKey);
    setNotice("Reset to seed catalog");
  }

  function updateSelected(nextProduct: CatalogProduct) {
    const nextProducts = products.map((product) =>
      product.slug === selectedProduct?.slug ? nextProduct : product
    );

    setProducts(nextProducts);
  }

  function patchSelected(patch: Partial<CatalogProduct>) {
    if (!selectedProduct) {
      return;
    }

    updateSelected({ ...selectedProduct, ...patch });
  }

  function publishSelected() {
    if (!selectedProduct) {
      return;
    }

    if (!isPublishable(selectedProduct)) {
      setNotice("Publishing needs English, Arabic, SEO, and a default price");
      return;
    }

    patchSelected({ status: "published" });
    setNotice("Marked as published");
  }

  function duplicateSelected() {
    if (!selectedProduct) {
      return;
    }

    const duplicate = {
      ...selectedProduct,
      slug: `${selectedProduct.slug}-copy`,
      status: "draft" as ProductStatus,
      name: {
        en: `${selectedProduct.name.en} copy`,
        ar: selectedProduct.name.ar
      }
    };
    const nextProducts = [duplicate, ...products];

    setProducts(nextProducts);
    setSelectedSlug(duplicate.slug);
    setNotice("Duplicated into draft");
  }

  function addNewProduct() {
    const product = createProduct(products);
    const nextProducts = [product, ...products];

    setProducts(nextProducts);
    setSelectedSlug(product.slug);
    setNotice("New draft created");
  }

  function updateLocalized(
    field: "name" | "description" | "seoTitle" | "seoDescription" | "styleSummary" | "note",
    locale: "en" | "ar",
    value: string
  ) {
    if (!selectedProduct) {
      return;
    }

    updateSelected({
      ...selectedProduct,
      [field]: {
        ...selectedProduct[field],
        [locale]: value
      }
    });
  }

  function updateVariant(index: number, patch: Partial<CatalogProductVariant>) {
    if (!selectedProduct) {
      return;
    }

    updateSelected({
      ...selectedProduct,
      variants: selectedProduct.variants.map((variant, variantIndex) =>
        variantIndex === index ? { ...variant, ...patch } : variant
      )
    });
  }

  function makeDefaultVariant(index: number) {
    if (!selectedProduct) {
      return;
    }

    updateSelected({
      ...selectedProduct,
      variants: selectedProduct.variants.map((variant, variantIndex) => ({
        ...variant,
        isDefault: variantIndex === index
      }))
    });
  }

  function addVariant() {
    if (!selectedProduct) {
      return;
    }

    const nextVariant: CatalogProductVariant = {
      slug: `size-${selectedProduct.variants.length + 1}`,
      name: { en: "New size", ar: "" },
      price: getProductPrice(selectedProduct),
      isDefault: selectedProduct.variants.length === 0
    };

    updateSelected({
      ...selectedProduct,
      variants: [...selectedProduct.variants, nextVariant]
    });
  }

  function removeVariant(index: number) {
    if (!selectedProduct || selectedProduct.variants.length === 1) {
      return;
    }

    const nextVariants = selectedProduct.variants.filter(
      (_, variantIndex) => variantIndex !== index
    );

    updateSelected({
      ...selectedProduct,
      variants: nextVariants.some((variant) => variant.isDefault)
        ? nextVariants
        : nextVariants.map((variant, variantIndex) => ({
            ...variant,
            isDefault: variantIndex === 0
          }))
    });
  }

  return (
    <main className="min-h-screen px-4 py-5 md:px-7">
      <div className="mx-auto grid max-w-[1500px] gap-5">
        <header className="grid gap-4 border-t border-ink pt-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
              Admin / Catalog
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none text-ink">Products</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-stone">{notice}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="h-10 border border-ink bg-ink px-4 text-sm text-paper"
              onClick={addNewProduct}
              type="button"
            >
              Add product
            </button>
            <button
              className="h-10 border border-rule px-4 text-sm text-ink"
              onClick={() => saveProducts()}
              type="button"
            >
              Save
            </button>
            <button
              className="h-10 border border-rule px-4 text-sm text-ink"
              onClick={resetProducts}
              type="button"
            >
              Reset
            </button>
          </div>
        </header>

        <section className="grid gap-3 md:grid-cols-4">
          <Stat label="Products" value={products.length} />
          <Stat label="Published" value={publishedCount} />
          <Stat label="Draft" value={draftCount} />
          <Stat label="Archived" value={archivedCount} />
        </section>

        <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 self-start border border-rule bg-paper p-4">
            <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
              <input
                className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products"
                value={query}
              />
              <select
                className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
                onChange={(event) => setStatusFilter(event.target.value as ProductStatus | "all")}
                value={statusFilter}
              >
                <option value="all">All status</option>
                {productStatuses.map((status) => (
                  <option key={status} value={status}>
                    {label(status)}
                  </option>
                ))}
              </select>
              <select
                className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
                onChange={(event) =>
                  setCollectionFilter(event.target.value as CatalogCollection["slug"] | "all")
                }
                value={collectionFilter}
              >
                <option value="all">All collections</option>
                {collections.map((collection) => (
                  <option key={collection.slug} value={collection.slug}>
                    {collection.name.en}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid max-h-[720px] overflow-auto border-t border-rule">
              {filteredProducts.map((product) => (
                <button
                  className={`grid gap-2 border-b border-rule p-4 text-left ${
                    product.slug === selectedProduct?.slug ? "bg-bone" : "bg-paper"
                  }`}
                  key={product.slug}
                  onClick={() => setSelectedSlug(product.slug)}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-2xl leading-none text-ink">
                        {product.name.en || "Untitled product"}
                      </p>
                      <p className="mt-1 text-sm text-stone">
                        {product.name.ar || "Arabic needed"}
                      </p>
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
                      {formatPrice(getProductPrice(product))}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                    <span>{label(product.status)}</span>
                    <span>{label(product.kind)}</span>
                    <span>{product.collection}</span>
                    <span>{getCompletion(product)}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selectedProduct ? (
            <ProductEditor
              collections={collections}
              duplicateSelected={duplicateSelected}
              makeDefaultVariant={makeDefaultVariant}
              patchSelected={patchSelected}
              product={selectedProduct}
              publishSelected={publishSelected}
              removeVariant={removeVariant}
              addVariant={addVariant}
              updateLocalized={updateLocalized}
              updateSelected={updateSelected}
              updateVariant={updateVariant}
            />
          ) : null}
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value }: Readonly<{ label: string; value: number }>) {
  return (
    <div className="border border-rule bg-bone p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">{label}</p>
      <p className="mt-2 font-display text-4xl leading-none text-ink">{value}</p>
    </div>
  );
}

interface ProductEditorProps {
  collections: CatalogCollection[];
  product: CatalogProduct;
  addVariant: () => void;
  duplicateSelected: () => void;
  makeDefaultVariant: (index: number) => void;
  patchSelected: (patch: Partial<CatalogProduct>) => void;
  publishSelected: () => void;
  removeVariant: (index: number) => void;
  updateLocalized: (
    field: "name" | "description" | "seoTitle" | "seoDescription" | "styleSummary" | "note",
    locale: "en" | "ar",
    value: string
  ) => void;
  updateSelected: (product: CatalogProduct) => void;
  updateVariant: (index: number, patch: Partial<CatalogProductVariant>) => void;
}

function ProductEditor({
  collections,
  product,
  addVariant,
  duplicateSelected,
  makeDefaultVariant,
  patchSelected,
  publishSelected,
  removeVariant,
  updateLocalized,
  updateSelected,
  updateVariant
}: Readonly<ProductEditorProps>) {
  return (
    <div className="grid gap-4 self-start border border-rule bg-paper p-4">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-rule pb-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
            {product.slug}
          </p>
          <h2 className="mt-2 font-display text-4xl leading-none text-ink">
            {product.name.en || "Untitled product"}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="h-9 border border-rule px-3 text-sm text-ink"
            onClick={duplicateSelected}
            type="button"
          >
            Duplicate
          </button>
          <button
            className="h-9 border border-rule px-3 text-sm text-ink"
            onClick={() => patchSelected({ status: "archived" })}
            type="button"
          >
            Archive
          </button>
          <button
            className="h-9 border border-ink bg-ink px-3 text-sm text-paper"
            onClick={publishSelected}
            type="button"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Field label="English name">
          <input
            className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
            onChange={(event) => {
              const name = event.target.value;
              updateSelected({
                ...product,
                name: { ...product.name, en: name },
                slug: product.slug.startsWith("new-product")
                  ? slugify(name) || product.slug
                  : product.slug
              });
            }}
            value={product.name.en}
          />
        </Field>
        <Field label="Arabic name">
          <input
            className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
            onChange={(event) => updateLocalized("name", "ar", event.target.value)}
            value={product.name.ar}
          />
        </Field>
        <Field label="Slug">
          <input
            className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
            onChange={(event) => patchSelected({ slug: slugify(event.target.value) })}
            value={product.slug}
          />
        </Field>
        <Field label="Product type">
          <select
            className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
            onChange={(event) => patchSelected({ kind: event.target.value as ProductKind })}
            value={product.kind}
          >
            {productKinds.map((kind) => (
              <option key={kind} value={kind}>
                {label(kind)}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Collection">
          <select
            className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
            onChange={(event) =>
              patchSelected({ collection: event.target.value as CatalogCollection["slug"] })
            }
            value={product.collection}
          >
            {collections.map((collection) => (
              <option key={collection.slug} value={collection.slug}>
                {collection.name.en}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Status">
          <select
            className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
            onChange={(event) => patchSelected({ status: event.target.value as ProductStatus })}
            value={product.status}
          >
            {productStatuses.map((status) => (
              <option key={status} value={status}>
                {label(status)}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Availability">
          <select
            className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
            onChange={(event) =>
              patchSelected({ availability: event.target.value as AvailabilityLabel })
            }
            value={product.availability}
          >
            {availabilityLabels.map((availability) => (
              <option key={availability} value={availability}>
                {label(availability)}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Image tone">
          <select
            className="h-10 border border-rule bg-bone px-3 text-sm outline-none"
            onChange={(event) =>
              patchSelected({ imageTone: event.target.value as ProductImageTone })
            }
            value={product.imageTone}
          >
            {imageTones.map((tone) => (
              <option key={tone} value={tone}>
                {label(tone)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-4 border-t border-rule pt-4 lg:grid-cols-2">
        <TextArea
          label="English description"
          onChange={(value) => updateLocalized("description", "en", value)}
          value={product.description.en}
        />
        <TextArea
          label="Arabic description"
          onChange={(value) => updateLocalized("description", "ar", value)}
          value={product.description.ar}
        />
        <TextArea
          label="Style summary"
          onChange={(value) => updateLocalized("styleSummary", "en", value)}
          value={product.styleSummary.en}
        />
        <TextArea
          label="Studio note"
          onChange={(value) => updateLocalized("note", "en", value)}
          value={product.note.en}
        />
      </div>

      <div className="grid gap-4 border-t border-rule pt-4 lg:grid-cols-2">
        <TextArea
          label="English SEO title"
          onChange={(value) => updateLocalized("seoTitle", "en", value)}
          value={product.seoTitle.en}
        />
        <TextArea
          label="English SEO description"
          onChange={(value) => updateLocalized("seoDescription", "en", value)}
          value={product.seoDescription.en}
        />
      </div>

      <div className="grid gap-3 border-t border-rule pt-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink">Sizes</h3>
          <button
            className="h-9 border border-rule px-3 text-sm text-ink"
            onClick={addVariant}
            type="button"
          >
            Add size
          </button>
        </div>
        {product.variants.map((variant, index) => (
          <div
            className="grid gap-3 border border-rule bg-bone p-3 lg:grid-cols-5"
            key={variant.slug}
          >
            <Field label="English">
              <input
                className="h-10 border border-rule bg-paper px-3 text-sm outline-none"
                onChange={(event) =>
                  updateVariant(index, {
                    name: { ...variant.name, en: event.target.value },
                    slug: slugify(event.target.value) || variant.slug
                  })
                }
                value={variant.name.en}
              />
            </Field>
            <Field label="Arabic">
              <input
                className="h-10 border border-rule bg-paper px-3 text-sm outline-none"
                onChange={(event) =>
                  updateVariant(index, { name: { ...variant.name, ar: event.target.value } })
                }
                value={variant.name.ar}
              />
            </Field>
            <Field label="AED">
              <input
                className="h-10 border border-rule bg-paper px-3 text-sm outline-none"
                min={0}
                onChange={(event) => updateVariant(index, { price: Number(event.target.value) })}
                type="number"
                value={variant.price}
              />
            </Field>
            <Field label="Stems">
              <input
                className="h-10 border border-rule bg-paper px-3 text-sm outline-none"
                min={0}
                onChange={(event) =>
                  updateVariant(index, {
                    stemCount: Number(event.target.value)
                  })
                }
                type="number"
                value={variant.stemCount ?? ""}
              />
            </Field>
            <div className="flex items-end gap-2">
              <button
                className="h-10 flex-1 border border-rule px-3 text-sm text-ink"
                onClick={() => makeDefaultVariant(index)}
                type="button"
              >
                {variant.isDefault ? "Default" : "Set default"}
              </button>
              <button
                className="h-10 border border-rule px-3 text-sm text-ink"
                onClick={() => removeVariant(index)}
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-3 border-t border-rule pt-4">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink">
          Storefront preview
        </h3>
        <div className="border border-rule bg-bone p-4">
          <p className="font-display text-4xl leading-none text-ink">{product.name.en}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone">{product.styleSummary.en}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-oxblood">
            {formatPrice(getProductPrice(product))}
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ children, label }: Readonly<{ children: ReactNode; label: string }>) {
  return (
    <label className="grid gap-2 text-sm text-ink">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">{label}</span>
      {children}
    </label>
  );
}

function TextArea({
  label,
  onChange,
  value
}: Readonly<{ label: string; onChange: (value: string) => void; value: string }>) {
  return (
    <Field label={label}>
      <textarea
        className="min-h-24 border border-rule bg-bone p-3 text-sm outline-none"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </Field>
  );
}
