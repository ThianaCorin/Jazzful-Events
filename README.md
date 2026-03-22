# Jazzful Events

Site vitrine pour **Jazzful Events**, un collectif de musiciens de jazz spécialisé dans les prestations événementielles haut de gamme en Provence et à l'international.

## À propos du projet

Jazzful Events propose des formations musicales sur mesure pour tous types d'événements : mariages, cocktails, soirées corporate, hôtellerie, festivals et soirées privées. Ce site a été conçu pour présenter l'univers du collectif, ses formations, son répertoire et permettre aux clients de faire une demande de devis en ligne.

## Méthodologie

Le site a été construit progressivement :

- Export d'une première base générée via un outil no-code
- Reprise complète du projet dans VS Code
- Nettoyage et restructuration du code
- Rewriting des textes pour un positionnement marketing premium
- Optimisation UX section par section
- Création d'animations et ajustements responsive
- Personnalisation du formulaire de contact

Le projet a été pensé comme un site réel destiné à être publié et utilisé commercialement.

## Stack technique

- **React 18** + **TypeScript**
- **Vite** — bundler et serveur de développement
- **Tailwind CSS** — styling utilitaire
- **shadcn/ui** — composants UI accessibles et personnalisables
- **Framer Motion** — animations et transitions
- **React Router** — navigation entre les pages
- **Lucide React** — icônes

## Structure du projet
```
src/
├── assets/          # Images et médias
├── components/
│   └── ui/          # Composants shadcn/ui
├── hooks/           # Hooks React personnalisés
├── lib/             # Utilitaires
├── pages/           # Pages de l'application
│   ├── Index.tsx
│   ├── Confidentialite.tsx
│   └── NotFound.tsx
public/              # Favicon et fichiers statiques
```

## Sections du site

- **Hero** — Présentation principale avec image plein écran
- **Formations** — Duo, Trio, Quartet, Quintet & plus
- **Événements** — Types d'occasions couvertes
- **Galerie** — Photos de prestations
- **Répertoire** — Standards jazz, Bossa Nova, Swing, French Touch
- **Témoignages** — Avis clients
- **Zone d'intervention** — PACA et international
- **Contact** — Formulaire de demande de devis

## Lancer le projet en local
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:8080](http://localhost:8080)

## Build de production
```bash
npm run build
```

## Perspectives d'évolution

- Version bilingue (FR / EN)
- Ajout de vidéos live
- Intégration d'un CMS pour la gestion du contenu
- Branchement du formulaire de contact via EmailJS
- Optimisation SEO
- Déploiement en production sur domaine custom

## Contact

**Jazzful Events**
Pertuis, France
contact@jazzful-events.fr