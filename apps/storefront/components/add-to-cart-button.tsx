"use client";

import type { Locale } from "@soglia/types";
import { Button } from "@soglia/ui";
import type { Product } from "../lib/catalog";
import { dictionary } from "../lib/i18n";
import { useCart } from "./cart-context";

export function AddToCartButton({
  locale,
  product,
  className
}: Readonly<{ locale: Locale; product: Product; className?: string }>) {
  const { addItem } = useCart();

  return (
    <Button
      className={className}
      onClick={() =>
        addItem({
          slug: product.slug,
          name: product.name[locale],
          price: product.price
        })
      }
    >
      {dictionary[locale].shop.add}
    </Button>
  );
}
