/* ============================================================
   SUBTEN — interactions (vanilla)
   reveal on scroll · sticky nav · parallax · chat stagger
   ============================================================ */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- frozen-timeline guard ----
     When the page renders in an offscreen / throttled iframe, CSS
     transitions & animations never advance — entrance reveals would
     stay stuck at their hidden start state. Detect a non-advancing
     animation clock (timers still fire) and show everything instantly. */
  function showInstantly() { document.documentElement.classList.add("no-anim"); }
  if (reduce) {
    showInstantly();
  } else {
    const t0 = document.timeline && document.timeline.currentTime;
    let rafFired = false;
    requestAnimationFrame(() => { rafFired = true; });
    setTimeout(() => {
      const t1 = document.timeline && document.timeline.currentTime;
      if (!rafFired || t0 == null || t1 == null || t1 === t0) showInstantly();
    }, 220);
  }

  /* ---- reveal on scroll ---- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---- sticky nav ---- */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- mobile menu toggle ---- */
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    // .nav gets backdrop-filter when scrolled, which makes it the containing
    // block for the fixed-position overlay (collapsing it to the header strip).
    // Flag the nav while the menu is open so CSS can drop the filter.
    const setMenu = (open) => {
      navLinks.classList.toggle("open", open);
      menuBtn.classList.toggle("active", open);
      if (nav) nav.classList.toggle("menu-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setMenu(false));
    });
  }

  /* ---- chat bubble stagger ---- */
  const chat = document.querySelector(".chat");
  if (chat) {
    const bubbles = [...chat.querySelectorAll(".bubble")];
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          bubbles.forEach((b, i) => setTimeout(() => b.classList.add("in"), reduce ? 0 : i * 420));
          cio.disconnect();
        }
      });
    }, { threshold: 0.4 });
    cio.observe(chat);
  }

  /* ---- parallax (transform only) ---- */
  if (!reduce) {
    const pEls = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
      el, speed: parseFloat(el.dataset.parallax) || 0.06
    }));
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      pEls.forEach(({ el, speed }) => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const offset = (center - vh / 2) * speed;
        el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", req, { passive: true });
    window.addEventListener("resize", req);
    update();
  }

  /* ---- year ---- */
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---- pricing billing toggle (Monthly / Yearly) ---- */
  document.querySelectorAll(".price-card[data-active-plan]").forEach((card) => {
    const btns = card.querySelectorAll(".price-toggle-btn[data-plan]");
    function setPlan(plan) {
      card.dataset.activePlan = plan;
      btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.plan === plan)));
    }
    btns.forEach((b) => b.addEventListener("click", () => setPlan(b.dataset.plan)));
  });
  /* ---- screenshoty podľa jazyka a témy (assets/shots/<jazyk>/<téma>/<názov>.webp) ---- */
  const SHOT_LANG = { sk: "sk", cz: "cs", en: "en" };
  function syncShots() {
    const lang = SHOT_LANG[window.__subtenLang] || "en";
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    document.querySelectorAll("img[data-shot]").forEach((img) => {
      const src = "assets/shots/" + lang + "/" + theme + "/" + img.dataset.shot + ".webp";
      if (img.getAttribute("src") !== src) img.setAttribute("src", src);
    });
  }
  document.addEventListener("subten:lang", syncShots);
  new MutationObserver(syncShots).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  syncShots();

  /* ---- CTA do obchodu — prepínač je v js/release.js ---- */
  const REL = window.SUBTEN_RELEASE || {};
  const BADGE_FILE = { sk: "sk", cz: "cs", en: "en" };
  const BADGE_ALT = { sk: "Stiahnuť v App Store", cz: "Stáhnout v App Storu", en: "Download on the App Store" };
  // Oficiálny odznak Google Play máme po slovensky a anglicky; česká stránka zatiaľ dostane anglický.
  const PLAY_FILE = { sk: "sk", cz: "en", en: "en" };
  const PLAY_ALT = { sk: "Získajte to na Google Play", cz: "Nyní na Google Play", en: "Get it on Google Play" };
  // Textové tlačidlo („Stiahnuť“) vedie na Androide do Google Play, inde do App Store.
  const ON_ANDROID = /Android/i.test(navigator.userAgent);
  function addPlayBadge(appStoreLink, lang) {
    let play = appStoreLink.nextElementSibling;
    if (!play || !play.hasAttribute("data-play-badge")) {
      play = document.createElement("a");
      play.setAttribute("data-play-badge", "");
      play.className = "store-badge-link";
      play.setAttribute("href", REL.playStoreUrl);
      play.setAttribute("target", "_blank");
      play.setAttribute("rel", "noopener");
      appStoreLink.after(play);
    }
    play.innerHTML = '<img src="assets/badges/google-play-' + (PLAY_FILE[lang] || "en") + '.png" alt="' +
      (PLAY_ALT[lang] || PLAY_ALT.en) + '" width="161" height="48" />';
  }
  function syncStoreCtas() {
    if (!REL.live) return;
    const lang = window.__subtenLang || "en";
    document.querySelectorAll("[data-store-cta]").forEach((a) => {
      const isBadge = a.dataset.storeCta === "badge";
      a.setAttribute("href", !isBadge && ON_ANDROID && REL.playStoreUrl ? REL.playStoreUrl : REL.appStoreUrl);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
      a.hidden = false;
      if (isBadge) {
        a.className = "store-badge-link";
        a.innerHTML = '<img src="assets/badges/app-store-' + (BADGE_FILE[lang] || "en") + '.svg" alt="' +
          (BADGE_ALT[lang] || BADGE_ALT.en) + '" width="144" height="48" />';
        if (REL.playStoreUrl) addPlayBadge(a, lang);
      }
    });
  }
  document.addEventListener("subten:lang", syncStoreCtas);
  syncStoreCtas();
})();
