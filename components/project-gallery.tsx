'use client';
import { useRef, useState } from 'react';
import { categories, projects, type Project, type Category } from '@/data/portfolio';
export function ProjectVisual({ project }: { project: Project }) {
  return <div className={`project-visual visual-${project.visual}`} aria-hidden="true"><span className="visual-caption">{project.category}</span>{project.visual === 'code' ? <div className="code-lines"><i /><i /><i /><i /><i /><span>{'{ }'}</span></div> : project.visual === 'plan' ? <div className="gantt"><i /><i /><i /><i /></div> : project.visual === 'idea' ? <div className="idea-mark">{project.name === 'LogiCampus' ? 'LC' : 'A'}<span>↗</span></div> : <div className="data-nodes"><i /><i /><i /><i /><i /><i /><span>data_</span></div>}</div>;
}
export function ProjectGallery() {
  const [filter, setFilter] = useState<Category | 'Tous'>('Tous');
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  function show(project: Project) { setSelected(project); dialog.current?.showModal(); }
  const visibleProjects = projects.filter(project => project.published === true);
  const visibleCategories = categories.filter(category => visibleProjects.some(project => project.category === category));
  return <>
    <div className="filters" role="group" aria-label="Filtrer les projets">{(['Tous', ...visibleCategories] as const).map(category => <button key={category} aria-pressed={filter === category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <p className="project-note">Des réalisations consultables, avec leur périmètre et leur contribution.</p>
    <div className="project-grid">{visibleProjects.filter(p => filter === 'Tous' || p.category === filter).map(project => <article className="project-card" key={project.id}>
      <ProjectVisual project={project} /><div className="project-body"><p className="project-status">{project.status}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
      <div className="project-links"><button className="text-link" onClick={() => show(project)}>Voir le projet <span>↗</span></button>{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Visiter le site <span aria-hidden="true">↗</span><span className="sr-only"> (nouvel onglet)</span></a>}</div>
      </div></article>)}</div>
    <dialog ref={dialog} className="project-dialog" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><div className="dialog-content"><button className="close-dialog" aria-label="Fermer les détails du projet" onClick={() => dialog.current?.close()}>×</button>{selected && <>
      <p className="eyebrow">{selected.category} / {selected.status}</p><h2>{selected.name}</h2><p>{selected.description}</p>
      {selected.features && <><h3>Fonctionnalités</h3><ul>{selected.features.map(feature=><li key={feature}>{feature}</li>)}</ul></>}
      <h3>Technologies</h3><div className="tags">{selected.technologies.map(item=><span key={item}>{item}</span>)}</div>
      <h3>Contribution</h3><p>{selected.role}</p><h3>Compétences mobilisées</h3><div className="tags">{selected.learning.map(item => <span key={item}>{item}</span>)}</div><div className="social-links">{selected.github && <a href={selected.github} target="_blank" rel="noopener noreferrer">Voir le code sur GitHub ↗</a>}{selected.demo && <a href={selected.demo} target="_blank" rel="noopener noreferrer">Voir le site ↗</a>}</div>
    </>}</div></dialog>
  </>;
}
