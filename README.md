# Deepiha Sivakumar: portfolio

My personal site: experience, research, projects and skills. Built with Next.js 14, TypeScript and Tailwind CSS, with a light and dark theme.

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): the journey timeline, experience, research, projects, skills and contact details. Wrap words in `**double asterisks**` to bold them.

- **Headshot:** add the image to `public/` (e.g. `public/headshot.jpg`) and set `headshot: "/headshot.jpg"`. Until then the hero shows initials.
- **Resume:** add `public/resume.pdf` and set `resume: "/resume.pdf"`. The Resume button appears once it is set.
- **Project images:** the diagrams in `public/projects/` are SVGs; replace them with screenshots if you like.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Deploying

Import the repository on [Vercel](https://vercel.com/new); it detects Next.js with no extra settings. Because the build is a static export (`out/`), it can also be hosted on GitHub Pages, Netlify or any static host.

## Credits

Layout adapted from [kirubarajm-portfolio-website](https://github.com/kirubarajm/kirubarajm-portfolio-website).
