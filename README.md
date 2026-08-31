# Houston Solutions Website

Responsive React + TypeScript + Vite website source for Houston Solutions.

## Features

- Sticky desktop/mobile header
- Mobile fixed Call / Estimate conversion bar
- Homepage with trust bar, 12-service grid, featured services, why-us, service areas and CTAs
- Reusable service-page route template for all 12 requested services
- Project gallery filtering
- About, Service Areas, Contact, Request Estimate, Privacy and Terms routes
- Estimate form with native validation, loading, success/error states, duplicate-submit prevention and multi-photo upload
- Centralized company/contact/service-area configuration in `src/data/site.ts`
- Click-to-call phone links
- Per-page SEO component with canonical, Open Graph and LocalBusiness JSON-LD
- Responsive CSS with WCAG-conscious focus and contrast choices
- Replaceable image/project placeholders

## Install and run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Lead form integration

Copy `.env.example` to `.env` and set:

```bash
VITE_LEAD_FORM_ENDPOINT=https://your-secure-endpoint.example/leads
```

The UI submits `FormData` to that endpoint. Do not place CRM/API secrets in Vite environment variables or frontend code; keep secrets server-side in the endpoint receiving the form.

If no endpoint is configured, the form runs in safe demo mode and displays the success state without sending data externally.

## Business settings

Edit `src/data/site.ts` to update:

- phone
- email
- location
- hours
- service areas
- navigation
- service names, copy and FAQs

## Before launch

1. Replace placeholder/project imagery with owned or properly licensed project photos.
2. Confirm actual service coverage.
3. Replace legal placeholder pages with business-approved Privacy Policy and Terms.
4. Configure the secure lead endpoint.
5. Add the final production domain to canonical/structured-data settings if it differs from `solutionshouston.com`.
6. Run Lighthouse/accessibility testing and test all forms/CTAs on real devices.
