import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type MonogramTone = "ink" | "paper" | "oxblood" | "founder";

const toneClassName: Record<MonogramTone, string> = {
  ink: "text-ink",
  paper: "text-paper",
  oxblood: "text-oxblood",
  founder: "text-founder"
};

export interface MonogramProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: MonogramTone;
}

export function Monogram({ className, tone = "ink", ...props }: MonogramProps) {
  return (
    <span
      aria-label="Soglia"
      className={cn(
        "inline-flex items-baseline font-display text-[1em] font-light leading-none tracking-mark",
        toneClassName[tone],
        className
      )}
      {...props}
    >
      <span className="not-italic">S</span>
      <span className="not-italic">.</span>
    </span>
  );
}
