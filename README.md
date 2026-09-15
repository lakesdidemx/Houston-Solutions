# Houston Solutions

Production website for **Houston Solutions** — residential home services and property improvements in Houston, Texas.

Live domain: [www.solutionshouston.com](https://www.solutionshouston.com)

## Go live with Vercel (free)

This GitHub repo is the source of truth. Vercel builds it and hosts it.

### If Vercel is already connected to this repo

You do not need to delete the old project. After this repo is updated, Vercel will rebuild automatically. Then:

1. Open [vercel.com](https://vercel.com) and sign in with GitHub
2. Open the **Houston-Solutions** project
3. Confirm the latest deployment succeeded
4. Go to **Settings → Domains**
5. Add `solutionshouston.com` and `www.solutionshouston.com`
6. Copy the DNS records Vercel shows into your domain registrar

### If this is a new Vercel project

1. Open [vercel.com/new](https://vercel.com/new)
2. Sign in with **GitHub** if asked
3. Import **lakesdidemx/Houston-Solutions**
4. Leave the settings as detected and click **Deploy**
5. When it finishes, go to **Settings → Domains**
6. Add `www.solutionshouston.com` and `solutionshouston.com`
7. At your domain host, add the DNS records Vercel displays (usually an A record for the root domain and a CNAME for `www`)

Typical DNS:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Vercel will show the exact values — use those if they differ.

### If you previously uploaded files instead of connecting GitHub

Do not keep using “upload files.” Connect the GitHub repo instead:

1. In Vercel, open the old project (or create a new one)
2. **Settings → Git** → connect `lakesdidemx/Houston-Solutions`
3. Redeploy from the `main` branch
4. You can delete the old upload-only project after the new one is live

## Making changes later

**Easiest:** ask Grok to update the website. The files can be pushed here, and Vercel republishes in about a minute.

**On GitHub yourself:**

| What to change | File |
| --- | --- |
| Phone, email, hours, city list | `src/lib/company.ts` |
| Service names and copy | `src/lib/services.ts` |
| Project gallery | `src/lib/projects.ts` |
| Photos | Replace files in `public/images/` with the **same filenames** |

Then commit to `main`. Vercel deploys automatically. You do not need to delete files on Vercel.

## Contact and estimate form

- Displayed phone: (713) 234-0556
- Displayed email: email@solutionshouston.com
- Estimate form emails: mail4diego@gmail.com

If FormSubmit asks you to confirm the first submission, open that email and click **Activate**.

## Local development

```bash
npm install
npm run dev
```
