'use client';
import { useRef, useState } from 'react';
import { BracketsCurly, Database, Kanban } from '@phosphor-icons/react';
import { categories, categoryLabels, projects, type Project, type Category } from '@/data/portfolio';
export function ProjectVisual({ project }: { project: Project }) {
  const preview = project.id === 'afroatlas' ? 'afroatlas-apercu.webp' : project.id === 'portfolio' ? 'portfolio-apercu.webp' : null;
  if (preview) return <img className="project-preview" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/images/${preview}`} width="1200" height="675" alt={`Aperçu du site ${project.name}`} loading="lazy" />;
  const Icon = project.visual === 'data' ? Database : project.visual === 'plan' ? Kanban : BracketsCurly;
  return <div className={`project-visual visual-${project.visual}`}><div><span className="visual-caption">{project.category}</span><strong>{project.id === 'java-report' ? 'Java, en pratique.' : project.name}</strong></div><Icon size={56} weight="duotone" aria-hidden="true" /></div>;
}
export function ProjectGallery() {
  const [filter, setFilter] = useState<Category | 'Tous'>('Tous');
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  function show(project: Project) { setSelected(project); dialog.current?.showModal(); }
  const visibleProjects = projects.filter(project => project.published === true);
  const visibleCategories = categories.filter(category => visibleProjects.some(project => project.category === category));
  return <>
    <div className="filters" role="group" aria-label="Filtrer les projets">{(['Tous', ...visibleCategories] as const).map(category => <button key={category} aria-pressed={filter === category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category === 'Tous' ? 'Tous' : categoryLabels[category]}</button>)}</div>
    <p className="project-note">Des réalisations consultables, avec leur périmètre et leur contribution.</p>
    <div className="project-grid">{visibleProjects.filter(p => filter === 'Tous' || p.category === filter).map(project => <article className="project-card" key={project.id}>
      <ProjectVisual project={project} /><div className="project-body"><p className="project-status">{project.status}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
      <div className="project-links"><button className="text-link" onClick={() => show(project)}>Voir le projet <span>↗</span></button>{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Visiter le site <span aria-hidden="true">↗</span><span className="sr-only"> (nouvel onglet)</span></a>}</div>
      </div></article>)}</div>
    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><div className="dialog-content"><button className="close-dialog" aria-label="Fermer les détails du projet" onClick={() => dialog.current?.close()}>×</button>{selected && <>
      <p className="eyebrow">{categoryLabels[selected.category]} / {selected.status}</p><h2 id="project-dialog-title">{selected.name}</h2><p>{selected.description}</p>
      {selected.features && <><h3>Fonctionnalités</h3><ul>{selected.features.map(feature=><li key={feature}>{feature}</li>)}</ul></>}
      <h3>Technologies</h3><div className="tags">{selected.technologies.map(item=><span key={item}>{item}</span>)}</div>
      <h3>Contribution</h3><p>{selected.role}</p>{selected.outcome && <><h3>Résultats</h3><ul>{selected.outcome.map(item => <li key={item}>{item}</li>)}</ul></>}<h3>Compétences mobilisées</h3><div className="tags">{selected.learning.map(item => <span key={item}>{item}</span>)}</div><div className="social-links">{selected.github && <a href={selected.github} target="_blank" rel="noopener noreferrer">Voir le code sur GitHub ↗</a>}{selected.demo && <a href={selected.demo} target="_blank" rel="noopener noreferrer">Voir le site ↗</a>}</div>
    </>}</div></dialog>
  </>;
}
