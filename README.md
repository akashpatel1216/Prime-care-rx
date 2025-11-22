# PrimeCare Rx - Modern Pharmacy Website

A beautiful, professional pharmacy website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, contemporary UI with gradient backgrounds and smooth animations
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ⚡ **High Performance**: Built with Next.js 15 for optimal speed and SEO
- 🎭 **Smooth Animations**: Beautiful animations powered by Framer Motion
- 🧭 **Easy Navigation**: Smooth scrolling and intuitive navigation
- 💼 **Professional Sections**:
  - Hero section with compelling CTA
  - Services showcase with 8+ pharmacy services
  - About section with company values
  - Live statistics with animated counters
  - Patient testimonials carousel
  - Contact form with integrated map
  - Comprehensive footer

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Prime-care-rx/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Statistics.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:
- Primary colors: Blue shades (pharmacy trust/professional)
- Secondary colors: Purple/Pink shades (care/compassion)

### Content

Update the following files to customize content:
- **Services**: `components/Services.tsx`
- **Testimonials**: `components/Testimonials.tsx`
- **Contact Info**: `components/Contact.tsx` and `components/Footer.tsx`
- **Company Info**: `components/About.tsx`

### Branding

- Logo/Company Name: Update in `components/Navigation.tsx`
- Metadata: Update in `app/layout.tsx`

## Features Highlights

### Animations
- Smooth scroll animations on all sections
- Counter animations for statistics
- Hover effects on cards and buttons
- Mobile menu with smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized navigation for mobile devices

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- High contrast ratios

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For support, email info@primecarerx.com or call 352-489-4960.

---

Built with ❤️ for PrimeCare Rx

