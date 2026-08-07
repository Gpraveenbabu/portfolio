import React, { useEffect, useRef } from "react";

const skillGroups = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C"] },
  { label: "Frameworks", items: ["React", "Node.js", "FastAPI", "LangChain"] },
  { label: "AI / ML", items: ["Deep Learning", "CNN", "NLP", "Generative AI", "RAG Systems"] },
  { label: "Tools", items: ["Docker", "Git", "PostgreSQL", "REST APIs"] },
  { label: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch"] },
  { label: "Cloud", items: ["Vercel", "AWS (Basics)"] },
];

const certifications = [
  "Google Data Analytics Specialization",
  "Front-End Development – freeCodeCamp",
  "Generative AI & Large Language Models",
  "Privacy & Security in Online Social Media (NPTEL – Silver)",
  "Psychology of Learning (NPTEL – Gold)",
  "Programming in Java (NPTEL – Elite)",
  "Joy of Computing using Python (NPTEL – Silver)",
];

const languages = [
  { lang: "English", level: "Professional Working Proficiency" },
  { lang: "German", level: "B1 (Learning)" },
  { lang: "Hindi", level: "Professional Working Proficiency" },
  { lang: "Telugu", level: "Native" },
];

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            ref.current?.classList.add("visible");
          }, delay);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, delay]);
}

function About() {
  const introRef = useRef(null);
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const skillRef = useRef(null);
  const certRef = useRef(null);

  useReveal(introRef);
  useReveal(expRef, 100);
  useReveal(eduRef, 200);
  useReveal(skillRef, 300);
  useReveal(certRef, 400);

  return (
    <section id="about" className="about">

      {/* ABOUT */}

      <div className="reveal about-intro" ref={introRef}>
        <p className="section-label">About Me</p>

        <h2>About Me</h2>

        <p className="about-lead">
          I'm a Master's student in Applied Computer Science at
          Georg-August-Universität Göttingen with a strong passion for
          Artificial Intelligence, Large Language Models, Computer Vision,
          Retrieval-Augmented Generation (RAG), and Full-Stack AI Systems.

          <br /><br />

          I enjoy transforming research ideas into scalable, real-world
          applications and continuously learning new technologies that solve
          meaningful problems.
        </p>
      </div>

      {/* EXPERIENCE */}

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

                <span className="experience-date">
                  Dec 2024 – Apr 2025
                </span>

              </div>

              <p>
                Built interactive cryptography visualization software using
                React, D3.js and Konva.js while developing CNN and Hugging Face
                Transformer models for image classification and object
                detection.
              </p>

              <div className="experience-tags">
                <span>React</span>
                <span>D3.js</span>
                <span>CNN</span>
                <span>Transformers</span>
                <span>Hugging Face</span>
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

                <span className="experience-date">
                  Jun 2024 – Aug 2024
                </span>

              </div>

              <p>
                Worked on CNNs, YOLO, NLP pipelines and modern Large Language
                Models including GPT, Claude and Llama for real-world AI
                applications.
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

                <span className="experience-date">
                  Apr 2024 – May 2024
                </span>

              </div>

              <p>
                Developed forecasting models using ARIMA, Prophet, LSTM,
                XGBoost, LightGBM and SHAP Explainability.
              </p>

              <div className="experience-tags">
                <span>LSTM</span>
                <span>XGBoost</span>
                <span>Prophet</span>
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

                <span className="experience-date">
                  Sep 2023 – Oct 2023
                </span>

              </div>

              <p>
                Built responsive web applications including calculators,
                currency converters and interactive JavaScript projects using
                HTML, CSS and JavaScript.
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

      {/* EDUCATION */}

      <div className="about-block reveal" ref={eduRef}>

        <p className="section-label">Education</p>

        <div className="experience-timeline">

          <div className="experience-item">

            <div className="experience-left">
              <div className="experience-dot"></div>
            </div>

            <div className="experience-card">

              <div className="experience-header">

                <div>
                  <h3>Master's in Applied Computer Science</h3>
                  <h4>Georg-August-Universität Göttingen</h4>
                </div>

                <span className="experience-date">
                  2025 – Present
                </span>

              </div>

              <p>
                Specializing in Artificial Intelligence, Large Language Models,
                Computer Vision, Retrieval-Augmented Generation, Distributed
                Systems and Full-Stack AI Development.
              </p>

              <div className="experience-tags">
                <span>AI</span>
                <span>LLMs</span>
                <span>Computer Vision</span>
                <span>RAG</span>
                <span>Research</span>
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
                  <h3>Bachelor's in Computer Science</h3>
                  <h4>R.V.R & J.C College of Engineering</h4>
                </div>

                <span className="experience-date">
                  2021 – 2025
                </span>

              </div>

              <p>
                Graduated with a GPA of 9.11/10 while building a strong
                foundation in algorithms, software engineering, machine
                learning, artificial intelligence and full-stack development.
              </p>

              <div className="experience-tags">
                <span>GPA 9.11</span>
                <span>Machine Learning</span>
                <span>Algorithms</span>
                <span>Software Engineering</span>
              </div>

            </div>

          </div>

        </div>

      </div>
        {/* SKILLS */}

      <div className="about-block reveal" ref={skillRef}>

        <p className="section-label">Skills</p>

        <div className="skills-section">

          {skillGroups.map((group) => (

            <div key={group.label} className="skill-group">

              <div className="skill-group-label">
                {group.label}
              </div>

              <div className="skill-tags">

                {group.items.map((skill) => (

                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* CERTIFICATIONS & LANGUAGES */}

      <div className="about-bottom reveal" ref={certRef}>

        <div className="about-block-half">

          <p className="section-label">Certifications</p>

          <div className="cert-grid">

  {certifications.map((cert) => (

    <div key={cert} className="cert-card">

      <div className="cert-icon">🏆</div>

      <div className="cert-name">
        {cert}
      </div>

    </div>

  ))}

</div>

        </div>

        <div className="about-block-half">

          <p className="section-label">Languages</p>

          <div className="lang-grid">

            {languages.map((language) => (

              <div key={language.lang} className="lang-card">

                <div className="lang-name">
                  {language.lang}
                </div>

                <div className="lang-level">
                  {language.level}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
