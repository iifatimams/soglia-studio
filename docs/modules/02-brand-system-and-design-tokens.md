# Module 2: Brand System and Design Tokens

## Status

Implemented after Module 1.

## Purpose

Turn the locked Soglia brand kit into reusable app foundations before real storefront, admin, or POS screens are built.

## Source of Truth

- `docs/brand/brand-kit.html`
- `docs/brand/anti-ai-writing-style.md`

When the brand kit has draft and final sections that conflict, the final locked kit wins.

## Included

- Shared public color tokens:
  - Paper `#F3EFE7`
  - Ink `#1B1A18`
  - Ink Soft `#5B5750`
  - Rule `#D2C8B9`
  - Oxblood/Ember `#5A1A1A`
  - Stone `#A89C8A`
  - Bone `#E8E1D2`
- Private founder token:
  - Cobalt `#1F3A6B`
- Shared font lanes:
  - Cormorant Garamond for studio voice and wordmark.
  - Inter for customer tasks and operational UI.
  - Inconsolata for metadata.
- Shared Tailwind preset in `packages/config/tailwind`.
- Shared CSS variables in `packages/ui/src/styles/index.css`.
- `Wordmark` component.
- `Monogram` component.
- Next.js optimized Google Font loading in storefront and admin.

## Excluded

- Full storefront redesign.
- Admin dashboard design.
- POS design.
- Product, checkout, inventory, auth, loyalty, or blog implementation.
- Production photography.
- Print-ready packaging assets.
- Local font hosting.

## Brand Rules Encoded

- Public brand surfaces use ink, paper, and oxblood/ember.
- Cobalt is private to founder/admin contexts.
- The mark is type-led: italic Cormorant, upright `S`, and full stop.
- Storefront and admin share tokens so visual drift is harder.
- The foundation avoids pastel florist styling, wax-seal heritage styling, and generic SaaS defaults.

## Files Created or Modified

- `packages/config/tailwind/index.ts`
- `packages/ui/src/tokens/brand.ts`
- `packages/ui/src/styles/index.css`
- `packages/ui/src/components/wordmark.tsx`
- `packages/ui/src/components/monogram.tsx`
- `apps/storefront/lib/fonts.ts`
- `apps/admin/lib/fonts.ts`
- Storefront and admin Tailwind configs.
- Storefront and admin root layouts.

## Validation Commands

```bash
corepack pnpm install
corepack pnpm format:check
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
corepack pnpm build
```

## Manual QA

- Storefront uses the shared wordmark.
- Admin uses the shared wordmark and private founder monogram.
- Storefront does not expose cobalt in its page shell.
- Tailwind colors resolve from CSS variables.
- Fonts load through `next/font`.
- No business workflows are added.

## Commit Message

```text
feat(brand): add Soglia design tokens
```
