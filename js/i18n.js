/* ============================================================
   SUBTEN — TEXTY A JAZYKY (lokalizácia)
   ============================================================

   AKO ZMENIŤ TEXT:
   Nájdi riadok s textom a prepíš ho medzi úvodzovkami "...".
   Každý text má verziu pre každý jazyk, napr.:
       "hero.cta1": { sk: "Stiahnuť zadarmo", en: "Download free" },
   Uprav "sk" (slovensky) alebo "en" (anglicky) podľa potreby.

   AKO PRIDAŤ NOVÝ JAZYK (napr. češtinu "cs"):
   1) Pridaj jazyk do zoznamu SUBTEN_LANGUAGES nižšie, napr.:
          { code: "cs", label: "CZ" }
   2) Ku každému textu dopíš jeho preklad, napr.:
          "hero.cta1": { sk: "...", en: "...", cs: "Stáhnout zdarma" },
      (ak preklad chýba, automaticky sa použije angličtina ako záloha)
   3) Na právnych stránkach (priečinok legal/) priraď k blokom
      ďalší <div data-lang-block="cs"> s prekladom.
   Prepínač jazykov v hlavičke sa doplní sám.
   ============================================================ */

/* Zoznam jazykov — poradie tu = poradie tlačidiel v prepínači.
   Prvý jazyk je predvolený. */
window.SUBTEN_LANGUAGES = [
  { code: "sk", label: "SK" },
  { code: "en", label: "EN" },
  { code: "cz", label: "CZ" }
];

window.SUBTEN_I18N = {
  /* nav */
  "nav.features": { sk: "Funkcie", en: "Features", cz: "Funkce" },
  "nav.how":      { sk: "Ako to funguje", en: "How it works", cz: "Jak to funguje" },
  "nav.coach":    { sk: "AI Coach", en: "AI Coach", cz: "AI Coach" },
  "nav.pricing":  { sk: "Cenník", en: "Pricing", cz: "Ceník" },
  "nav.faq":      { sk: "FAQ", en: "FAQ", cz: "FAQ" },
  "nav.generator":{ sk: "Generátor", en: "Generator", cz: "Generátor" },
  "nav.recipes":  { sk: "Recepty", en: "Recipes", cz: "Recepty" },
  "nav.cta":      { sk: "Stiahnuť", en: "Get the app", cz: "Stáhnout" },

  /* hero */
  "hero.badge":   { sk: "Nové · AI tréner v reálnom čase", en: "New · Real-time AI coach" },
  "hero.title":   {
    sk: "Jedlo, tréning a&nbsp;<span class='text-grad'>regenerácia</span> v jednej appke.",
    en: "Food, training and&nbsp;<span class='text-grad'>recovery</span> in one app."
  },
  "hero.lede":    {
    sk: "Subten spojí kalórie, makrá, tréningový plán a dáta z hodiniek — a tvoj AI tréner ti každý deň povie, čo robiť ďalej.",
    en: "Subten brings together calories, macros, your training plan and watch data — and your AI coach tells you exactly what to do next, every day."
  },
  "hero.cta1":    { sk: "Stiahnuť zadarmo", en: "Download free" },
  "hero.cta2":    { sk: "Pozrieť funkcie", en: "See features" },
  "hero.meta1":   { sk: "Zadarmo na stiahnutie", en: "Free to download" },
  "hero.meta2":   { sk: "Synchronizácia s Apple Health", en: "Syncs with Apple Health" },
  "hero.meta3":   { sk: "Bez reklám", en: "No ads" },

  /* store badges */
  "badge.ios.top":  { sk: "Čoskoro na", en: "Coming soon on" },
  "badge.and.top":  { sk: "Čoskoro na", en: "Coming soon on" },

  /* strip */
  "strip.1": { sk: "Apple Health & Watch", en: "Apple Health & Watch" },
  "strip.2": { sk: "HRV & spánok", en: "HRV & sleep" },
  "strip.3": { sk: "AI sken jedla", en: "AI food scan" },
  "strip.4": { sk: "Periodizované plány", en: "Periodized plans" },
  "strip.5": { sk: "Makrá & kalórie", en: "Macros & calories" },
  "strip.6": { sk: "Slovensky & anglicky", en: "Slovak & English", cz: "Slovensky, anglicky & česky" },

  /* features */
  "feat.kicker": { sk: "Čo Subten dokáže", en: "What Subten does" },
  "feat.title":  { sk: "Všetko pre tvoj progres — bez piatich appiek.", en: "Everything for your progress — without five apps." },
  "feat.lede":   { sk: "Sleduj jedlo, trénuj podľa plánu, meraj regeneráciu a nechaj sa viesť AI trénerom. V jednom čistom rozhraní.", en: "Track food, train to a plan, measure recovery and get guided by an AI coach. In one clean interface." },

  "food.title":     { sk: "Jedlo a makrá", en: "Food & macros" },
  "food.desc":      { sk: "Naskenuj čiarový kód alebo odfoť tanier. Subten dopočíta kalórie, bielkoviny, sacharidy, tuky aj vlákninu.", en: "Scan a barcode or snap your plate. Subten works out calories, protein, carbs, fat and fiber." },
  "training.title": { sk: "Tréning a šport", en: "Training & sport" },
  "training.desc":  { sk: "Plány do posilňovne aj periodizované športové cykly — futbal, hokej, beh, cyklistika a ďalšie.", en: "Gym splits and periodized sport cycles — football, hockey, running, cycling and more." },
  "recovery.title": { sk: "Regenerácia", en: "Recovery" },
  "recovery.desc":  { sk: "HRV, pokojový tep, spánok a SpO₂ z hodiniek v jednom skóre pripravenosti.", en: "HRV, resting heart rate, sleep and SpO₂ from your watch in one readiness score." },
  "coachf.title":   { sk: "AI Coach", en: "AI Coach" },
  "coachf.desc":    { sk: "Tvoj osobný tréner v telefóne — pýtaj sa na výživu, tréning aj motiváciu.", en: "Your personal coach in your pocket — ask about nutrition, training and motivation." },
  "progress.title": { sk: "Progres a prehľad", en: "Progress & insights" },
  "progress.desc":  { sk: "Týždenné hodnotenia, trend váhy a výkonnostný profil, ktorý ukáže, kam smeruješ.", en: "Weekly reviews, weight trend and a performance profile that shows where you're heading." },

  /* showcase: food */
  "sc.food.title": { sk: "Zaznamenaj jedlo za pár sekúnd", en: "Log meals in seconds" },
  "sc.food.desc":  { sk: "Sken, fotka alebo vyhľadávanie z databázy. Obľúbené a časté jedlá máš po ruke a Subten ti ukáže, čo ti ešte do cieľa chýba.", en: "Scan, photo or search the database. Favorites and frequent foods are a tap away, and Subten shows exactly what's left to hit your goal." },
  "sc.food.li1":   { sk: "Sken čiarového kódu a rozpoznávanie z fotky", en: "Barcode scan & photo recognition" },
  "sc.food.li2":   { sk: "Bielkoviny, sacharidy, tuky aj vláknina", en: "Protein, carbs, fat and fiber" },
  "sc.food.li3":   { sk: "Raňajky, obedy, snacky aj vlastné jedlá", en: "Breakfast, lunch, snacks and custom foods" },

  /* showcase: training */
  "sc.train.title": { sk: "Trénuj podľa plánu, nie od oka", en: "Train to a plan, not by guesswork" },
  "sc.train.desc":  { sk: "Vyber si rozpis do posilňovne alebo periodizovaný plán pre svoj šport. Subten ti pripraví týždeň a vedie ťa cvik po cviku.", en: "Pick a gym split or a periodized plan for your sport. Subten lays out your week and guides you exercise by exercise." },
  "sc.train.li1":   { sk: "Celé telo, PPL, Upper/Lower, Wendler a ďalšie", en: "Full body, PPL, Upper/Lower, Wendler and more" },
  "sc.train.li2":   { sk: "Periodizované cykly pre 8+ športov", en: "Periodized cycles for 8+ sports" },
  "sc.train.li3":   { sk: "Knižnica cvikov s návodmi a zásahmi svalov", en: "Exercise library with guides and muscle maps" },

  /* showcase: recovery */
  "sc.rec.title": { sk: "Vieš, kedy zatlačiť a kedy si oddýchnuť", en: "Know when to push and when to rest" },
  "sc.rec.desc":  { sk: "Subten číta HRV, pokojový tep, spánok aj dýchanie z hodiniek a každé ráno ti dá jasné skóre pripravenosti — aj s vysvetlením.", en: "Subten reads HRV, resting heart rate, sleep and breathing from your watch and gives you a clear readiness score every morning — with the why." },
  "sc.rec.li1":   { sk: "Skóre regenerácie 0–100 každé ráno", en: "Recovery score 0–100 every morning" },
  "sc.rec.li2":   { sk: "HRV, pokojový tep, SpO₂ a dýchanie", en: "HRV, resting HR, SpO₂ and breathing" },
  "sc.rec.li3":   { sk: "Týždenné trendy, váha a kalórie", en: "Weekly trends, weight and calories" },

  /* steps */
  "steps.kicker": { sk: "Ako to funguje", en: "How it works" },
  "steps.title":  { sk: "Začni za tri minúty", en: "Get started in three minutes" },
  "step1.title":  { sk: "Prepoj hodinky", en: "Connect your watch" },
  "step1.desc":   { sk: "Spoj Subten s Apple Health alebo svojím nositeľom — spánok, tep a pohyb sa načítajú samé.", en: "Link Subten with Apple Health or your wearable — sleep, heart rate and activity flow in automatically." },
  "step2.title":  { sk: "Nastav cieľ", en: "Set your goal" },
  "step2.desc":   { sk: "Chudnutie, naberanie alebo výkon? Subten dopočíta kalórie a makrá presne na mieru.", en: "Lose, gain or perform? Subten calculates your calories and macros to match." },
  "step3.title":  { sk: "Nechaj sa viesť", en: "Let it guide you" },
  "step3.desc":   { sk: "Každý deň dostaneš jasný plán jedla, tréningu a regenerácie — a AI trénera, keď sa potrebuješ poradiť.", en: "Every day you get a clear plan for food, training and recovery — plus an AI coach whenever you need advice." },

  /* coach */
  "coach.kicker": { sk: "AI Coach", en: "AI Coach" },
  "coach.title":  { sk: "Osobný tréner, ktorý ťa pozná", en: "A personal coach that knows you" },
  "coach.lede":   { sk: "Coach vidí tvoje dáta — jedlo, tréning, spánok aj regeneráciu — a odpovedá konkrétne na tvoju situáciu. Po slovensky aj anglicky.", en: "Your coach sees your data — food, training, sleep and recovery — and answers for your exact situation. In Slovak and English." },
  "coach.q1":     { sk: "Mám dnes trénovať? Spal som len 5 hodín.", en: "Should I train today? I only slept 5 hours." },
  "coach.a1":     { sk: "Regenerácia je 68/100 — dobrá. Choď trénovať, ale drž nižšiu intenzitu a vynechaj zlyhanie. A doplň bielkoviny — chýba ti 41 g do cieľa.", en: "Recovery is 68/100 — solid. Train, but keep intensity moderate and skip going to failure. And top up protein — you're 41 g short of your goal." },
  "coach.q2":     { sk: "Oplatí sa kazeín pred spaním?", en: "Is casein before bed worth it?" },
  "coach.a2":     { sk: "Ak ti to sedí do makier, kľudne. Pomalé bielkoviny cez noc neuškodia, ale celkový denný príjem bielkovín rozhoduje viac.", en: "If it fits your macros, sure. Slow protein overnight won't hurt, but your total daily protein matters far more." },
  "coach.note":   { sk: "Subten Coach nie je lekár ani výživový poradca. Pri zdravotných otázkach vyhľadaj odborníka.", en: "Subten Coach is not a doctor or dietitian. For medical questions, consult a professional." },

  /* pricing */
  "price.kicker": { sk: "Cenník", en: "Pricing" },
  "price.title":  { sk: "Začni zadarmo. Odomkni viac, keď budeš chcieť.", en: "Start free. Unlock more when you're ready." },
  "price.lede":   { sk: "Žiadne reklamy. Zruš kedykoľvek.", en: "No ads. Cancel anytime." },
  "free.name":    { sk: "Free", en: "Free" },
  "free.per":     { sk: "navždy", en: "forever" },
  "free.sub":     { sk: "Všetko základné, čo potrebuješ na štart.", en: "Everything you need to get going." },
  "free.f1":      { sk: "Sledovanie jedla a makier", en: "Food & macro tracking" },
  "free.f2":      { sk: "Databáza cvikov a vlastný tréning", en: "Exercise library & custom workouts" },
  "free.f3":      { sk: "Denné skóre regenerácie", en: "Daily recovery score" },
  "free.f4":      { sk: "Synchronizácia s Apple Health", en: "Apple Health sync" },
  "free.f5":      { sk: "AI funkcie a AI Coach", en: "AI features & AI Coach" },
  "free.f6":      { sk: "Hotové a periodizované plány", en: "Ready-made & periodized plans" },
  "free.cta":     { sk: "Stiahnuť zadarmo", en: "Download free" },
  "pro.name":     { sk: "Premium", en: "Premium" },
  "pro.badge":    { sk: "Najobľúbenejšie", en: "Most popular" },
  "pro.per":      { sk: "/ mesiac", en: "/ month" },
  "pro.sub":      { sk: "Plný výkon Subten vrátane AI trénera.", en: "The full power of Subten, including the AI coach." },
  "pro.f1":       { sk: "Všetko z Free", en: "Everything in Free" },
  "pro.f2":       { sk: "AI Coach", en: "AI Coach" },
  "pro.f3":       { sk: "Periodizované športové plány", en: "Periodized sport plans" },
  "pro.f4":       { sk: "Sken jedla z fotky", en: "Photo food scanning" },
  "pro.f5":       { sk: "Týždenné hodnotenia a trendy", en: "Weekly reviews & trends" },
  "pro.f6":       { sk: "Plán jedál a nákupný zoznam", en: "Meal plans & shopping lists" },
  "pro.cta":      { sk: "Vyskúšať Premium", en: "Try Premium" },

  /* generator */
  "gen.kicker":     { sk: "Tréningový generátor", en: "Training generator" },
  "gen.title":      { sk: "Tvoj plán na mieru<br>za 30 sekúnd", en: "Your custom plan<br>in 30 seconds" },
  "gen.lede":       { sk: "Vyber cieľ, úroveň a počet dní. Subten ti vygeneruje kompletný rozpis s ukážkami cvikov — a QR kódom na import do appky.", en: "Pick your goal, level and training days. Subten generates a full plan with exercise demos — and a QR code to import into the app." },
  "gen.s1.label":   { sk: "Krok 1 zo 4", en: "Step 1 of 4" },
  "gen.s1.q":       { sk: "Aký je tvoj hlavný cieľ?", en: "What's your main goal?" },
  "gen.s2.label":   { sk: "Krok 2 zo 4", en: "Step 2 of 4" },
  "gen.s2.q":       { sk: "Aká je tvoja skúsenostná úroveň?", en: "What's your experience level?" },
  "gen.s3.label":   { sk: "Krok 3 zo 4", en: "Step 3 of 4" },
  "gen.s3.q":       { sk: "Koľko dní týždenne chceš trénovať?", en: "How many days per week?" },
  "gen.s4.label":   { sk: "Krok 4 zo 4", en: "Step 4 of 4" },
  "gen.s4.q":       { sk: "Aký typ rozpisu preferuješ?", en: "Which split do you prefer?" },
  "gen.next":       { sk: "Ďalej", en: "Next" },
  "gen.back":       { sk: "Späť", en: "Back" },
  "gen.generate":   { sk: "Vygenerovať plán", en: "Generate plan" },
  "gen.goal.fat":   { sk: "Chudnutie", en: "Fat loss" },
  "gen.goal.fat.d": { sk: "Znížiť tuk, udržať svaly a zrýchliť metabolizmus.", en: "Burn fat, preserve muscle and boost metabolism." },
  "gen.goal.muscle":   { sk: "Naberanie svalov", en: "Muscle gain" },
  "gen.goal.muscle.d": { sk: "Hypertrofia, silový rast a progresívne preťaženie.", en: "Hypertrophy, strength gains and progressive overload." },
  "gen.goal.maintain":   { sk: "Údržba", en: "Maintenance" },
  "gen.goal.maintain.d": { sk: "Udržať kondíciu, zdravie a aktuálnu postavu.", en: "Keep your fitness, health and current physique." },
  "gen.goal.sport":   { sk: "Športový výkon", en: "Sport performance" },
  "gen.goal.sport.d": { sk: "Sila, rýchlosť a výbušnosť pre tvoj šport.", en: "Strength, speed and explosiveness for your sport." },
  "gen.lvl.beg":   { sk: "Začiatočník", en: "Beginner" },
  "gen.lvl.beg.d": { sk: "Menej ako 6 mesiacov tréningu.", en: "Less than 6 months of training." },
  "gen.lvl.int":   { sk: "Pokročilý", en: "Intermediate" },
  "gen.lvl.int.d": { sk: "6 mesiacov až 3 roky skúseností.", en: "6 months to 3 years of experience." },
  "gen.lvl.adv":   { sk: "Expert", en: "Advanced" },
  "gen.lvl.adv.d": { sk: "Viac ako 3 roky pravidelného tréningu.", en: "Over 3 years of consistent training." },
  "gen.plan.title": { sk: "Tvoj tréningový plán", en: "Your training plan" },
  "gen.qr.title":   { sk: "Importuj do Subten appky", en: "Import into Subten app" },
  "gen.qr.desc":    { sk: "Naskenuj QR kód v appke Subten a celý plán sa ti automaticky načíta — s ukážkami cvikov a časovačom.", en: "Scan the QR code in the Subten app and the entire plan loads automatically — with exercise demos and rest timer." },
  "gen.qr.copy":    { sk: "Kopírovať plán", en: "Copy plan" },
  "gen.qr.download":{ sk: "Stiahnuť QR", en: "Download QR" },
  "gen.qr.hint":    { sk: "V appke Subten choď do Tréning → Importovať → Skenovať QR", en: "In Subten app go to Training → Import → Scan QR" },
  "gen.cta.title":  { sk: "Chceš plný zážitok?", en: "Want the full experience?" },
  "gen.cta.desc":   { sk: "V appke Subten dostaneš presné vedenie cvik po cviku, GIF animácie, časovač odpočinku a automatické prispôsobenie podľa regenerácie.", en: "In the Subten app you get step-by-step guidance, GIF animations, rest timer and automatic adjustments based on your recovery." },
  "gen.cta.btn":    { sk: "Stiahnuť Subten", en: "Download Subten" },
  "gen.restart":    { sk: "Vygenerovať nový plán", en: "Generate new plan" },

  /* faq */
  "faq.kicker": { sk: "FAQ", en: "FAQ" },
  "faq.title":  { sk: "Časté otázky", en: "Frequently asked" },
  "faq.q1": { sk: "Funguje Subten s Apple Watch?", en: "Does Subten work with Apple Watch?" },
  "faq.a1": { sk: "Áno. Subten sa prepojí cez Apple Health a načíta HRV, pokojový tep, spánok, SpO₂ aj kroky. Cez Health podporujeme aj ďalšie nositeľné zariadenia.", en: "Yes. Subten connects through Apple Health and reads HRV, resting heart rate, sleep, SpO₂ and steps. Other wearables are supported through Health too." },
  "faq.q2": { sk: "Je appka v slovenčine?", en: "Is the app in Slovak?" },
  "faq.a2": { sk: "Áno, Subten je plne v slovenčine aj angličtine — vrátane AI trénera.", en: "Yes — Subten is fully available in Slovak and English, including the AI coach." },
  "faq.q3": { sk: "Potrebujem Premium, aby to malo zmysel?", en: "Do I need Premium for it to be useful?" },
  "faq.a3": { sk: "Nie. Sledovanie jedla, makier, základné plány a denné skóre regenerácie sú zadarmo. Premium pridáva AI trénera, sken z fotky a periodizované športové plány.", en: "No. Food and macro tracking, basic plans and the daily recovery score are free. Premium adds the AI coach, photo scanning and periodized sport plans." },
  "faq.q4": { sk: "Ako je to s mojimi dátami?", en: "What about my data?" },
  "faq.a4": { sk: "Tvoje zdravotné dáta zostávajú tvoje. Nepredávame ich a používame ich len na to, aby appka fungovala. Účet aj dáta môžeš kedykoľvek vymazať.", en: "Your health data stays yours. We never sell it and use it only to make the app work. You can delete your account and data anytime." },
  "faq.q5": { sk: "Nahrádza Coach lekára alebo trénera?", en: "Is Coach a replacement for a doctor or trainer?" },
  "faq.a5": { sk: "Nie. AI Coach je pomocník pri rozhodovaní, nie zdravotná služba. Pri zdravotných ťažkostiach sa obráť na odborníka.", en: "No. The AI Coach helps you make decisions — it's not a medical service. For health issues, see a professional." },

  /* final cta */
  "cta.soon": { sk: "Spúšťame čoskoro pre iPhone a Android", en: "Launching soon for iPhone and Android" },
  "cta.title": { sk: "Buď medzi prvými, kto vyskúša Subten", en: "Be among the first to try Subten" },
  "cta.lede":  { sk: "Nechaj nám e-mail a dáme ti vedieť hneď, ako spustíme. Žiadny spam — len jedna správa pri štarte.", en: "Leave your email and we'll let you know the moment we launch. No spam — just one message at launch." },
  "cta.email_ph": { sk: "tvoj@email.sk", en: "your@email.com" },
  "cta.notify": { sk: "Daj mi vedieť", en: "Notify me" },
  "cta.success": { sk: "Hotovo! Ozveme sa ti pri spustení 🎉", en: "Done! We'll be in touch at launch 🎉" },
  "cta.privacy": { sk: "Tvoj e-mail použijeme len na oznámenie spustenia.", en: "We'll only use your email to announce the launch." },
  "cta.alsoon": { sk: "Čoskoro v obchodoch", en: "Coming soon to stores" },
  "cta.invalid": { sk: "Zadaj platný e-mail", en: "Enter a valid email" },

  /* footer */
  "footer.tagline": { sk: "Tréning, výživa a regenerácia v jednej appke. Tvoj AI tréner vždy po ruke.", en: "Training, nutrition and recovery in one app. Your AI coach, always with you." },
  "footer.product": { sk: "Produkt", en: "Product" },
  "footer.legal":   { sk: "Právne", en: "Legal" },
  "footer.contact": { sk: "Kontakt", en: "Contact" },
  "footer.privacy": { sk: "Ochrana súkromia", en: "Privacy Policy" },
  "footer.terms":   { sk: "Podmienky používania", en: "Terms of Service" },
  "footer.delete":  { sk: "Vymazanie účtu", en: "Delete account" },
  "footer.support": { sk: "Podpora", en: "Support" },
  "footer.rights":  { sk: "© 2026 Subten. Všetky práva vyhradené.", en: "© 2026 Subten. All rights reserved." },
  "footer.made":    { sk: "Vytvorené na Slovensku 🇸🇰", en: "Made in Slovakia 🇸🇰" }
};

/* ---------- runtime (netreba upravovať) ---------- */
(function () {
  const DICT = window.SUBTEN_I18N;
  const LANGS = window.SUBTEN_LANGUAGES || [{ code: "sk", label: "SK" }, { code: "en", label: "EN" }];
  const CODES = LANGS.map(l => l.code);
  const FALLBACK = CODES.includes("en") ? "en" : CODES[0];
  const KEY = "subten-lang";

  function initialLang() {
    const stored = localStorage.getItem(KEY);
    if (CODES.includes(stored)) return stored;
    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    return CODES.includes(nav) ? nav : CODES[0];
  }

  // Build / refresh every .lang-toggle from the LANGUAGES config
  function buildToggles() {
    document.querySelectorAll(".lang-toggle").forEach(t => {
      if (t.dataset.built) return;
      t.dataset.built = "1";
      t.style.setProperty("--lang-n", LANGS.length);
      t.innerHTML = '<span class="pill" aria-hidden="true"></span>' +
        LANGS.map(l => `<button type="button" data-lang="${l.code}">${l.label}</button>`).join("");
      t.querySelectorAll("button").forEach(b => b.addEventListener("click", () => (window.SubtenSetLang || apply)(b.dataset.lang)));
    });
  }

  function apply(lang) {
    if (!CODES.includes(lang)) lang = CODES[0];
    document.documentElement.lang = lang;
    const idx = CODES.indexOf(lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const entry = DICT[el.getAttribute("data-i18n")];
      if (entry) { const v = entry[lang] != null ? entry[lang] : entry[FALLBACK]; if (v != null) el.innerHTML = v; }
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.getAttribute("data-i18n-attr").split(";").forEach(pair => {
        const [attr, key] = pair.split(":");
        const entry = DICT[key && key.trim()];
        if (entry) { const v = entry[lang] != null ? entry[lang] : entry[FALLBACK]; if (v != null) el.setAttribute(attr.trim(), v); }
      });
    });
    // whole-block language switch (legal pages); fall back to first available block
    const blocks = document.querySelectorAll("[data-lang-block]");
    if (blocks.length) {
      const present = new Set([...blocks].map(b => b.getAttribute("data-lang-block")));
      const showCode = present.has(lang) ? lang : (present.has(FALLBACK) ? FALLBACK : [...present][0]);
      blocks.forEach(el => { el.style.display = el.getAttribute("data-lang-block") === showCode ? "" : "none"; });
    }
    // toggle UI state
    document.querySelectorAll(".lang-toggle").forEach(t => {
      t.style.setProperty("--lang-i", idx);
      t.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    });
    localStorage.setItem(KEY, lang);
    window.__subtenLang = lang;
  }

  window.SubtenSetLang = apply;
  function init() { buildToggles(); apply(initialLang()); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
