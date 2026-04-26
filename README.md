# DoctorSite Website

A premium website development platform for doctors and surgeons to build their digital presence.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3+
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Testing**: Jest + React Testing Library + fast-check

## Project Structure

```
doctorsite-website/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── forms/             # Form components
├── lib/                   # Utilities and types
│   ├── constants.ts       # Site-wide constants
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
└── public/                # Static assets
    ├── images/
    └── icons/
```

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Run tests
```bash
npm test
```

## Design System

### Colors
- Primary: Light blue (#60A5FA, #3B82F6, #2563EB)
- Secondary: Teal (#5EEAD4, #14B8A6, #0D9488)
- Neutral: White, Gray shades

### Typography
- Primary font: Inter
- Secondary font: Poppins

### Responsive Breakpoints
- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1280px

## Features

- Server-side rendering (SSR) for SEO
- Responsive mobile-first design
- Smooth animations and transitions
- Form validation with Zod
- Image optimization
- Performance optimized
