/* ============================================================
   SUBTEN — PREPÍNAČ PREDAJA (jediné miesto, ktoré treba zmeniť)

   live: false →  všetky CTA hovoria „Čoskoro" (stav pred vydaním)
   live: true   →  všetky CTA vedú do App Store: oficiálny odznak
                   „Download on the App Store" (sk / cs / en) a texty
                   z kľúčov „*.live" v js/i18n.js.

   Prepni na true až v deň vydania, keď je appka naozaj v obchode.
   Načítava sa pred js/i18n.js.
   ============================================================ */
window.SUBTEN_RELEASE = {
  live: true,
  appStoreUrl: "https://apps.apple.com/app/id6782001783"
};
