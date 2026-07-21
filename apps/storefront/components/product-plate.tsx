import { cn } from "@soglia/ui";
import type { Product } from "../lib/catalog";

const toneClassName: Record<Product["imageTone"], string> = {
  orchid: "from-[#f3efe7] via-[#d8d0c3] to-[#5a1a1a]",
  carnation: "from-[#f3efe7] via-[#d9b8ad] to-[#8e5050]",
  vase: "from-[#f3efe7] via-[#a89c8a] to-[#1b1a18]",
  paper: "from-[#f3efe7] via-[#e8e1d2] to-[#a89c8a]",
  card: "from-[#f3efe7] via-[#d2c8b9] to-[#5b5750]",
  oasis: "from-[#f3efe7] via-[#a7ad94] to-[#3f4a2a]"
};

export function ProductPlate({
  product,
  label,
  className
}: Readonly<{ product: Product; label: string; className?: string }>) {
  return (
    <div
      aria-label={label}
      className={cn(
        "relative aspect-[4/5] overflow-hidden border border-rule bg-gradient-to-br",
        toneClassName[product.imageTone],
        className
      )}
      role="img"
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_18px,rgba(27,26,24,0.13)_18px,rgba(27,26,24,0.13)_19px)]" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
        <span className="font-display text-4xl italic leading-none text-paper">S.</span>
        <span className="max-w-28 text-right font-mono text-[10px] uppercase tracking-meta text-paper/85">
          {label}
        </span>
      </div>
    </div>
  );
}
