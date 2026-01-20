# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite marketing website for Orriun Atlas, a field service management platform for the oilfield industry. The application uses React Router for navigation, TailwindCSS for styling, and Lenis for smooth scrolling animations.

## Development Commands

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Run linter:**
```bash
npm run lint
```

**Preview production build:**
```bash
npm run preview
```

## Architecture

### Routing Structure
The app uses React Router v7 with a comprehensive route structure defined in `src/App.jsx`:
- Main pages: Home, About, Solutions, Industries, Resources, Integrations, Contact, Privacy, FAQ
- Dynamic service detail pages: `/services/:serviceId`
- Industry-specific pages: `/industries/*` (6 industry verticals)
- Case study pages: `/case-studies/*` (4 case studies)
- Blog pages

### Scroll Behavior
The application implements custom scroll behavior using two mechanisms:

1. **Lenis Smooth Scrolling**: Initialized in `App.jsx` with specific easing parameters for smooth page scrolling
2. **Scroll Animations**: A `ScrollHandler` component in `App.jsx` uses IntersectionObserver to trigger animations on elements with the `scroll-animate` class when they enter the viewport. The observer disconnects and reinitializes on route changes to ensure animations work on all pages.

### Data Management
Service/solution data is centralized in `src/data/servicesData.js` as a structured array containing:
- Service metadata (id, icon, title, descriptions)
- Content sections (intro, features, problems, benefits)
- Highlighting flags for featured services

This data structure drives both the Solutions overview page and individual ServiceDetail pages.

### Component Organization
- **UI Components**: `src/components/ui/*` - Reusable UI components (button, card, input, etc.) using class-variance-authority for variant management
- **Feature Components**: `src/components/*` - Header, Footer, Newsletter, QuestionCarousel, etc.
- **Pages**: `src/pages/*` - Main route components
- **Sub-pages**: `src/pages/industries/*` and `src/pages/case-studies/*` - Nested route components

### Styling Approach
- TailwindCSS for utility-first styling (configured in `tailwind.config.js`)
- Component-specific CSS files for complex layouts or animations (e.g., `Header.css`, `About.css`)
- Metary theme system loaded dynamically via `src/theme/loadMetaryAssets.js` (checks for CSS files existence before loading to avoid 404s)
- FontAwesome icons loaded via CDN in `index.html`

### Custom Utilities
- `src/lib/utils.js` - Contains `cn()` function for conditional class name merging using clsx and tailwind-merge

## Key Architectural Patterns

### Service Detail Pages
Use the `useParams` hook to extract `serviceId` from the URL, then look up the corresponding service in `servicesData.js`. The ServiceDetail component renders a consistent layout for all services based on the data structure.

### Scroll-to-Top on Navigation
The `ScrollHandler` component in `App.jsx` automatically scrolls to top on route changes and reinitializes IntersectionObserver for scroll animations.

### Responsive Navigation
The Header component (`src/components/Header.jsx`) implements:
- Desktop dropdown menus for Solutions, Industries, and Resources
- Mobile hamburger menu with collapsible dropdowns
- Active state highlighting based on current route

## Important Notes

- The repository is not a git repository (no version control configured)
- Metary theme CSS files are loaded conditionally - they may not exist in development
- The `eslint.config.js` uses the new flat config format with React hooks and React Refresh plugins
- Assets are organized by category in `src/assets/*` (industries, solutions, resources, case-studies)
