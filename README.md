# Hospitality Experience Explorer

**Live Demo:** [https://hospitality-explorer.vercel.app/](https://hospitality-explorer.vercel.app/)

## Assignment Overview

This is a responsive, production-quality user interface built using Next.js and Tailwind CSS for the Hospitality Experience Explorer assignment.

### What's Included

**Part 1: Figma UI to Code**
- 15 design sections implemented as individual routes under `src/app/*`
- Responsive layouts matching the provided Figma designs
- Consistent styling using Tailwind CSS utility classes

**Part 2: JSON Data UI**
- Interactive JSON data explorer at `/experiences`
- Dynamic rendering of hospitality experience data from `src/data/hospitality_assignment_data.json`
- Advanced filtering capabilities:
  - Property type (business, heritage, resort)
  - Year selection
  - Flagship property filter
  - Full-text search across properties, roles, and projects
- Graceful handling of missing/optional fields

### Tech Stack

- **Next.js 15** (App Router)
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **Vercel** for deployment

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── hero/             # Hero section
│   ├── why-choose/       # Why Choose section
│   ├── engagement-models/ # Engagement Models
│   ├── role-types/       # Role Types & Seniority
│   ├── technical-expertise/ # Technical Expertise
│   ├── roles-we-cover/   # Roles We Cover
│   ├── certifications-standards/ # Certifications
│   ├── vetting-process/  # Vetting Process
│   ├── project-types/    # Project Types
│   ├── profiles/         # Sample Talent Profiles
│   ├── use-cases/        # Key Use Cases
│   ├── platforms-modules/ # Platforms & Modules
│   ├── cta/              # CTA Split Form
│   ├── industries/       # Industries
│   ├── footer/           # Footer / Subscribe
│   └── experiences/      # JSON Data Explorer
├── data/                 # JSON data files
└── globals.css           # Global styles and Tailwind components
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MohdKashif142/hospitality-explorer.git
cd hospitality-explorer

# Install dependencies
npm ci

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive grid layouts that adapt to different screen sizes
- Consistent spacing and typography across all sections

### Interactive Components
- Tabbed interfaces (Technical Expertise, Role Types)
- Filterable data tables (Experiences page)
- Form components with validation
- Hover effects and smooth transitions

### Data Handling
- Static JSON data loading
- Client-side filtering and search
- Type-safe data processing with TypeScript
- Graceful fallbacks for missing data

## Deployment

The application is deployed on Vercel and automatically updates when changes are pushed to the main branch.

### Build & Deploy

```bash
# Build the application
npm run build

# Deploy to Vercel (if connected)
vercel --prod
```

## Design Approach

- **Component Reusability**: Common UI patterns extracted into reusable Tailwind classes
- **Consistent Styling**: Unified color scheme and spacing using CSS custom properties
- **Accessibility**: Semantic HTML structure and proper contrast ratios
- **Performance**: Optimized images and efficient rendering patterns

## Assignment Requirements Met

✅ **Responsive UI**: Fully responsive design using Tailwind CSS  
✅ **Next.js Implementation**: Modern React framework with App Router  
✅ **JSON Data UI**: Dynamic rendering with filters and search  
✅ **Production Quality**: Clean code structure and deployment ready  
✅ **15 Design Sections**: All Figma sections implemented  
✅ **Interactive Features**: Filters, search, and responsive layouts  
✅ **Live Deployment**: Accessible at hospitality-explorer.vercel.app  

## License

This project is created for educational purposes as part of the Hospitality Experience Explorer assignment.
