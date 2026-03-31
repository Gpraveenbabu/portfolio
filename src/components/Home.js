import React from 'react';

function Home() {
  return (
    <section id="home" className="home">
      <div className="hero-grid-bg"></div>
      <div className="hero-inner">
        <div className="hero-tag">
          <span className="hero-tag-dot"></span>
          Master's Student · Open to opportunities
        </div>
        

        <h1 className="hero-title">
          Praveen Babu Geddada
        </h1>

        <p className="hero-sub">
        Master's student in Applied
          Computer Science at the University of Göttingen, passionate about building
          real-world AI solutions.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
            </svg>
            View work
          </a>
          <a href="#contact" className="btn-secondary">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Get in touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">1</span>
            <span className="stat-label">Publication (2025)</span>
          </div>
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Projects shipped</span>
          </div>
          <div className="stat">
            <span className="stat-num">9.11</span>
            <span className="stat-label">Bachelor's GPA / 10</span>
          </div>
          <div className="stat">
            <span className="stat-num">4+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;