export const profile = {
  name: "Hyunjun Jang",
  koreanName: "장현준",
  title: "Battery Intelligence Research Engineer",
  subtitle:
    "Building predictive battery safety and degradation intelligence for real-world electrified mobility.",
  affiliation: "Hyundai Motor Company · BMS Algorithm Engineer · PhD Candidate",
  location: "Seoul / Korea",
  email: "limitsinx@naver.com",
  github: "https://github.com/JHyunjun",
  blog: "https://limitsinx.tistory.com",
  linkedin: "https://www.linkedin.com/",
  scholar: "",

  heroKeywords: [
    "Battery Intelligence",
    "AI-based Battery Modeling",
    "BMS Safety",
    "Degradation Prediction",
  ],

  about:
    "I work at the intersection of battery systems, BMS algorithms, and artificial intelligence. My focus is not only to estimate battery states, but to build models that can understand degradation, safety, impedance, and time-series behavior under real operating conditions.",

  vision:
    "My long-term research direction is to move battery modeling from descriptive prediction toward mechanistic and explanatory intelligence. I am interested in AI-centered battery physical models that combine field data, electrochemical insight, generative modeling, and system-level validation.",

  metrics: [
    { value: "7.5+", label: "Years in BMS R&D" },
    { value: "AI × BMS", label: "Core Research Axis" },
    { value: "CMS-GAN", label: "Representative Project" },
    { value: "Field Data", label: "Validation Mindset" },
  ],

  researchAreas: [
    {
      title: "Predictive Battery Safety",
      body:
        "Fault diagnosis, anomaly detection, and safety-oriented BMS algorithms for electrified vehicle battery systems.",
    },
    {
      title: "Battery Degradation Intelligence",
      body:
        "SOH, RUL, aging, and degradation modeling using battery time-series data and system-level validation.",
    },
    {
      title: "Generative Battery Modeling",
      body:
        "High-fidelity synthetic battery time-series generation using WGAN-GP, CMS-GAN, teacher guidance, and consistency-aware losses.",
    },
    {
      title: "Impedance & Frequency Diagnostics",
      body:
        "EIS, virtual impedance, frequency-resolved diagnostics, and signal-level interpretation for battery health and fault detection.",
    },
  ],

  projects: [
    {
      name: "CMS-GAN",
      tag: "Generative AI for Battery Time-Series",
      description:
        "Conditional Mode Seeking GAN for diverse condition-conditioned battery signal generation. Designed for realistic voltage/current behavior under battery operating constraints.",
      highlights: ["WGAN-GP", "Conditional mode diversity", "Teacher guidance", "Soft-DTW / MMD / correlation validation"],
    },
    {
      name: "Predictive Battery Safety & Degradation Intelligence",
      tag: "BMS Intelligence Platform",
      description:
        "A research direction that integrates onboard BMS algorithms, cloud-scale fleet intelligence, safety diagnostics, and degradation estimation.",
      highlights: ["SOC/SOH/RUL", "Safety diagnostics", "Fleet data", "Physics-data fusion"],
    },
    {
      name: "System-Level Frequency-Resolved Diagnostics",
      tag: "Battery Fault Detection",
      description:
        "Frequency-resolved diagnostic methodology for lithium-ion battery fault detection using system-level signals and impedance-inspired interpretation.",
      highlights: ["Low-frequency diagnostics", "Mahalanobis distance", "Per-frequency contribution", "Cross-system validation"],
    },
  ],

  writings: [
    {
      title: "Engineering Insight",
      body:
        "Technical blog on battery engineering, AI/deep learning, paper reviews, and development environment notes.",
      href: "https://limitsinx.tistory.com",
    },
    {
      title: "Research Notes",
      body:
        "Concise notes on AI for batteries, BMS algorithms, impedance analysis, generative modeling, and model validation.",
      href: "#research",
    },
  ],

  patents: [
    "Battery SOH model and real-vehicle big-data based estimation",
    "Vehicle battery control apparatus and method",
    "Battery safety and diagnostic algorithm portfolio",
  ],
};
