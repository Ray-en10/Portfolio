import { useEffect, useState } from "react";

type Language = "en" | "fr";

type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  detail: string;
  stack: string[];
  accent: string;
  github: string;
  website?: string;
};

const links = {
  github: "https://github.com/Ray-en10",
  linkedin: "https://www.linkedin.com/in/zaghdoudi-rayen-029634256/",
};

const content = {
  en: {
    available: "Open to new missions",
    role: "Full-stack developer",
    heroTitle: "I build digital worlds worth exploring.",
    heroText:
      "A full-stack developer with a love for expressive interfaces, real-time systems, and the little details that make a product feel alive.",
    selectedWork: "Mission log",
    about: "Signal",
    stack: "Curious by nature. Precise by craft.",
    stackText:
      "I move comfortably between the interface and the infrastructure: shaping the experience, designing the system, and making sure both feel effortless to use.",
    contact: "Have a mission in mind?",
    contactText:
      "Whether you are building a product, exploring an idea, or looking for a teammate, my signal is open.",
    viewGithub: "Open GitHub",
    viewLinkedin: "Connect on LinkedIn",
    seeProjects: "Enter mission log",
    dossier: "Open dossier",
    close: "Close dossier",
    github: "GitHub repository",
    live: "Launch live site",
    noLive: "Live site not published",
    built: "Built with curiosity · 2026",
  },
  fr: {
    available: "Ouvert aux nouvelles missions",
    role: "Développeur full-stack",
    heroTitle: "Je crée des univers numériques à explorer.",
    heroText:
      "Développeur full-stack passionné par les interfaces expressives, les systèmes temps réel et les détails qui donnent vie à un produit.",
    selectedWork: "Journal de mission",
    about: "Signal",
    stack: "Curieux par nature. Précis dans la création.",
    stackText:
      "Je travaille aussi bien sur l'interface que sur l'infrastructure : façonner l'expérience, concevoir le système et rendre l'ensemble simple à utiliser.",
    contact: "Une mission en tête ?",
    contactText:
      "Vous construisez un produit, explorez une idée ou cherchez un coéquipier ? Mon signal est ouvert.",
    viewGithub: "Ouvrir GitHub",
    viewLinkedin: "Me retrouver sur LinkedIn",
    seeProjects: "Entrer dans le journal",
    dossier: "Ouvrir le dossier",
    close: "Fermer le dossier",
    github: "Dépôt GitHub",
    live: "Lancer le site",
    noLive: "Site non publié",
    built: "Créé avec curiosité · 2026",
  },
};

const projects: Project[] = [
  {
    number: "01",
    title: "Ares Admin",
    eyebrow: "Operations / Dashboard",
    description:
      "A structured administration dashboard for managing business data and day-to-day operations.",
    detail:
      "A control room for turning complex business data into clear actions. The focus is on reliable flows, useful hierarchy, and a calm interface even when the data gets busy.",
    stack: ["Angular", "Spring Boot", "PostgreSQL"],
    accent: "violet",
    github: links.github,
  },
  {
    number: "02",
    title: "Cash-in-transit tracking",
    eyebrow: "Final year project / Real-time",
    description:
      "A real-time operations platform for tracking cash-in-transit agents between banks, built during my final-year internship at Tunisie Sécurité.",
    detail:
      "The mission: give teams a live view of moving agents and routes. WebSockets keep the system responsive while Leaflet turns location data into a useful operational map.",
    stack: ["Angular", "Spring Boot", "WebSockets", "Leaflet"],
    accent: "cyan",
    github: links.github,
  },
  {
    number: "03",
    title: "E-commerce platform",
    eyebrow: "Product / Commerce",
    description:
      "A complete shopping flow with product discovery, cart management, and a focused checkout experience.",
    detail:
      "A product-first commerce experience designed around momentum: discover quickly, make confident choices, and move from cart to checkout without friction.",
    stack: ["React", "Node.js", "MongoDB"],
    accent: "orange",
    github: links.github,
  },
];

const skills = [
  { name: "React & TypeScript", type: "Frontend" },
  { name: "Angular", type: "Frontend" },
  { name: "Java & Spring Boot", type: "Backend" },
  { name: "WebSockets & REST", type: "Systems" },
  { name: "SQL & PostgreSQL", type: "Data" },
  { name: "Git & GitHub", type: "Workflow" },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
      <path d="M3 13 13 3m0 0H5m8 0v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
      <path d="m4 4 8 8m0-8-8 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-icon">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-icon">
      <path d="M20 15.4A8.5 8.5 0 0 1 8.6 4 8.5 8.5 0 1 0 20 15.4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function SolarSystem() {
  return (
    <div className="solar-system" aria-hidden="true">
      <div className="solar-orbit solar-orbit-one"><i className="solar-planet solar-planet-one" /></div>
      <div className="solar-orbit solar-orbit-two"><i className="solar-planet solar-planet-two" /></div>
      <div className="solar-orbit solar-orbit-three"><i className="solar-planet solar-planet-three" /></div>
    </div>
  );
}

function NavIcon({ type }: { type: "signal" | "work" | "contact" }) {
  const paths = {
    signal: "M8 2v2m0 8v2M2 8h2m8 0h2M3.8 3.8l1.4 1.4m5.6 5.6 1.4 1.4m0-8.4-1.4 1.4m-5.6 5.6-1.4 1.4",
    work: "M3 5.5h10v7H3zM5 5.5V4h6v1.5M5.5 9h5",
    contact: "M3 4.5h10v7H3zM3.5 5l4.5 3 4.5-3",
  };
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="nav-icon">
      <path d={paths[type]} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  );
}

function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      {Array.from({ length: 28 }, (_, index) => <i key={index} className={`star-particle star-particle-${(index % 7) + 1}`} />)}
    </div>
  );
}

function Planet({ color = "violet", small = false }: { color?: string; small?: boolean }) {
  return (
    <div className={`planet planet-${color} ${small ? "planet-small" : ""}`} aria-hidden="true">
      <span className="planet-ring" />
      <span className="planet-shine" />
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const text = content[language];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className={`space-page min-h-screen overflow-hidden bg-[#060711] text-[#f4f1ff] transition-colors ${darkMode ? "" : "space-light"}`}>
      <StarField />
      <div className="space-glow space-glow-violet" />
      <div className="space-glow space-glow-cyan" />

      <header className="relative z-10 border-b border-white/10 bg-[#060711]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="identity-lockup">
            <span className="logo-orbit">R</span>
            <span className="identity-copy"><strong>Rayen Zaghdoudi</strong><small>Full-stack developer</small></span>
          </a>
          <nav className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50 md:flex">
            <a className="nav-link transition hover:text-cyan-300" href="#about"><NavIcon type="signal" />{text.about}</a>
            <a className="nav-link transition hover:text-cyan-300" href="#work"><NavIcon type="work" />{text.selectedWork}</a>
            <a className="nav-link transition hover:text-cyan-300" href="#contact"><NavIcon type="contact" />Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-black tracking-widest transition hover:border-cyan-300 hover:text-cyan-300" onClick={() => setLanguage(language === "en" ? "fr" : "en")} aria-label="Change language">
              {language === "en" ? "FR" : "EN"}
            </button>
            <button className="theme-toggle flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition hover:border-cyan-300 hover:text-cyan-300" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="mobile-menu-button flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-white/80 transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
        <nav className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""} md:hidden`}>
          <a href="#about" onClick={() => setMenuOpen(false)}><NavIcon type="signal" />{text.about}</a>
          <a href="#work" onClick={() => setMenuOpen(false)}><NavIcon type="work" />{text.selectedWork}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}><NavIcon type="contact" />Contact</a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="relative mx-auto max-w-7xl px-6 pb-28 pt-16 sm:pt-20 lg:px-10 lg:pb-40 lg:pt-32">
          <SolarSystem />
          <div className="hero-planet"><Planet color="violet" /></div>
          <div className="hero-planet hero-planet-cyan"><Planet color="cyan" small /></div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="max-w-4xl">
            <div className="mb-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
              <span className="signal-dot" /> {text.available}
            </div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">{text.role} <span className="text-white/20">/</span> Rayen Zaghdoudi</p>
            <h1 className="hero-title text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl lg:text-[8.5rem]">{text.heroTitle}</h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55">{text.heroText}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="space-button space-button-primary">{text.seeProjects}<ArrowUpRight /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="space-button">{text.viewLinkedin}<ArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-console" aria-hidden="true">
            <div className="hero-console-orbit hero-console-orbit-a" />
            <div className="hero-console-orbit hero-console-orbit-b" />
            <div className="hero-console-core"><Planet color="violet" small /></div>
            <div className="hero-console-label hero-console-label-a"><span>LAT</span> 36.8065° N</div>
            <div className="hero-console-label hero-console-label-b"><span>LONG</span> 10.1815° E</div>
            <div className="hero-console-label hero-console-label-c"><span>STATUS</span> ONLINE</div>
            <div className="hero-console-scan" />
          </div>
          <div className="mt-20 flex items-center gap-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-violet-400" />
            Transmission 001 / Curious minds welcome
          </div>
        </section>

        <section id="about" className="relative border-y border-white/10">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300">01 / {text.about}</p>
              <h2 className="max-w-md text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl">{text.stack}</h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-9 text-white/55">{text.stackText}</p>
              <div className="mt-12 grid gap-x-8 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{skill.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300">02 / {text.selectedWork}</p>
              <h2 className="text-5xl font-black tracking-[-0.08em] sm:text-7xl">{text.selectedWork}</h2>
            </div>
            <a className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 transition hover:text-cyan-300 sm:flex" href={links.github} target="_blank" rel="noreferrer">{text.viewGithub}<ArrowUpRight /></a>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <button key={project.title} type="button" onClick={() => { setMenuOpen(false); setSelectedProject(project); }} className={`mission-card mission-card-${project.accent} ${project.number === "01" ? "mission-card-featured" : ""} group text-left`} aria-label={`${text.dossier}: ${project.title}`}>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/35">{project.number} / LOG</span>
                  <span className="mission-arrow"><ArrowUpRight /></span>
                </div>
                <div className="relative z-10 mt-24">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">{project.eyebrow}</p>
                  <h3 className="max-w-[15rem] text-3xl font-black leading-[0.95] tracking-[-0.07em]">{project.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/50">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((technology) => <span key={technology} className="tech-pill">{technology}</span>)}</div>
                </div>
                <div className="mission-card-grid" />
                <Planet color={project.accent} small />
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 py-28 lg:flex-row lg:items-end lg:px-10 lg:py-40">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300">03 / Contact</p>
              <h2 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-8xl">{text.contact}</h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">{text.contactText}</p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-4">
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg font-bold transition hover:text-cyan-300">{text.viewLinkedin}<ArrowUpRight /></a>
              <a href={links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg font-bold transition hover:text-cyan-300">{text.viewGithub}<ArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 lg:px-10">
          <span>Rayen / Z</span><span>{text.built}</span>
        </div>
      </footer>
      {selectedProject && (
        <div className="dossier-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <div className="dossier" role="dialog" aria-modal="true" aria-label={selectedProject.title} onClick={(event) => event.stopPropagation()}>
            <div className="dossier-topline"><span>MISSION DOSSIER / {selectedProject.number}</span><button onClick={() => setSelectedProject(null)} aria-label={text.close}><CloseIcon /></button></div>
            <div className="dossier-visual mission-card-grid"><Planet color={selectedProject.accent} /></div>
            <div className="p-7 sm:p-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300">{selectedProject.eyebrow}</p>
              <h2 className="max-w-2xl text-4xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl">{selectedProject.title}</h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">{selectedProject.detail}</p>
              <div className="mt-8 flex flex-wrap gap-2">{selectedProject.stack.map((technology) => <span key={technology} className="tech-pill">{technology}</span>)}</div>
              <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-7">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="space-button space-button-primary">{text.github}<ArrowUpRight /></a>
                {selectedProject.website ? <a href={selectedProject.website} target="_blank" rel="noreferrer" className="space-button">{text.live}<ArrowUpRight /></a> : <span className="flex items-center px-2 text-xs font-bold uppercase tracking-widest text-white/25">{text.noLive}</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
