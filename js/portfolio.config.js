/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION FILE
 * ====================================================================
 * Customize this single file to personalize the entire website.
 * All texts, links, skills, projects, experience, and socials are
 * dynamically populated across the portfolio from this config.
 */

const portfolioConfig = {
  // ------------------------------------------------------------------
  // 1. Personal & Hero Information
  // ------------------------------------------------------------------
  personal: {
    name: "Sunkara Bhairav",
    headlineGreeting: "Hi, I'm Sunkara Bhairav.",
    primaryRole: "Senior Creative Developer & UI Architect",
    secondHeadline: "I Build Digital Experiences.",
    shortBio:
      "Bridging the intersection of engineering precision and high-end visual design. Crafting scalable web applications, fluid micro-interactions, and immersive digital platforms.",
    location: "San Francisco, CA / Remote",
    email: "sunkara.bhairav@example.com",
    availabilityBadge: "Available for Opportunities",
    isAvailable: true,
    avatar: "./assets/images/avatar.png", // Path to profile image
    resumeUrl: "#contact", // Link to your resume PDF or contact
  },

  // ------------------------------------------------------------------
  // 2. Social Media Links
  // ------------------------------------------------------------------
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
      label: "View GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
      label: "Connect on LinkedIn",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "instagram",
      label: "Follow on Instagram",
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com",
      icon: "twitter",
      label: "Follow on X",
    },
  ],

  // ------------------------------------------------------------------
  // 3. About Section
  // ------------------------------------------------------------------
  about: {
    heading: "Designing the future of the web, line by line.",
    paragraphs: [
      "I am a passionate software engineer and creative technologist dedicated to building performant, accessible, and visually captivating web experiences. My journey started at the crossroads of graphic aesthetics and algorithmic logic.",
      "Over the past 5+ years, I have architected high-throughput web applications, engineered resilient distributed systems, and designed Apple-caliber interfaces that captivate millions of users worldwide.",
      "When I am not writing code, you will find me exploring generative 3D shaders, tinkering with edge AI computing, contributing to open-source developer tooling, and mentoring rising engineers.",
    ],
    highlightCards: [
      {
        number: "05+",
        label: "Years Experience",
        subtext: "Delivering enterprise & product software",
        icon: "clock",
      },
      {
        number: "30+",
        label: "Projects Shipped",
        subtext: "From zero to production at scale",
        icon: "layout-grid",
      },
      {
        number: "99.9%",
        label: "Client Satisfaction",
        subtext: "Focusing on human-centric ergonomics",
        icon: "award",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 4. Skills & Technologies (Categorized)
  // ------------------------------------------------------------------
  skills: [
    {
      category: "Programming Languages",
      icon: "code-2",
      items: [
        { name: "TypeScript", level: "Expert" },
        { name: "JavaScript (ESNext)", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "Go", level: "Intermediate" },
        { name: "HTML5 & Modern CSS", level: "Expert" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      category: "Frontend Development",
      icon: "monitor",
      items: [
        { name: "React 18+", level: "Expert" },
        { name: "Next.js (App Router)", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Three.js & WebGL", level: "Intermediate" },
        { name: "Framer Motion", level: "Advanced" },
        { name: "Redux & Zustand", level: "Advanced" },
      ],
    },
    {
      category: "Backend Development",
      icon: "server",
      items: [
        { name: "Node.js & Express", level: "Expert" },
        { name: "FastAPI", level: "Advanced" },
        { name: "GraphQL APIs", level: "Advanced" },
        { name: "RESTful Architecture", level: "Expert" },
        { name: "Microservices", level: "Advanced" },
        { name: "WebSockets & SSE", level: "Advanced" },
      ],
    },
    {
      category: "Databases",
      icon: "database",
      items: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Redis Cache", level: "Advanced" },
        { name: "Supabase", level: "Expert" },
        { name: "Prisma ORM", level: "Advanced" },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "terminal",
      items: [
        { name: "Git & GitHub Actions", level: "Expert" },
        { name: "Docker & Containers", level: "Advanced" },
        { name: "AWS Cloud (S3, Lambda)", level: "Advanced" },
        { name: "Vercel & Cloudflare", level: "Expert" },
        { name: "Figma & UI Prototyping", level: "Expert" },
        { name: "Linux / Unix Shell", level: "Advanced" },
      ],
    },
    {
      category: "Other Skills",
      icon: "sparkles",
      items: [
        { name: "System Architecture", level: "Advanced" },
        { name: "Performance Optimization", level: "Expert" },
        { name: "WCAG Accessibility (a11y)", level: "Advanced" },
        { name: "SEO & Web Vitals", level: "Expert" },
        { name: "Technical Writing", level: "Advanced" },
      ],
    },
  ],

  // ------------------------------------------------------------------
  // 5. Featured Projects (Case Studies)
  // ------------------------------------------------------------------
  projects: [
    {
      id: "project-1",
      title: "NeuralFlow AI - Autonomous Orchestration",
      tagline: "High-Throughput Multi-Agent Workflow Engine",
      description:
        "An enterprise-ready AI orchestration platform enabling real-time visual canvas workflow design, streaming inference telemetry, and autonomous multi-agent task execution.",
      image: "./assets/images/project-nexus-ai.jpg",
      tags: ["React", "TypeScript", "Node.js", "WebSockets", "Tailwind CSS"],
      metrics: "Sub-20ms latency • 1.2k req/sec throughput",
      githubUrl: "https://github.com/example/neuralflow-ai",
      liveUrl: "https://example.com/demo/neuralflow",
      featured: true,
      caseStudy: {
        problem:
          "Complex LLM workflows suffered from opaque debugging states and unreliable asynchronous pipelines.",
        solution:
          "Engineered a visual node graph execution system with bidirectional WebSockets, edge telemetry, and reactive state management.",
        impact:
          "Adopted by 40+ engineering teams, decreasing pipeline configuration times by 68%.",
      },
    },
    {
      id: "project-2",
      title: "Pulse Terminal - Next-Gen Asset Analytics",
      tagline: "Real-Time Decentralized Financial Intelligence",
      description:
        "A low-latency financial analytics terminal featuring high-frequency order book visualizations, dynamic liquidity heatmaps, and customizable multi-asset algorithmic metrics.",
      image: "./assets/images/project-pulse-defi.jpg",
      tags: ["Next.js", "TypeScript", "D3.js / Canvas", "Tailwind CSS", "Redis"],
      metrics: "60 FPS rendering • Real-time WebSocket feed",
      githubUrl: "https://github.com/example/pulse-terminal",
      liveUrl: "https://example.com/demo/pulse",
      featured: true,
      caseStudy: {
        problem:
          "Traders required unified multi-chain depth metrics without lag or memory leaks across multi-monitor setups.",
        solution:
          "Built a high-performance WebGL & Canvas charting engine with localized caching and atomic state updates.",
        impact:
          "Maintained sustained 60 FPS even during market volatility surges of 50k+ transactions per minute.",
      },
    },
    {
      id: "project-3",
      title: "Aetherius Spatial - 3D Design Experience",
      tagline: "Immersive Web Experience & Spatial Studio",
      description:
        "An award-winning interactive spatial design platform blending 3D shader environments, audio-reactive haptics, and fluid micro-interactions inspired by Apple product launches.",
      image: "./assets/images/project-aura-spatial.jpg",
      tags: ["Three.js", "GLSL Shaders", "React", "Tailwind CSS", "Web Audio API"],
      metrics: "Awwwards Site of the Day Nominee • 98 Lighthouse Score",
      githubUrl: "https://github.com/example/aetherius-spatial",
      liveUrl: "https://example.com/demo/aetherius",
      featured: true,
      caseStudy: {
        problem:
          "Standard product showcases felt static, failing to evoke modern spatial product capabilities.",
        solution:
          "Created physically based materials, custom vertex shaders, and responsive camera trajectories that dynamically react to viewport scrolling.",
        impact:
          "Increased user engagement duration by 340% and earned international design accolades.",
      },
    },
  ],

  // ------------------------------------------------------------------
  // 6. Experience & Education Timelines
  // ------------------------------------------------------------------
  experience: [
    {
      period: "2023 - Present",
      role: "Lead Creative Engineer",
      company: "Apex Digital Labs",
      location: "San Francisco, CA",
      description:
        "Architecting flagship web applications, establishing global frontend design systems, and directing technical strategy for interactive web platforms serving Fortune 500 clients.",
      highlights: [
        "Reduced core bundle sizes by 42% via modern module federation and tree-shaking",
        "Mentored a team of 8 frontend engineers across design tokens and accessibility standards",
      ],
    },
    {
      period: "2021 - 2023",
      role: "Senior Full-Stack Engineer",
      company: "Veloce Technologies",
      location: "New York, NY",
      description:
        "Engineered real-time data visualizers and collaborative cloud workspaces using React, Node.js, and Redis microservices.",
      highlights: [
        "Architected scalable WebSocket backend handling 100k+ concurrent active users",
        "Collaborated closely with UX teams to implement seamless design-to-code workflows",
      ],
    },
    {
      period: "2019 - 2021",
      role: "Frontend Developer",
      company: "Hyperion Interactive",
      location: "Austin, TX",
      description:
        "Developed high-converting landing pages, interactive 3D web microsites, and performance-critical e-commerce platforms.",
      highlights: [
        "Improved PageSpeed score from 64 to 98 across 15+ client web properties",
        "Pioneered component library adoption across the agency",
      ],
    },
  ],

  education: [
    {
      period: "2015 - 2019",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      description:
        "Focused on Distributed Systems, Human-Computer Interaction (HCI), and Computer Graphics. Graduated Magna Cum Laude.",
      highlights: ["Dean's Honor List", "President of Web Development Club"],
    },
    {
      period: "2020",
      degree: "Advanced Cloud Architecture Certification",
      institution: "AWS Certified Solutions Architect",
      location: "Online",
      description:
        "Deep dive into high-availability architecture, serverless microservices, and VPC networking.",
      highlights: ["Scored 940 / 1000"],
    },
  ],

  // ------------------------------------------------------------------
  // 7. Achievements & Certifications
  // ------------------------------------------------------------------
  achievements: [
    {
      title: "Awwwards Site of the Day Nominee",
      issuer: "Awwwards Global",
      year: "2024",
      description:
        "Recognized for visual distinction, interaction fluidity, and code performance on Aetherius Spatial.",
      badge: "Design Excellence",
      link: "https://awwwards.com",
    },
    {
      title: "Global AI Hackathon - 1st Place Winner",
      issuer: "TechCrunch Disrupt",
      year: "2023",
      description:
        "Developed an autonomous accessibility assistant utilizing multimodal vision models within 48 hours.",
      badge: "First Prize",
      link: "https://techcrunch.com",
    },
    {
      title: "Open Source Contributor of the Year",
      issuer: "OpenWeb Collective",
      year: "2022",
      description:
        "Authored high-impact accessibility fixes and canvas optimization utilities merged into leading React ecosystems.",
      badge: "Community Honor",
      link: "https://github.com",
    },
    {
      title: "Meta Certified Frontend Developer",
      issuer: "Meta / Coursera",
      year: "2021",
      description:
        "Rigorous verification of advanced React patterns, UI testing, and web performance optimization.",
      badge: "Certified",
      link: "https://coursera.org",
    },
  ],

  // ------------------------------------------------------------------
  // 8. Contact & Inquiry Settings
  // ------------------------------------------------------------------
  contact: {
    heading: "Have an idea? Let's build something amazing.",
    subheading:
      "Whether you're looking for a lead engineer, technical architecture consultation, or want to collaborate on something cutting-edge, my inbox is always open.",
    directEmail: "sunkara.bhairav@example.com",
    location: "San Francisco, CA (PST / UTC-8) • Available Worldwide",
    responseExpectation: "Typically responds within 24 business hours",
    formNotice:
      "This contact form sends messages directly to my email inbox with verified validation.",
  },

  // ------------------------------------------------------------------
  // 9. Site Metadata & Footer
  // ------------------------------------------------------------------
  meta: {
    siteTitle: "Sunkara Bhairav — Creative Developer",
    siteDescription:
      "Personal portfolio of Sunkara Bhairav, a Senior Creative Developer building high-end digital experiences, scalable web applications, and intuitive interfaces.",
    keywords:
      "Creative Developer, Full Stack Engineer, React, TypeScript, UI Architect, Portfolio, WebGL",
    copyrightYear: new Date().getFullYear(),
    footerTagline: "Designed & Built with passion",
    engineBadge: "Powered by Google Antigravity",
  },
};

// Export for module systems or attach to global window
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioConfig;
}
if (typeof window !== "undefined") {
  window.portfolioConfig = portfolioConfig;
}
