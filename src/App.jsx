import { profile } from "./data.js";

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top">
        <span>Hyunjun</span>
        <strong>Jang</strong>
      </a>
      <nav className="nav">
        <a href="#presence">Presence</a>
        <a href="#research">Research</a>
        <a href="#education">Education</a>
        <a href="#publications">Publications</a>
        <a href="#patents">Patents</a>
      </nav>
      <div className="header-icons">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href={`mailto:${profile.email}`} aria-label="Email">✉</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-orb orb-one" aria-hidden="true" />
      <div className="hero-orb orb-two" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{profile.koreanName} · Battery Intelligence</p>
          <h1>
            <span>AI. BMS.</span>
            <strong>Intelligence.</strong>
          </h1>
          <p className="hero-subtitle">{profile.subtitle}</p>

          <div className="proof-grid">
            {profile.proofChips.map((item) => (
              <div className="proof-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual-frame">
          <div className="hero-visual-aura" aria-hidden="true" />
          <img src="/assets/hero-energy-ai.png" alt="Colorful AI battery intelligence visual" />
        </div>
      </div>
    </section>
  );
}

function Presence() {
  return (
    <section className="surface presence" id="presence">
      <div className="container">
        <div className="section-head split">
          <div>
            <p className="section-kicker">Public Presence</p>
            <h2>Technical influence, professional reach, and research implementation.</h2>
          </div>
          <p>
            A compact public hub for technical writing, professional identity,
            and code-based research artifacts.
          </p>
        </div>

        <div className="links-grid">
          {profile.links.map((item) => (
            <a className="link-card" href={item.href} key={item.label} target="_blank" rel="noreferrer">
              <div className="link-card-bg" aria-hidden="true" />
              <div className="link-top">
                <strong>{item.label}</strong>
                <span>↗</span>
              </div>
              <em>{item.metric}</em>
              <p>{item.caption}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  return (
    <section className="surface evidence-section" id="research">
      <div className="container">
        <div className="section-head center">
          <p className="section-kicker">Evidence Snapshot</p>
          <h2>Three pillars of research and innovation.</h2>
          <p>
            Battery diagnostics, peer-reviewed research, and field-oriented AI modeling
            are presented as visible proof, not decoration.
          </p>
        </div>

        <div className="evidence-grid">
          {profile.evidenceSnapshot.map((item) => (
            <a className="evidence-card" href={item.href} key={item.title}>
              <div className="evidence-image">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="evidence-body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const { left, center, right } = profile.education;

  return (
    <section className="surface education-section" id="education">
      <div className="container">
        <div className="section-head center">
          <p className="section-kicker">Education</p>
          <h2>Battery physics meets algorithmic intelligence.</h2>
          <p>
            The strongest signal is the combination: chemical engineering depth
            for battery systems and computer engineering depth for AI systems.
          </p>
        </div>

        <div className="education-grid">
          <article className="edu-card light-card">
            <div className="edu-header">
              <img className="edu-badge" src={left.badge} alt="SNU badge" />
              <span>{left.school}</span>
            </div>
            <h3 className="edu-major">{left.department}</h3>
            <p className="edu-degree">{left.degree}</p>
            <p className="edu-detail">{left.detail}</p>
          </article>

          <article className="edu-card core-card">
            <div className="core-pulse" aria-hidden="true" />
            <span className="core-tag">{center.tag}</span>
            <div className="core-title-wrap">
              <h3>{center.title1}</h3>
              <h3>{center.title2}</h3>
            </div>
            <p className="core-detail">{center.body}</p>
          </article>

          <article className="edu-card light-card">
            <div className="edu-header">
              <img className="edu-badge" src={right.badge} alt="Yonsei badge" />
              <span>{right.school}</span>
            </div>
            <h3 className="edu-major">{right.department}</h3>
            <p className="edu-degree">{right.degree}</p>
            <p className="edu-detail">{right.detail}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section className="dark-surface focus-section" id="about">
      <div className="container">
        <div className="section-head split dark-head">
          <div>
            <p className="section-kicker">Core Focus</p>
            <h2>Real systems first. AI that respects battery behavior.</h2>
          </div>
          <p>
            The work sits where BMS constraints, high-voltage operation,
            battery degradation, and AI-driven diagnostics meet.
          </p>
        </div>

        <div className="focus-grid">
          {profile.focusAreas.map((item) => (
            <article className="focus-card" key={item.title}>
              <div className="focus-image-wrap">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchiveList({ id, title, subtitle, items, kind }) {
  return (
    <div className="archive-column" id={id}>
      <div className="archive-head">
        <div>
          <span className={`archive-dot ${kind}`} />
          <h2>{title}</h2>
        </div>
        <p>{subtitle}</p>
      </div>

      <div className="archive-list">
        {items.map((item) => (
          <a
            className="archive-item"
            href={item.href}
            target={item.href === "#" ? "_self" : "_blank"}
            rel="noreferrer"
            key={`${item.title}-${item.number || item.venue}`}
          >
            <div className={`archive-icon ${kind}`}>
              {kind === "publication" ? "⌁" : "◈"}
            </div>
            <div className="archive-content">
              <div className="archive-badges">
                {item.type ? <span>{item.type}</span> : null}
                {item.role ? <span>{item.role}</span> : null}
                {item.status ? <span>{item.status}</span> : null}
              </div>
              <h3>{item.title}</h3>
              <p>{item.venue || item.number}</p>
              <small>{item.topic}</small>
            </div>
            <strong className="archive-year">{item.year}</strong>
          </a>
        ))}
      </div>
    </div>
  );
}

function Lists() {
  return (
    <section className="dark-surface lists-section">
      <div className="container lists-grid">
        <ArchiveList
          id="publications"
          title="Research Output"
          subtitle="All listed journal and conference outputs are directly visible. No broken toggle, no hidden archive."
          items={profile.publications}
          kind="publication"
        />

        <ArchiveList
          id="patents"
          title="Patents"
          subtitle="All listed granted and published patent items are directly visible for credibility and transparency."
          items={profile.patents}
          kind="patent"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <span>AI × BMS × Intelligence</span>
        </div>
        <div className="footer-center">
          <span>{profile.email}</span>
          <span>{profile.location}</span>
        </div>
        <div className="footer-right">
          <span>© 2025 {profile.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Presence />
      <Evidence />
      <Education />
      <Focus />
      <Lists />
      <Footer />
    </>
  );
}
