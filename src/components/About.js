import React, { useEffect, useRef } from 'react';

const skillGroups = [
  { label: 'Languages',   items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C'] },
  { label: 'Frameworks',  items: ['React', 'Node.js', 'FastAPI', 'LangChain'] },
  { label: 'AI / ML',     items: ['Deep Learning', 'CNN', 'NLP', 'Generative AI', 'RAG Systems'] },
  { label: 'Tools',       items: ['Docker', 'Git', 'PostgreSQL', 'REST APIs'] },
  { label: 'Data Science',items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'] },
  { label: 'Cloud',       items: ['Vercel', 'AWS (basics)'] },
];

const education = [
  { school: 'Georg-August-Universität Göttingen', degree: "Master's in Applied Computer Science", detail: 'Currently enrolled' },
  { school: 'R.V.R & J.C College of Engineering', degree: "Bachelor's in Computer Science", detail: 'GPA: 9.11 / 10' },
];

const certifications = [
  'Google Data Analytics Specialization — Coursera',
  'Front-End Development — freeCodeCamp',
  'Advanced Python Programming — NPTEL',
  'Generative AI & LLMs — LinkedIn Learning',
];

const languages = [
  { lang: 'English', level: 'C1 Advanced' },
  { lang: 'German',  level: 'B1 Learning' },
  { lang: 'Hindi',   level: 'C1 Advanced' },
  { lang: 'Telugu',  level: 'Native' },
];

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

function About() {
  const introRef = useRef(null);
  const expRef   = useRef(null);
  const eduRef   = useRef(null);
  const skillRef = useRef(null);
  const certRef  = useRef(null);

  useReveal(introRef);
  useReveal(expRef,   100);
  useReveal(eduRef,   150);
  useReveal(skillRef, 200);
  useReveal(certRef,  250);

  return (
    <section id="about" className="about">

      <div className="reveal" ref={introRef}>
        <p className="section-label">About me</p>
        <h2>Engineer at the intersection of AI &amp; web.</h2>
        <p className="about-lead">
          I'm a Master's student in Applied Computer Science at the University of Göttingen,
          with a strong focus on Artificial Intelligence and emerging technologies. I build
          scalable, real-world applications that bridge cutting-edge ML research with
          production-ready software.
        </p>
      </div>

      <div className="about-block reveal" ref={expRef}>
        <p className="section-label">Experience</p>
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <div className="exp-role">Artificial Intelligence Intern</div>
              <div className="exp-company">AIMER Society</div>
            </div>
            <span className="exp-date">Dec 2024 – Apr 2025</span>
          </div>
          <ul className="exp-bullets">
            <li>Developed and deployed AI models for image classification and object detection</li>
            <li>Worked with Hugging Face and generative AI models in modern AI frameworks</li>
            <li>Executed end-to-end ML workflows: data preprocessing, model training, and evaluation</li>
          </ul>
        </div>
      </div>

      <div className="about-block reveal" ref={eduRef}>
        <p className="section-label">Education</p>
        <div className="edu-list">
          {education.map((e) => (
            <div key={e.school} className="edu-card">
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-detail">{e.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-block reveal" ref={skillRef}>
        <p className="section-label">Skills</p>
        <div className="skills-section">
          {skillGroups.map((g) => (
            <div key={g.label} className="skill-group">
              <div className="skill-group-label">{g.label}</div>
              <div className="skill-tags">
                {g.items.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-bottom reveal" ref={certRef}>
        <div className="about-block-half">
          <p className="section-label">Certifications</p>
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c} className="cert-item">
                <span className="cert-dot"></span>{c}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-block-half">
          <p className="section-label">Languages</p>
          <div className="lang-grid">
            {languages.map((l) => (
              <div key={l.lang} className="lang-card">
                <div className="lang-name">{l.lang}</div>
                <div className="lang-level">{l.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;