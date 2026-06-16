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
  "nav.calculator":{ sk: "Kalkulačka", en: "Calculator", cz: "Kalkulačka" },
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
  "footer.made":    { sk: "Vytvorené na Slovensku 🇸🇰", en: "Made in Slovakia 🇸🇰" },

  /* ── calculator ── */
  "calc.kicker":  { sk: "Kalkulačka zadarmo", en: "Free calculator" },
  "calc.h1":      { sk: "Tvoje čísla — presne ako v appke.", en: "Your numbers — exactly how the app does it." },
  "calc.lede":    {
    sk: "Rovnaké vzorce, aké poháňajú Subten: BMR, TDEE, denný kalorický cieľ, makrá s carb cyclingom, hydratácia a skóre regenerácie. Všetko počíta tvoj prehliadač naživo — nič sa nikam neposiela.",
    en: "The same formulas that power Subten: BMR, TDEE, daily calorie target, macros with carb cycling, hydration and recovery scores. Everything is computed live in your browser — nothing is sent anywhere."
  },
  "calc.inputs.title": { sk: "Tvoje údaje", en: "Your details" },
  "calc.out.title":    { sk: "Tvoje výsledky", en: "Your results" },

  "calc.sex":        { sk: "Pohlavie", en: "Sex" },
  "calc.sex.male":   { sk: "Muž", en: "Male" },
  "calc.sex.female": { sk: "Žena", en: "Female" },
  "calc.sex.other":  { sk: "Iné", en: "Other" },
  "calc.age":        { sk: "Vek", en: "Age" },
  "calc.height":     { sk: "Výška (cm)", en: "Height (cm)" },
  "calc.weight":     { sk: "Váha (kg)", en: "Weight (kg)" },

  "calc.activity":         { sk: "Úroveň aktivity", en: "Activity level" },
  "calc.act.sedentary":    { sk: "Sedavá (málo pohybu)", en: "Sedentary (little exercise)" },
  "calc.act.light":        { sk: "Ľahká (1–3× týždenne)", en: "Light (1–3×/week)" },
  "calc.act.moderate":     { sk: "Stredná (3–5× týždenne)", en: "Moderate (3–5×/week)" },
  "calc.act.active":       { sk: "Aktívna (6–7× týždenne)", en: "Active (6–7×/week)" },
  "calc.act.veryactive":   { sk: "Veľmi aktívna (2× denne / fyzická práca)", en: "Very active (2×/day or physical job)" },
  "calc.act.hint":         {
    sk: "Subten je pri štarte konzervatívny a strop násobiča drží na 1,5× — týždenná adaptácia ho potom doladí podľa reálnych dát.",
    en: "Subten starts conservatively and caps the multiplier at 1.5× — weekly adaptation then fine-tunes it from your real data."
  },

  "calc.goal":          { sk: "Cieľ", en: "Goal" },
  "calc.goal.fatloss":  { sk: "Chudnutie (−500 kcal)", en: "Fat loss (−500 kcal)" },
  "calc.goal.maintain": { sk: "Udržanie", en: "Maintain" },
  "calc.goal.gain":     { sk: "Naberanie (+300 kcal)", en: "Muscle gain (+300 kcal)" },
  "calc.goal.recomp":   { sk: "Rekompozícia (0 kcal)", en: "Recomp (0 kcal)" },

  "calc.bodyfat":      { sk: "% telesného tuku — voliteľné", en: "Body fat % — optional" },
  "calc.bodyfat.hint": { sk: "Pre výpočet čistej hmoty (lean mass).", en: "Used to estimate lean body mass." },

  "calc.week.title":  { sk: "Tréningový týždeň", en: "Training week" },
  "calc.week.hint":   {
    sk: "Nastav typ záťaže pre každý deň — sacharidy sa rozložia podľa neho (carb cycling). Týždenný priemer ostáva rovný cieľu.",
    en: "Set the load type for each day — carbs are distributed accordingly (carb cycling). The weekly average stays equal to the target."
  },
  "calc.week.legend": { sk: "Oddych ×1,0 · Sila ×1,6 · Kardio ×2,4 · Šport/dlhý ×3,5", en: "Rest ×1.0 · Strength ×1.6 · Cardio ×2.4 · Sport/long ×3.5" },

  "calc.type.rest":     { sk: "Oddych", en: "Rest" },
  "calc.type.strength": { sk: "Sila", en: "Strength" },
  "calc.type.cardio":   { sk: "Kardio", en: "Cardio" },
  "calc.type.sport":    { sk: "Šport", en: "Sport" },

  "calc.dayshort.mon": { sk: "Po", en: "Mon" },
  "calc.dayshort.tue": { sk: "Ut", en: "Tue" },
  "calc.dayshort.wed": { sk: "St", en: "Wed" },
  "calc.dayshort.thu": { sk: "Št", en: "Thu" },
  "calc.dayshort.fri": { sk: "Pi", en: "Fri" },
  "calc.dayshort.sat": { sk: "So", en: "Sat" },
  "calc.dayshort.sun": { sk: "Ne", en: "Sun" },
  "calc.day.mon": { sk: "Pondelok", en: "Monday" },
  "calc.day.tue": { sk: "Utorok", en: "Tuesday" },
  "calc.day.wed": { sk: "Streda", en: "Wednesday" },
  "calc.day.thu": { sk: "Štvrtok", en: "Thursday" },
  "calc.day.fri": { sk: "Piatok", en: "Friday" },
  "calc.day.sat": { sk: "Sobota", en: "Saturday" },
  "calc.day.sun": { sk: "Nedeľa", en: "Sunday" },

  "calc.wear.title":   { sk: "Dáta z hodiniek — voliteľné", en: "Watch data — optional" },
  "calc.wear.note":    {
    sk: "Tieto skóre v appke počítajú dáta z Apple Watch / Apple Health. Tu si ich môžeš odsimulovať ručným zadaním.",
    en: "In the app these scores come from Apple Watch / Apple Health. Here you can simulate them by entering values manually."
  },
  "calc.wear.hrv":     { sk: "HRV (ms, SDNN)", en: "HRV (ms, SDNN)" },
  "calc.wear.rhr":     { sk: "Kľudový tep (bpm)", en: "Resting HR (bpm)" },
  "calc.wear.sleep":   { sk: "Spánok (hodiny)", en: "Sleep (hours)" },
  "calc.wear.heavy":   { sk: "Včera ťažký tréning?", en: "Heavy workout yesterday?" },
  "calc.wear.strain":  { sk: "Pre strain skóre", en: "For strain score" },
  "calc.wear.active":  { sk: "Aktívne kcal", en: "Active kcal" },
  "calc.wear.workout": { sk: "Tréning (min)", en: "Workout (min)" },
  "calc.wear.steps":   { sk: "Kroky", en: "Steps" },
  "calc.wear.sleepq":  { sk: "Pre sleep skóre", en: "For sleep score" },
  "calc.wear.deep":    { sk: "Hlboký spánok %", en: "Deep sleep %" },
  "calc.wear.rem":     { sk: "REM %", en: "REM %" },
  "calc.wear.eff":     { sk: "Efektivita %", en: "Efficiency %" },
  "calc.wear.spo2":    { sk: "SpO₂ %", en: "SpO₂ %" },
  "calc.no":           { sk: "Nie", en: "No" },
  "calc.yes":          { sk: "Áno", en: "Yes" },

  "calc.bmr":     { sk: "BMR", en: "BMR" },
  "calc.bmr.sub": { sk: "Bazálny metabolizmus (Mifflin-St Jeor)", en: "Basal metabolic rate (Mifflin-St Jeor)" },
  "calc.tdee":    { sk: "TDEE", en: "TDEE" },
  "calc.tdee.sub":    { sk: "Celkový denný výdaj (konzervatívny štart)", en: "Total daily energy (conservative start)" },
  "calc.tdee.capped": { sk: "Násobič obmedzený na 1,5× (konzervatívny štart)", en: "Multiplier capped at 1.5× (conservative start)" },
  "calc.target":     { sk: "Denný cieľ", en: "Daily target" },
  "calc.target.sub": { sk: "Kalorický cieľ pre tvoj cieľ", en: "Calorie target for your goal" },
  "calc.target.guard": { sk: "BMI < 18,5 — pri podváhe rušíme deficit (udržanie)", en: "BMI < 18.5 — deficit disabled for underweight (maintain)" },

  "calc.bmi":        { sk: "BMI", en: "BMI" },
  "calc.bmi.under":  { sk: "Podváha", en: "Underweight" },
  "calc.bmi.normal": { sk: "Norma", en: "Normal" },
  "calc.bmi.over":   { sk: "Nadváha", en: "Overweight" },
  "calc.bmi.obese":  { sk: "Obezita", en: "Obese" },

  "calc.hydration":     { sk: "Hydratácia", en: "Hydration" },
  "calc.hydration.sub": { sk: "35 ml na kg hmotnosti", en: "35 ml per kg of body weight" },
  "calc.leanmass":      { sk: "Čistá hmota", en: "Lean mass" },
  "calc.leanmass.sub":  { sk: "Hmotnosť bez tuku", en: "Fat-free mass" },

  "calc.macros.title": { sk: "Makrá", en: "Macros" },
  "calc.macros.sub":   {
    sk: "Bielkoviny a tuky držíme stabilné; sacharidy sa menia podľa záťaže dňa (carb cycling). Hodnoty nižšie sú denný základ.",
    en: "Protein and fat stay steady; carbs shift with each day's load (carb cycling). The numbers below are the daily baseline."
  },
  "calc.macros.base": { sk: "Základ", en: "Baseline" },
  "calc.protein": { sk: "Bielkoviny", en: "Protein" },
  "calc.carbs":   { sk: "Sacharidy", en: "Carbs" },
  "calc.fat":     { sk: "Tuky", en: "Fat" },
  "calc.fiber":   { sk: "Vláknina", en: "Fiber" },

  "calc.cycle.title": { sk: "Carb cycling — týždeň", en: "Carb cycling — the week" },
  "calc.cycle.sub":   {
    sk: "Sacharidy sa prerozdelia podľa typu dňa. Týždenný priemer sa rovná cieľu — nič sa nepridáva navyše.",
    en: "Carbs are redistributed by day type. The weekly average equals the target — nothing is added on top."
  },
  "calc.cycle.day":  { sk: "Deň", en: "Day" },
  "calc.cycle.type": { sk: "Typ", en: "Type" },
  "calc.cycle.kcal": { sk: "Kalórie dňa", en: "Day calories" },
  "calc.cycle.avg":  { sk: "Týždenný priemer sacharidov", en: "Weekly average carbs" },
  "calc.decimal":    { sk: ",", en: "." },

  "calc.scores.title": { sk: "Skóre regenerácie", en: "Recovery scores" },
  "calc.scores.sub":   {
    sk: "WHOOP-style heuristiky z dát hodiniek. V appke sa počítajú automaticky z Apple Health.",
    en: "WHOOP-style heuristics from watch data. In the app they are computed automatically from Apple Health."
  },
  "calc.scores.hint":  {
    sk: "<b>Tip:</b> Vyplň <b>Dáta z hodiniek</b> vľavo a doplníme aj Recovery, Sleep a Strain skóre — presne ako ich appka ukazuje z Apple Watch.",
    en: "<b>Tip:</b> Fill in <b>Watch data</b> on the left and we'll add Recovery, Sleep and Strain scores too — exactly how the app shows them from Apple Watch."
  },
  "calc.recovery": { sk: "Recovery", en: "Recovery" },
  "calc.sleep":    { sk: "Sleep score", en: "Sleep score" },
  "calc.strain":   { sk: "Strain", en: "Strain" },

  "calc.rec.ready":     { sk: "Pripravený", en: "Ready" },
  "calc.rec.excellent": { sk: "Výborný", en: "Excellent" },
  "calc.rec.good":      { sk: "Dobrý", en: "Good" },
  "calc.rec.moderate":  { sk: "Stredný", en: "Moderate" },
  "calc.rec.fair":      { sk: "Slabší", en: "Fair" },
  "calc.rec.rest":      { sk: "Potrebuje oddych", en: "Needs rest" },

  "calc.slp.excellent": { sk: "Výborný", en: "Excellent" },
  "calc.slp.good":      { sk: "Dobrý", en: "Good" },
  "calc.slp.fair":      { sk: "Priemerný", en: "Fair" },
  "calc.slp.poor":      { sk: "Slabý", en: "Poor" },

  "calc.str.peak":   { sk: "Vrchol", en: "Peak" },
  "calc.str.high":   { sk: "Vysoký", en: "High" },
  "calc.str.medium": { sk: "Stredný", en: "Medium" },
  "calc.str.low":    { sk: "Nízky", en: "Low" },
  "calc.str.rest":   { sk: "Oddych", en: "Rest" },

  "calc.disclaimer": {
    sk: "Orientačný prepočet podľa verejne dokumentovaných vzorcov Subtenu. Nenahrádza lekársku ani odbornú výživovú radu. Appka cieľ priebežne adaptuje podľa reálnych dát (hmotnosť + príjem za 21 dní), čo táto jednorazová kalkulačka nerobí.",
    en: "An indicative calculation based on Subten's documented formulas. It does not replace medical or professional nutrition advice. The app continuously adapts your target from real data (weight + intake over 21 days), which this one-shot calculator does not do."
  }
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
    // First visit defaults to English; users can still switch to SK/CZ.
    return CODES.includes("en") ? "en" : CODES[0];
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
