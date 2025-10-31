# NextSphere Technologies — Company Website (Next.js + MongoDB)

A clean, SEO-friendly company site inspired by typical software company structure (hero, services, projects, about, contact) with an admin login and inquiry inbox.

## Tech
- Next.js (App Router), React, Tailwind CSS
- MongoDB (Mongoose)
- Simple admin auth via env credentials -> signed cookie (JWT)
- Nodemailer email for contact notifications

## Getting Started
```bash
pnpm install   # or npm i / yarn
cp .env.local .env.local
# fill in MONGODB_URI, ADMIN_EMAIL, ADMIN_PASSWORD, BUSINESS_EMAIL
pnpm dev
```

Open http://localhost:3000

## Deploy
- **Vercel**: Add project, set env vars from `.env.local.example`
- **MongoDB Atlas**: Create free cluster, allow Vercel IPs/network access, get connection string
- **Domain**: nextsphere.app -> point to Vercel

## Customize
- Replace `/public/logo.svg`
- Update copy in `components/` and pages under `app/`
- Add real projects/pages later
