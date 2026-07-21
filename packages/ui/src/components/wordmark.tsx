import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type WordmarkTone = "ink" | "paper" | "oxblood";

const toneClassName: Record<WordmarkTone, string> = {
  ink: "text-ink",
  paper: "text-paper",
  oxblood: "text-oxblood"
};

export interface WordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: WordmarkTone;
}

export function Wordmark({ className, tone = "ink", ...props }: WordmarkProps) {
  return (
    <span
      aria-label="Soglia"
      className={cn(
        "inline-flex items-baseline font-display text-[1em] font-normal italic leading-none tracking-mark",
        toneClassName[tone],
        className
      )}
      {...props}
    >
      <span className="not-italic font-light">S</span>
      <span>oglia</span>
      <span className="not-italic font-light">.</span>
    </span>
  );
}
