# NaturaVex - Energy & Libido

A modern Next.js landing page for NaturaVex, a natural energy and libido supplement product.

## Features

- 🎨 Modern, responsive design with pistachio color scheme
- 📱 Mobile-first responsive layout
- 🌐 Multi-language support (Bulgarian/English)
- ⚡ Interactive FAQ section with smooth animations
- 🎥 Background video support in hero section
- 🛒 Product variant selection
- 📞 Contact information and call-to-action buttons

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Fonts**: Montserrat (Google Fonts)
- **Icons**: Font Awesome
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd naturavex
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
naturavex/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── public/
│   ├── img/                 # Product images
│   │   ├── product.webp     # Main product image
│   │   ├── 1.webp          # Variant 1 image
│   │   ├── 2.webp          # Variant 2 image
│   │   └── 3.webp          # Variant 3 image
│   └── video/
│       └── bg.mp4          # Background video for hero
├── tailwind.config.ts       # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## Required Assets

### Images
Place the following images in `public/img/`:
- `product.webp` - Main product image (400x400px recommended)
- `1.webp` - Variant 1 product image (112x112px recommended)
- `2.webp` - Variant 2 product image (112x112px recommended)
- `3.webp` - Variant 3 product image (112x112px recommended)

### Video
Place the background video in `public/video/`:
- `bg.mp4` - Background video for hero section

## Customization

### Colors
The pistachio color scheme is defined in `tailwind.config.ts`:
- `pistachio` (default): #b8bf55
- `pistachio-light`: #e3e89c
- `pistachio-dark`: #7a7f2a

### Content
Update the content in `app/page.tsx` to match your product information:
- Product name and description
- Pricing information
- Features and benefits
- FAQ content
- Contact information

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

## Features Implemented

- ✅ Responsive navigation with mobile menu
- ✅ Hero section with video background
- ✅ Product features section
- ✅ Product variants with pricing
- ✅ Interactive FAQ accordion
- ✅ Language selector (UI ready)
- ✅ Shopping cart icon
- ✅ Scroll to top button
- ✅ Smooth scrolling navigation
- ✅ Mobile-first design
- ✅ Custom pistachio color scheme

## Performance Optimizations

- ✅ **Component-based Architecture**: Modular components for better maintainability
- ✅ **Custom Hooks**: Reusable logic with `useScrollPosition`
- ✅ **Image Optimization**: Next.js Image component with WebP/AVIF support
- ✅ **Lazy Loading**: Components load only when needed
- ✅ **Memoization**: React.memo and useCallback for performance
- ✅ **Bundle Optimization**: Tree shaking and code splitting
- ✅ **Caching Headers**: Proper cache control for static assets
- ✅ **Security Headers**: XSS protection and content type options
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Accessibility**: ARIA labels and semantic HTML
- ✅ **SEO Optimized**: Proper meta tags and structured data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for NaturaVex. All rights reserved.

## Credits

Created by [zen-coding-garden](https://zencodinggarden.me)
