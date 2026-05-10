import { useEffect, useState } from "react";
import { profile } from "./data.js";

function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.16 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Go to top">HJ</a>
      <nav className="nav">
        <a href="#proof">Proof</a>
        <a href="#education">Education</a>
        <a href="#about">About</a>
        <a href="#focus">Focus</a>
        <a href="#systems">Systems</a>
        <a href="#research">Research</a>
        <a href="#patents">Patents</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function HeroLinkCards() {
  return (
    <div className="hero-links" data-reveal>
      {profile.heroLinks.map((item) => (
        <a className="hero-link-card" href={item.href} key={item.label} target="_blank" rel="noreferrer">
          <div className="hero-link-top">
            <span className="hero-link-label">{item.label}</span>
            <span className="hero-link-arrow">↗</span>
          </div>
          <span className="mini-metric">{item.metric}</span>
          <p>{item.caption}</p>
        </a>
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" data-reveal>
      <div className="hero-stage">
        <div className="glow-ring ring-one" />
        <div className="glow-ring ring-two" />
        <div className="floating-card card-a">
          <img src="/assets/vision-battery.svg" alt="Battery intelligence illustration" />
          <div>
            <span>AI</span>
            <strong>Battery Intelligence</strong>
          </div>
        </div>
        <div className="floating-card card-b">
          <img src="/assets/network-intelligence.svg" alt="Intelligence network illustration" />
          <div>
            <span>BMS</span>
            <strong>Predictive Systems</strong>
          </div>
        </div>
        <div className="floating-card card-c">
          <img src="/assets/diag-wave.svg" alt="Diagnostics illustration" />
          <div>
            <span>INT</span>
            <strong>Signal-Level Diagnostics</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function CredibilityStrip() {
  return (
    <div className="credibility-strip" data-reveal>
      {profile.credibility.map((item) => (
        <div className="credibility-card" key={item.label}>
          <div className="credibility-top">
            <strong>{item.value}</strong>
            {item.badge ? <img src={item.badge} alt={`${item.value} badge`} /> : null}
          </div>
          <span>{item.label}</span>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="hero-copy-block">
        <p className="kicker" data-reveal>{profile.koreanName} · {profile.title}</p>
        <h1 data-reveal>AI.<br />BMS.<br />Intelligence.</h1>
        <p className="hero-subtitle" data-reveal>{profile.subtitle}</p>
        <CredibilityStrip />
        <HeroLinkCards />
      </div>
      <HeroVisual />
    </section>
  );
}

function ProofSnapshot() {
  return (
    <section className="section proof-snapshot" id="proof">
      <div className="section-head proof-title" data-reveal>
        <p className="kicker">Evidence Snapshot</p>
        <h2>Not a claim. A body of work.</h2>
        <p>
          The page is designed to communicate a simple signal immediately:
          field BMS experience, AI research direction, technical writing impact,
          and verified battery diagnostics output.
        </p>
      </div>
      <div className="evidence-grid">
        {profile.evidenceSnapshot.map((item) => (
          <a className="evidence-card" href={item.href} key={item.title} data-reveal>
            <div className="evidence-icon" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <span>View evidence →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function EducationStack() {
  return (
    <section className="section education-section" id="education">
      <div className="section-head education-head" data-reveal>
        <p className="kicker">Education</p>
        <h2>Electrochemistry meets computer engineering.</h2>
        <p>
          The academic background is intentionally cross-disciplinary:
          battery systems and chemical engineering on one side,
          AI, software, and algorithmic thinking on the other.
        </p>
      </div>
      <div className="education-grid">
        {profile.education.map((item) => (
          <article className="education-card" key={item.school} data-reveal>
            <img src={item.badge} alt={`${item.short} badge`} />
            <div>
              <span>{item.short}</span>
              <h3>{item.school}</h3>
              <p className="education-degree">{item.degree}</p>
              <p className="education-dept">{item.department}</p>
              <p className="education-meaning">{item.meaning}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-head" data-reveal>
        <p className="kicker">About</p>
        <h2>Built for premium technical credibility.</h2>
      </div>
      <div className="about-grid">
        <div className="about-panel" data-reveal>
          <p>{profile.overview}</p>
          <p>{profile.vision}</p>
        </div>
        <div className="identity-panel" data-reveal>
          <div><span>Name</span><strong>{profile.name}</strong></div>
          <div><span>Identity</span><strong>{profile.identity}</strong></div>
          <div><span>Focus</span><strong>{profile.headline}</strong></div>
          <div><span>Location</span><strong>{profile.location}</strong></div>
        </div>
      </div>
      <div className="expertise-strip">
        {profile.expertise.map((item) => (
          <div className="expertise-card" key={item.label} data-reveal>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section className="section" id="focus">
      <div className="section-head" data-reveal>
        <p className="kicker">Core Focus</p>
        <h2>Three pillars of AI-centered battery expertise.</h2>
      </div>
      <div className="focus-grid">
        {profile.focusAreas.map((item) => (
          <article className="focus-card" key={item.title} data-reveal>
            <div className="focus-image-wrap"><img src={item.image} alt={item.title} /></div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Statements() {
  return (
    <section className="section statement-band">
      <div className="statement-panel" data-reveal>
        {profile.statements.map((line) => (
          <div className="statement-line" key={line}>{line}</div>
        ))}
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section className="section" id="systems">
      <div className="section-head" data-reveal>
        <p className="kicker">Signature Systems</p>
        <h2>Research systems with product-level clarity.</h2>
      </div>
      <div className="systems-list">
        {profile.signatureSystems.map((item) => (
          <article className="system-card" key={item.name} data-reveal>
            <div className="system-visual"><img src={item.visual} alt={item.name} /></div>
            <div className="system-content">
              <p className="system-tag">{item.tag}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="pill-row">{item.bullets.map((b) => <span key={b}>{b}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResearchList() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Journal", "Conference"];
  const items = profile.publications.filter((p) => filter === "All" || p.type === filter);

  return (
    <section className="section" id="research">
      <div className="section-head research-head" data-reveal>
        <div>
          <p className="kicker">Research Output</p>
          <h2>Publications, presentations, and technical proof.</h2>
        </div>
        <div className="filter-row">
          {filters.map((f) => (
            <button className={filter === f ? "active" : ""} key={f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="research-list">
        {items.map((item) => (
          <a className="research-item" href={item.href} key={item.title} target={item.href === "#" ? "_self" : "_blank"} rel="noreferrer" data-reveal>
            <div className="research-year">{item.year}</div>
            <div className="research-body">
              <div className="research-meta">
                <span>{item.type}</span>
                <span>{item.role}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.venue}</p>
              <div className="topic-line">{item.topic}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Patents() {
  return (
    <section className="section" id="patents">
      <div className="section-head" data-reveal>
        <p className="kicker">Patents</p>
        <h2>Battery diagnostics, control, and degradation intelligence.</h2>
      </div>
      <div className="patent-grid">
        {profile.patents.map((item) => (
          <a className="patent-card" href={item.href} key={`${item.number}-${item.title}`} target={item.href === "#" ? "_self" : "_blank"} rel="noreferrer" data-reveal>
            <div className="patent-top">
              <span>{item.status}</span>
              <strong>{item.year}</strong>
            </div>
            <h3>{item.title}</h3>
            <p>{item.number}</p>
            <div className="topic-line">{item.topic}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-head" data-reveal>
        <p className="kicker">Connect</p>
        <h2>Primary public presence.</h2>
      </div>
      <div className="contact-grid" data-reveal>
        {profile.heroLinks.map((item) => (
          <a key={item.label} className="contact-card" href={item.href} target="_blank" rel="noreferrer">
            <strong>{item.label}</strong>
            <span>{item.caption}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Apple-inspired. Research-focused. Built with React + Vite.</span>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofSnapshot />
        <EducationStack />
        <About />
        <Focus />
        <Statements />
        <Systems />
        <ResearchList />
        <Patents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
