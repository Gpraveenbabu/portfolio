
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  CarFront,
  CheckCircle2,
  Cpu,
  ExternalLink,
  FileSearch,
  Fingerprint,
  FlaskConical,
  GitBranch,
  Github,
  Image as ImageIcon,
  Layers3,
  LockKeyhole,
  Network,
  Plane,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "FactoryMind",
    category: "AI Systems",
    eyebrow: "INDUSTRIAL AI · DECISION SYSTEMS",
    description:
      "An industrial AI decision platform featuring a digital-twin simulator, sensor anomaly detection, deterministic root-cause analysis, safety-policy enforcement, and tamper-evident audit logging.",
    tags: ["Python", "Root-Cause Analysis", "Safety Policies", "Audit Logging", "pytest"],
    icon: Workflow,
    accent: "violet",
    featured: true,
    status: "Industrial AI",
    github: null,
  },
  {
    title: "EdgeDrive",
    category: "Computer Vision",
    eyebrow: "AUTOMOTIVE AI · PERCEPTION",
    description:
      "A CPU-first automotive perception pipeline combining object detection, multi-object tracking, track lifecycle management, and ARM64 performance benchmarking.",
    tags: ["PyTorch", "Computer Vision", "Object Detection", "Tracking", "ARM64"],
    icon: CarFront,
    accent: "cyan",
    featured: true,
    status: "Automotive AI",
    metric: "127 ms mean latency",
    github: null,
  },
  {
    title: "Enterprise Knowledge Intelligence",
    category: "LLM & NLP",
    eyebrow: "LLM ENGINEERING · RAG",
    description:
      "A retrieval-augmented generation application with semantic search, cross-encoder reranking, claim validation, and web research for more reliable knowledge retrieval.",
    tags: ["FastAPI", "React", "RAG", "Mistral", "FAISS"],
    icon: Network,
    accent: "blue",
    status: "Knowledge AI",
    github: "https://github.com/Gpraveenbabu/enterprise-knowledge-intelligence",
  },
  {
    title: "LLM Backdoor Detection Framework",
    category: "Research",
    eyebrow: "AI SECURITY · MODEL EVALUATION",
    description:
      "A framework for investigating single-word trigger backdoors in fine-tuned language models, measuring attack success, clean-data accuracy, latency, throughput, and GPU memory.",
    tags: ["LLMs", "LoRA", "PyTorch", "Hugging Face", "SLURM"],
    icon: ShieldCheck,
    accent: "rose",
    status: "AI Security Research",
    github: "https://github.com/Gpraveenbabu/Backdoor_LLM",
  },
  {
    title: "CIFAKE — AI-Generated Image Detection",
    category: "Computer Vision",
    eyebrow: "COMPUTER VISION · EXPLAINABILITY",
    description:
      "A CNN classifier for distinguishing real images from AI-generated images. Achieved 92.98% accuracy, with Grad-CAM analysis investigating the visual cues influencing predictions.",
    tags: ["CNN", "PyTorch", "Grad-CAM", "Explainable AI"],
    icon: ImageIcon,
    accent: "amber",
    status: "Image Classification",
    metric: "92.98% accuracy",
    github: "https://github.com/Gpraveenbabu/CIFAKE",
  },
  {
    title: "Fine-Tuning BART for Paraphrase Generation",
    category: "Research",
    eyebrow: "NLP · MODEL OPTIMIZATION",
    description:
      "Fine-tuned BART-Large for paraphrase generation, implemented the AdamW optimizer from scratch, and improved penalized BLEU by over 2× through decoding optimization.",
    tags: ["BART", "NLP", "Transformers", "Optimization", "HPC"],
    icon: BrainCircuit,
    accent: "violet",
    status: "NLP Research",
    metric: ">2× penalized BLEU",
    github: "https://github.com/Gpraveenbabu/LLM_Generation",
  },
  {
    title: "AI Job Application Assistant",
    category: "Applications",
    eyebrow: "LLM WORKFLOWS · PRODUCTIVITY",
    description:
      "An LLM-powered assistant designed to analyze job descriptions and help tailor resumes and cover letters using semantic matching and retrieval.",
    tags: ["LLMs", "Python", "FastAPI", "FAISS", "Automation"],
    icon: Sparkles,
    accent: "cyan",
    status: "AI Application",
    github: "https://github.com/Gpraveenbabu/AI_Job_Assistant",
  },
  {
    title: "Generative AI PDF Chatbot",
    category: "LLM & NLP",
    eyebrow: "DOCUMENT AI · RAG",
    description:
      "A document question-answering application that uses retrieval-augmented generation to answer questions about PDF documents.",
    tags: ["Generative AI", "RAG", "Python", "LLMs"],
    icon: FileSearch,
    accent: "blue",
    status: "Document AI",
    github: "https://github.com/Gpraveenbabu/ai-project",
  },
  {
    title: "Flight Layover Planner",
    category: "Applications",
    eyebrow: "TRAVEL TECH · DATA ANALYSIS",
    description:
      "A flight-layover analysis project exploring flight connections and travel-planning workflows.",
    tags: ["Python", "Data Analysis", "Travel"],
    icon: Plane,
    accent: "cyan",
    status: "Travel Tech",
    github: "https://github.com/Gpraveenbabu/Flight_Layover_Analyser",
  },
  {
    title: "Cryptography Visualization Platform",
    category: "AI Systems",
    eyebrow: "SECURITY · DEVELOPER EDUCATION",
    description:
      "An educational platform developed during an AI internship to visualize cryptographic concepts and make encryption workflows easier to understand.",
    tags: ["Python", "Cryptography", "Visualization"],
    icon: LockKeyhole,
    accent: "rose",
    status: "Internship Project",
    github: null,
  },
  {
    title: "Movie Recommendation System",
    category: "Applications",
    eyebrow: "MACHINE LEARNING · RECOMMENDATIONS",
    description:
      "A movie recommendation project exploring recommendation logic and movie-related data.",
    tags: ["Python", "Machine Learning", "Recommendations"],
    icon: Layers3,
    accent: "violet",
    status: "ML Project",
    github:
      "https://github.com/Gpraveenbabu/Projects/blob/main/movierecomandationsystem.ipynb",
  },
  {
    title: "Face Mask Detection",
    category: "Computer Vision",
    eyebrow: "COMPUTER VISION · DETECTION",
    description:
      "A computer-vision project exploring face-mask detection from images.",
    tags: ["Python", "Computer Vision", "Deep Learning"],
    icon: Radar,
    accent: "blue",
    status: "CV Project",
    github:
      "https://github.com/Gpraveenbabu/Projects/blob/main/Face_Mask_Detection.ipynb",
  },
  {
    title: "Generative AI Experiments",
    category: "Research",
    eyebrow: "GENERATIVE AI · EXPERIMENTS",
    description:
      "Experiments exploring generative AI concepts and model-driven content generation.",
    tags: ["Python", "Generative AI", "Deep Learning"],
    icon: FlaskConical,
    accent: "amber",
    status: "Experiments",
    github:
      "https://github.com/Gpraveenbabu/Projects/blob/main/Generative_AI.ipynb",
  },
  {
    title: "Flight Booking Platform",
    category: "Applications",
    eyebrow: "FULL-STACK · TRAVEL",
    description:
      "A flight-booking application project focused on exploring flight search and travel-planning workflows.",
    tags: ["JavaScript", "Web Development", "Application Development"],
    icon: Plane,
    accent: "cyan",
    status: "Application Project",
    github: null,
  },
];

const publication = {
  title:
    "ADOM: Accelerating Stripe Noise Removal in Remote Sensing Images With An Advanced ADMM",
  description:
    "Research on an ADMM-based optimization approach for stripe-noise removal in remote-sensing imagery, combining weighted noise detection with momentum-accelerated convergence.",
  tags: ["Optimization", "Remote Sensing", "ADMM", "Image Processing"],
  href: "https://drive.google.com/file/d/16uA033ZRTIeM1512a6oue_xp16DJ-2nt/view",
};

const filters = [
  "All",
  "AI Systems",
  "LLM & NLP",
  "Computer Vision",
  "Applications",
  "Research",
];

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const cardRef = useReveal();

  return (
    <article
      ref={cardRef}
      className={`project-card reveal accent-${project.accent} ${
        project.featured ? "project-card-featured" : ""
      }`}
      style={{ "--reveal-delay": `${(index % 3) * 80}ms` }}
    >
      <div className="project-card-top">
        <div className="project-icon-wrap" aria-hidden="true">
          <Icon size={23} strokeWidth={1.7} />
        </div>
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="project-eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {project.metric && (
        <div className="project-metric">
          <CheckCircle2 size={15} />
          {project.metric}
        </div>
      )}

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="project-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="project-card-footer">
        <span className="project-status">
          <span className="status-dot" />
          {project.status}
        </span>

        {project.github ? (
          <a
            className="project-link"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source`}
          >
            <FaGithub size={17} />
            Source
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span
            className="project-link project-link-disabled"
            title="Add the confirmed repository URL to enable this link"
          >
            <Github size={16} />
            Link pending
          </span>
        )}
      </div>
    </article>
  );
}

function PublicationCard() {
  return (
    <article className="publication-card">
      <div className="publication-art" aria-hidden="true">
        <div className="publication-orbit orbit-one" />
        <div className="publication-orbit orbit-two" />
        <div className="publication-orbit orbit-three" />
        <div className="publication-core">
          <Fingerprint size={36} strokeWidth={1.4} />
        </div>
        <span className="publication-art-label">RESEARCH / ADOM</span>
      </div>

      <div className="publication-content">
        <div className="publication-kicker">
          <span className="publication-kicker-dot" />
          RESEARCH SPOTLIGHT
        </div>
        <h3>{publication.title}</h3>
        <p>{publication.description}</p>

        <div className="project-tags">
          {publication.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <a
          className="publication-link"
          href={publication.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the paper <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useReveal();

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="projects-background" aria-hidden="true">
        <div className="projects-glow projects-glow-one" />
        <div className="projects-glow projects-glow-two" />
        <div className="projects-grid-pattern" />
      </div>

      <div className="projects-container">
        <header ref={headerRef} className="projects-header reveal">
          <div className="section-kicker">
            <span className="section-kicker-line" />
            SELECTED WORK
            <span className="section-kicker-line" />
          </div>

          <h2 id="projects-heading">
            Building things that
            <br />
            <span className="gradient-text">
              make intelligence useful.
            </span>
          </h2>

          <p className="projects-intro">
            A selection of projects across AI engineering, industrial decision
            systems, computer vision, LLM applications, and research.
          </p>

          <div className="projects-stats">
            <div className="projects-stat">
              <strong>{String(projects.length).padStart(2, "0")}</strong>
              <span>Projects listed</span>
            </div>
            <span className="stat-divider" />
            <div className="projects-stat">
              <strong>AI + Systems</strong>
              <span>Core focus</span>
            </div>
            <span className="stat-divider" />
            <div className="projects-stat">
              <strong>Research</strong>
              <span>Experiment-driven</span>
            </div>
          </div>
        </header>

        <nav className="project-filters" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`project-filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
              {activeFilter === filter && <ArrowDownRight size={14} />}
            </button>
          ))}
        </nav>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={projects.indexOf(project)}
            />
          ))}
        </div>

        <div className="research-heading">
          <div>
            <div className="section-kicker section-kicker-left">
              <span className="section-kicker-line" />
              BEYOND THE CODE
            </div>
            <h3>Research &amp; publication</h3>
            <p>
              Exploring methods, measuring results, and documenting findings.
            </p>
          </div>
          <div className="research-heading-icon" aria-hidden="true">
            <Cpu size={25} />
          </div>
        </div>

        <PublicationCard />

        <footer className="projects-cta">
          <div className="cta-icon" aria-hidden="true">
            <GitBranch size={22} />
          </div>
          <div className="cta-copy">
            <h3>Want to explore more?</h3>
            <p>
              Visit GitHub for source code, experiments, and ongoing work.
            </p>
          </div>
          <a
            className="cta-button"
            href="https://github.com/Gpraveenbabu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            GitHub profile
            <ArrowUpRight size={16} />
          </a>
        </footer>

        <p className="projects-note">
          Repository buttons appear only where a project URL is available.
          Add confirmed links for the remaining projects before publishing.
        </p>
      </div>
    </section>
  );
}
