/**
 * ====================================================================
 * PORTFOLIO APPLICATION CORE ENGINE
 * ====================================================================
 * Dynamic rendering, Lucide icons integration, scroll spy, case-study modals,
 * accessible form validation, and toast notification system.
 */

// Global App Controller
(function () {
  "use strict";

  // Cache DOM containers
  const heroContainer = document.getElementById("hero-mount");
  const aboutContainer = document.getElementById("about-mount");
  const skillsContainer = document.getElementById("skills-mount");
  const projectsContainer = document.getElementById("projects-mount");
  const timelineContainer = document.getElementById("timeline-mount");
  const achievementsContainer = document.getElementById("achievements-mount");
  const contactContainer = document.getElementById("contact-mount");
  const footerContainer = document.getElementById("footer-mount");
  const navLinksContainer = document.getElementById("nav-links-mount");
  const mobileDrawerNav = document.getElementById("mobile-drawer-nav");
  const navBrandMount = document.getElementById("nav-brand-mount");

  // Fallback SVG Icons in case Lucide CDN is blocked/slow
  const iconFallbacks = {
    github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    twitter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    externalLink: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
  };

  /**
   * Safe Icon Helper: creates a Lucide placeholder with fallback
   */
  function renderIcon(iconName, fallbackKey = "arrowRight", extraClass = "") {
    return `<i data-lucide="${iconName}" class="lucide-icon ${extraClass}">${iconFallbacks[fallbackKey] || ""}</i>`;
  }

  /**
   * Main Initialization
   */
  function initApp() {
    const config = window.portfolioConfig;
    if (!config) {
      console.error("portfolioConfig not found. Ensure js/portfolio.config.js is loaded.");
      return;
    }

    // Set SEO metadata and page title
    if (config.meta?.siteTitle) {
      document.title = config.meta.siteTitle;
    }

    renderNavbar(config);
    renderHero(config);
    renderAbout(config);
    renderSkills(config);
    renderProjects(config);
    renderTimeline(config, "experience"); // default tab
    renderAchievements(config);
    renderContact(config);
    renderFooter(config);

    // Refresh icons via Lucide CDN if available
    refreshIcons();

    // Attach Interactive Listeners
    setupScrollSpy();
    setupNavbarScroll();
    setupMobileDrawer();
    setupBackToTop();
    setupScrollReveal();
    setupContactForm(config);
    setupCaseStudyModal();
  }

  /**
   * Helper to refresh Lucide icons
   */
  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      try {
        window.lucide.createIcons();
      } catch (e) {
        console.warn("Lucide createIcons notice:", e);
      }
    }
  }

  /**
   * 1. Render Navigation
   */
  function renderNavbar(config) {
    if (navBrandMount) {
      navBrandMount.innerHTML = `
        <div class="logo-icon-box">
          ${renderIcon("cpu", "award")}
        </div>
        <span>${escapeHTML(config.personal.name)}</span>
      `;
    }

    const navItems = [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Timeline", href: "#timeline" },
      { label: "Achievements", href: "#achievements" },
      { label: "Contact", href: "#contact" }
    ];

    const navHTML = navItems
      .map(item => `<a href="${item.href}" class="nav-link" data-section="${item.href.substring(1)}">${item.label}</a>`)
      .join("");

    if (navLinksContainer) navLinksContainer.innerHTML = navHTML;

    const drawerHTML = navItems
      .map(item => `<a href="${item.href}" class="drawer-link" data-section="${item.href.substring(1)}">${item.label}</a>`)
      .join("");

    if (mobileDrawerNav) {
      mobileDrawerNav.innerHTML = `
        ${drawerHTML}
        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle)">
          <a href="#contact" class="btn-primary" style="width: 100%; text-align: center;">Let's Connect</a>
        </div>
      `;
    }
  }

  /**
   * 2. Render Hero
   */
  function renderHero(config) {
    if (!heroContainer) return;
    const { personal, socials } = config;

    const socialsHTML = socials
      .map(
        s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${s.label}" title="${s.name}">
          ${renderIcon(s.icon, s.icon.toLowerCase())}
        </a>
      `
      )
      .join("");

    heroContainer.innerHTML = `
      <div class="hero-content reveal-on-scroll">
        ${
          personal.isAvailable
            ? `<div class="status-badge">
                <span class="status-dot-pulse"></span>
                <span>${escapeHTML(personal.availabilityBadge)}</span>
               </div>`
            : ""
        }
        
        <h2 class="hero-title-greeting">${escapeHTML(personal.headlineGreeting)}</h2>
        <h1 class="hero-main-title text-gradient">${escapeHTML(personal.secondHeadline)}</h1>
        <p class="hero-description">${escapeHTML(personal.shortBio)}</p>

        <div class="hero-cta-group">
          <a href="#projects" class="btn-primary">
            <span>Explore My Work</span>
            ${renderIcon("arrow-right", "arrowRight")}
          </a>
          <a href="#contact" class="btn-secondary">
            <span>Let's Connect</span>
            ${renderIcon("message-square", "mail")}
          </a>
        </div>

        <div class="hero-socials-group">
          ${socialsHTML}
        </div>
      </div>

      <a href="#about" class="scroll-indicator" aria-label="Scroll to About section">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </a>
    `;
  }

  /**
   * 3. Render About
   */
  function renderAbout(config) {
    if (!aboutContainer) return;
    const { about, personal } = config;

    const paragraphsHTML = about.paragraphs
      .map(p => `<p class="about-paragraph">${escapeHTML(p)}</p>`)
      .join("");

    const highlightCardsHTML = about.highlightCards
      .map(
        card => `
        <div class="glass-panel highlight-card">
          <div class="highlight-number">${escapeHTML(card.number)}</div>
          <div class="highlight-label">${escapeHTML(card.label)}</div>
          <div class="highlight-subtext">${escapeHTML(card.subtext)}</div>
        </div>
      `
      )
      .join("");

    aboutContainer.innerHTML = `
      <div class="about-grid">
        <div class="about-image-wrapper reveal-on-scroll">
          <div class="about-avatar-card">
            <img src="${personal.avatar}" alt="${escapeHTML(personal.name)} profile portrait" class="about-avatar-img" loading="lazy" />
            <div class="about-avatar-badge">
              <div>
                <div class="about-avatar-name">${escapeHTML(personal.name)}</div>
                <div class="about-avatar-role">${escapeHTML(personal.primaryRole)}</div>
              </div>
              <span class="status-dot-pulse" title="Online & Available"></span>
            </div>
          </div>
        </div>

        <div class="about-content-body reveal-on-scroll">
          <div class="section-tag">${renderIcon("sparkles", "award")} About Me</div>
          <h2 class="section-title text-gradient">${escapeHTML(about.heading)}</h2>
          ${paragraphsHTML}

          <div class="highlight-cards-grid">
            ${highlightCardsHTML}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * 4. Render Skills
   */
  function renderSkills(config) {
    if (!skillsContainer) return;
    const { skills } = config;

    const cardsHTML = skills
      .map(
        cat => `
        <div class="glass-panel skill-category-card reveal-on-scroll">
          <div class="skill-cat-header">
            <div class="skill-icon-wrapper">
              ${renderIcon(cat.icon, "award")}
            </div>
            <h3 class="skill-cat-title">${escapeHTML(cat.category)}</h3>
          </div>
          <div class="skill-badges-wrap">
            ${cat.items
              .map(
                skill => `
                <span class="skill-pill" title="Proficiency: ${escapeHTML(skill.level)}">
                  <span class="skill-level-dot"></span>
                  <span>${escapeHTML(skill.name)}</span>
                </span>
              `
              )
              .join("")}
          </div>
        </div>
      `
      )
      .join("");

    skillsContainer.innerHTML = `
      <div class="section-header reveal-on-scroll">
        <div class="section-tag">${renderIcon("code", "award")} Expertise</div>
        <h2 class="section-title text-gradient">Skills & Technologies</h2>
        <p class="section-subtitle">A curated toolkit refined through building production web applications, high-performance user interfaces, and resilient distributed architectures.</p>
      </div>
      <div class="skills-grid">
        ${cardsHTML}
      </div>
    `;
  }

  /**
   * 5. Render Featured Projects
   */
  function renderProjects(config) {
    if (!projectsContainer) return;
    const { projects } = config;

    const projectsHTML = projects
      .map((proj, idx) => {
        const isReversed = idx % 2 === 1 ? "reversed" : "";
        const tagsHTML = proj.tags
          .map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`)
          .join("");

        return `
        <article class="glass-panel project-card ${isReversed} reveal-on-scroll" data-project-id="${proj.id}">
          <div class="project-media-col">
            <img src="${proj.image}" alt="${escapeHTML(proj.title)} preview" class="project-img" loading="lazy" />
            <div class="project-media-overlay"></div>
          </div>
          <div class="project-content-col">
            <div>
              <div class="project-badge-row">
                <span class="project-featured-tag">Case Study 0${idx + 1}</span>
                <span class="project-metrics-pill">${escapeHTML(proj.metrics)}</span>
              </div>
              <h3 class="project-title">${escapeHTML(proj.title)}</h3>
              <div class="project-tagline">${escapeHTML(proj.tagline)}</div>
              <p class="project-desc">${escapeHTML(proj.description)}</p>
              <div class="project-tags-list">
                ${tagsHTML}
              </div>
            </div>
            
            <div class="project-actions-row">
              <button class="project-btn-icon project-btn-primary view-case-study-btn" data-project-index="${idx}">
                <span>View Case Study</span>
                ${renderIcon("file-text", "arrowRight")}
              </button>
              <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-btn-icon">
                <span>Live Demo</span>
                ${renderIcon("external-link", "externalLink")}
              </a>
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn-icon">
                <span>GitHub</span>
                ${renderIcon("github", "github")}
              </a>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    projectsContainer.innerHTML = `
      <div class="section-header reveal-on-scroll">
        <div class="section-tag">${renderIcon("layers", "award")} Selected Works</div>
        <h2 class="section-title text-gradient">Featured Projects</h2>
        <p class="section-subtitle">Engineered with precision, built for performance. Each project represents an end-to-end architectural case study solving tangible real-world problems.</p>
      </div>
      <div class="projects-container">
        ${projectsHTML}
      </div>
    `;
  }

  /**
   * 6. Render Experience & Education Timeline
   */
  function renderTimeline(config, activeTab = "experience") {
    if (!timelineContainer) return;
    const items = activeTab === "experience" ? config.experience : config.education;

    const timelineItemsHTML = items
      .map(
        item => `
        <div class="timeline-item reveal-on-scroll">
          <div class="timeline-marker"></div>
          <div class="glass-panel timeline-card">
            <div class="timeline-meta-row">
              <span class="timeline-period">${escapeHTML(item.period)}</span>
              <span class="timeline-location">${escapeHTML(item.location || "")}</span>
            </div>
            <h3 class="timeline-role">${escapeHTML(item.role || item.degree)}</h3>
            <div class="timeline-company">${escapeHTML(item.company || item.institution)}</div>
            <p class="timeline-desc">${escapeHTML(item.description)}</p>
            ${
              item.highlights && item.highlights.length > 0
                ? `<ul class="timeline-highlights">
                    ${item.highlights.map(h => `<li class="timeline-highlight-li">${escapeHTML(h)}</li>`).join("")}
                   </ul>`
                : ""
            }
          </div>
        </div>
      `
      )
      .join("");

    timelineContainer.innerHTML = `
      <div class="section-header reveal-on-scroll">
        <div class="section-tag">${renderIcon("briefcase", "award")} Career Journey</div>
        <h2 class="section-title text-gradient">Experience & Education</h2>
        <p class="section-subtitle">A progressive trajectory of technical leadership, continuous learning, and scalable software delivery.</p>
      </div>

      <div class="timeline-tabs reveal-on-scroll">
        <button class="timeline-tab-btn ${activeTab === "experience" ? "active" : ""}" id="tab-experience-btn">
          Work Experience
        </button>
        <button class="timeline-tab-btn ${activeTab === "education" ? "active" : ""}" id="tab-education-btn">
          Education & Degrees
        </button>
      </div>

      <div class="timeline-tree">
        ${timelineItemsHTML}
      </div>
    `;

    // Attach tab listeners
    const expBtn = document.getElementById("tab-experience-btn");
    const eduBtn = document.getElementById("tab-education-btn");
    if (expBtn) {
      expBtn.addEventListener("click", () => {
        renderTimeline(config, "experience");
        refreshIcons();
        setupScrollReveal();
      });
    }
    if (eduBtn) {
      eduBtn.addEventListener("click", () => {
        renderTimeline(config, "education");
        refreshIcons();
        setupScrollReveal();
      });
    }
  }

  /**
   * 7. Render Achievements
   */
  function renderAchievements(config) {
    if (!achievementsContainer) return;
    const { achievements } = config;

    // If achievements array is empty, hide the section gracefully
    if (!achievements || achievements.length === 0) {
      achievementsContainer.style.display = "none";
      return;
    }

    const cardsHTML = achievements
      .map(
        ach => `
        <div class="glass-panel achievement-card reveal-on-scroll">
          <div>
            <div class="achievement-top">
              <span class="achievement-badge">${escapeHTML(ach.badge)}</span>
              <span class="achievement-year">${escapeHTML(ach.year)}</span>
            </div>
            <h3 class="achievement-title">${escapeHTML(ach.title)}</h3>
            <div class="achievement-issuer">${escapeHTML(ach.issuer)}</div>
            <p class="achievement-desc">${escapeHTML(ach.description)}</p>
          </div>
          ${
            ach.link
              ? `<a href="${ach.link}" target="_blank" rel="noopener noreferrer" class="achievement-link">
                  <span>View Credential</span>
                  ${renderIcon("external-link", "externalLink")}
                 </a>`
              : ""
          }
        </div>
      `
      )
      .join("");

    achievementsContainer.innerHTML = `
      <div class="section-header reveal-on-scroll">
        <div class="section-tag">${renderIcon("trophy", "award")} Milestones</div>
        <h2 class="section-title text-gradient">Honors & Certifications</h2>
        <p class="section-subtitle">Verified industry certifications, hackathon accomplishments, and open source accolades.</p>
      </div>
      <div class="achievements-grid">
        ${cardsHTML}
      </div>
    `;
  }

  /**
   * 8. Render Contact Section
   */
  function renderContact(config) {
    if (!contactContainer) return;
    const { contact, personal } = config;

    contactContainer.innerHTML = `
      <div class="contact-card-box reveal-on-scroll">
        <div class="contact-grid">
          <!-- Left Column: Info & Direct Links -->
          <div class="contact-info-col">
            <div>
              <div class="section-tag">${renderIcon("mail", "mail")} Get In Touch</div>
              <h2 class="section-title text-gradient">${escapeHTML(contact.heading)}</h2>
              <p class="section-subtitle" style="text-align: left; margin-bottom: 1.5rem;">${escapeHTML(contact.subheading)}</p>
              
              <div class="contact-direct-items">
                <div class="contact-item-row">
                  <div class="contact-item-icon">${renderIcon("mail", "mail")}</div>
                  <div>
                    <div class="contact-item-label">Direct Email</div>
                    <div style="display: flex; align-items: center;">
                      <a href="mailto:${personal.email}" class="contact-item-value">${escapeHTML(personal.email)}</a>
                      <button class="contact-copy-btn" id="copy-email-btn" title="Copy email address" aria-label="Copy email address">
                        ${renderIcon("copy", "copy")}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="contact-item-row">
                  <div class="contact-item-icon">${renderIcon("map-pin", "award")}</div>
                  <div>
                    <div class="contact-item-label">Current Location</div>
                    <div class="contact-item-value">${escapeHTML(contact.location)}</div>
                  </div>
                </div>

                <div class="contact-item-row">
                  <div class="contact-item-icon">${renderIcon("clock", "award")}</div>
                  <div>
                    <div class="contact-item-label">Availability & Response</div>
                    <div class="contact-item-value">${escapeHTML(contact.responseExpectation)}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top: 1rem;">
              <p class="text-muted" style="font-size: 0.8125rem;">
                Prefer social networks? Connect directly via 
                <a href="${config.socials[1]?.url || '#'}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline;">LinkedIn</a> or 
                <a href="${config.socials[0]?.url || '#'}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline;">GitHub</a>.
              </p>
            </div>
          </div>

          <!-- Right Column: Interactive Contact Form -->
          <div>
            <form class="contact-form" id="portfolio-contact-form" novalidate>
              <div class="form-group">
                <label for="form-name" class="form-label">Your Name *</label>
                <input type="text" id="form-name" name="name" class="form-input" placeholder="e.g. Sarah Jenkins" required />
              </div>

              <div class="form-group">
                <label for="form-email" class="form-label">Your Email *</label>
                <input type="email" id="form-email" name="email" class="form-input" placeholder="e.g. sarah@company.com" required />
              </div>

              <div class="form-group">
                <label for="form-subject" class="form-label">Subject</label>
                <input type="text" id="form-subject" name="subject" class="form-input" placeholder="Project Inquiry / Opportunity" />
              </div>

              <div class="form-group">
                <label for="form-message" class="form-label">Message *</label>
                <textarea id="form-message" name="message" class="form-textarea" placeholder="Tell me about your project, timeline, and goals..." maxlength="1000" required></textarea>
                <div class="form-char-count"><span id="char-counter">0</span> / 1000</div>
              </div>

              <div id="form-feedback" class="form-feedback-banner"></div>

              <button type="submit" class="btn-primary" id="form-submit-btn" style="width: 100%;">
                <span>Send Message</span>
                ${renderIcon("send", "arrowRight")}
              </button>
            </form>
          </div>
        </div>
      </div>
    `;

    // Copy email handler
    const copyBtn = document.getElementById("copy-email-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(personal.email).then(() => {
          showToast(`Email copied: ${personal.email}`);
        }).catch(() => {
          showToast("Failed to copy email");
        });
      });
    }

    // Character counter
    const messageInput = document.getElementById("form-message");
    const charCounter = document.getElementById("char-counter");
    if (messageInput && charCounter) {
      messageInput.addEventListener("input", () => {
        charCounter.textContent = messageInput.value.length;
      });
    }
  }

  /**
   * 9. Render Footer
   */
  function renderFooter(config) {
    if (!footerContainer) return;
    const { personal, meta, socials } = config;

    const socialLinksHTML = socials
      .map(
        s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="footer-link" aria-label="${s.label}">
          ${escapeHTML(s.name)}
        </a>
      `
      )
      .join("");

    footerContainer.innerHTML = `
      <div class="footer-container">
        <div>
          <div class="footer-brand-title">${escapeHTML(personal.name)}</div>
          <div class="footer-tagline">
            © ${meta.copyrightYear} • ${escapeHTML(meta.footerTagline)}
          </div>
        </div>

        <div class="footer-links-group">
          ${socialLinksHTML}
        </div>

        <div>
          <span style="font-size: 0.8125rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 0.4rem;">
            ${renderIcon("sparkles", "award")} ${escapeHTML(meta.engineBadge)}
          </span>
        </div>
      </div>
    `;
  }

  /**
   * 10. Contact Form Logic & Real-time Validation
   */
  function setupContactForm(config) {
    const form = document.getElementById("portfolio-contact-form");
    const feedback = document.getElementById("form-feedback");
    if (!form || !feedback) return;

    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim() || "Portfolio Project Inquiry";
      const message = form.message.value.trim();

      // Simple email regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name) {
        showFormFeedback("Please enter your name.", "error");
        form.name.focus();
        return;
      }

      if (!email || !emailRegex.test(email)) {
        showFormFeedback("Please provide a valid email address.", "error");
        form.email.focus();
        return;
      }

      if (!message || message.length < 10) {
        showFormFeedback("Please write a message with at least 10 characters.", "error");
        form.message.focus();
        return;
      }

      // Honest action: compose mailto URI so the user can send directly via their client,
      // and provide an instant one-click option to copy message to clipboard!
      const mailtoUrl = `mailto:${encodeURIComponent(config.personal.email)}?subject=${encodeURIComponent(
        `[Portfolio] ${subject} from ${name}`
      )}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

      // Show success feedback
      showFormFeedback(
        `Thank you ${name}! Launching your mail client now, or you can copy the inquiry.`,
        "success"
      );

      // Trigger mailto client
      window.location.href = mailtoUrl;

      // Copy text to clipboard as handy fallback
      const copyContent = `From: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`;
      navigator.clipboard.writeText(copyContent).then(() => {
        showToast("Inquiry text also copied to clipboard!");
      });

      // Clear form
      form.reset();
      const charCounter = document.getElementById("char-counter");
      if (charCounter) charCounter.textContent = "0";
    });

    function showFormFeedback(msg, type) {
      feedback.textContent = msg;
      feedback.className = `form-feedback-banner ${type}`;
      feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  /**
   * 11. Case Study Modal Engine
   */
  function setupCaseStudyModal() {
    const modal = document.getElementById("case-study-modal");
    const modalBody = document.getElementById("modal-body-content");
    const modalClose = document.getElementById("modal-close-btn");
    if (!modal || !modalBody) return;

    // Delegate clicks on View Case Study buttons
    document.addEventListener("click", e => {
      const btn = e.target.closest(".view-case-study-btn");
      if (!btn) return;

      const idx = parseInt(btn.getAttribute("data-project-index"), 10);
      const project = window.portfolioConfig?.projects[idx];
      if (!project) return;

      modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <span class="project-featured-tag">Case Study Deep Dive</span>
          <h2 class="text-gradient" style="font-size: 2rem; margin-top: 0.75rem; margin-bottom: 0.25rem;">${escapeHTML(project.title)}</h2>
          <div style="color: var(--accent-cyan); font-weight: 600;">${escapeHTML(project.tagline)}</div>
        </div>

        <div style="margin-bottom: 1.75rem; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-subtle)">
          <img src="${project.image}" alt="${escapeHTML(project.title)}" style="width: 100%; max-height: 340px; object-fit: cover;" />
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-bottom: 2rem;">
          <div class="glass-panel" style="padding: 1.25rem;">
            <h4 style="color: #f87171; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              The Challenge
            </h4>
            <p style="color: var(--text-secondary); font-size: 0.925rem;">${escapeHTML(project.caseStudy.problem)}</p>
          </div>

          <div class="glass-panel" style="padding: 1.25rem;">
            <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              The Architectural Solution
            </h4>
            <p style="color: var(--text-secondary); font-size: 0.925rem;">${escapeHTML(project.caseStudy.solution)}</p>
          </div>

          <div class="glass-panel" style="padding: 1.25rem;">
            <h4 style="color: #4ade80; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              Measurable Impact
            </h4>
            <p style="color: var(--text-secondary); font-size: 0.925rem;">${escapeHTML(project.caseStudy.impact)}</p>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <span>Explore Live Site</span>
            ${renderIcon("external-link", "externalLink")}
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            <span>Inspect GitHub Code</span>
            ${renderIcon("github", "github")}
          </a>
        </div>
      `;

      refreshIcons();
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    // Close on button or backdrop click
    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", e => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    });
  }

  /**
   * 12. Navbar Scroll Style
   */
  function setupNavbarScroll() {
    const navbar = document.getElementById("main-navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }

  /**
   * 13. Active Section Scroll Spy
   */
  function setupScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const drawerLinks = document.querySelectorAll(".drawer-link");

    window.addEventListener("scroll", () => {
      let currentSectionId = "";
      const scrollPosition = window.scrollY + 180;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        if (link.getAttribute("data-section") === currentSectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      drawerLinks.forEach(link => {
        if (link.getAttribute("data-section") === currentSectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  }

  /**
   * 14. Mobile Drawer Navigation
   */
  function setupMobileDrawer() {
    const toggleBtn = document.getElementById("mobile-toggle-btn");
    const drawer = document.getElementById("mobile-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    const closeBtn = document.getElementById("drawer-close-btn");

    if (!toggleBtn || !drawer || !backdrop) return;

    function openDrawer() {
      drawer.classList.add("open");
      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      drawer.classList.remove("open");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }

    toggleBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);

    // Close drawer when a navigation link is clicked
    document.querySelectorAll(".drawer-link").forEach(link => {
      link.addEventListener("click", closeDrawer);
    });
  }

  /**
   * 15. Back to Top Button
   */
  function setupBackToTop() {
    const btn = document.getElementById("back-to-top-btn");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /**
   * 16. Scroll Reveal Observer
   */
  function setupScrollReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal-on-scroll").forEach(el => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach(el => {
      observer.observe(el);
    });
  }

  /**
   * 17. Toast Notification Utility
   */
  function showToast(message, duration = 3200) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px) scale(0.95)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  /**
   * HTML Escaping utility to prevent XSS
   */
  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Expose toast globally for ease of use
  window.showToast = showToast;

  // Run on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
