import React, { useEffect, useRef } from 'react';

const projects = [
  {
    icon: '🤖',
    title: 'Generative AI PDF Chatbot',
    description: 'A Retrieval-Augmented Generation (RAG) system for querying PDF documents using natural language. Integrates LangChain and OpenAI API for context-aware responses with a full-stack React + Python architecture.',
    tags: ['Python', 'LangChain', 'OpenAI API', 'React', 'RAG'],
    github: 'https://github.com/Gpraveenbabu/Projects/blob/main/Generative_AI.ipynb',
  },
  {
    icon: '🖼️',
    title: 'CIFAKE — Fake Image Detection',
    description: 'A deep learning system to detect fake and manipulated images using CNN models. Implemented image preprocessing, model training, and evaluation pipelines with strong benchmark performance.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'CNN', 'Deep Learning'],
    github: 'https://github.com/Gpraveenbabu/CIFAKE',
  },
  {
    icon: '🎬',
    title: 'Movie Recommendation System',
    description: 'A personalized recommendation system using collaborative and content-based filtering. Implements cosine similarity to improve accuracy, built with Python, Pandas, and Scikit-learn.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    github: 'https://github.com/Gpraveenbabu/Projects/blob/main/movierecomandationsystem.ipynb',
  },
];

const publication = {
  title: 'ADOM: Accelerating Stripe Noise Removal in Remote Sensing Images using Advanced ADMM',
  date: 'May 2025',
  bullets: [
    'Proposed an advanced ADMM-based optimization model for stripe noise removal in remote sensing images',
    'Achieved up to 38.1 dB PSNR and 0.98 SSIM, outperforming existing methods',
    'Reduced execution time by 15%; validated on Hyperion, MODIS, and Pavia University datasets',
  ],
  link: 'https://drive.google.com/file/d/16uA033ZRTIeM1512a6oue_xp16DJ-2nt/view?usp=sharing',
};

const GithubIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.92c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0112 5.8c.97.004 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55C20.22 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setTimeout(() => ref.current && ref.current.classList.add('visible'), delay);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, delay]);
}

function ProjectCard({ project, delay }) {
  const ref = useRef(null);
  useReveal(ref, delay);
  return (
    <div className="project-card reveal" ref={ref}>
      <div className="project-icon">{project.icon}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer" className="link-btn link-btn-gh">
          <GithubIcon /> GitHub
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const headerRef = useRef(null);
  const pubRef    = useRef(null);
  useReveal(headerRef);
  useReveal(pubRef, 150);

  return (
    <section id="projects" className="projects">

      <div className="projects-header reveal" ref={headerRef}>
        <div>
          <p className="section-label">Selected work</p>
          <h2>Projects</h2>
        </div>
        <a href="https://github.com/Gpraveenbabu" target="_blank" rel="noreferrer" className="btn-secondary">
          <GithubIcon /> View GitHub
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 100} />
        ))}
      </div>

      <div className="pub-section reveal" ref={pubRef}>
        <p className="section-label" style={{ marginTop: '64px' }}>Research</p>
        <h2 style={{ marginBottom: '24px' }}>Publication</h2>
        <div className="pub-card">
          <div className="pub-header">
            <div className="pub-title">{publication.title}</div>
            <span className="pub-date">{publication.date}</span>
          </div>
          <ul className="pub-bullets">
            {publication.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <div className="pub-footer">
            <a href={publication.link} target="_blank" rel="noreferrer" className="link-btn link-btn-live">
              <ExternalIcon /> Open paper
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;