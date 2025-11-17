# Kenomi Communication - Site Web Officiel

Site web professionnel, contemporain et entièrement responsive pour Kenomi Communication, une agence spécialisée dans la conception de sites web et les services d'accompagnement digital.

## Technologies Utilisées

- **Framework**: [Next.js 16](https://nextjs.org/) avec App Router
- **Langage**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icônes**: [Lucide React](https://lucide.dev/)
- **Email**: [Brevo (Sendinblue) API](https://www.brevo.com/)

## Fonctionnalités

### Pages

1. **Page d'accueil (Home)**
   - Design moderne et épuré avec animations légères
   - Hero banner avec gradient animé
   - Sections : Services, Approche, Call-to-Action
   - Scroll indicator animé

2. **Page Réalisations**
   - Galerie dynamique avec système de filtres
   - Grid responsive avec hover animations
   - Modal détaillé pour chaque projet
   - Catégories : Web, Branding, UX/UI, Mobile

3. **Page Services**
   - Présentation complète des 6 services principaux
   - Design cards avec hover effects
   - Section processus (5 étapes)
   - Avantages et garanties

4. **Page Contact**
   - Formulaire connecté à Brevo API
   - Validation côté client et serveur
   - Messages de confirmation/erreur animés
   - Informations de contact avec icônes

### Composants Globaux

- **Header**: Navigation sticky avec menu responsive
- **Footer**: Informations complètes, liens, réseaux sociaux
- **Animations**: Transitions fluides et micro-interactions

### SEO & Performance

- Meta tags dynamiques par page
- Open Graph et Twitter Cards
- Structure sémantique HTML5
- Optimisation des images
- Lazy loading
- Score Lighthouse optimisé

## Installation

### Prérequis

- Node.js 18+ et npm/yarn/pnpm
- Compte Brevo (pour l'envoi d'emails)

### Étapes

1. Cloner le repository :
```bash
git clone <repository-url>
cd kenomi-com
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configurer les variables d'environnement :
```bash
cp .env.example .env
```

Puis éditer `.env` avec vos credentials Brevo :
```env
BREVO_API_KEY=votre_cle_api_brevo
BREVO_SENDER_EMAIL=noreply@votre-domaine.com
BREVO_RECIPIENT_EMAIL=contact@votre-domaine.com
```

4. Lancer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Configuration Brevo

1. Créer un compte sur [Brevo](https://www.brevo.com/)
2. Aller dans **Settings** → **SMTP & API** → **API Keys**
3. Créer une nouvelle clé API
4. Vérifier votre email expéditeur dans **Senders**
5. Copier les informations dans votre fichier `.env`

## Structure du Projet

```
kenomi-com/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route pour le formulaire
│   ├── components/
│   │   ├── Header.tsx            # Header global
│   │   └── Footer.tsx            # Footer global
│   ├── lib/
│   │   └── metadata.ts           # Configuration SEO
│   ├── contact/
│   │   ├── layout.tsx            # Layout + metadata
│   │   └── page.tsx              # Page contact
│   ├── realisations/
│   │   ├── layout.tsx
│   │   └── page.tsx              # Page réalisations
│   ├── services/
│   │   ├── layout.tsx
│   │   └── page.tsx              # Page services
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Page d'accueil
├── public/                        # Assets statiques
├── .env.example                   # Template variables d'env
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Scripts Disponibles

```bash
# Développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm run start

# Linter
npm run lint
```

## Déploiement

### Vercel (Recommandé)

1. Pusher le code sur GitHub/GitLab/Bitbucket
2. Importer le projet sur [Vercel](https://vercel.com)
3. Ajouter les variables d'environnement dans les settings
4. Déployer

### Autres Plateformes

Le site peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- Render
- etc.

## Personnalisation

### Couleurs

Les couleurs principales sont définies dans [app/globals.css](app/globals.css):
- Vert Kenomi: `#10b981` (emerald-500)
- Bleu Kenomi: `#0ea5e9` (sky-500)

### Contenu

- **Services**: Modifier [app/services/page.tsx](app/services/page.tsx)
- **Réalisations**: Ajouter/modifier les projets dans [app/realisations/page.tsx](app/realisations/page.tsx)
- **Contact**: Informations dans [app/contact/page.tsx](app/contact/page.tsx) et [app/components/Footer.tsx](app/components/Footer.tsx)

### SEO

Modifier les métadonnées dans :
- [app/lib/metadata.ts](app/lib/metadata.ts) pour les valeurs par défaut
- Chaque `layout.tsx` pour les pages spécifiques

## Support

Pour toute question ou problème :
- Email : contact@kenomi.com
- Téléphone : +33 1 23 45 67 89

## Licence

© 2025 Kenomi Communication. Tous droits réservés.

---

**Développé avec ❤️ par Kenomi Communication**
