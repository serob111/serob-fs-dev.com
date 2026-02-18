import { useState } from "react";
import "./App.css";

const skills = [
  {
    title: "Frontend ",
    items: [
      "React Query / TanStack Query",
      "Redux Toolkit / Zustand/ SAGA",
      "React Hook Form",
      "UI Libraries (MUI / Tailwind / Shadcn)",
      "Performance (Memo, Virtualization, Profiling)",
      "Accessibility (a11y)"
    ]
  },
  {
    title: "Backend",
    items: [
      "TypeScript (Advanced Types)",
      "Nest.JS",
      "WebSockets (Socket.io)",
      "Payment Integrations (Stripe / Chargebee)",
      "Queues (BullMQ / Redis)",
      "Microservices / Modular Architecture",
      "Testing (Jest, Supertest)"
    ]
  },
  {
    title: "Database",
    items: [
      "PostgreSQL (Indexes, EXPLAIN, Optimization)",
      "Migrations",
      "Transactions",
      "Schema Design",
      "Redis (Cache, Sessions)"
    ]
  },
  {
    title: "Cloud / DevOps",
    items: [
      "Docker",
      "CI/CD (GitHub Actions)",
      "Vercel / AWS Deployments",
      "Nginx",
      "Monitoring (Sentry / Logs)"
    ]
  },
  {
    title: "Testing & Quality",
    items: [
      "Unit + Integration Testing",
      "E2E (Playwright / Cypress)",
      "Code Review & Refactoring",
      "Clean Architecture"
    ]
  },
  {
    title: "AI Tools",
    items: [
      "AI-Augmented Development (Claude, Cursor, Codex)",
      "LLM Integrations (OpenRouter, OpenAI APIs)",
      "Prompt-to-App Workflows",
      "Automation Scripts"
    ]
  }
];

const experiences = [
  {
    title: "Senior Full-Stack Engineer — Toptal",
    date: "January 2026 — Present (2 months)",
    summary:
      "Accepted into Toptal through a multi-stage screening process (algorithmic assessments, system design interviews, and a real-world engineering project). Toptal selects only the top 3% of freelance engineers worldwide. I work with international clients on production-grade, high-load applications, owning architecture, implementation, and performance.",
    highlightsTitle: "Responsibilities and contributions:",
    highlights: [
      "Designed and developed scalable full-stack applications using React, Next.js, Node.js, and TypeScript",
      "Built backend services with REST and GraphQL APIs, handling real-world traffic and data volumes",
      "Partnered with product and engineering teams to deliver maintainable, production-ready solutions",
      "Optimized performance, scalability, and reliability across frontend and backend systems"
    ]
  },
  {
    title: "Full-Stack Developer — AppsGeyser.com (Next.js + PHP/Yii2)",
    date: "January 2024 — Present (2 years, 2 months)",
    summary:
      "Maintaining and evolving a large high-load product with more than 1,000,000 MAU.",
    highlightsTitle: "Achievements:",
    highlights: [
      "Introduced SSR/ISR in Next.js, improving SEO and TTFB by ~22%",
      "Implemented i18n with dynamic language package loading",
      "Refactored monolithic PHP modules into separate services with APIs",
      "Configured Cloudflare caching to reduce backend load by 27%",
      "Reduced frontend bundle size by ~31%",
      "Tech: Next.js, PHP (Yii2), Nginx, Cloudflare, MySQL, Redis"
    ]
  },
  {
    title: "Full-Stack Developer — Upwork (Project-Based)",
    date: "January 2022 — Present (4 years, 2 months)",
    summary:
      "Delivered international projects across automotive, e-commerce, and high-load web infrastructure.",
    highlightsTitle: "Key projects:",
    highlights: [
      "Gauge Automotive (Jan 2023 — Jan 2024): Middle+ React Developer — improved table load time by ~40% with virtualization; delivered complex forms, statuses, and aggregates; contributed to code review and task estimation",
      "Senior PHP Backend Developer — High-Load System (Aug 2023 — Mar 2024): optimized Yii2 endpoints and SQL indexes; introduced Redis/Cloudflare caching; modernized legacy modules without downtime",
      "Next.js / Node.js Developer (May 2023): improved frontend performance, asset loading, and component architecture; improved team DX",
      "Next.js React Landing Page (Oct 2024 — Nov 2024): built SSR/SEO landing page, integrated UI components, delivered responsive and Lighthouse-optimized output"
    ]
  },
  {
    title: "Senior Full-Stack Developer — SDH IT GmbH (Part-time, Remote)",
    date: "July 2025 — December 2025 (6 months)",
    summary:
      "Built a complex real-time frontend application from scratch using React and TypeScript with a modular architecture.",
    highlightsTitle: "Achievements:",
    highlights: [
      "Designed state architecture with Context Providers and custom hooks to improve extensibility",
      "Implemented WebSockets (Socket.io) for live status updates and UI synchronization",
      "Reduced redundant re-renders by 38% via memoization, selectors, and context optimization",
      "Implemented safe socket reconnection on network loss",
      "Created a UI component library to speed up team time-to-feature",
      "Tech: React, TypeScript, Socket.io, Tailwind, Docker, GitHub Actions"
    ]
  }
];

const projects = [
  {
    title: "AppsGeyser",
    video: "dashvideo.webm",
    image: "Appsgeyser.png",
    appUrl: "https://appsgeyser.com/",
    sourceUrl: "https://github.com/serobXX/newag",
    description:
      "AppsGeyser is a high-load app builder platform with 1M+ monthly active users, combining Next.js and a legacy PHP/Yii2 backend. I work on performance, SEO (SSR/ISR), refactoring modules, and improving UI/UX across core product flows."
  },
  {
    title: "PharmacyOne",
    image: "pharmacy.png",
    appUrl: "#",
    sourceUrl: "https://github.com/serob111/newpharm",
    description:
      "PharmacyOne is a pharmacy-focused web platform where users can search medicines, compare prices, check availability, and find alternatives. I built a fast, clean frontend with scalable architecture and reliable API integrations."
  },
  {
    title: "A/B Test Chart",
    image: "chart.png",
    appUrl: "https://serob111.github.io/ab-test-chart/",
    sourceUrl: "https://github.com/serob111/ab-test-chart",
    description:
      "A responsive interactive chart tool for visualizing and comparing A/B test results directly in the browser. It helps analyze experiment performance by plotting metrics, trends, and variations; built with vanilla JS/React and fully open-source on GitHub."
  },
  {
    title: "Gauge Automotive Car Bidding Platform",
    image: "Gauge.png",
    appUrl: "https://stockupsolutions.com/inventory",
    sourceUrl: "https://github.com/serobXX/StockUP",
    description:
      "A dynamic automotive bidding and inventory management platform that allows users to browse vehicles, track bids, and manage listings in real time. Built with modern web technologies (Next.js/React, REST APIs), it features optimized performance, responsive UI, and seamless bidding workflows for buyers and sellers."
  },
  {
    title: "Fantasy Soccer Manager",
    image: "soccer.png",
    appUrl: "#",
    sourceUrl: "https://github.com/serob111/full-stack-react-node-express-graph",
    description:
      "A full-stack fantasy soccer management app where users create teams, track player stats, and compete in leagues with live game data visualizations. Built with React + Vite, Apollo GraphQL, and a Node.js + TypeScript backend, the application delivers fast UI, real-time updates, and a seamless user experience."
  }
];

const socials = [
  { label: "GH", href: "#" },
  { label: "IG", href: "#" },
  { label: "IN", href: "#" },
  { label: "BE", href: "#" }
];

export default function App() {
  const [expIndex, setExpIndex] = useState(0);
  const baseUrl = import.meta.env.BASE_URL;
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });
  const expCount = experiences.length;
  const currentExp = experiences[expIndex];

  const goExp = (dir) => {
    if (expCount <= 1) return;
    setExpIndex((prev) => (prev + dir + expCount) % expCount);
  };

  const handleFormChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

 const handleSendEmail = (e) => {
  e.preventDefault();

  const to = "serobkhurshudyan111@gmail.com";
  const subject = encodeURIComponent(formData.subject || "New message");
  const body = encodeURIComponent(
    `From: ${formData.email}\n\n${formData.message || ""}`
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank");
};



  const contactSocials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/serob-khurshudyan/", icon: "linkedin.svg" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~013550d04befdd4654?viewMode=1", icon: "upwork.svg" },
    { label: "GitHub", href: "https://github.com/serob111", icon: "github.svg" },
    { label: "Toptal", href: "https://www.toptal.com/developers/resume/serob-khurshudyan", icon: "toptal.svg" }
  ];

  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">SEROB</div>
        <nav className="topnav">
          <a href="#contact">CONTACT ME</a>
        </nav>
      </header>

      <section id="hero" className="section hero">
        <div className="section-inner">
          <h1 className="reveal delay-1">
            Senior Full-Stack JavaScript Engineer 
          </h1>
          <h2 className="reveal delay-2">
            I build scalable, production-ready web applications.
          </h2>
       
          <div className="cta-line reveal delay-4">
            <a className="badge mt-20" href={`${baseUrl}SEROBRESUME.pdf`} download="SEROBRESUME.pdf">
              Download Resume
            </a>
          </div>
        </div>

         <div className="earth-wrap">
          <img src={`${baseUrl}earth.svg`} alt="Earth" />
        </div>
      </section>

      <section
        id="skills"
        className="section skills"
        aria-labelledby="skills-title"
      >
        <div className="skills-orbit" aria-hidden="true">
          <img className="orbit-icon icon-1" src={`${baseUrl}react.svg`} alt="React" />
          <img className="orbit-icon icon-2" src={`${baseUrl}js.svg`} alt="JavaScript" />
          <img className="orbit-icon icon-3" src={`${baseUrl}node.svg`} alt="Node.js" />
          <img className="orbit-icon icon-4" src={`${baseUrl}nest.svg`} alt="NestJS" />
          <img className="orbit-icon icon-5" src={`${baseUrl}next.svg`} alt="Next.js" />
          <img className="orbit-icon icon-6" src={`${baseUrl}mongodb.svg`} alt="MongoDB" />
          <img className="orbit-icon icon-7" src={`${baseUrl}aws.svg`} alt="AWS" />
          <img className="orbit-icon icon-8" src={`${baseUrl}cloud.svg`} alt="Cloud" />
          <img className="orbit-icon icon-9" src={`${baseUrl}docker.svg`} alt="Docker" />
          <img className="orbit-icon icon-10" src={`${baseUrl}typescript.svg`} alt="TypeScript" />
        </div>
        <div className="section-inner">
          <div id="skills-title" className="section-title reveal">
            MY SKILLS
          </div>
          <div className="section-subtitle reveal delay-1">
            HERE IS A LIST OF SOME OF MY SKILLS
          </div>
          <div className="skills-grid" role="list">
            {skills.map((group, i) => (
              <article
                key={group.title}
                className="skill-card reveal"
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                role="listitem"
                aria-labelledby={`skill-group-${i}`}
              >
                <h3 id={`skill-group-${i}`} className="skill-title">
                  {group.title}
                </h3>
                <div className="skill-badges" role="list">
                  {group.items.map((item) => (
                    <span key={item} className="skill-badge" role="listitem">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      
      </section>

      <section id="experience" className="section experience">
        <div className="section-inner">
          <div className="section-title reveal">MY WORK EXPERIENCE</div>
          <div className="glass-card reveal delay-2">
            <h3>{currentExp.title}</h3>
            <div className="date">{currentExp.date}</div>
            <p>{currentExp.summary}</p>
            {currentExp.highlightsTitle && (
              <div className="exp-label">{currentExp.highlightsTitle}</div>
            )}
            {currentExp.highlights && (
              <ul className="exp-list">
                {currentExp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
       
        <button
          type="button"
          className="arrow left"
          onClick={() => goExp(-1)}
          disabled={expCount <= 1}
          aria-label="Previous experience"
        >
          &#x2039;
        </button>
        <button
          type="button"
          className="arrow right"
          onClick={() => goExp(1)}
          disabled={expCount <= 1}
          aria-label="Next experience"
        >
          &#x203A;
        </button>
        
      </section>

      <section id="projects" className="section projects">
        <div className="section-inner">
          <div className="section-title reveal">MY PROJECTS</div>
          <div className="projects-grid">
            {projects.map((proj) => (
              <article key={proj.title} className="project-card reveal delay-2">
                <div className="project-media">
                  {proj.video ? (
                    <video autoPlay muted loop playsInline preload="auto">
                      <source src={`${baseUrl}${proj.video}`} type="video/webm" />
                      <source src={`${baseUrl}${proj.video}`} />
                    </video>
                  ) : (
                    <img src={`${baseUrl}${proj.image}`} alt={proj.title} />
                  )}
                </div>
                <div className="project-body">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="project-actions">
                    {proj.appUrl && proj.appUrl !== "#" && (
                      <a className="ghost-btn" href={proj.appUrl} target="_blank" rel="noreferrer">
                        CLICK TO OPEN
                      </a>
                    )}
                    {proj.sourceUrl && proj.sourceUrl !== "#" && (
                      <a className="icon-btn" href={proj.sourceUrl} target="_blank" rel="noreferrer" aria-label="Open source code">
                        <img src={`${baseUrl}github.svg`} alt="" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
       
      </section>

      <section id="contact" className="section contact">
        <div className="section-inner contact-inner">
          <div className="section-title reveal">CONTACT ME</div>
          <div className="contact-details reveal delay-1">
            <a href="tel:+37494998222" className="contact-link">
              +374 94 998 222
            </a>
            <a href="mailto:serobkhurshudyan111@gmail.com" className="contact-link">
              serobkhurshudyan111@gmail.com
            </a>
          </div>
          <form className="contact-form reveal delay-2" onSubmit={handleSendEmail}>
            <label>
              EMAIL :
              <input
                type="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleFormChange("email")}
                required
              />
            </label>
            <label>
              SUBJECT :
              <input
                type="text"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleFormChange("subject")}
              />
            </label>
            <label>
              CONTENT :
              <textarea
                rows="5"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleFormChange("message")}
                required
              />
            </label>
            <button type="submit" className="primary-btn">
              SEND MESSAGE
            </button>
          </form>
          <div className="contact-float-icons" aria-label="Social links">
            {contactSocials.map((s, i) => (
              <a
                key={s.label}
                className={`social-icon ${i % 2 === 0 ? "float-slow" : "float-fast"}`}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                <img src={`${baseUrl}${s.icon}`} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      
      </section>
    </div>
  );
}
