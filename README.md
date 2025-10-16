# Rome - Multilingual Legal Website

> **Esquivel & Asociados** - Professional legal services website with complete English, Spanish, and Italian support

## 🌟 Features

- 🌍 **Multilingual Support**: Complete internationalization with English, Spanish, and Italian
- 🎨 **Professional Design**: Modern, responsive design tailored for legal services
- 🔄 **Language Switcher**: Seamless language switching with route-based URLs
- 📱 **Mobile First**: Fully responsive across all devices
- ⚡ **Performance**: Built with Astro for optimal loading speeds
- 🎯 **SEO Optimized**: Proper HTML structure and meta tags for search engines

## 🌐 Live URLs

- **English**: `/` - Main website in English
- **Spanish**: `/es/` - Complete Spanish translation
- **Italian**: `/it/` - Complete Italian translation

## 🛠️ Tech Stack

- **Framework**: Astro v5.13.7
- **Frontend**: React v19.1.1
- **Styling**: Tailwind CSS + Radix UI
- **Internationalization**: react-i18next
- **Language**: TypeScript
- **Package Manager**: npm

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── hero-bglawyers.jpg
│   └── consultation-C8f7Rmrh.jpg
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation with language switcher
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Contact.tsx       # Contact form and info
│   │   ├── Footer.tsx        # Footer with links
│   │   ├── LanguageSwitcher.tsx # Language toggle component
│   │   └── ui/               # Reusable UI components
│   ├── i18n/
│   │   ├── config.ts         # i18next configuration
│   │   └── locales/
│   │       ├── en.json       # English translations
│   │       ├── es.json       # Spanish translations
│   │       └── it.json       # Italian translations
│   ├── layouts/
│   │   ├── Base.astro        # Base layout (English)
│   │   ├── BaseEs.astro      # Spanish base layout
│   │   └── BaseIt.astro      # Italian base layout
│   ├── pages/
│   │   ├── index.astro       # Homepage (English)
│   │   ├── es/
│   │   │   └── index.astro   # Homepage (Spanish)
│   │   └── it/
│   │       └── index.astro   # Homepage (Italian)
│   ├── scripts/
│   │   └── init-i18n.ts      # i18n initialization
│   └── styles/
│       └── global.css        # Global styles and CSS variables
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :------------------------ | :----------------------------------------------- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI |

## 🌍 Internationalization

This project uses **react-i18next** for complete multilingual support:

- **Language Detection**: Automatically detects language from URL path
- **Route-based URLs**: `/` for English, `/es/` for Spanish, `/it/` for Italian
- **Persistent Language**: Selected language is saved in localStorage
- **SEO Friendly**: Proper `lang` attributes and separate routes for each language

### Adding New Languages

1. Create translation file in `src/i18n/locales/{language}.json`
2. Add language to `src/i18n/config.ts`
3. Update `LanguageSwitcher.tsx` to include new language
4. Create route in `src/pages/{language}/`
5. Add any language-specific layout in `src/layouts`

## 📄 Content Sections

- **Header**: Navigation, phone number, CTA button, language switcher
- **Hero**: Main headline, trust indicators, call-to-action buttons, statistics
- **About**: Company history, achievements, credentials, testimonials
- **Contact**: Contact form, office information, emergency contact
- **Footer**: Company info, service links, legal links, final CTA

## 🎨 Design System

- **Primary Colors**: Professional navy blue (`--primary`)
- **Accent**: Warm orange (`--accent`) for CTAs and highlights
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Components**: Built with Radix UI primitives and Tailwind CSS
- **Shadows**: Layered shadow system for depth
- **Animations**: Smooth transitions with custom timing functions

## 🚀 Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jspecialist/rome.git
   cd rome
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - English: `http://localhost:4321/`
   - Spanish: `http://localhost:4321/es/`

## 📝 License

This project is licensed under the MIT License.
