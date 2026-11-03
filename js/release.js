/* ============================================================
   SUBTEN — PREPÍNAČ PREDAJA (jediné miesto, ktoré treba zmeniť)

   live: false →  všetky CTA hovoria „Čoskoro" (stav pred vydaním)
   live: true   →  odznaky ukážu App Store aj Google Play (ak je
                   playStoreUrl), textové CTA vedú na Androide do
                   Google Play, inde do App Store; texty z kľúčov
                   „*.live" v js/i18n.js.

   Prepni na true až v deň vydania, keď je appka naozaj v obchode.
   Načítava sa pred js/i18n.js.
   ============================================================ */
window.SUBTEN_RELEASE = {
  live: true,
  appStoreUrl: "https://apps.apple.com/app/id6782001783",
  // Android je v Google Play od 3. 11. 2026.
  playStoreUrl: "https://play.google.com/store/apps/details?id=eu.subtenapp.subten"
};
