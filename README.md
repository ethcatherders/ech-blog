# ECH Institute Blog

A modern blog platform built with Next.js 15, TypeScript, and Tailwind CSS for the ECH Institute.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) with your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

For a complete overview of the project structure, file organization, and naming conventions, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

### Quick Overview

```
ECH-institute-blogs/
├── blogs/              # Blog posts (Markdown files)
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router pages and routes
│   ├── components/    # React components
│   └── lib/           # Utility functions
├── scripts/           # Build and utility scripts
└── Configuration files
```

## ✍️ Adding Blog Posts

1. Create a new Markdown file in the `blogs/` directory
2. Use kebab-case naming (e.g., `my-new-post.md`)
3. Include frontmatter:

```yaml
---
title: "My New Post"
date: "2025-01-15"
author: "Author Name"
image: "path/to/image.png"
---
```

4. Add images to `blogs/images/` if needed
5. Validate: `npm run validate-blogs`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run validate-blogs` - Validate blog post structure

## 🎨 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Content**: Markdown with frontmatter
- **RSS Feed**: Custom RSS feed generator
- **Fonts**: Roboto (body), Antonio (headings)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🔗 Links

- **GitHub Repository**: [https://github.com/echinstitute/ech-blog](https://github.com/echinstitute/ech-blog)
- **RSS Feed**: `/feed.xml`

## 📄 License

This project is private and proprietary to ECH Institute.
