import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";

import {
  Shield,
  Brain,
  Bot,
  Plane,
  FileText,
  Lock,
  Image,
  Film,
  Camera,
  MapPinned,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    icon: <Shield size={30} />,
    title: "LLM Backdoor Attack Detection",
    description:
      "Implemented and evaluated single-word trigger backdoor attacks on Meta Llama models using LoRA fine-tuning. Built a complete detection pipeline for detecting malicious behavior in Large Language Models.",
    tags: ["PyTorch", "LoRA", "Llama 3", "Transformers", "LLMs"],
    github: "https://github.com/Gpraveenbabu",
  },

  {
    icon: <Brain size={30} />,
    title: "Controllable Paraphrase Generation",
    description:
      "Built a complete BART-Large fine-tuning pipeline with a custom AdamW optimizer and improved generation quality through decoding optimization and BLEU evaluation.",
    tags: ["BART", "PyTorch", "NLP", "Transformers"],
    github: "https://github.com/Gpraveenbabu",
  },

  {
    icon: <Bot size={30} />,
    title: "AI Job Application Agent",
    description:
      "AI-powered assistant that matches resumes with job descriptions and automatically generates personalized cover letters using LLMs.",
    tags: ["React", "FastAPI", "Python", "OpenAI"],
    github: "https://github.com/Gpraveenbabu",
  },

  {
    icon: <Plane size={30} />,
    title: "Flight Booking Platform",
    description:
      "Modern flight booking application with authentication, PostgreSQL integration, booking management and responsive UI.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/Gpraveenbabu",
  },

  {
    icon: <FileText size={30} />,
    title: "Generative AI PDF Chatbot",
    description:
      "Retrieval-Augmented Generation chatbot capable of answering questions from PDF documents using LangChain and OpenAI.",
    tags: ["Python", "LangChain", "RAG", "React"],
    github:
      "https://github.com/Gpraveenbabu/Projects/blob/main/Generative_AI.ipynb",
  },

  {
    icon: <Lock size={30} />,
    title: "Cryptography Visualization Platform",
    description:
      "Interactive visualization platform for classical cryptographic algorithms using React, D3.js and Konva.js.",
    tags: ["React", "D3.js", "Konva.js"],
    github: "https://github.com/Gpraveenbabu",
  },

  {
    icon: <Image size={30} />,
    title: "CIFAKE – Fake Image Detection",
    description:
      "Deep learning system for detecting fake and manipulated images using CNN architectures.",
    tags: ["TensorFlow", "CNN", "PyTorch"],
    github: "https://github.com/Gpraveenbabu/CIFAKE",
  },

  {
    icon: <Film size={30} />,
    title: "Movie Recommendation System",
    description:
      "Recommendation system using collaborative and content-based filtering with cosine similarity.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    github:
      "https://github.com/Gpraveenbabu/Projects/blob/main/movierecomandationsystem.ipynb",
  },

  {
    icon: <Camera size={30} />,
    title: "Face Mask Detection",
    description:
      "Real-time face mask detection using TensorFlow CNN models and OpenCV webcam inference.",
    tags: ["TensorFlow", "OpenCV", "CNN"],
    github:
      "https://github.com/Gpraveenbabu/Projects/blob/main/Face_Mask_Detection.ipynb",
  },

  {
    icon: <MapPinned size={30} />,
    title: "Landmark Recognition",
    description:
      "Deep learning model trained to classify more than 1,000 landmark categories.",
    tags: ["TensorFlow", "Computer Vision"],
    github: "https://github.com/Gpraveenbabu",
  },
];
const publication = {
  title:
    "ADOM: Accelerating Stripe Noise Removal in Remote Sensing Images using Advanced ADMM",

  date: "Published • May 2025",

  bullets: [
    "Advanced ADMM optimization framework for stripe noise removal.",
    "Achieved up to 38.1 dB PSNR and 0.98 SSIM.",
    "Validated on Hyperion, MODIS and Pavia University datasets.",
  ],

  link:
    "https://drive.google.com/file/d/16uA033ZRTIeM1512a6oue_xp16DJ-2nt/view?usp=sharing",
};

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
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, delay]);
}
function ProjectCard({ project, delay }) {
  const ref = useRef(null);

  useReveal(ref, delay);

  return (
    <article className="project-card reveal" ref={ref}>

      <div className="project-top">

        <div className="project-icon">
          {project.icon}
        </div>

        <div className="project-content">

          <h3 className="project-title">
            {project.title}
          </h3>

          <p className="project-description">
            {project.description}
          </p>

        </div>

      </div>

      <div className="project-tags">

        {project.tags.map((tag) => (
          <span
            key={tag}
            className="project-tag"
          >
            {tag}
          </span>
        ))}

      </div>

      <div className="project-footer">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="link-btn"
        >
          <FaGithub size={18} />
          <span>GitHub</span>
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="link-btn link-btn-live"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        )}

      </div>

    </article>
  );
}
function Projects() {
  const headerRef = useRef(null);
  const pubRef = useRef(null);

  useReveal(headerRef);
  useReveal(pubRef, 200);

  return (
    <section id="projects" className="projects">

      <div
        className="projects-header reveal"
        ref={headerRef}
      >

        <div>

          <h2>
            Featured Projects
          </h2>

          <p className="projects-subtitle">
            A collection of Artificial Intelligence,
            Machine Learning, Large Language Models,
            Computer Vision, NLP and Full-Stack
            applications built through research,
            internships and personal projects.
          </p>

        </div>

        <a
          href="https://github.com/Gpraveenbabu"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <FaGithub size={18} />
          <span>View GitHub</span>
        </a>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <ProjectCard
            key={project.title}
            project={project}
            delay={index * 100}
          />

        ))}

      </div>
            <div
        className="pub-section reveal"
        ref={pubRef}
      >

        <h2 className="publication-heading">
          Publication
        </h2>

        <div className="pub-card">

          <div className="pub-header">

            <FileText
              size={36}
              className="publication-icon"
            />

            <div>

              <h3 className="pub-title">
                {publication.title}
              </h3>

              <div className="pub-date">
                {publication.date}
              </div>

            </div>

          </div>

          <div className="publication-highlights">

            {publication.bullets.map((bullet) => (

              <div
                key={bullet}
                className="publication-point"
              >

                <span className="publication-check">
                  ✓
                </span>

                <span>
                  {bullet}
                </span>

              </div>

            ))}

          </div>

          <div className="pub-footer">

            <a
              href={publication.link}
              target="_blank"
              rel="noreferrer"
              className="link-btn link-btn-live"
            >

              <ExternalLink size={18} />

              <span>
                Read Publication
              </span>

            </a>

          </div>

        </div>

      </div>
          </section>
  );
}

export default Projects;