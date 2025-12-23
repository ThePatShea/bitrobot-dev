# BitRobot Dashboard

A modern, production-quality dashboard for the BitRobot Network built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern UI** - Clean, professional interface with smooth animations
- 📊 **Dashboard Analytics** - Track earnings, view history, and monitor leaderboards
- 🎯 **Interactive Components** - Carousel, charts, and hover states
- 🔐 **User Management** - Profile dropdown and authentication-ready
- 📱 **Responsive Design** - Works seamlessly across all devices
- ⚡ **Performance Optimized** - Built with Next.js App Router and React Server Components
- 📝 **TypeScript** - Fully typed for better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS for rapid development

## Project Structure

```
bitrobot-dev/
├── app/                      # Next.js App Router
│   ├── types/               # TypeScript type definitions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Dashboard page
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Icon.tsx
│   ├── layout/              # Layout components
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   └── dashboard/           # Dashboard-specific components
│       ├── DiscoverCarousel.tsx
│       ├── EarningsCard.tsx
│       ├── EarningsHistory.tsx
│       ├── Leaderboard.tsx
│       ├── BonusBanner.tsx
│       └── EarnPointsBadge.tsx
├── helpers/                 # Utility functions
│   ├── format.ts           # Formatting helpers
│   └── index.ts            # Helper exports
└── public/                  # Static assets
    ├── icons/              # SVG icons
    └── images/             # Images and avatars
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bitrobot-dev
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Component Documentation

All components are fully documented with JSDoc comments. Key components include:

### UI Components (`components/ui/`)

- **Button** - Reusable button with multiple variants (primary, secondary, outline, ghost)
- **Card** - Container component with optional hover effects
- **Badge** - Status indicators and labels
- **Icon** - SVG icon wrapper with consistent sizing

### Layout Components (`components/layout/`)

- **Sidebar** - Navigation sidebar with menu items and resources
- **Header** - Top header with user account menu

### Dashboard Components (`components/dashboard/`)

- **DiscoverCarousel** - Feature showcase carousel
- **EarningsCard** - Display earnings data with hover effects
- **EarningsHistory** - Bar chart for historical earnings
- **Leaderboard** - Table showing top users
- **BonusBanner** - Promotional banner component
- **EarnPointsBadge** - Floating points badge

## Customization

### Colors

Edit color variables in `app/globals.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #f5f3ff;
  /* ... more colors */
}
```

### Icons

Add SVG icons to `public/icons/` and use them with the Icon component:

```tsx
<Icon name="your-icon" size={20} />
```

## Type Safety

The project uses TypeScript with strict mode enabled. Type definitions are located in `app/types/index.ts` and include:

- `NavItem` - Navigation menu items
- `ResourceLink` - External resource links
- `LeaderboardEntry` - Leaderboard data structure
- `EarningsDataPoint` - Chart data points
- `CarouselItem` - Carousel slide content
- `UserProfile` - User profile data

## Best Practices

This codebase follows these best practices:

- ✅ **Component Composition** - Small, reusable components
- ✅ **TypeScript** - Full type safety throughout
- ✅ **JSDoc Comments** - Comprehensive documentation
- ✅ **Separation of Concerns** - Clear directory structure
- ✅ **Accessibility** - Semantic HTML and ARIA labels
- ✅ **Performance** - Optimized images and code splitting
- ✅ **Consistent Styling** - Tailwind CSS utilities

## Future Enhancements

- [ ] API integration for real data
- [ ] User authentication
- [ ] Real-time updates with WebSockets
- [ ] Additional dashboard pages (Contribute, Profile)
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] Unit and integration tests

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## License

[Your License Here]
