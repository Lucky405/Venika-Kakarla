/* ===========================================================
   MAIN.JS — site behavior. You shouldn't need to edit this
   file; update js/content.js instead to change your content.
   =========================================================== */

(function () {
  "use strict";

  const c = window.SITE_CONTENT || {};

  /* ---------- inject identity / hero text ---------- */
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  document.title = `Signal — ${c.name || "Portfolio"}`;
  setText("siteName", c.name);
  setText("footerName", c.name);
  setText("metaFocus", c.focusArea);
  setText("metaLocation", c.location);
  setText("heroSub", c.heroIntro);

  const brandTag = document.querySelector(".brand__tag");
  if (brandTag && c.tagline) brandTag.textContent = c.tagline;

  const linkEmail = document.getElementById("linkEmail");
  if (linkEmail && c.email) linkEmail.href = `mailto:${c.email}`;
  const linkGithub = document.getElementById("linkGithub");
  if (linkGithub && c.github) linkGithub.href = c.github;
  const linkLinkedin = document.getElementById("linkLinkedin");
  if (linkLinkedin && c.linkedin) linkLinkedin.href = c.linkedin;

  const lastUpdated = document.getElementById("lastUpdated");
  if (lastUpdated) {
    lastUpdated.textContent = new Date().toLocaleDateString(undefined, {
      year: "numeric", month: "short", day: "numeric"
    });
  }

  /* ---------- ABOUT ---------- */
  if (c.about) {
    const aboutContent = document.getElementById("aboutContent");
    if (aboutContent && Array.isArray(c.about.paragraphs)) {
      aboutContent.innerHTML = c.about.paragraphs.map(p => `<p>${p}</p>`).join("");
    }
    const skillList = document.querySelector("#skillStrip .skill-list");
    if (skillList && Array.isArray(c.about.skills)) {
      skillList.innerHTML = c.about.skills.map(s => `<li>${escapeHtml(s)}</li>`).join("");
    }
  }

  /* ---------- ACTIVITIES & AWARDS (shared card renderer) ---------- */
  function renderEntryCards(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el || !Array.isArray(items)) return;
    el.innerHTML = items.map(item => `
      <article class="entry-card">
        <h3 class="entry-card__title">${escapeHtml(item.title || "")}</h3>
        ${item.period ? `<span class="entry-card__period">${escapeHtml(item.period)}</span>` : ""}
        ${item.org ? `<p class="entry-card__org">${escapeHtml(item.org)}</p>` : ""}
        ${item.description ? `<p class="entry-card__desc">${escapeHtml(item.description)}</p>` : ""}
        ${Array.isArray(item.tags) && item.tags.length
          ? `<div class="entry-card__tags">${item.tags.map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div>`
          : ""}
      </article>
    `).join("");
  }
  renderEntryCards("activitiesList", c.activities);
  renderEntryCards("awardsList", c.awards);

  /* ---------- EDUCATION (timeline renderer) ---------- */
  function renderTimeline(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el || !Array.isArray(items)) return;
    el.innerHTML = items.map(item => `
      <div class="timeline-item">
        ${item.period ? `<div class="timeline-item__period">${escapeHtml(item.period)}</div>` : ""}
        <h3 class="timeline-item__title">${escapeHtml(item.title || "")}</h3>
        ${item.org ? `<p class="timeline-item__org">${escapeHtml(item.org)}</p>` : ""}
        ${item.description ? `<p class="timeline-item__desc">${escapeHtml(item.description)}</p>` : ""}
        ${Array.isArray(item.courses) && item.courses.length
          ? `<div class="timeline-item__courses">${item.courses.map(x => `<span>${escapeHtml(x)}</span>`).join("")}</div>`
          : ""}
      </div>
    `).join("");
  }
  renderTimeline("educationList", c.education);

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* ---------- TAB SWITCHING ---------- */
  const tabButtons = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  function activateTab(name, opts) {
    opts = opts || {};
    tabButtons.forEach(btn => {
      const isActive = btn.dataset.tab === name;
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    panels.forEach(panel => {
      const isActive = panel.dataset.panel === name;
      panel.classList.toggle("panel--hidden", !isActive);
      if (isActive) {
        panel.style.animation = "none";
        requestAnimationFrame(() => { panel.style.animation = ""; });
      }
    });
    if (!opts.skipHash) {
      history.replaceState(null, "", `#${name}`);
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => activateTab(btn.dataset.tab));
  });

  // Deep-link support: visiting site#awards opens that tab directly.
  const initialHash = window.location.hash.replace("#", "");
  const validTabs = Array.from(tabButtons).map(b => b.dataset.tab);
  if (validTabs.includes(initialHash)) {
    activateTab(initialHash, { skipHash: true });
  }

  /* ---------- THEME TOGGLE (ink / bone display modes) ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const STORAGE_KEY = "signal-theme";

  function applyTheme(mode) {
    document.body.classList.toggle("mode-light", mode === "light");
  }
  const savedTheme = window.localStorage ? localStorage.getItem(STORAGE_KEY) : null;
  if (savedTheme) applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.body.classList.contains("mode-light") ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage unavailable */ }
    });
  }

  /* ---------- HERO WAVEFORM DRAW-IN ---------- */
  const bgPath = document.querySelector(".bg-trace__path");
  if (bgPath && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const len = bgPath.getTotalLength();
    bgPath.style.strokeDasharray = `${len}`;
    bgPath.style.strokeDashoffset = `${len}`;
    bgPath.style.transition = "stroke-dashoffset 2.4s ease-out";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { bgPath.style.strokeDashoffset = "0"; });
    });
  }
})();
