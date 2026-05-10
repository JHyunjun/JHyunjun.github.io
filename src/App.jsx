import { useEffect } from "react";
import { profile } from "./data.js";

function useRevealAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const navItems = [
    ["About", "#about"],
    ["Research", "#research"],
    ["Projects", "#projects"],
    ["Writing", "#writing"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        HJ
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="grid-glow" />
      </div>

      <div className="eyebrow" data-reveal>
        {profile.koreanName} · {profile.title}
      </div>

      <h1 className="hero-title" data-reveal>
        Battery Intelligence,
        <br />
        engineered for the real world.
      </h1>

      <p className="hero-copy" data-reveal>
        {profile.subtitle}
      </p>

      <div className="hero-actions" data-reveal>
        <a className="button primary" href="#projects">
          View Projects
        </a>
        <a className="button secondary" href={profile.blog} target="_blank" rel="noreferrer">
          Read Blog
        </a>
      </div>

      <div className="keyword-strip" data-reveal>
        {profile.heroKeywords.map(keyword => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section split">
      <div data-reveal>
        <p className="section-kicker">About</p>
        <h2>From BMS algorithms to AI-centered battery modeling.</h2>
      </div>

      <div className="prose" data-reveal>
        <p>{profile.about}</p>
        <p>{profile.vision}</p>
        <div className="identity-card">
          <div>
            <span>Name</span>
            <strong>{profile.name}</strong>
          </div>
          <div>
            <span>Affiliation</span>
            <strong>{profile.affiliation}</strong>
          </div>
          <div>
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics section" aria-label="Highlights">
      {profile.metrics.map(item => (
        <div className="metric-card" key={item.label} data-reveal>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Research</p>
        <h2>Predictive Battery Safety & Degradation Intelligence.</h2>
        <p>
          A focused research map across battery safety, aging, generative modeling,
          and frequency-domain diagnostics.
        </p>
      </div>

      <div className="card-grid">
        {profile.researchAreas.map((area, index) => (
          <article className="research-card" key={area.title} data-reveal>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Selected Work</p>
        <h2>Projects presented like products, validated like research.</h2>
      </div>

      <div className="project-list">
        {profile.projects.map(project => (
          <article className="project-card" key={project.name} data-reveal>
            <div className="project-visual" aria-hidden="true">
              <div className="signal-line" />
              <div className="signal-line delayed" />
              <div className="battery-chip">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="project-content">
              <p className="project-tag">{project.tag}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="pill-row">
                {project.highlights.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="section split">
      <div data-reveal>
        <p className="section-kicker">Writing</p>
        <h2>Notes, reviews, and engineering essays.</h2>
      </div>

      <div className="writing-stack" data-reveal>
        {profile.writings.map(item => (
          <a className="writing-card" href={item.href} key={item.title} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
            <span>{item.title}</span>
            <p>{item.body}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Patents() {
  return (
    <section className="section dark-panel" data-reveal>
      <p className="section-kicker">IP & Applied Research</p>
      <h2>Applied battery algorithm portfolio.</h2>
      <div className="patent-list">
        {profile.patents.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div data-reveal>
        <p className="section-kicker">Contact</p>
        <h2>Let the work speak first. Then connect.</h2>
      </div>

      <div className="contact-links" data-reveal>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.blog} target="_blank" rel="noreferrer">Blog</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Built with React, Vite, and GitHub Pages.</span>
    </footer>
  );
}

export default function App() {
  useRevealAnimation();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Research />
        <Projects />
        <Writing />
        <Patents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
