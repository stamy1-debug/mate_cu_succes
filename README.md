# Mate cu Succes

Platformă educațională premium în Next.js pentru pregătirea examenului de matematică - Evaluarea Națională.

## 🚀 Funcționalități

- **Abonamente Multi-Tier**: Starter, Pro și Elite cu prețuri și beneficii diferențiate
- **Autentificare Securizată**: Integrare completă cu Clerk pentru sign-up/sign-in
- **Rute Protejate**: Materiale și cont personal accesibile doar utilizatorilor autentificați
- **Design Responsive**: Optimizat pentru dispozitive mobile (320px+) până la desktop
- **Interfață în Română**: Toate string-urile UI și conținutul în limba română
- **Animații Subtile**: Tranziții smooth cu Framer Motion
- **Componente Moderne**: shadcn/ui pentru o experiență UI consistentă

## 📋 Structura Proiectului

```
mate_cu_succes/
├── src/
│   ├── app/                        # App Router pages
│   │   ├── (protected)/           
│   │   │   ├── contul-meu/        # User profile & subscription
│   │   │   └── materiale-gratuite/ # Protected materials
│   │   ├── pricing/               # Pricing plans page
│   │   ├── pregatire-en/          # EN preparation info
│   │   ├── sign-in/               # Clerk sign-in
│   │   ├── sign-up/               # Clerk sign-up
│   │   ├── layout.tsx             # Root layout with Header/Footer
│   │   ├── page.tsx               # Home landing page
│   │   └── globals.css            # Global styles & Tailwind
│   ├── components/                # Reusable React components
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── Header.tsx             # Navigation header
│   │   ├── Footer.tsx             # Site footer
│   │   └── PricingCard.tsx        # Pricing card component
│   ├── lib/                       # Utilities and helpers
│   │   ├── plans.ts               # Pricing plan definitions
│   │   ├── supabase.ts            # Supabase client setup
│   │   └── utils.ts               # Helper functions (cn, etc.)
│   └── middleware.ts              # Clerk auth middleware
├── supabase/
│   └── schema.sql                 # Database schema for profiles
├── .env.example                   # Environment variables template
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

## 🛠️ Stack Tehnologic

- **Framework**: Next.js 15+ (App Router)
- **Limbaj**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + tailwindcss-animate
- **Componente UI**: shadcn/ui (Button, Card, Input, Dialog)
- **Animații**: Framer Motion (fade/slide transitions)
- **Autentificare**: Clerk
- **Bază de Date**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage (scaffolded)
- **Fonturi**: Inter (body) + Playfair Display (headings)

## 📦 Instalare și Configurare

### Prerequisite

- Node.js 20+ și npm
- Cont Clerk (pentru autentificare)
- Cont Supabase (pentru bază de date)

### Pași de Instalare

1. **Clonează repository-ul**
   ```bash
   git clone https://github.com/steli13-ai/mate_cu_succes.git
   cd mate_cu_succes
   ```

2. **Instalează dependențele**
   ```bash
   npm install
   ```

3. **Configurează variabilele de mediu**
   
   Copiază `.env.example` în `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Editează `.env.local` și adaugă cheile tale:

   **Clerk** (obține de la [Clerk Dashboard](https://dashboard.clerk.com)):
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

   **Supabase** (obține de la [Supabase Dashboard](https://app.supabase.com)):
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Configurează baza de date Supabase**
   
   Rulează SQL-ul din `supabase/schema.sql` în Supabase SQL Editor pentru a crea tabelul `profiles`:
   ```bash
   # Sau folosește Supabase CLI
   supabase db push
   ```

5. **Rulează aplicația în modul development**
   ```bash
   npm run dev
   ```

   Aplicația va fi disponibilă la `http://localhost:3000`

## 🚢 Deploy pe Vercel

### Deploy Rapid

1. Push codul pe GitHub
2. Importă repository-ul în [Vercel](https://vercel.com)
3. Adaugă variabilele de mediu în Vercel Dashboard (Settings → Environment Variables)
4. Deploy automat la fiecare push pe `main`

### Configurare Vercel

Vercel detectează automat Next.js. Nu sunt necesare configurări suplimentare.

**Variabile de mediu necesare în Vercel**:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📄 Pagini și Rute

| Rută | Descriere | Protected |
|------|-----------|-----------|
| `/` | Landing page cu hero, features, pricing preview | ❌ |
| `/pricing` | Pagina completă de prețuri cu 3 planuri | ❌ |
| `/pregatire-en` | Informații despre pregătirea pentru EN | ❌ |
| `/materiale-gratuite` | Materiale educaționale și teste | ✅ |
| `/contul-meu` | Profil utilizator și gestionare abonament | ✅ |
| `/sign-in` | Autentificare (Clerk) | ❌ |
| `/sign-up` | Înregistrare (Clerk) | ❌ |

## 💳 Planuri de Abonament

### Starter - 79 RON/lună
- Acces la cursuri video de bază
- Materiale gratuite descărcabile
- Suport prin email
- Acces la comunitatea online
- Teste de evaluare lunare

### Pro - 149 RON/lună ⭐ (Recomandat)
- Tot din Starter, plus:
- Acces complet la toate cursurile
- Sesiuni live săptămânale
- Simulări nelimitate
- Feedback personalizat
- Grupe de studiu ghidate

### Elite - 299 RON/lună
- Tot din Pro, plus:
- Sesiuni 1-la-1 (2 ore/lună)
- Plan personalizat
- Suport prioritar 24/7
- Analiză detaliată progres
- Materiale exclusive premium
- Certificat de absolvire

## 🧪 Comenzi Disponibile

```bash
# Development
npm run dev          # Pornește serverul de development

# Production
npm run build        # Creează build-ul de producție
npm run start        # Pornește serverul de producție

# Quality
npm run lint         # Rulează ESLint
```

## 🔒 Securitate și Conformitate

- ✅ Autentificare securizată cu Clerk
- ✅ Protecție a rutelor cu middleware
- ✅ Variabile de mediu separate pentru producție
- ✅ Row Level Security (RLS) în Supabase
- ✅ Validare TypeScript strictă
- ✅ Fără secrete hardcodate în cod

## ♿ Accesibilitate

- Semantic HTML (nav, main, footer, article, etc.)
- ARIA labels pentru interactive elements
- Focus states pentru keyboard navigation
- Responsive design pentru toate screen sizes
- Contrast ratios conform WCAG 2.1

## 📱 Responsive Design

Aplicația este optimizată pentru:
- 📱 Mobile: 320px - 768px
- 📱 Tablet: 768px - 1024px
- 💻 Desktop: 1024px+

## 🎨 Design System

### Culori
- **Primary**: Blue (`hsl(221.2 83.2% 53.3%)`)
- **Secondary**: Light Gray
- **Background**: White / Dark mode support
- **Accent**: Pentru CTA și elemente importante

### Tipografie
- **Body**: Inter (sans-serif)
- **Headings**: Playfair Display (serif)

## 🔮 Viitoare Funcționalități

- [ ] Integrare completă plăți (Stripe)
- [ ] Upload și management materiale PDF
- [ ] Sistem de notificări
- [ ] Dashboard analitică progres
- [ ] Sesiuni live video integrate
- [ ] Chat suport în timp real
- [ ] Mobile app (React Native)

## 🤝 Contribuții

Acest proiect este în dezvoltare activă. Pentru contribuții sau raportarea de bug-uri, deschide un issue sau pull request.

## 📄 Licență

Toate drepturile rezervate © 2024 Mate cu Succes

## 📞 Contact

Pentru întrebări sau suport: [contact@matecusucces.ro](mailto:contact@matecusucces.ro)

---

**Made with ❤️ pentru elevii români**
