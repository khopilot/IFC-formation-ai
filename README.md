# Formation IA - Institut Français du Cambodge

![Formation IA](https://ibb.co/7KmvCQW)

## À propos du projet

Ce site web est dédié à une formation intensive de deux jours sur l'intelligence artificielle (IA) à l'Institut Français du Cambodge. Développé avec Next.js et TypeScript, il présente de manière claire et interactive le programme complet, en intégrant des éléments culturels et pratiques adaptés au contexte local et aux besoins du staff.

### Objectifs principaux

- **Informer** sur le programme complet de la formation (contenu théorique et ateliers pratiques)
- **Présenter** les cas d'utilisation de l'IA par département avec des exemples concrets
- **Valoriser** les initiatives locales (ex. : outil de cartographie de la pauvreté de la PNUD, eKYC de Slash/Clik)
- **Améliorer** l'expérience des participants avec des éléments interactifs et ludiques

## Technologies utilisées

- **Framework:** Next.js 14 (App Router)
- **Langage:** TypeScript
- **Styles:** Tailwind CSS
- **Déploiement:** Vercel
- **SEO:** Optimisation des balises meta et performance (SSG pour les pages statiques)
- **Performance:** Lazy loading, optimisation des images (composant Next.js Image)
- **Accessibilité:** HTML sémantique, attributs ARIA

## Structure du site

Le site est organisé en plusieurs sections :

1. **Page d'Accueil** - Introduction à la formation avec appel à l'action
2. **À Propos** - Contexte et objectifs de la formation
3. **Programme / Agenda** - Détail des deux jours de formation
4. **Cas d'Utilisation par Département** - Applications pratiques de l'IA pour chaque service
5. **Suggestions d'Amélioration** - Propositions pour améliorer l'expérience de formation
6. **Contact** - Formulaire pour questions et retours

## Installation et démarrage

```bash
# Cloner le dépôt
git clone https://github.com/khopilot/IFC-formation-ai.git
cd formation-ia

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Structure du projet

```
/formation-ia
├── /src
│   ├── /app                # Structure principale de l'application
│   │   ├── /(pages)        # Routes de l'application
│   │   ├── /api            # API routes
│   │   └── /components     # Composants principaux
│   ├── /components         # Composants partagés
│   ├── /hooks              # Hooks personnalisés
│   ├── /styles             # Styles globaux
│   ├── /types              # Types TypeScript
│   └── /utils              # Fonctions utilitaires
├── /public                 # Assets statiques
├── next.config.ts          # Configuration Next.js
├── tailwind.config.ts      # Configuration Tailwind
└── tsconfig.json           # Configuration TypeScript
```

## Fonctionnalités principales

- Design responsive adapté à tous les appareils
- Thème clair/sombre automatique
- Animation et transitions pour une expérience utilisateur optimale
- Contenu interactif (tableaux, cartes, visualisations)
- Support multilingue (français et anglais)

## Déploiement

Le site est déployé automatiquement sur [Vercel](https://vercel.com) à chaque push sur la branche `main`.

## Équipe

- [Khopilot](https://github.com/khopilot) - Développeur principal

## Licence

Ce projet est sous licence [MIT](LICENSE).
