# HAFCO Big Movers — Corporate Website 🌐

**Official public website for HAFCO Big Movers**, a Saudi logistics and heavy transport company based in Dammam, Saudi Arabia.

🔗 **Live:** [hafcobigmovers.com](http://hafcobigmovers.com)

## About

This is the public-facing marketing website for HAFCO Big Movers, showcasing the company's services, fleet capabilities, and contact information. The site was designed, built, and is maintained solely by me as part of my broader role owning HAFCO's full digital infrastructure — including their ERP, fleet tracking, HR, and payroll systems.

## Features

- Responsive, mobile-first design
- Company services and fleet showcase
- Contact form with secure server-side email delivery
- Optimized for performance and SEO

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Hosting & Infrastructure:** cPanel, GoDaddy, DNS management
- **Security:** All credentials (mail, captcha) stored server-side as environment variables — no secrets exposed in the codebase

## Running Locally

```bash
git clone <repo-url>
cd hafco-website
npm install
npm run dev
```

Create a `.env` file with the required public site address and browser key (see `.env.example`).

## Notes

- All brand assets, photography, and company content remain the property of HAFCO Big Movers
- This repository is shared to demonstrate implementation and architecture — no confidential business data is included

## Author

Built and maintained by **[Abdelrahman Mohamed](https://www.linkedin.com/in/abdelrahman-mohamed-884630264)** — Software Engineer & Systems Analyst, sole developer responsible for HAFCO's digital infrastructure.
