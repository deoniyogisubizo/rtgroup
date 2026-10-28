# RTGroup Website

## Prerequisites
- Node.js 18+
- pnpm 9+
- MongoDB (for Payload CMS)
- S3/R2 or compatible storage for production

## Local setup
1. Copy `.env.example` to `.env.local` and fill values
2. `pnpm install`
3. `pnpm dev`

## Commands
- `pnpm dev` - development
- `pnpm build` - production build
- `pnpm start` - production start
- `pnpm lint` - lint
- `pnpm typecheck` - type check
- `pnpm test:e2e` - Playwright tests
- `pnpm seed` - seed (no fake public data)

## Architecture
See `docs/ARCHITECTURE.md`
