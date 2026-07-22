# Accredian Enterprise & Referral Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-performance, enterprise-grade web application and referral platform built as an official-level clone of **[Accredian Enterprise](https://enterprise.accredian.com)**.

Architected following **SOLID principles**, **Clean Architecture**, **Domain-Driven Feature Organization**, and **Layered Service/Repository Patterns**.

---

## 📌 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Design Patterns](#-architecture--design-patterns)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
  - [Available Scripts](#available-scripts)
  - [Build & Production](#build--production)
- [API Documentation](#-api-documentation)
- [Performance Optimizations](#-performance-optimizations)
- [Code Quality & Engineering Standards](#-code-quality--engineering-standards)
- [Deployment](#-deployment)
- [Testing & Linting](#-testing--linting)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Project Overview

The **Accredian Enterprise Platform** provides corporate training, executive precision learning, and guaranteed referral rewards. This application replicates Accredian's enterprise branding, navigation, program showcases, track record statistics, interactive referral modal, and API handling.

It serves as a production-grade blueprint demonstrating modern Next.js 15 App Router capabilities, server/client decoupling, custom hooks, and type-safe schema validation.

---

## ✨ Key Features

- 🎯 **High-Fidelity Enterprise UI**: Implements Accredian's enterprise design tokens (`#1047B8` primary blue, soft slate cards, crisp typography, and subtle micro-animations).
- 📱 **Fully Responsive Shell**: Sticky navbar with scroll elevation, desktop mega-navigation, and an accessible animated mobile menu.
- ⚡ **Interactive Referral System**: Accessible modal dialog allowing users to refer colleagues to executive programs and generate cash rewards up to ₹15,000.
- 🧪 **Schema Validation & Form Lifecycle**: Form handling using **React Hook Form**, **Zod** schema validation, and **Sonner** toast feedback.
- 🔄 **Layered Server Service API**: Server-side API endpoint (`POST /api/referral`) with input validation, latency simulation, and formatted JSON responses.
- 👁 **Intersection Observer Navigation**: High-performance viewport active section tracker (`useActiveSection`) with smooth scroll offset logic.
- 🎨 **Fluid Micro-Animations**: Smooth entry transitions, interactive card hover effects, and skeleton fallbacks powered by **Framer Motion** and **Lucide React**.
- ♿ **WCAG 2.1 AA Accessibility**: Semantic HTML5 markup, ARIA dialog bounds (`role="dialog"`, `aria-modal="true"`), keyboard ESC trap, and focus management.

---

## 🛠 Tech Stack

| Category | Technology | Version | Description |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `^15.1.0` | React framework with App Router & API Route Handlers |
| **UI Library** | [React](https://react.dev/) | `^19.0.0` | Frontend UI component library |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.0.0` | Strict static typing and interface definitions |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.4.17` | Utility-first CSS framework |
| **Form Management** | [React Hook Form](https://react-hook-form.com/) | `^7.82.0` | High-performance, un-controlled form state manager |
| **Validation** | [Zod](https://zod.dev/) | `^4.4.3` | TypeScript-first schema declaration & validation |
| **Validation Resolver** | [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | `^5.4.0` | Zod resolver integration for React Hook Form |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | `^12.0.0` | Production-ready motion and gesture library |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.475.0` | Lightweight icon suite |
| **Toasts** | [Sonner](https://sonner.emilkowal.si/) | `^2.0.7` | Toast notification engine |
| **Class Utilities** | `clsx` & `tailwind-merge` | `^2.1.1` / `^3.0.1` | Dynamic classname merger (`cn`) |

---

## 🏛 Architecture & Design Patterns

The codebase is organized according to **Clean Architecture** and **Domain-Driven Feature Organization**:

```
           +---------------------------------------------+
           |           Presentation Layer (UI)           |
           |   (Hero, Features, Benefits, ReferralModal)  |
           +----------------------+----------------------+
                                  |
                                  v
           +----------------------+----------------------+
           |       Custom Hooks & Application Logic      |
           |        (useReferralForm, useActiveSection)  |
           +----------------------+----------------------+
                                  |
                                  v
           +----------------------+----------------------+
           |             Domain Service Layer            |
           |  (ReferralApiService, ReferralServerService) |
           +----------------------+----------------------+
                                  |
                                  v
           +----------------------+----------------------+
           |     Validation & Domain Data Schemas        |
           |          (Zod Schema, Domain Types)         |
           +---------------------------------------------+
```

### Applied Engineering Patterns
1. **Repository / Service Pattern**: Client-side API requests (`referralApiService`) and server-side request handlers (`referralServerService`) are completely decoupled from presentation components.
2. **Container / Presenter Pattern**: Components like `ReferralModal` act strictly as UI presenters consuming state and callbacks from custom hooks (`useReferralForm`).
3. **Single Responsibility Principle (SRP)**: UI components contain zero inline data arrays or network fetch logic; data datasets are managed in `enterprise.constants.tsx`.
4. **Feature-Driven Domain Boundaries**: Features (`enterprise`, `referral`) encapsulate their own components, constants, types, hooks, and services. Shared design system elements live in `src/shared/`.
5. **Backward Compatibility via Barrel Exports**: Legacy import paths (`@/components/*`, `@/types/*`, `@/lib/*`, `@/hooks/*`, `@/data/*`) re-export from new feature and shared layers.

---

## 📁 Folder Structure

```
accredian-clone/
├── public/                             # Static public assets and graphics
│   └── images/                         # Enterprise hero graphics
├── src/
│   ├── app/                            # Next.js App Router (Routing & Route Handlers)
│   │   ├── api/
│   │   │   └── referral/
│   │   │       └── route.ts            # POST /api/referral endpoint (delegates to server service)
│   │   ├── globals.css                 # Global CSS tokens & Tailwind directives
│   │   ├── layout.tsx                  # Root HTML layout with Sonner Toaster
│   │   └── page.tsx                    # Clean Home Page composition
│   │
│   ├── features/                       # Domain Features (Domain-Driven Architecture)
│   │   ├── enterprise/                 # Enterprise Domain Feature
│   │   │   ├── components/             # Hero, TrustedCompanies, Features, Benefits, Testimonials, FAQ, CTA
│   │   │   ├── constants/              # Enterprise static datasets (Partners, Stats, FAQs, Pillars)
│   │   │   └── types/                  # Enterprise domain interfaces
│   │   │
│   │   └── referral/                   # Referral System Domain Feature
│   │       ├── components/             # ReferralModal presenter
│   │       ├── hooks/                  # useReferralForm custom hook
│   │       ├── services/               # Client-side API service (ReferralApiService)
│   │       ├── server/services/        # Server-side business service (ReferralServerService)
│   │       ├── validations/            # Zod referral schema definitions
│   │       └── types/                  # Referral payload & response interfaces
│   │
│   ├── shared/                         # Core Shared / Cross-Cutting Layer
│   │   ├── components/
│   │   │   ├── layout/                 # TopBanner, Navbar, Footer
│   │   │   ├── ui/                     # Core Design System (Button, CTAButton, Card, Input, Badge, Container, SectionHeading, Skeleton)
│   │   │   └── widgets/                # Domain-agnostic widgets (CompanyLogo, FeatureCard)
│   │   ├── constants/                  # Navigation constants & section IDs
│   │   ├── hooks/                      # Global custom hooks (useActiveSection)
│   │   ├── lib/                        # Utility functions (cn class merger)
│   │   └── types/                      # Common API & section types
│   │
│   ├── components/                     # Re-export barrels for backward compatibility
│   ├── data/                           # Re-export barrels for backward compatibility
│   ├── hooks/                          # Re-export barrels for backward compatibility
│   ├── lib/                            # Re-export barrels for backward compatibility
│   └── types/                          # Re-export barrels for backward compatibility
│
├── next.config.ts                      # Next.js configuration
├── package.json                        # Node dependencies & project scripts
├── postcss.config.mjs                  # PostCSS configuration
├── tailwind.config.ts                  # Tailwind design system theme configuration
├── tsconfig.json                       # TypeScript configuration & path aliases (@/*)
└── README.md                           # Documentation
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher (Node `v20+` recommended)
- **Package Manager**: `npm` (v9+), `yarn`, or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adisuryawanshi13-code/Accredian-clone.git
   cd Accredian-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Environment Variables
*(Not verifiable / None required currently)*. The application operates out-of-the-box using the built-in Next.js App Router mock API handler.

### Running Locally

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches Next.js development server with hot-reloading |
| `npm run build` | Compiles and optimizes production bundle |
| `npm run start` | Starts the Next.js production server post-build |
| `npm run lint` | Runs Next.js ESLint checks |
| `npx tsc --noEmit` | Runs strict TypeScript type-checking |

### Build & Production

To verify and start the production build:
```bash
npm run build
npm run start
```

---

## 📡 API Documentation

### `POST /api/referral`

Submits a new student/colleague referral.

#### Request Headers
```http
Content-Type: application/json
```

#### Request Body Schema (`ReferralPayload`)
```json
{
  "referrerName": "John Doe",
  "referrerEmail": "john@example.com",
  "refereeName": "Jane Smith",
  "refereeEmail": "jane@example.com",
  "program": "Product Management",
  "notes": "Optional notes"
}
```

#### Validation Rules
- `referrerName`: String, min 2 chars, max 50 chars.
- `referrerEmail`: Valid email format.
- `refereeName`: String, min 2 chars, max 50 chars.
- `refereeEmail`: Valid email format, **must be different from `referrerEmail`**.
- `program`: Required non-empty string.

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Referral submitted successfully! Bonus will be credited upon Jane Smith's enrollment.",
  "referralId": "REF-584920",
  "data": {
    "referrerName": "John Doe",
    "referrerEmail": "john@example.com",
    "refereeName": "Jane Smith",
    "refereeEmail": "jane@example.com",
    "program": "Product Management",
    "rewardAmount": "₹15,000",
    "createdAt": "2026-07-22T22:30:00.000Z"
  }
}
```

#### Error Response (`400 Bad Request`)
```json
{
  "success": false,
  "error": "Validation failed",
  "details": {
    "refereeEmail": ["Referee email cannot be the same as referrer email"]
  }
}
```

---

## ⚡ Performance Optimizations

1. **IntersectionObserver Viewport Observer**: Replaced window `scroll` event listeners with `IntersectionObserver` in `useActiveSection`, eliminating layout thrashing and preserving high FPS during scrolling.
2. **Server-Side Rendered (SSR) Static Shell**: Static page content (`src/app/page.tsx`) renders on the server for minimal First Input Delay (FID) and fast Largest Contentful Paint (LCP).
3. **Next.js Image Optimization**: Image components utilize `next/image` with webp encoding, priority loading, lazy loading, and responsive `sizes` definitions.
4. **Optimized Bundle Overhead**: Modular icon imports from `lucide-react` ensure minimal tree-shaken JavaScript bundle sizes.

---

## 🧼 Code Quality & Engineering Standards

- **SOLID Principles**: Adheres to Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion across features and services.
- **Clean Code**: Meaningful component and function naming, self-documenting prop types, zero dead code.
- **Strict Type Safety**: Strict TypeScript mode enabled with no explicit `any` types.
- **Form Safety**: React Hook Form coupled with Zod schema resolution prevents invalid client data submission.

---

## 🌐 Deployment

### Deploying to Vercel

1. Push your repository to GitHub.
2. Connect your repository to [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js 15 and deploys your project instantly.

---

## 🧪 Testing & Linting

Run TypeScript validation:
```bash
npx tsc --noEmit
```

Run ESLint:
```bash
npm run lint
```

---

## ❓ Troubleshooting

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| `Module not found: Can't resolve '@/...'` | Path alias misconfiguration | Verify `tsconfig.json` contains `"paths": { "@/*": ["./src/*"] }` |
| `npm run build` fails | TypeScript or type mismatch | Run `npx tsc --noEmit` locally to identify exact line mismatches |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `package.json` for project details.

---

## 🙏 Acknowledgements

- Inspired by [Accredian Enterprise](https://enterprise.accredian.com).
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).