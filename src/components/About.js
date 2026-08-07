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
        <h2>About Me</h2>
        <p className="about-lead">

I'm a Master's student in Applied
Computer Science at the University of Göttingen,
focusing mainly in Large Language Models, Computer Vision,
Retrieval-Augmented Generation, and full-stack AI systems.

I enjoy building intelligent software that transforms
research ideas into scalable, production-ready applications.
        </p>
      </div>

      <div className="about-block reveal" ref={expRef}>
  <p className="section-label">Experience</p>

  <div className="experience-timeline">

    <div className="experience-item">
      <div className="experience-left">
        <div className="experience-dot"></div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Full Stack, AI/ML & Cyber Security Intern</h3>
            <h4>AIMER Society</h4>
          </div>

          <span className="experience-date">Dec 2024 – Apr 2025</span>
        </div>

        <p>
          Built an interactive cryptography visualization platform using React,
          D3.js and Konva.js. Developed CNN and Hugging Face Transformer models
          for image classification and object detection while managing the
          complete machine learning workflow.
        </p>

        <div className="experience-tags">
          <span>React</span>
          <span>D3.js</span>
          <span>CNN</span>
          <span>Hugging Face</span>
          <span>Object Detection</span>
        </div>
      </div>
    </div>

    <div className="experience-item">
      <div className="experience-left">
        <div className="experience-dot"></div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Artificial Intelligence Intern</h3>
            <h4>AIMER Society</h4>
          </div>

          <span className="experience-date">Jun 2024 – Aug 2024</span>
        </div>

        <p>
          Worked on CNNs, YOLO, medical image analysis, NLP pipelines,
          GPT, Claude and Llama models for real-world AI applications.
        </p>

        <div className="experience-tags">
          <span>YOLO</span>
          <span>NLP</span>
          <span>GPT</span>
          <span>Claude</span>
          <span>Llama</span>
        </div>
      </div>
    </div>

    <div className="experience-item">
      <div className="experience-left">
        <div className="experience-dot"></div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Machine Learning Intern</h3>
            <h4>SkillDzire</h4>
          </div>

          <span className="experience-date">Apr 2024 – May 2024</span>
        </div>

        <p>
          Built forecasting models using ARIMA, LSTM and Prophet while
          developing XGBoost, LightGBM and CatBoost models with SHAP
          explainability.
        </p>

        <div className="experience-tags">
          <span>LSTM</span>
          <span>Prophet</span>
          <span>XGBoost</span>
          <span>LightGBM</span>
          <span>SHAP</span>
        </div>
      </div>
    </div>

    <div className="experience-item">
      <div className="experience-left">
        <div className="experience-dot"></div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Web Development Intern</h3>
            <h4>Techno Hacks EduTech</h4>
          </div>

          <span className="experience-date">Sep 2023 – Oct 2023</span>
        </div>

        <p>
          Developed responsive web applications including calculators,
          currency converters and countdown timers using HTML, CSS and
          JavaScript.
        </p>

        <div className="experience-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>

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
