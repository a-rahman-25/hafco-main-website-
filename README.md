# HAFCO Big Movers — Website

Bilingual (English / Arabic) marketing website for **HAFCO Big Movers**, a heavy
transport and logistics company based in Dammam, Saudi Arabia.

Live site: https://hafcobigmover.com

## Features

- Fully bilingual EN/AR with right-to-left layout support
- Home, About, Services, Fleet, Work, Clients and Contact pages
- Fleet and project galleries with lightbox viewing
- Contact form with hCaptcha spam protection and email delivery
- Privacy policy and terms pages (static and in-app versions)
- Responsive, light-mode design with the Saudi green / gold brand palette

## Tech stack

- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- Framer Motion for animation
- Supabase (Postgres + Edge Functions) for the contact form backend

## Getting started

Requires Node.js 18+.

```sh
npm install
npm run dev
```

The dev server runs on http://localhost:8080.

```sh
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Configuration

Frontend environment variables (Vite, `.env`):

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Backend project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Public anon key (safe for the browser) |
| `VITE_SUPABASE_PROJECT_ID` | Backend project identifier |

These are publishable client-side values. All privileged access is protected by
row level security.

Server-side secrets for the `send-contact-email` edge function are set in the
backend and are **not** stored in this repository:

| Secret | Purpose |
| --- | --- |
| `ZOHO_SMTP_EMAIL` / `ZOHO_SMTP_PASSWORD` | Outgoing mail credentials |
| `HCAPTCHA_SECRET_KEY` | Server-side captcha verification |
| `CONTACT_RECIPIENTS` | Comma-separated list of inbox addresses for form submissions |
| `SUPABASE_SERVICE_ROLE_KEY` | Injected automatically; used only for logging submissions |

## Project structure

```
src/
  components/   layout, home, fleet and shared UI components
  pages/        route-level pages
  contexts/     language (EN/AR) and theme providers
  assets/       fleet and project photography
  integrations/ generated backend client
supabase/
  functions/    contact form email edge function
  migrations/   database schema
public/         static assets, privacy policy, robots.txt
```

## Security notes

- No private keys, admin credentials or service-role keys are committed.
- The `contact_submissions` table has row level security enabled and is only
  writable by the server-side function; it is not readable from the browser.
- The contact form is protected by hCaptcha, a honeypot field, a minimum
  fill-time check and per-IP rate limiting.

## License

All source code, brand assets and photography are © HAFCO Big Movers. Published
for reference; not licensed for reuse of brand assets or imagery.
