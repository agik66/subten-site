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
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.classList.toggle("active", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "";
      });
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

  /* ---- waitlist form ---- */
  const wl = document.getElementById("waitlist");
  if (wl) {
    const input = document.getElementById("wl-email");
    const success = document.getElementById("wl-success");
    const note = document.querySelector(".wl-note");
    const field = wl.querySelector(".field");
    const valid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    // already subscribed? show success immediately
    try {
      if (localStorage.getItem("subten-waitlist-done") === "1") {
        wl.style.display = "none";
        if (note) note.style.display = "none";
        success.classList.add("show");
      }
    } catch (e) {}

    wl.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = (input.value || "").trim();
      if (!valid(v)) {
        field.style.borderColor = "var(--c-protein)";
        input.focus();
        const lang = window.__subtenLang || "en";
        const dict = window.SUBTEN_I18N && window.SUBTEN_I18N["cta.invalid"];
        input.setAttribute("placeholder", (dict && dict[lang]) || "Enter a valid email");
        setTimeout(() => { field.style.borderColor = ""; }, 1600);
        return;
      }
      try {
        const list = JSON.parse(localStorage.getItem("subten-waitlist") || "[]");
        if (!list.includes(v)) list.push(v);
        localStorage.setItem("subten-waitlist", JSON.stringify(list));
        localStorage.setItem("subten-waitlist-done", "1");
      } catch (e2) {}
      wl.style.display = "none";
      if (note) note.style.display = "none";
      success.classList.add("show");
    });
  }
})();
