# Spécifications du site web pour la Formation Intensive sur l'IA

## Aperçu du Projet
Ce document décrit les spécifications pour la création d'un site web dédié à une formation intensive de deux jours sur l'intelligence artificielle (IA) à l'Institut Français du Cambodge. Le site sera développé avec **Next.js** et **TypeScript**. L'objectif est de présenter de manière claire et interactive le programme, en intégrant des éléments culturels et pratiques adaptés au contexte local et aux besoins du staff.

## Objectifs
- **Informer** sur le programme complet de la formation (contenu théorique et ateliers pratiques).
- **Présenter** les cas d'utilisation de l'IA par département avec des exemples concrets.
- **Valoriser** les initiatives locales (ex. : outil de cartographie de la pauvreté de la PNUD, eKYC de Slash/Clik).
- **Améliorer** l'expérience des participants en intégrant des éléments interactifs et ludiques.

## Exigences Techniques
- **Framework:** Next.js
- **Langage:** TypeScript
- **Gestion des styles:** CSS Modules ou Styled Components (à définir)
- **SEO:** Optimisation des balises meta et performance (SSG pour les pages statiques)
- **Performance:** Lazy loading, optimisation des images (composant Next.js Image)
- **Accessibilité:** HTML sémantique, ARIA attributes

## Structure du Site

### Pages Principales

1. **Page d'Accueil**
   - Brève introduction à la formation intensive sur l'IA.
   - Appel à l'action (ex. : "Découvrir le programme" ou "S'inscrire").

2. **À Propos de la Formation**
   - Contexte et objectifs de la formation.
   - Présentation des deux jours de formation avec un focus sur l'introduction à l'IA et ses applications par département.
   - Mention des exemples locaux pour enrichir le contenu.

3. **Programme / Agenda**
   - **Jour 1: Introduction et Cas d'Utilisation Généraux**
     - **Matin:** Fondamentaux de l'IA (définition, historique, types d'IA : Narrow AI, apprentissage automatique, NLP, vision par ordinateur).
     - **Après-midi:** Applications concrètes (exemples comme Duolingo, Art Selfie) et activité pratique.
   - **Jour 2: Cas d'Utilisation par Département**
     - **Matin:** Administration (automatisation, analyse de données), IT (cybersécurité, maintenance prédictive), Centre de Ressources (systèmes de recommandation).
     - **Après-midi:** Événements culturels, éducation et atelier collaboratif.
   - Une section sur l'éthique de l'IA (biais, vie privée, inclusivité).

4. **Cas d'Utilisation par Département**
   - Tableau récapitulatif présentant les applications d'IA pour chaque département.
   - Exemple de tableau :

     | Département          | Cas d'Utilisation de l'IA                                          | Exemples Pratiques                                         |
     |----------------------|--------------------------------------------------------------------|------------------------------------------------------------|
     | **Langage**          | Apprentissage personnalisé, chatbots, correction automatique       | Duolingo, chatbots pour la pratique conversationnelle      |
     | **Culturel**         | Planification d'événements, engagement du public, analyse de sentiments | Recommandations personnalisées, expositions interactives     |
     | **Éducatif**         | Apprentissage adaptatif, alerte précoce pour étudiants, prédiction d'inscriptions | Plateformes comme Khan Academy, analyse prédictive         |
     | **Administratif**    | Automatisation des tâches, analyse de données, chatbots              | Gestion des emails, planification, réponses automatiques   |
     | **IT**               | Cybersécurité, maintenance prédictive, optimisation des ressources   | Détection des menaces, surveillance des serveurs           |
     | **Bibliothèque/CR**  | Systèmes de recommandation, catalogage, numérisation                 | Recommandation de livres, gestion des archives numériques  |

5. **Suggestions d'Amélioration pour le Staff**
   - **Interactivité et Gamification :**
     - Intégrer des quizz interactifs (via Kahoot, Mentimeter).
     - Proposer des jeux de rôle ou simulations (ex. : incarner un chatbot).
   - **Adaptation au Contexte Local :**
     - Utiliser des exemples locaux (chatbots sur Messenger, applications de traduction pour le khmer).
     - Créer des liens avec la culture franco-khmère (ex. : traduction de contes traditionnels).
   - **Confort et Rythme :**
     - Prévoir des pauses dynamiques (10-15 minutes toutes les 90 minutes).
     - Adapter les horaires (ex. : démarrer à 9h30 et finir à 16h30) pour le climat tropical.
     - Offrir des collations locales pour une ambiance conviviale.
   - **Collaboration et Valorisation :**
     - Organiser des ateliers co-créatifs et des sessions de feedback participatif.
     - Remettre des certificats de participation personnalisés.
   - **Supports Visuels et Simplicité :**
     - Utiliser des slides colorées avec infographies et illustrations simples.
     - Faire des démonstrations en direct d’outils d’IA pour rendre le contenu vivant.

6. **Contact et Feedback**
   - Formulaire de contact pour recueillir questions et suggestions.
   - Section de feedback pour obtenir l’avis des participants sur chaque session.

## Composants et Fonctionnalités
- **Navbar:** Menu de navigation vers toutes les pages.
- **Footer:** Informations de contact, réseaux sociaux, mentions légales.
- **Éléments Interactifs:**
  - Composant de quiz.
  - Modale pour affichage de détails supplémentaires.
- **Animations:** Transitions légères pour améliorer l'expérience utilisateur.
- **Design Responsive:** Optimisé pour mobile, tablette et desktop.
- **Localisation:** Support des langues (français et anglais).

## Gestion de Contenu
- **Pages Statiques (SSG):** Pour les pages "À Propos", "Programme", "Cas d'Utilisation".
- **Contenu Dynamique:** Intégration des API routes de Next.js pour la gestion des inscriptions et feedback en temps réel.

## Structure du Projet

/project-root
├── /components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Quiz.tsx
│   └── Modal.tsx
├── /pages
│   ├── index.tsx
│   ├── about.tsx
│   ├── schedule.tsx
│   ├── departments.tsx
│   └── contact.tsx
├── /public
│   └── images
├── /styles
│   └── globals.css
├── /utils
│   └── api.ts
├── tsconfig.json
└── package.json

## Processus de Développement
- **Contrôle de Version:** Utiliser Git pour la gestion collaborative du code.
- **CI/CD:** Mettre en place une intégration continue (ex. : GitHub Actions).
- **Déploiement:** Déployer le site sur Vercel pour une intégration transparente avec Next.js.
- **Tests:** Écrire des tests unitaires et d’intégration pour les composants essentiels.

## Remarques Finales
Ce document sert de guide complet pour créer un site web moderne, interactif et adapté aux exigences de la formation intensive sur l'IA à l'Institut Français du Cambodge. L'objectif est de proposer une expérience utilisateur plaisante et engageante grâce à une navigation intuitive, des éléments interactifs et une forte adaptation au contexte local.

