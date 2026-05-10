export const profile = {
  name: "Hyunjun Jang",
  koreanName: "장현준",
  headline: "AI · BMS · Intelligence",
  title: "Battery Intelligence Research Engineer",
  subtitle:
    "Designing predictive safety, degradation, and high-voltage battery intelligence for real-world mobility systems.",
  identity:
    "Hyundai Motor Company · BMS Algorithm Engineer · PhD Candidate",
  location: "Korea",
  email: "JHyunjun@users.noreply.github.com",
  github: "https://github.com/JHyunjun",
  blog: "https://limitsinx.tistory.com",
  linkedin: "https://kr.linkedin.com/in/hyunjun-jang-2824a61ba/en",
  scholar: "#",

  heroLinks: [
    {
      label: "Tistory",
      caption: "Engineering notes, paper reviews, and technical writing.",
      href: "https://limitsinx.tistory.com",
    },
    {
      label: "LinkedIn",
      caption: "Professional identity, industry focus, and research direction.",
      href: "https://kr.linkedin.com/in/hyunjun-jang-2824a61ba/en",
    },
    {
      label: "GitHub",
      caption: "Projects, code, and research implementation artifacts.",
      href: "https://github.com/JHyunjun",
    },
  ],

  overview:
    "I work at the intersection of battery systems, BMS algorithms, and AI-based modeling. My focus is to move battery intelligence beyond simple estimation, toward predictive safety, degradation understanding, and field-valid system intelligence.",
  vision:
    "The long-term goal is to build AI-centered battery physical intelligence: models that do not only fit data, but help explain degradation pathways, operating behavior, safety signatures, and time-series variability under real-world constraints.",

  expertise: [
    {
      value: "AI",
      label: "Generative & predictive modeling",
    },
    {
      value: "BMS",
      label: "Control, diagnosis, and estimation",
    },
    {
      value: "INT",
      label: "Field-valid intelligence architecture",
    },
    {
      value: "HV",
      label: "High-voltage battery systems",
    }
  ],

  focusAreas: [
    {
      title: "Predictive Battery Safety",
      body:
        "Algorithms and intelligence systems for anomaly detection, hazard prediction, and robust battery safety interpretation.",
      image: "/assets/vision-battery.svg"
    },
    {
      title: "Battery Degradation Intelligence",
      body:
        "SOH, RUL, and aging-aware modeling with time-series understanding, field data grounding, and system deployment in mind.",
      image: "/assets/diag-wave.svg"
    },
    {
      title: "AI-Centered Battery Modeling",
      body:
        "Generative and predictive models that push battery analysis from signal fitting to physically meaningful intelligence.",
      image: "/assets/network-intelligence.svg"
    }
  ],

  signatureSystems: [
    {
      name: "CMS-GAN",
      tag: "Generative Battery Intelligence",
      description:
        "Conditional Mode Seeking GAN for diverse, condition-aware battery time-series generation with stronger realism and controllable diversity.",
      bullets: ["WGAN-GP", "Mode diversity", "Teacher guidance", "Time-series validation"],
      visual: "/assets/project-cmsgan.svg"
    },
    {
      name: "Predictive Battery Safety & Degradation Intelligence",
      tag: "AI × BMS",
      description:
        "A system-level research direction combining onboard BMS logic, cloud-scale intelligence, fleet signals, and safety-first degradation understanding.",
      bullets: ["SOC / SOH / RUL", "Safety diagnostics", "Fleet-scale data", "Physics-data fusion"],
      visual: "/assets/project-safety.svg"
    },
    {
      name: "Frequency-Resolved Diagnostics",
      tag: "Diagnostic Systems",
      description:
        "Frequency-domain and impedance-inspired methodology for fault diagnosis, health inference, and explainable battery monitoring.",
      bullets: ["Impedance insight", "Signal interpretation", "Anomaly separation", "Explainability"],
      visual: "/assets/project-frequency.svg"
    }
  ],

  statements: [
    "Not just state estimation.",
    "Battery intelligence with predictive depth.",
    "AI systems designed for field reality.",
  ]
};
