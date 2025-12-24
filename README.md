# BitRobot Dashboard

A fast, responsive, and lightweight dashboard for the BitRobot Network built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- ⚡ **Fast** — Only 3 production dependencies, optimized images with `next/image`, font optimization with `next/font`
- 📱 **Responsive** — Works on all screen sizes
- 🪶 **Lightweight** — No heavy libraries, CSS-only animations
- 🧪 **Tested** — 111 tests with Jest and React Testing Library
- 📝 **Documented** — JSDoc comments throughout, TypeDoc-generated API documentation
- ♿ **Accessible** — Focus states, ARIA attributes, semantic HTML
- 🎨 **Polished** — Loading skeletons, empty states, error boundaries, smooth transitions

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Scripts

| Script                  | Description                                  |
| ----------------------- | -------------------------------------------- |
| `npm run dev`           | Start development server                     |
| `npm run build`         | Build for production                         |
| `npm run start`         | Run production server                        |
| `npm run lint`          | Check for linting issues                     |
| `npm run lint:fix`      | Auto-fix linting issues                      |
| `npm run format`        | Format code with Prettier                    |
| `npm run format:check`  | Check code formatting                        |
| `npm run test`          | Run tests                                    |
| `npm run test:watch`    | Run tests in watch mode                      |
| `npm run test:coverage` | Run tests with coverage report               |
| `npm run typecheck`     | Type-check without emitting                  |
| `npm run validate`      | Run lint, typecheck, format check, and tests |
| `npm run docs`          | Generate TypeDoc documentation               |
| `npm run docs:watch`    | Generate docs in watch mode                  |

## Project Structure

```
bitrobot-dev/
├── app/                      # Next.js App Router
│   ├── globals.css           # Global styles and Tailwind theme
│   ├── layout.tsx            # Root layout with font setup
│   ├── page.tsx              # Dashboard page
│   └── page.test.tsx         # Integration tests
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx        # Button with variants
│   │   ├── Card.tsx          # Card container
│   │   ├── Icon.tsx          # SVG icon wrapper
│   │   ├── Badge.tsx         # Status badges
│   │   ├── Skeleton.tsx      # Loading skeletons
│   │   ├── EmptyState.tsx    # Empty state illustrations
│   │   └── ErrorBoundary.tsx # Error handling
│   ├── layout/               # Layout components
│   │   ├── Header.tsx        # Top header with user menu
│   │   ├── Sidebar.tsx       # Desktop navigation
│   │   └── MobileMenu.tsx    # Mobile slide-out menu
│   └── dashboard/            # Dashboard-specific components
│       ├── DiscoverCarousel.tsx  # Feature carousel
│       ├── EarningsCard.tsx      # Earnings display
│       ├── EarningsHistory.tsx   # Bar chart
│       ├── Leaderboard.tsx       # Rankings table
│       └── BonusBanner.tsx       # Promotional banner
├── lib/                      # Utilities and data
│   ├── format.ts             # Formatting helpers
│   └── mock-data.ts          # Mock data for development
├── types/                    # TypeScript type definitions
│   └── index.ts
├── public/
│   ├── icons/                # SVG icons
│   └── images/               # Images and avatars
├── docs/                     # Generated TypeDoc documentation
└── coverage/                 # Test coverage reports
```

## Testing

Tests are colocated with their components and use Jest with React Testing Library.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage

- **Dashboard components** — EarningsCard, Leaderboard, DiscoverCarousel, EarningsHistory
- **Layout components** — Sidebar, MobileMenu
- **UI components** — Button, Card, ErrorBoundary
- **Utilities** — format.ts
- **Integration** — Main dashboard page

## Documentation

### Viewing Generated Docs

```bash
# Generate documentation
npm run docs

# Open in browser
open docs/index.html
```

The generated documentation is in the `docs/` folder and includes:

- All component APIs and props
- Utility function signatures
- TypeScript interfaces

### JSDoc in Code

Every component and function includes JSDoc comments:

```tsx
/**
 * Format large numbers with k/M suffix
 * @param num - The number to format
 * @returns Formatted string (e.g., "1.3k", "2.5M")
 * @example
 * formatNumber(1300) // "1.3k"
 */
```

Your IDE will show these comments on hover for autocomplete and documentation.

## Tech Stack

| Category      | Technology                      |
| ------------- | ------------------------------- |
| Framework     | Next.js 16 (App Router)         |
| Language      | TypeScript 5 (strict mode)      |
| Styling       | Tailwind CSS v4                 |
| Testing       | Jest 29 + React Testing Library |
| Linting       | ESLint 9                        |
| Formatting    | Prettier                        |
| Documentation | TypeDoc                         |
| Font          | Inter (via next/font)           |

## Production Dependencies

```json
{
  "next": "^16.1.1",
  "react": "19.2.0",
  "react-dom": "19.2.0"
}
```

## Key Design Decisions

### Performance

- No runtime CSS-in-JS — Tailwind compiles at build time
- CSS-only animations using `transform` and `opacity`
- Optimized images with `next/image`

### User Experience

- Hover, active, and focus states on all interactive elements
- Empty states with illustrations when no data
- Staggered fade-in animations on page load
- Error boundaries with retry functionality
- Skeleton loaders during data fetching

### Accessibility

- `focus-visible` ring on all interactive elements
- `aria-live` regions for loading states
- Keyboard navigation support
- Semantic HTML throughout

### Code Quality

- Colocated tests following Testing Library best practices
- JSDoc comments on all components and functions
- Full TypeScript coverage with strict mode
- Barrel exports for clean imports
