export const ppmCertification = {
  shortName: 'Certification PPM',
  title: 'Project Management using MS Project',
  credential: 'Diploma in Project Management using MS Project',
  issuer: 'CADD Centre',
  location: 'Yaoundé, Cameroun',
  period: 'Mai 2024 — mars 2026',
  issued: '1er avril 2026',
  issuedISO: '2026-04-01',
  document: '/assets/documents/certification-ppm-rayan-minlang.pdf',
  preview: '/assets/images/certification-ppm-rayan-minlang.webp',
  description: 'Une formation qui relie les fondamentaux de la gestion de projet à la pratique de Microsoft Project : découper le travail, organiser les ressources et suivre l’avancement avec une méthode structurée.',
  capabilities: [
    {
      id: 'planifier', label: 'Planifier', title: 'Passer d’un objectif à un planning lisible.',
      description: 'Définir le périmètre, décomposer le travail en tâches, estimer les durées et ordonner les dépendances. Le planning rend visibles les étapes et les échéances à respecter.',
      deliverable: 'Un planning structuré, avec tâches, dépendances et jalons.',
      topics: ['Définition du périmètre', 'Planification & séquencement', 'Diagramme réseau', 'Échéancier'],
    },
    {
      id: 'organiser', label: 'Organiser', title: 'Donner à chaque tâche les moyens d’avancer.',
      description: 'Créer les ressources, les affecter aux tâches et ajuster les allocations. Relier l’organisation de l’équipe aux estimations de coûts et aux contraintes du projet.',
      deliverable: 'Une affectation des ressources et une estimation des coûts.',
      topics: ['Création des ressources', 'Affectations', 'Planification organisationnelle', 'Estimation des coûts'],
    },
    {
      id: 'suivre', label: 'Suivre', title: 'Comparer le plan à la réalité du terrain.',
      description: 'Établir une référence de planning, renseigner l’avancement et lire les écarts. Repérer les tâches à surveiller pour préparer des ajustements plutôt que découvrir un retard à la fin.',
      deliverable: 'Un suivi d’avancement et un rapport sur les écarts.',
      topics: ['Plan de référence', 'Suivi des tâches', 'Contrôle des coûts', 'Rapports de performance'],
    },
    {
      id: 'communiquer', label: 'Communiquer', title: 'Rendre l’information utile à l’équipe.',
      description: 'Présenter l’état du projet, partager les informations et préparer des rapports adaptés aux interlocuteurs. Documenter les points ouverts et accompagner la clôture administrative.',
      deliverable: 'Un point de situation clair pour faciliter les décisions.',
      topics: ['Partage d’informations', 'Rapports Microsoft Project', 'Gestion des risques', 'Clôture administrative'],
    },
  ],
};

export const visualCredits = {
  teamwork: {
    author: 'Libreclipart', license: 'CC0 1.0',
    source: 'https://libreclipart.org/en/vectors/business/teamwork-concept/379',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  microsoft: {
    source: 'https://support.microsoft.com/en-us/project/show-the-critical-path-of-your-project-in-project',
    permission: 'https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/permissions',
    lifecycle: 'https://techcommunity.microsoft.com/blog/plannerblog/microsoft-project-online-is-retiring-what-you-need-to-know/4450558',
    capabilities: 'https://learn.microsoft.com/en-us/office365/servicedescriptions/project-online-service-description/project-online-desktop-client-service-description',
  },
};
