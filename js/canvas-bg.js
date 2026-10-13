/**
 * ====================================================================
 * AMBIENT CANVAS BACKGROUND ENGINE
 * ====================================================================
 * High-performance, lightweight particle & glow constellation network
 * with smooth interactive cursor physics and reduced-motion fallback.
 */

class AmbientBackground {
  constructor(canvasId = "ambient-canvas") {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.mouse = { x: null, y: null, targetX: null, targetY: null, radius: 180 };
    this.animId = null;
    this.isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.isVisible = true;

    // Glowing Ambient Orbs for futuristic depth
    this.orbs = [
      { x: 0.25, y: 0.2, baseRadius: 320, color: "rgba(139, 92, 246, 0.12)", speedX: 0.0004, speedY: 0.0003, angle: 0 },
      { x: 0.75, y: 0.35, baseRadius: 280, color: "rgba(34, 211, 238, 0.09)", speedX: -0.0003, speedY: 0.0005, angle: 2 },
      { x: 0.5, y: 0.8, baseRadius: 360, color: "rgba(139, 92, 246, 0.08)", speedX: 0.0002, speedY: -0.0004, angle: 4 },
      { x: 0.85, y: 0.85, baseRadius: 260, color: "rgba(34, 211, 238, 0.07)", speedX: -0.0005, speedY: -0.0002, angle: 1.5 }
    ];

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();

    if (!this.isReducedMotion) {
      this.animate();
    } else {
      this.drawStaticFrame();
    }
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
  }

  createParticles() {
    this.particles = [];
    // Adjust density based on screen dimensions
    const count = Math.min(Math.floor((this.width * this.height) / 18000), 75);

    for (let i = 0; i < count; i++) {
      const isCyan = Math.random() > 0.5;
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.2,
        alpha: Math.random() * 0.45 + 0.2,
        color: isCyan ? "34, 211, 238" : "139, 92, 246",
        pulseSpeed: 0.01 + Math.random() * 0.015,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      this.resize();
      this.createParticles();
      if (this.isReducedMotion) this.drawStaticFrame();
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      this.mouse.targetX = null;
      this.mouse.targetY = null;
    });

    // Pause when page is hidden
    document.addEventListener("visibilitychange", () => {
      this.isVisible = !document.hidden;
      if (this.isVisible && !this.isReducedMotion && !this.animId) {
        this.animate();
      }
    });

    // Listen for motion accessibility changes
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", (e) => {
      this.isReducedMotion = e.matches;
      if (this.isReducedMotion) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
        this.drawStaticFrame();
      } else {
        this.animate();
      }
    });
  }

  drawAmbientGlows(time) {
    this.orbs.forEach((orb) => {
      orb.angle += orb.speedX;
      const currentX = (orb.x + Math.sin(orb.angle) * 0.06) * this.width;
      const currentY = (orb.y + Math.cos(orb.angle * 0.8) * 0.06) * this.height;

      const grad = this.ctx.createRadialGradient(
        currentX,
        currentY,
        0,
        currentX,
        currentY,
        orb.baseRadius
      );
      grad.addColorStop(0, orb.color);
      grad.addColorStop(1, "rgba(8, 9, 13, 0)");

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(currentX, currentY, orb.baseRadius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  drawStaticFrame() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawAmbientGlows(0);
    this.particles.forEach((p) => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color}, ${p.baseAlpha})`;
      this.ctx.fill();
    });
  }

  animate(time = 0) {
    if (!this.isVisible || this.isReducedMotion) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smooth cursor interpolation
    if (this.mouse.targetX !== null) {
      if (this.mouse.x === null) {
        this.mouse.x = this.mouse.targetX;
        this.mouse.y = this.mouse.targetY;
      } else {
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;
      }
    } else {
      this.mouse.x = null;
      this.mouse.y = null;
    }

    // 1. Draw glowing subtle gradient orbs
    this.drawAmbientGlows(time);

    // 2. Update and draw particles
    const pLen = this.particles.length;
    for (let i = 0; i < pLen; i++) {
      const p = this.particles[i];

      // Natural movement
      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;

      // Subtle breathing pulse
      p.pulseVal += p.pulseSpeed;
      p.alpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.15;

      // Cursor gentle interaction repulsion / magnetic drift
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius && dist > 0) {
          const force = (1 - dist / this.mouse.radius) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      // Draw particle dot
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color}, ${Math.max(0.1, p.alpha)})`;
      this.ctx.fill();

      // Proximity connection lines
      for (let j = i + 1; j < pLen; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const lineAlpha = (1 - dist / 110) * 0.18;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(161, 161, 170, ${lineAlpha})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.stroke();
        }
      }
    }

    this.animId = requestAnimationFrame((t) => this.animate(t));
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.ambientBg = new AmbientBackground("ambient-canvas");
});
