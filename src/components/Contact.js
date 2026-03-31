import React, { useEffect, useRef, useState } from 'react';

const GithubIcon = () => (
  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.92c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0112 5.8c.97.004 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55C20.22 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="contact">
      <div className="contact-layout reveal" ref={ref}>

        <div className="contact-text">
          <p className="section-label-dark">Contact</p>
          <h2>Let's work together.</h2>
          <p>Whether it's an internship, student assistant (HiWi), or research opportunities — feel free to reach out if there’s a good fit.</p>
          <div className="contact-links">
            <a href="mailto:p.geddada@stud.uni-goettingen.de" className="contact-link">
              <span className="contact-link-icon">✉</span>
              <div>
                <div>p.geddada@stud.uni-goettingen.de</div>
                <div className="contact-link-sublabel">Email</div>
              </div>
            </a>
            <a href="https://github.com/Gpraveenbabu" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon"><GithubIcon /></span>
              <div>
                <div>github.com/Gpraveenbabu</div>
                <div className="contact-link-sublabel">GitHub</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/praveen-babu-4a3058258/" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon" style={{ fontWeight: 700, fontSize: 13 }}>in</span>
              <div>
                <div>Praveen's LinkedIn</div>
                <div className="contact-link-sublabel">LinkedIn</div>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-side">
          {sent ? (
            <div className="form-success">
              <span className="form-success-icon">✓</span>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project or role..." value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-send">
                Send message
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;