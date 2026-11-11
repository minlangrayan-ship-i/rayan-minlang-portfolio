# Vérification du portfolio — certification PPM

Date : 11 novembre 2026. Périmètre : portfolio de Rayan Minlang.

## Référence et intention

Source : portfolio public, commit `f419c8c`, capturé avant publication de cette mise à jour dans Microsoft Edge, avec l’accord de l’utilisateur. Le brief demande une évolution lumineuse, plus interactive, fondée sur le portfolio existant. La palette claire et la nouvelle hiérarchie constituent donc des changements intentionnels, et non une reproduction à l’identique de l’ancien thème sombre.

- Source ordinateur : `.runtime/qa/published-before-desktop.png`, 1440 × 1000 pixels.
- Implémentation ordinateur : `.runtime/qa/after-desktop.png`, 1440 × 1000 pixels.
- Source mobile : `.runtime/qa/published-before-mobile.png`, 390 × 844 pixels.
- Implémentation mobile : `.runtime/qa/after-mobile.png`, 390 × 844 pixels.
- Densité : `deviceScaleFactor: 1` ; tailles CSS égales aux tailles pixel. Pas de normalisation nécessaire.
- Comparaisons réellement assemblées et ouvertes : `.runtime/qa/comparison-desktop.png` (2880 × 1000), `.runtime/qa/comparison-mobile.png` (780 × 844).
- Comparaison à thème sombre identique : `.runtime/qa/comparison-desktop-dark.png` ; rendu révisé dans `.runtime/qa/after-dark-desktop-top.png`.

## Comparaisons ciblées

Les captures ont été ouvertes et examinées, en complément des vues d’ensemble :

- `.runtime/qa/after-certificate.png` : intitulé, date, organisme, copie du document et boutons.
- `.runtime/qa/after-capabilities.png` : onglets, texte explicatif, livrable et illustration créditée.
- `.runtime/qa/after-gantt.png` : image originale, explication des dépendances et attribution CC BY-SA.
- `.runtime/qa/after-microsoft-project.png` : capture Microsoft identifiée, fonctions, source et conditions de réutilisation.
- `.runtime/qa/after-eloquence.png` : déroulement, apport personnel, compétences et justificatif.
- `.runtime/qa/after-snee.png` : statut et document déjà publiés conservés.
- `.runtime/qa/after-mobile-navigation-certificate.png` : arrivée mobile sur la section.

## Constats

Aucun problème P0, P1 ou P2 restant dans le périmètre observé.

- Typographie : identité lisible, hiérarchie de titres conservée, contraste entre titres sans empattement et accents éditoriaux en Georgia. Polices système ; aucun téléchargement de police externe. Les noms longs et les titres de certification s’adaptent au mobile.
- Espacement : grille cohérente, marges et cartes alignées. Les six étapes du parcours passent en liste verticale sur petit écran. La photo personnelle et les trois CV restent présents. La certification dispose d’un accès dès l’accueil et dans le menu.
- Couleurs : fond ivoire, vert profond, panneaux sauge, pêche et lilas ; variables distinctes pour le mode sombre. Le choix du thème est conservé. Les justificatifs et les captures de logiciels gardent leurs couleurs originales.
- Images : vrai document PPM, vrai portrait déjà publié, captures des sites réels, illustration CC0 et diagramme CC BY-SA. Aucun visuel recréé artificiellement. La capture Microsoft est celle publiée par Microsoft pour Project 2013 et reste affichée à sa définition native, sans recadrage. Le document scanné est consultable en PDF original.
- Contenu : organisme et date tirés de l’attestation ; programme décrit par des capacités concrètes, sans promesse d’expertise professionnelle acquise. Aucune certification Microsoft ou PMP revendiquée. Participation au concours d’éloquence, sans victoire ni passage en finale revendiqués. Project desktop est distingué de Project Online et Planner. Les références et licences sont visibles et documentées dans `docs/asset-credits.md`.

## Historique de vérification

1. Première passe : les contrôles des documents, thèmes, onglets et mobile passent. Un sélecteur de test trop strict sur le libellé « Voir le projet » a été ajusté pour prendre en compte la flèche du bouton ; le fonctionnement de l’interface n’était pas en cause.
2. Synchronisation avec le portfolio déjà publié : conservation du portrait, des trois CV, du justificatif SNEE, des initiatives et du parcours enrichi. La grille du parcours et la carte de profil ont été adaptées à ce contenu.
3. Nouvelle construction et capture : onze groupes de contrôles passent, après synchronisation. Les vues ordinateur, mobile, certificat, Gantt, éloquence et SNEE ont été examinées. Les captures prises pendant une animation ont été reprises après stabilisation ; le contrôle des animations réduites passe également.

## Contrôles fonctionnels

Résultats locaux : `.runtime/qa/verification.json`.

- Accès anonyme HTTP 200, documents et images chargés, ancres valides.
- Quatre onglets utilisables au clic et au clavier : flèches, Début et Fin.
- PDF PPM ouvert dans un nouvel onglet, téléchargement réel accepté ; empreinte SHA-256 identique au fichier original des Téléchargements.
- Trois CV et attestation d’éloquence accessibles ; fichiers inchangés. Justificatif SNEE et portrait conservés.
- Filtres, dialogue des réalisations et fermeture par Échap.
- Thèmes clair/sombre, persistance et retour au clair.
- Menu mobile : ouverture, navigation et fermeture par Échap.
- Largeurs contrôlées : 320, 390, 768, 1024, 1100 et 1440 pixels, sans débordement horizontal.
- Réduction des animations, justificatif et contenu accessibles sans JavaScript.
- Adresse de contact `mailto:minlangrayan@gmail.com` vérifiée ; aucun email de test envoyé.
- Aucune erreur JavaScript ni image manquante relevée.
- `npm run typecheck` et `npm run build` passent. Next.js résolu en 16.4.6 après correction de l’avis de sécurité présent dans le verrou initial ; `npm audit --omit=dev --audit-level=high` ne relève aucune vulnérabilité.
- Export statique minifié ; aucune source map publique.

## Limites et suivi

- La certification a été lue sur le document fourni ; aucune authentification indépendante auprès de CADD Centre n’est annoncée.
- La capture Microsoft est pédagogique et issue d’une version antérieure, explicitement indiquée. Aucun accès à une installation locale de Microsoft Project n’a été utilisé pour fabriquer une réalisation personnelle.
- Cette vérification ne constitue pas un audit WCAG exhaustif, un test sur iPhone physique ou une mesure Lighthouse.
- Le site reste un frontend public : les fichiers JavaScript et CSS transmis au navigateur sont consultables.

## Vérification après publication

Le workflow GitHub Pages de la version fonctionnelle `b71453e` s’est terminé avec succès : https://github.com/minlangrayan-ship-i/rayan-minlang-portfolio/actions/runs/43045437643.

Les onze groupes de contrôles ont également réussi sur https://minlangrayan-ship-i.github.io/rayan-minlang-portfolio/ avec un contexte de navigation anonyme. La certification est présente, le PDF téléchargé a la même empreinte que l’original, les trois CV et les anciens justificatifs sont accessibles, les interactions et les dimensions mobiles contrôlées fonctionnent. Aucune erreur JavaScript relevée. Résultats : `.runtime/qa/verification-published.json` ; capture : `.runtime/qa/published-desktop.png`.

final result: passed
