# Rayan Minlang — portfolio professionnel

[Voir le portfolio public](https://minlangrayan-ship-i.github.io/rayan-minlang-portfolio/)

Next.js App Router, React, TypeScript strict, Tailwind CSS 4. Interface responsive, contact email/LinkedIn, Engineering Journey, projets filtrables avec détails, métadonnées et export statique.

## Installation

Node.js 22 LTS et npm :

```sh
npm ci
npm run dev
```

Ouvrir http://localhost:3000. Vérifications : `npm run typecheck` et `npm run build`. Le build produit le dossier statique `out/`. L’export statique doit être servi par un serveur de fichiers ; `next start` ne s’applique pas à ce mode.

## Données

Modifier `data/portfolio.ts` pour les coordonnées, bio, formations, compétences, projets et étapes de progression. Un projet apparaît dans la galerie seulement si `published: true`. Les pistes non documentées restent dans les données. Ajouter le CV réel dans `public/` puis renseigner `contact.cv` (avec le préfixe du site si déploiement en sous-dossier).

Le formulaire prépare un email dans la messagerie du visiteur, qui doit valider l’envoi. Aucun message n’est transmis par un serveur du portfolio et aucune donnée de formulaire n’y est stockée.

Les étapes AI & Data et Project Leadership sont des objectifs futurs. Le site ne revendique pas d’expertise acquise ni de résultats non vérifiables. La fiche Java décrit le code fourni dans le dossier de travail, avec son contexte individuel à préciser. La réalisation de l’interface du portfolio a été assistée par IA.

## GitHub Pages

Le workflow `.github/workflows/deploy.yml` compile et publie à chaque push sur `main`. Il utilise `npm ci`, vérifie TypeScript puis exporte le site. GitHub Pages doit être configuré avec GitHub Actions comme source.

Variables de compilation utilisées :

```env
NEXT_PUBLIC_SITE_URL=https://minlangrayan-ship-i.github.io/rayan-minlang-portfolio/
NEXT_PUBLIC_BASE_PATH=/rayan-minlang-portfolio
```

## Option Vercel

Importer ce dépôt avec le preset Next.js. Renseigner `NEXT_PUBLIC_SITE_URL` avec le domaine Vercel réel. Laisser `NEXT_PUBLIC_BASE_PATH` vide pour une publication à la racine. Recompiler après chaque changement d’URL. Vercel peut servir l’export statique ; conserver le build `npm run build` et utiliser `out` comme sortie si nécessaire.

## SEO et accessibilité

Titre, description, canonical, OpenGraph, Twitter, favicon, JSON-LD Person, sitemap et robots. Sans URL réelle, indexation désactivée. Liens d’évitement, titres structurés, labels, focus visibles, filtres `aria-pressed`, dialogue natif et préférence de réduction des animations. Sur GitHub Pages en sous-dossier, `robots.txt` est exporté sous le dossier du projet ; les robots consultent normalement celui à la racine du domaine.

## Structure

```text
app/                    Page, layout, styles, SEO
components/             Navigation, projets, contact, Engineering Journey
data/portfolio.ts       Données et types
examples/java-report/   Exercice Java et limites documentées
docs/recruiter-audit.md  Audit de la lecture en 30 secondes
public/                 Favicon
.github/workflows/      Déploiement automatique
```

Les fichiers `.runtime/`, `node_modules/`, `.next/` et `out/` sont locaux et exclus de Git.

À compléter : CV, modalités d’alternance et justificatif de certification. Aucun score Lighthouse n’est annoncé sans mesure.
