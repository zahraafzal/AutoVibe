# AutoVibe – Automotive Blog

A responsive automotive blog made with **React + Vite** and **React Router**.
It covers car reviews, maintenance guides, electric vehicles and buying guides.

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```

The final website is created in the `dist` folder.

## Pages

| Page | Link |
|---|---|
| Home | `/` |
| About | `/about` |
| Blog (search + category filter) | `/blog` |
| Categories | `/categories` |
| Article | `/article/1` to `/article/5` |
| Contact | `/contact` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms` |
| 404 page | any wrong link |

## Folders

```
src/
  components/  Navbar, Footer, Seo, ScrollToTop
  pages/       Home, About, Blog, Article, Categories, Contact, Privacy, Terms, NotFound
  data/        articles.js (all 5 articles)
  App.css      all styles
public/
  sitemap.xml, robots.txt, _redirects
```

## SEO

- Every page has its own title and meta description
- sitemap.xml and robots.txt
- Links between articles, categories and pages
- Images load lazily

## Colours

| Primary | Secondary | Accent | Background | Text |
|---|---|---|---|---|
| #172554 | #2563EB | #F97316 | #F8FAFC | #1E293B |

Fonts: Rajdhani + Inter. Photos from Unsplash.
