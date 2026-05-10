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
      { threshold: 0.14 }
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
        <a href="#presence">Presence</a>
        <a href="#proof">Proof</a>
        <a href="#education">Education</a>
        <a href="#systems">Systems</a>
        <a href="#research">Research</a>
        <a href="#patents">Patents</a>
      </nav>
    </header>
  );
}

function HeroProofLine() {
  return (
    <div className="hero-proof-line" data-reveal>
      {profile.compactProof.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}

function PremiumBatteryObject() {
  return (
    <div className="premium-object-wrap" data-reveal>
      <div className="object-aura" />
      <img src="/assets/battery-intelligence-object.svg" alt="Battery intelligence object" />
      <div className="object-label object-label-a">
        <span>Signal</span>
        <strong>Diagnostics</strong>
      </div>
      <div className="object-label object-label-b">
        <span>AI</span>
        <strong>Intelligence</strong>
      </div>
      <div className="object-label object-label-c">
        <span>BMS</span>
        <strong>Field Systems</strong>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="section hero-v6" id="top">
      <div className="hero-main">
        <p className="kicker" data-reveal>{profile.koreanName} · {profile.title}</p>
        <h1 data-reveal>AI.<br />BMS.<br />Intelligence.</h1>
        <p className="hero-subtitle" data-reveal>{profile.subtitle}</p>
        <HeroProofLine />
      </div>
      <PremiumBatteryObject />
    </section>
  );
}

function Presence() {
  return (
    <section className="section presence-section" id="presence">
      <div className="presence-heading" data-reveal>
        <p className="kicker">Public Presence</p>
        <h2>Technical writing, professional profile, and research implementation.</h2>
      </div>
      <div className="presence-grid">
        {profile.heroLinks.map((item) => (
          <a className="presence-card" href={item.href} key={item.label} target="_blank" rel="noreferrer" data-reveal>
            <div className="presence-top">
              <strong>{item.label}</strong>
              <span>↗</span>
            </div>
            <em>{item.metric}</em>
            <p>{item.caption}</p>
          </a>
        ))}
      </div>
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
          Field BMS experience, AI research direction, technical writing impact,
          and verified battery diagnostics output are presented as evidence,
          not decoration.
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

function EducationFusion() {
  return (
    <section className="section education-fusion" id="education">
      <div className="fusion-head" data-reveal>
        <p className="kicker">Education</p>
        <h2>Chemical & Biological Engineering × Computer Engineering.</h2>
        <p>
          Battery intelligence needs both sides: physical understanding of battery systems
          and algorithmic depth for AI, software, and data-driven diagnosis.
        </p>
      </div>

      <div className="fusion-stage" data-reveal>
        <article className="fusion-school">
          <img src="/assets/snu-badge.svg" alt="SNU custom badge" />
          <span>Seoul National University</span>
          <h3>PhD Candidate</h3>
          <p>Chemical and Biological Engineering</p>
        </article>

        <div className="fusion-core">
          <span>Battery</span>
          <strong>Intelligence</strong>
          <em>Physics-grounded AI for BMS systems</em>
        </div>

        <article className="fusion-school">
          <img src="/assets/yonsei-badge.svg" alt="Yonsei custom badge" />
          <span>Yonsei University</span>
          <h3>M.Eng</h3>
          <p>Computer Engineering</p>
        </article>
      </div>

      <div className="fusion-keywords" data-reveal>
        <span>Battery physics</span>
        <span>Electrochemical insight</span>
        <span>AI modeling</span>
        <span>Algorithmic systems</span>
        <span>BMS diagnostics</span>
        <span>Field intelligence</span>
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
    </section>
  );
}

function KeynoteStatement({ item, index }) {
  return (
    <section className="section keynote-statement">
      <div className={`keynote-panel keynote-${index + 1}`} data-reveal>
        <h2>{item.line1}<br />{item.line2}</h2>
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
  const [filter, setFilter] = useState("Selected");
  const filters = ["Selected", "All", "Journal", "Conference"];
  const items = profile.publications.filter((p) => {
    if (filter === "Selected") return p.selected;
    if (filter === "All") return true;
    return p.type === filter;
  });

  return (
    <section className="section" id="research">
      <div className="section-head research-head" data-reveal>
        <div>
          <p className="kicker">Research Output</p>
          <h2>Selected work first. Full archive on demand.</h2>
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
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? profile.patents : profile.patents.filter((p) => p.selected);

  return (
    <section className="section" id="patents">
      <div className="section-head patents-head" data-reveal>
        <div>
          <p className="kicker">Patents</p>
          <h2>Battery diagnostics, control, and degradation intelligence.</h2>
        </div>
        <button className="archive-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show selected" : "View full patent archive"}
        </button>
      </div>
      <div className="patent-grid">
        {items.map((item) => (
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
        <Presence />
        <ProofSnapshot />
        <EducationFusion />
        <About />
        <KeynoteStatement item={profile.keynoteLines[0]} index={0} />
        <Focus />
        <KeynoteStatement item={profile.keynoteLines[1]} index={1} />
        <Systems />
        <KeynoteStatement item={profile.keynoteLines[2]} index={2} />
        <ResearchList />
        <Patents />
      </main>
      <Footer />
    </>
  );
}
