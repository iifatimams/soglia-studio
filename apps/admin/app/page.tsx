import Link from "next/link";
import { Monogram, Wordmark } from "@soglia/ui";

export default function AdminHome() {
  return (
    <main className="min-h-screen px-6 py-10">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">Admin</p>
      <h1 className="mt-8 flex max-w-3xl items-baseline gap-4 text-5xl leading-none text-ink">
        <Wordmark />
        <Monogram tone="founder" className="text-2xl" />
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-ink">
        Foundation shell for dashboard, POS, operations, inventory, and reporting.
      </p>
      <div className="mt-8">
        <Link
          className="inline-flex h-11 items-center justify-center border border-ink px-5 text-sm text-ink hover:bg-bone"
          href="/catalog"
        >
          Open catalog
        </Link>
      </div>
    </main>
  );
}
