# Dextora Official Website

The official product landing page and documentation site for [Dextora](https://github.com/TanishJain13/Dextora) — an open-source Python CLI toolkit that diagnoses project setup, dependency, environment, and common development issues.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom dark graphite & electric lime theme
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **SEO & Structured Data**: Schema.org `SoftwareApplication` JSON-LD, Open Graph, dynamic `robots.txt`, and `sitemap.xml`

## Getting Started

### Prerequisites

- Node.js 18.17.0 or newer
- npm, pnpm, or bun

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the website.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## Deployment to Vercel

The site is configured for zero-configuration deployment on [Vercel](https://vercel.com/):

```bash
npx vercel
```

Or connect the repository on the Vercel dashboard:
1. Framework Preset: **Next.js**
2. Root Directory: `./` (or repository root)
3. Build Command: `next build`
4. Output Directory: `.next`

## License

MIT License. See [LICENSE](https://github.com/TanishJain13/Dextora/blob/main/LICENSE) for details.
