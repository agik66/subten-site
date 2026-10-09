/* ============================================================
   SUBTEN — TEXTY A JAZYKY (lokalizácia)
   ============================================================

   AKO ZMENIŤ TEXT:
   Nájdi riadok s textom a prepíš ho medzi úvodzovkami "...".
   Každý text má verziu pre každý jazyk, napr.:
       "hero.cta1": { sk: "Čoskoro v App Store", en: "Coming soon to the App Store", cz: "Brzy v App Storu" },
   Uprav "sk" (slovensky) alebo "en" (anglicky) podľa potreby.

   AKO PRIDAŤ NOVÝ JAZYK (napr. češtinu "cs"):
   1) Pridaj jazyk do zoznamu SUBTEN_LANGUAGES nižšie, napr.:
          { code: "cs", label: "CZ" }
   2) Ku každému textu dopíš jeho preklad, napr.:
          "hero.cta1": { sk: "Čoskoro v App Store", en: "Coming soon to the App Store", cz: "Brzy v App Storu" },
      (ak preklad chýba, automaticky sa použije angličtina ako záloha)
   3) Na právnych stránkach (priečinok legal/) priraď k blokom
      ďalší <div data-lang-block="cs"> s prekladom.
   Prepínač jazykov v hlavičke sa doplní sám.
   ============================================================ */

/* Zoznam jazykov — poradie tu = poradie tlačidiel v prepínači.
   Prvý jazyk je predvolený. */
window.SUBTEN_LANGUAGES = [
  { code: "sk", label: "SK", name: "Slovenčina" },
  { code: "en", label: "EN", name: "English" },
  { code: "cz", label: "CS", name: "Čeština" } /* interný kód "cz"; v URL aj v <html lang> sa používa "cs" */
  /* To add a language, add ONE line here, e.g.:
     { code: "it", label: "IT", name: "Italiano" },
     { code: "de", label: "DE", name: "Deutsch" },
     { code: "pl", label: "PL", name: "Polski" },
     { code: "fr", label: "FR", name: "Français" },
     { code: "es", label: "ES", name: "Español" },
     { code: "hu", label: "HU", name: "Magyar" }
     and add its translations to the keys below. The header switcher
     (a config-driven dropdown) updates automatically. */
];

window.SUBTEN_I18N = {
  /* nav */
  "nav.features": { sk: "Funkcie", en: "Features", cz: "Funkce" },
  "nav.how":      { sk: "Ako to funguje", en: "How it works", cz: "Jak to funguje" },
  "nav.coach":    { sk: "AI tréner", en: "AI coach", cz: "AI trenér" },
  "nav.pricing":  { sk: "Cenník", en: "Pricing", cz: "Ceník" },
  "nav.faq":      { sk: "FAQ", en: "FAQ", cz: "FAQ" },
  "nav.generator":{ sk: "Generátor", en: "Generator", cz: "Generátor" },
  "nav.soon":     { sk: "čoskoro", en: "soon", cz: "brzy" },
  "nav.calculator":{ sk: "Kalkulačka", en: "Calculator", cz: "Kalkulačka" },
  "nav.recipes":  { sk: "Recepty", en: "Recipes", cz: "Recepty" },
  "nav.cta":      { sk: "Čoskoro", en: "Soon", cz: "Brzy" },

  /* hero */
  "hero.badge":   { sk: "AI tréner a plány pre 8 športov", en: "AI coach and plans for 8 sports", cz: "AI trenér a plány pro 8 sportů" },
  "hero.title":   { sk: "Jedlo, tréning a&nbsp;<span class='text-grad'>regenerácia</span> v jednej appke.", en: "Food, training and&nbsp;<span class='text-grad'>recovery</span> in one app.", cz: "Jídlo, trénink a&nbsp;<span class='text-grad'>regenerace</span> v jedné aplikaci." },
  "hero.lede":    { sk: "Subten spojí kalórie, makrá, tréningový plán a dáta z hodiniek — a tvoj AI tréner ti každý deň navrhne, čo robiť ďalej.", en: "Subten brings together calories, macros, your training plan and watch data — and your AI coach suggests what to do next, every day.", cz: "Subten spojí kalorie, makra, tréninkový plán a data z hodinek — a tvůj AI trenér ti každý den navrhne, co dělat dál." },
  "hero.cta1":    { sk: "Čoskoro v App Store", en: "Coming soon to the App Store", cz: "Brzy v App Storu" },
  "hero.cta2":    { sk: "Pozrieť funkcie", en: "See features", cz: "Prohlédnout funkce" },
  "hero.meta1":   { sk: "Bez reklám", en: "No ads", cz: "Bez reklam" },
  "hero.meta2":   { sk: "Synchronizácia s Apple Health", en: "Syncs with Apple Health", cz: "Synchronizace s Apple Health" },
  "hero.meta3":   { sk: "Aj na Apple Watch", en: "On Apple Watch too", cz: "I na Apple Watch" },

  /* store badges */

  /* strip */
  "strip.1": { sk: "Apple Health & Watch", en: "Apple Health & Watch", cz: "Apple Health & Watch" },
  "strip.2": { sk: "HRV & spánok", en: "HRV & sleep", cz: "HRV & spánek" },
  "strip.3": { sk: "AI sken jedla", en: "AI food scan", cz: "AI sken jídla" },
  "strip.4": { sk: "Periodizované plány", en: "Periodized plans", cz: "Periodizované plány" },
  "strip.5": { sk: "Makrá & kalórie", en: "Macros & calories", cz: "Makra & kalorie" },
  "strip.6": { sk: "6 jazykov", en: "6 languages", cz: "6 jazyků" },

  /* features */
  "feat.kicker": { sk: "Čo Subten dokáže", en: "What Subten does", cz: "Co Subten umí" },
  "feat.title":  { sk: "Všetko pre tvoj progres — bez piatich appiek.", en: "Everything for your progress — without five apps.", cz: "Vše pro tvůj progres — bez pěti aplikací." },
  "feat.lede":   { sk: "Sleduj jedlo, trénuj podľa plánu, meraj regeneráciu a nechaj sa viesť AI trénerom. V jednom čistom rozhraní.", en: "Track food, train to a plan, measure recovery and get guided by an AI coach. In one clean interface.", cz: "Sleduj jídlo, trénuj podle plánu, měř regeneraci a nech se vést AI trenérem. V jednom čistém rozhraní." },

  "food.title":     { sk: "Jedlo a makrá", en: "Food & macros", cz: "Jídlo a makra" },
  "food.desc":      { sk: "Naskenuj čiarový kód alebo odfoť tanier — AI odhadne kalórie a makrá. Sleduješ aj bielkoviny, sacharidy, tuky a vlákninu.", en: "Scan a barcode or snap your plate — AI estimates calories and macros. Track protein, carbs, fat and fiber too.", cz: "Naskenuj čárový kód nebo vyfoť talíř — AI odhadne kalorie a makra. Sleduješ i bílkoviny, sacharidy, tuky a vlákninu." },
  "training.title": { sk: "Tréning a šport", en: "Training & sport", cz: "Trénink a sport" },
  "training.desc":  { sk: "Plány do posilňovne a plány pre 8 športov: hokej, futbal, tenis, basketbal, beh, cyklistika, plávanie a triatlón.", en: "Gym programmes and plans for 8 sports: hockey, football, tennis, basketball, running, cycling, swimming and triathlon.", cz: "Plány do posilovny a plány pro 8 sportů: hokej, fotbal, tenis, basketbal, běh, cyklistika, plavání a triatlon." },
  "recovery.title": { sk: "Regenerácia", en: "Recovery", cz: "Regenerace" },
  "recovery.desc":  { sk: "HRV, pokojový tep, spánok a SpO₂ z hodiniek v jednom skóre pripravenosti.", en: "HRV, resting heart rate, sleep and SpO₂ from your watch in one readiness score.", cz: "HRV, klidový tep, spánek a SpO₂ z hodinek v jednom skóre připravenosti." },
  "coachf.title":   { sk: "AI tréner", en: "AI coach", cz: "AI trenér" },
  "coachf.desc":    { sk: "AI tréner v aplikácii — pýtaj sa na výživu, tréning aj motiváciu.", en: "An AI coach in the app — ask about nutrition, training and motivation.", cz: "AI trenér v aplikaci — ptej se na výživu, trénink i motivaci." },
  "progress.title": { sk: "Progres a prehľad", en: "Progress & insights", cz: "Progres a přehled" },
  "progress.desc":  { sk: "Týždenné hodnotenia a história záznamov na jednom mieste — vidíš, ako sa ti darí držať plán.", en: "Weekly reviews and your full history in one place — see how well you're sticking to your plan.", cz: "Týdenní hodnocení a historie záznamů na jednom místě — vidíš, jak se ti daří držet plán." },

  /* showcase: food */
  "sc.food.title": { sk: "Zaznamenaj jedlo za pár sekúnd", en: "Log meals in seconds", cz: "Zaznamenej jídlo za pár sekund" },
  "sc.food.desc":  { sk: "Sken, fotka alebo vyhľadávanie z databázy. Obľúbené a časté jedlá máš po ruke a Subten ti ukáže, čo ti ešte do cieľa chýba.", en: "Scan, photo or search the database. Favorites and frequent foods are a tap away, and Subten shows what's left to hit your goal.", cz: "Sken, fotka nebo vyhledávání z databáze. Oblíbená a častá jídla máš po ruce a Subten ti ukáže, co ti ještě do cíle chybí." },
  "sc.food.li1":   { sk: "Čiarový kód a sken jedla z fotky", en: "Barcode and photo food scan", cz: "Čárový kód a sken jídla z fotky" },
  "sc.food.li2":   { sk: "Bielkoviny, sacharidy, tuky aj vláknina", en: "Protein, carbs, fat and fiber", cz: "Bílkoviny, sacharidy, tuky i vláknina" },
  "sc.food.li3":   { sk: "Raňajky, obedy, snacky aj vlastné jedlá", en: "Breakfast, lunch, snacks and custom foods", cz: "Snídaně, obědy, snacky i vlastní jídla" },

  /* showcase: training */
  "sc.train.title": { sk: "Trénuj podľa plánu, nie od oka", en: "Train to a plan, not by guesswork", cz: "Trénuj podle plánu, ne od oka" },
  "sc.train.desc":  { sk: "Vyber si rozpis do posilňovne alebo periodizovaný plán pre svoj šport. Subten ti pripraví týždeň a vedie ťa cvik po cviku.", en: "Pick a gym split or a periodized plan for your sport. Subten lays out your week and guides you exercise by exercise.", cz: "Vyber si rozpis do posilovny nebo periodizovaný plán pro svůj sport. Subten ti připraví týden a vede tě cvik po cviku." },
  "sc.train.li1":   { sk: "Celé telo, PPL, Upper/Lower, Wendler a ďalšie", en: "Full body, PPL, Upper/Lower, Wendler and more", cz: "Celé tělo, PPL, Upper/Lower, Wendler a další" },
  "sc.train.li2":   { sk: "Periodizované plány pre 8 športov: hokej, futbal, tenis, basketbal, beh, cyklistika, plávanie a triatlón", en: "Periodized plans for 8 sports: hockey, football, tennis, basketball, running, cycling, swimming and triathlon", cz: "Periodizované plány pro 8 sportů: hokej, fotbal, tenis, basketbal, běh, cyklistika, plavání a triatlon" },
  "sc.train.li3":   { sk: "Knižnica cvikov s návodmi a zapojenými svalmi", en: "Exercise library with guides and the muscles each exercise works", cz: "Knihovna cviků s návody a zapojenými svaly" },

  /* showcase: recovery */
  "sc.rec.title": { sk: "Vieš, kedy pridať a kedy poľaviť", en: "Know when to push harder and when to ease off", cz: "Víš, kdy přidat a kdy polevit" },
  "sc.rec.desc":  { sk: "Subten číta HRV, pokojový tep, spánok aj dýchanie z hodiniek a každé ráno ti dá jasné skóre pripravenosti — aj s vysvetlením.", en: "Subten reads HRV, resting heart rate, sleep and breathing from your watch and gives you a clear readiness score every morning — with the why.", cz: "Subten čte HRV, klidový tep, spánek i dýchání z hodinek a každé ráno ti dá jasné skóre připravenosti — i s vysvětlením." },
  "sc.rec.li1":   { sk: "Skóre regenerácie 0–100 každé ráno", en: "Recovery score 0–100 every morning", cz: "Skóre regenerace 0–100 každé ráno" },
  "sc.rec.li2":   { sk: "HRV, pokojový tep, SpO₂ a dýchanie", en: "HRV, resting HR, SpO₂ and breathing", cz: "HRV, klidový tep, SpO₂ a dýchání" },
  "sc.rec.li3":   { sk: "Týždenné trendy a história záznamov", en: "Weekly trends and your full history", cz: "Týdenní trendy a historie záznamů" },

  /* steps */
  "steps.kicker": { sk: "Ako to funguje", en: "How it works", cz: "Jak to funguje" },
  "steps.title":  { sk: "Začni za tri minúty", en: "Get started in three minutes", cz: "Začni za tři minuty" },
  "step1.title":  { sk: "Prepoj Apple Health", en: "Connect Apple Health", cz: "Propoj Apple Health" },
  "step1.desc":   { sk: "Spoj Subten s Apple Health — spánok, tep a pohyb sa načítajú samé.", en: "Link Subten with Apple Health — sleep, heart rate and activity flow in automatically.", cz: "Spoj Subten s Apple Health — spánek, tep a pohyb se načtou samy." },
  "step2.title":  { sk: "Nastav cieľ", en: "Set your goal", cz: "Nastav cíl" },
  "step2.desc":   { sk: "Udržať, nabrať alebo trénovať na výkon? Subten nastaví východiskové kalórie a makrá a týždeň po týždni ich ladí.", en: "Maintain, gain or train for performance? Subten sets your starting calories and macros and fine-tunes them week by week.", cz: "Udržet, nabrat nebo trénovat na výkon? Subten nastaví výchozí kalorie a makra a týden po týdnu je ladí." },
  "step3.title":  { sk: "Nechaj sa viesť", en: "Let it guide you", cz: "Nech se vést" },
  "step3.desc":   { sk: "Každý deň dostaneš jasný plán jedla, tréningu a regenerácie — a AI trénera, keď sa potrebuješ poradiť.", en: "Every day you get a clear plan for food, training and recovery — plus an AI coach whenever you need advice.", cz: "Každý den dostaneš jasný plán jídla, tréninku a regenerace — a AI trenéra, když se potřebuješ poradit." },

  /* coach */
  "coach.kicker": { sk: "AI tréner", en: "AI coach", cz: "AI trenér" },
  "coach.title":  { sk: "AI tréner, ktorý pozná tvoje dáta", en: "An AI coach that knows your data", cz: "AI trenér, který zná tvoje data" },
  "coach.lede":   { sk: "AI tréner vidí tvoje dáta — jedlo, tréning, spánok aj regeneráciu — a odpovedá na tvoju situáciu. V jazyku, v ktorom mu napíšeš.", en: "Your AI coach sees your data — food, training, sleep and recovery — and answers for your situation. In the language you write to it.", cz: "AI trenér vidí tvoje data — jídlo, trénink, spánek i regeneraci — a odpovídá na tvou situaci. V jazyce, ve kterém mu napíšeš." },
  "coach.q1":     { sk: "Mám dnes trénovať? Spal som len 5 hodín.", en: "Should I train today? I only slept 5 hours.", cz: "Mám dnes trénovat? Spal jsem jen 5 hodin." },
  "coach.a1":     { sk: "Regenerácia je 68/100 — dobrá. Choď trénovať, ale drž nižšiu intenzitu a necvič do zlyhania. A doplň bielkoviny — chýba ti 41 g do cieľa.", en: "Recovery is 68/100 — solid. Train, but keep the intensity moderate and don't train to failure. And top up protein — you're 41 g short of your goal.", cz: "Regenerace je 68/100 — dobrá. Jdi trénovat, ale drž nižší intenzitu a necvič do selhání. A doplň bílkoviny — chybí ti 41 g do cíle." },
  "coach.q2":     { sk: "Oplatí sa kazeín pred spaním?", en: "Is casein before bed worth it?", cz: "Vyplatí se kasein před spaním?" },
  "coach.a2":     { sk: "Ak ti to sedí do makier, pokojne. Pomalé bielkoviny cez noc neuškodia, ale celkový denný príjem bielkovín rozhoduje viac.", en: "If it fits your macros, sure. Slow protein overnight won't hurt, but your total daily protein matters far more.", cz: "Pokud ti sedí do maker, klidně. Pomalé bílkoviny přes noc neuškodí, ale celkový denní příjem bílkovin rozhoduje víc." },
  "coach.privacy": { sk: "<strong>Súhlas a súkromie.</strong> AI tréner je súčasť Premium. Otázku alebo fotku odošle na spracovanie do cloudu len s tvojím výslovným súhlasom; kde to zariadenie dovolí, môžu textové funkcie bežať aj priamo v telefóne.", en: "<strong>Consent and privacy.</strong> The AI coach is part of Premium. Your question or photo is sent to the cloud for processing only with your explicit consent; where your device allows it, text features can also run directly on the phone.", cz: "<strong>Souhlas a soukromí.</strong> AI trenér je součástí Premium. Otázku nebo fotku odešle ke zpracování do cloudu jen s tvým výslovným souhlasem; kde to zařízení dovolí, mohou textové funkce běžet i přímo v telefonu." },
  "coach.note":   { sk: "AI tréner nie je lekár ani výživový poradca. Pri zdravotných otázkach vyhľadaj odborníka.", en: "The AI coach is not a doctor or dietitian. For medical questions, consult a professional.", cz: "AI trenér není lékař ani výživový poradce. Při zdravotních otázkách vyhledej odborníka." },

  /* pricing */
  "price.kicker": { sk: "Cenník", en: "Pricing", cz: "Ceník" },
  "price.title":  { sk: "Začni zadarmo. Odomkni viac, keď budeš chcieť.", en: "Start free. Unlock more when you're ready.", cz: "Začni zdarma. Odemkni víc, až budeš chtít." },
  "price.lede":   { sk: "Žiadne reklamy. Zruš kedykoľvek.", en: "No ads. Cancel anytime.", cz: "Žádné reklamy. Zrušíš kdykoli." },
  "free.name":    { sk: "Free", en: "Free", cz: "Free" },
  "free.per":     { sk: "navždy", en: "forever", cz: "navždy" },
  "free.sub":     { sk: "Všetko základné, čo potrebuješ na štart.", en: "Everything you need to get going.", cz: "Vše základní, co potřebuješ na start." },
  "free.f1":      { sk: "Zápis jedla a makier", en: "Food & macro logging", cz: "Zápis jídla a maker" },
  "free.f2":      { sk: "Čiarový kód", en: "Barcode scanning", cz: "Čárový kód" },
  "free.f3":      { sk: "Vlastný tréningový plán", en: "Your own training plan", cz: "Vlastní tréninkový plán" },
  "free.f4":      { sk: "História záznamov", en: "Full history", cz: "Historie záznamů" },
  "free.f5":      { sk: "Denné skóre regenerácie", en: "Daily recovery score", cz: "Denní skóre regenerace" },
  "free.f6":      { sk: "Export dát", en: "Data export", cz: "Export dat" },
  "free.cta":     { sk: "Čoskoro v App Store", en: "Coming soon to the App Store", cz: "Brzy v App Storu" },
  "pro.name":     { sk: "Premium", en: "Premium", cz: "Premium" },
  "pro.badge":    { sk: "Odporúčame", en: "Recommended", cz: "Doporučujeme" },
  "pro.per":      { sk: "/ mesiac", en: "/ month", cz: "/ měsíc" },
  "pro.per.year": { sk: "/ rok", en: "/ year", cz: "/ rok" },
  "pro.toggle.month": { sk: "Mesačne", en: "Monthly", cz: "Měsíčně" },
  "pro.toggle.year":  { sk: "Ročne", en: "Yearly", cz: "Ročně" },
  "pro.save":     { sk: "−48 %", en: "−48%", cz: "−48 %" },
  "pro.trial.month": { sk: "Skúšobná doba 1 týždeň", en: "1-week trial", cz: "Zkušební období 1 týden" },
  "pro.trial.year":  { sk: "Skúšobná doba 2 týždne", en: "2-week trial", cz: "Zkušební období 2 týdny" },
  "pro.sub":      { sk: "Plný výkon Subten vrátane AI trénera.", en: "The full power of Subten, including the AI coach.", cz: "Plný výkon Subtenu včetně AI trenéra." },
  "pro.f1":       { sk: "Všetko z Free", en: "Everything in Free", cz: "Vše z Free" },
  "pro.f2":       { sk: "AI tréner", en: "AI coach", cz: "AI trenér" },
  "pro.f3":       { sk: "Sken jedla z fotky", en: "Photo food scan", cz: "Sken jídla z fotky" },
  "pro.f4":       { sk: "Programy do posilňovne", en: "Gym programmes", cz: "Programy do posilovny" },
  "pro.f5":       { sk: "Plány pre 8 športov", en: "Plans for 8 sports", cz: "Plány pro 8 sportů" },
  "pro.f6":       { sk: "AI jedálničky a nákupný zoznam", en: "AI meal plans & shopping list", cz: "AI jídelníčky a nákupní seznam" },
  "pro.cta":      { sk: "Premium čoskoro", en: "Premium coming soon", cz: "Premium brzy" },

  /* generator */
  "gen.kicker":     { sk: "Tréningový generátor", en: "Training generator", cz: "Tréninkový generátor" },
  "gen.title":      { sk: "Tvoj plán na mieru<br>za 30 sekúnd", en: "Your custom plan<br>in 30 seconds", cz: "Tvůj plán na míru<br>za 30 sekund" },
  "gen.lede":       { sk: "Vyber cieľ, úroveň a počet dní. Subten ti vygeneruje kompletný rozpis s ukážkami cvikov — a QR kódom na import do appky.", en: "Pick your goal, level and training days. Subten generates a full plan with exercise demos — and a QR code to import into the app.", cz: "Vyber cíl, úroveň a počet dní. Subten ti vygeneruje kompletní rozpis s ukázkami cviků — a QR kódem pro import do aplikace." },
  "gen.s1.label":   { sk: "Krok 1 zo 4", en: "Step 1 of 4", cz: "Krok 1 ze 4" },
  "gen.s1.q":       { sk: "Aký je tvoj hlavný cieľ?", en: "What's your main goal?", cz: "Jaký je tvůj hlavní cíl?" },
  "gen.s2.label":   { sk: "Krok 2 zo 4", en: "Step 2 of 4", cz: "Krok 2 ze 4" },
  "gen.s2.q":       { sk: "Aká je tvoja skúsenostná úroveň?", en: "What's your experience level?", cz: "Jaká je tvoje zkušenostní úroveň?" },
  "gen.s3.label":   { sk: "Krok 3 zo 4", en: "Step 3 of 4", cz: "Krok 3 ze 4" },
  "gen.s3.q":       { sk: "Koľko dní týždenne chceš trénovať?", en: "How many days per week?", cz: "Kolik dní v týdnu chceš trénovat?" },
  "gen.s4.label":   { sk: "Krok 4 zo 4", en: "Step 4 of 4", cz: "Krok 4 ze 4" },
  "gen.s4.q":       { sk: "Aký typ rozpisu preferuješ?", en: "Which split do you prefer?", cz: "Jaký typ rozpisu preferuješ?" },
  "gen.next":       { sk: "Ďalej", en: "Next", cz: "Dál" },
  "gen.back":       { sk: "Späť", en: "Back", cz: "Zpět" },
  "gen.generate":   { sk: "Vygenerovať plán", en: "Generate plan", cz: "Vygenerovat plán" },
  "gen.goal.muscle":   { sk: "Naberanie svalov", en: "Muscle gain", cz: "Nabírání svalů" },
  "gen.goal.muscle.d": { sk: "Hypertrofia, silový rast a progresívne preťaženie.", en: "Hypertrophy, strength gains and progressive overload.", cz: "Hypertrofie, silový růst a progresivní přetížení." },
  "gen.goal.maintain":   { sk: "Údržba", en: "Maintenance", cz: "Údržba" },
  "gen.goal.maintain.d": { sk: "Udržať kondíciu, zdravie a aktuálnu postavu.", en: "Keep your fitness, health and current physique.", cz: "Udržet kondici, zdraví a aktuální postavu." },
  "gen.goal.sport":   { sk: "Športový výkon", en: "Sport performance", cz: "Sportovní výkon" },
  "gen.goal.sport.d": { sk: "Sila, rýchlosť a výbušnosť pre tvoj šport.", en: "Strength, speed and explosiveness for your sport.", cz: "Síla, rychlost a výbušnost pro tvůj sport." },
  "gen.lvl.beg":   { sk: "Začiatočník", en: "Beginner", cz: "Začátečník" },
  "gen.lvl.beg.d": { sk: "Menej ako 6 mesiacov tréningu.", en: "Less than 6 months of training.", cz: "Méně než 6 měsíců tréninku." },
  "gen.lvl.int":   { sk: "Pokročilý", en: "Intermediate", cz: "Pokročilý" },
  "gen.lvl.int.d": { sk: "6 mesiacov až 3 roky skúseností.", en: "6 months to 3 years of experience.", cz: "6 měsíců až 3 roky zkušeností." },
  "gen.lvl.adv":   { sk: "Expert", en: "Advanced", cz: "Expert" },
  "gen.lvl.adv.d": { sk: "Viac ako 3 roky pravidelného tréningu.", en: "Over 3 years of consistent training.", cz: "Více než 3 roky pravidelného tréninku." },
  "gen.plan.title": { sk: "Tvoj tréningový plán", en: "Your training plan", cz: "Tvůj tréninkový plán" },
  "gen.qr.title":   { sk: "Importuj do Subten appky", en: "Import into Subten app", cz: "Importuj do Subten aplikace" },
  "gen.qr.desc":    { sk: "Naskenuj QR kód v appke Subten a celý plán sa ti automaticky načíta — s ukážkami cvikov a časovačom.", en: "Scan the QR code in the Subten app and the entire plan loads automatically — with exercise demos and rest timer.", cz: "Naskenuj QR kód v aplikaci Subten a celý plán se ti automaticky načte — s ukázkami cviků a časovačem." },
  "gen.qr.copy":    { sk: "Kopírovať plán", en: "Copy plan", cz: "Kopírovat plán" },
  "gen.qr.download":{ sk: "Stiahnuť QR", en: "Download QR", cz: "Stáhnout QR" },
  "gen.qr.hint":    { sk: "V appke Subten choď do Tréning → Importovať → Skenovať QR", en: "In Subten app go to Training → Import → Scan QR", cz: "V aplikaci Subten jdi do Trénink → Importovat → Skenovat QR" },
  "gen.cta.title":  { sk: "Chceš plný zážitok?", en: "Want the full experience?", cz: "Chceš plný zážitek?" },
  "gen.cta.desc":   { sk: "V appke Subten dostaneš jasné vedenie cvik po cviku, GIF animácie, časovač odpočinku a automatické prispôsobenie podľa regenerácie.", en: "In the Subten app you get step-by-step guidance, GIF animations, rest timer and automatic adjustments based on your recovery.", cz: "V aplikaci Subten dostaneš jasné vedení cvik po cviku, GIF animace, časovač odpočinku a automatické přizpůsobení podle regenerace." },
  "rec.cta.btn":    { sk: "Čoskoro v App Store", en: "Coming soon to the App Store", cz: "Brzy v App Storu" },
  "gen.cta.btn":    { sk: "Čoskoro v App Store", en: "Coming soon to the App Store", cz: "Brzy v App Storu" },
  "gen.restart":    { sk: "Vygenerovať nový plán", en: "Generate new plan", cz: "Vygenerovat nový plán" },

  /* generator — coming soon */
  "gen.cs.badge": { sk: "Čoskoro", en: "Coming soon", cz: "Již brzy" },
  "gen.cs.title": { sk: "Generátor čoskoro spustíme", en: "The generator is coming soon", cz: "Generátor brzy spustíme" },
  "gen.cs.text":  {
    sk: "Pracujeme na generátore tréningových plánov na mieru — vyberieš si cieľ, úroveň a počet dní a dostaneš kompletný rozpis s ukážkami cvikov. Medzitým vyskúšaj našu kalkulačku.",
    en: "We're building a custom training-plan generator — pick your goal, level and training days and get a full plan with exercise demos. In the meantime, try our calculator.",
    cz: "Pracujeme na generátoru tréninkových plánů na míru — vybereš si cíl, úroveň a počet dní a dostaneš kompletní rozpis s ukázkami cviků. Mezitím vyzkoušej naši kalkulačku."
  },
  "gen.cs.cta":   { sk: "Vyskúšať kalkulačku", en: "Try the calculator", cz: "Vyzkoušet kalkulačku" },

  /* faq */
  "faq.kicker": { sk: "FAQ", en: "FAQ", cz: "FAQ" },
  "faq.title":  { sk: "Časté otázky", en: "Frequently asked", cz: "Časté otázky" },
  "faq.q1": { sk: "Funguje Subten s Apple Watch?", en: "Does Subten work with Apple Watch?", cz: "Funguje Subten s Apple Watch?" },
  "faq.a1": { sk: "Áno. Subten má aplikáciu pre Apple Watch — prehľad dňa, voda a komplikácie na ciferníku — a cez Apple Health načíta HRV, pokojový tep, spánok, SpO₂ aj kroky.", en: "Yes. Subten has an Apple Watch app — a daily overview, water tracking and watch-face complications — and reads HRV, resting heart rate, sleep, SpO₂ and steps through Apple Health.", cz: "Ano. Subten má aplikaci pro Apple Watch — přehled dne, vodu a komplikace na ciferníku — a přes Apple Health načte HRV, klidový tep, spánek, SpO₂ i kroky." },
  "faq.q2": { sk: "V akých jazykoch je appka?", en: "Which languages does the app support?", cz: "V jakých jazycích je aplikace?" },
  "faq.a2": { sk: "Appka je v 6 jazykoch: slovenčine, češtine, angličtine, nemčine, poľštine a maďarčine. Cviky, jedlá a recepty zatiaľ máme v slovenčine, češtine a angličtine.", en: "The app is available in 6 languages: Slovak, Czech, English, German, Polish and Hungarian. Exercises, foods and recipes are in Slovak, Czech and English for now.", cz: "Aplikace je v 6 jazycích: slovenštině, češtině, angličtině, němčině, polštině a maďarštině. Cviky, jídla a recepty zatím nabízíme ve slovenštině, češtině a angličtině." },
  "faq.q3": { sk: "Potrebujem Premium, aby to malo zmysel?", en: "Do I need Premium for it to be useful?", cz: "Potřebuji Premium, aby to mělo smysl?" },
  "faq.a3": { sk: "Nie. Zápis jedla a makier, čiarový kód, vlastný tréningový plán, história, denné skóre regenerácie, export dát aj Apple Watch sú zadarmo. Premium pridáva AI trénera, sken jedla z fotky, programy do posilňovne, plány pre 8 športov a AI jedálničky s nákupným zoznamom.", en: "No. Food and macro logging, barcode scanning, your own training plan, history, the daily recovery score, data export and Apple Watch are free. Premium adds the AI coach, photo food scan, gym programmes, plans for 8 sports and AI meal plans with a shopping list.", cz: "Ne. Zápis jídla a maker, čárový kód, vlastní tréninkový plán, historie, denní skóre regenerace, export dat i Apple Watch jsou zdarma. Premium přidává AI trenéra, sken jídla z fotky, programy do posilovny, plány pro 8 sportů a AI jídelníčky s nákupním seznamem." },
  "faq.q4": { sk: "Ako je to s mojimi dátami?", en: "What about my data?", cz: "Jak je to s mými daty?" },
  "faq.a4": { sk: "Tvoje dáta nepredávame a v appke nie sú reklamy ani sledovacie nástroje. Záznamy o jedle a tréningu ostávajú v tvojom telefóne a iCloude; na našom serveri v EÚ je len účet, predplatné a údaje o používaní. Funkcie AI (sken jedla z fotky, AI tréner) posielajú obsah cez službu OpenRouter do USA, a to len s tvojím výslovným súhlasom. Účet aj dáta môžeš kedykoľvek vymazať.", en: "We don't sell your data, and the app has no ads and no trackers. Your food and training records stay on your phone and in iCloud; our EU server holds only your account, subscription and usage data. AI features (photo food scan, AI coach) send content through OpenRouter to the USA, and only with your explicit consent. You can delete your account and data at any time.", cz: "Tvoje data neprodáváme a v aplikaci nejsou reklamy ani sledovací nástroje. Záznamy o jídle a tréninku zůstávají v tvém telefonu a iCloudu; na našem serveru v EU je jen účet, předplatné a údaje o používání. Funkce AI (sken jídla z fotky, AI trenér) posílají obsah přes službu OpenRouter do USA, a to jen s tvým výslovným souhlasem. Účet i data můžeš kdykoli smazat." },
  "faq.q5": { sk: "Nahrádza AI tréner lekára alebo trénera?", en: "Does the AI coach replace a doctor or trainer?", cz: "Nahrazuje AI trenér lékaře nebo trenéra?" },
  "faq.a5": { sk: "Nie. AI tréner je pomocník pri rozhodovaní, nie zdravotná služba. Pri zdravotných ťažkostiach sa obráť na odborníka.", en: "No. The AI coach helps you make decisions — it's not a medical service. For health issues, see a professional.", cz: "Ne. AI trenér je pomocník při rozhodování, ne zdravotní služba. Při zdravotních potížích se obrať na odborníka." },

  /* final cta */
  "cta.soon": { sk: "Pre iPhone a Apple Watch", en: "For iPhone and Apple Watch", cz: "Pro iPhone a Apple Watch" },
  "cta.title": { sk: "Čoskoro v App Store", en: "Coming soon to the App Store", cz: "Brzy v App Storu" },
  "cta.lede":  { sk: "Subten ešte nie je dostupný na stiahnutie.", en: "Subten is not available to download yet.", cz: "Subten zatím není ke stažení." },

  /* footer */
  "footer.tagline": { sk: "Tréning, výživa a regenerácia v jednej appke. Tvoj AI tréner vždy po ruke.", en: "Training, nutrition and recovery in one app. Your AI coach, always with you.", cz: "Trénink, výživa a regenerace v jedné aplikaci. Tvůj AI trenér vždy po ruce." },
  "footer.product": { sk: "Produkt", en: "Product", cz: "Produkt" },
  "footer.legal":   { sk: "Právne", en: "Legal", cz: "Právní" },
  "footer.contact": { sk: "Kontakt", en: "Contact", cz: "Kontakt" },
  "footer.privacy": { sk: "Ochrana súkromia", en: "Privacy Policy", cz: "Ochrana soukromí" },
  "footer.terms":   { sk: "Podmienky používania", en: "Terms of Service", cz: "Podmínky používání" },
  "footer.delete":  { sk: "Vymazanie účtu", en: "Delete account", cz: "Smazání účtu" },
  "footer.support": { sk: "Podpora", en: "Support", cz: "Podpora" },
  "footer.manual":  { sk: "Príručka", en: "User manual", cz: "Příručka" },
  "footer.email":   { sk: "Napíš nám", en: "Email us", cz: "Napiš nám" },
  "footer.rights":  { sk: "© 2026 Syenit, s.&nbsp;r.&nbsp;o. · 18+, nie je zdravotnícka pomôcka, hodnoty sú odhady", en: "© 2026 Syenit, s.&nbsp;r.&nbsp;o. · 18+, not a medical device, values are estimates", cz: "© 2026 Syenit, s.&nbsp;r.&nbsp;o. · 18+, není zdravotnický prostředek, hodnoty jsou odhady" },
  "footer.made":    { sk: "Vytvorené na Slovensku 🇸🇰", en: "Made in Slovakia 🇸🇰", cz: "Vytvořeno na Slovensku 🇸🇰" },

  /* ── calculator ── */
  "calc.kicker":  { sk: "Nutričná kalkulačka zadarmo", en: "Free nutrition calculator", cz: "Nutriční kalkulačka zdarma" },
  "calc.h1":      { sk: "Nutričná kalkulačka — BMR, TDEE a&nbsp;makrá", en: "Free nutrition calculator — BMR, TDEE &amp; macros", cz: "Nutriční kalkulačka — BMR, TDEE a&nbsp;makra" },
  "calc.lede":    {
    sk: "Rovnaké vzorce, aké poháňajú Subten: BMR, TDEE, denný kalorický cieľ, makrá s carb cyclingom, hydratácia a skóre regenerácie. Všetko počíta tvoj prehliadač naživo — nič sa nikam neposiela.",
    en: "The same formulas that power Subten: BMR, TDEE, daily calorie target, macros with carb cycling, hydration and recovery scores. Everything is computed live in your browser — nothing is sent anywhere.", cz: "Stejné vzorce, jaké pohánějí Subten: BMR, TDEE, denní kalorický cíl, makra s carb cyclingem, hydratace a skóre regenerace. Vše počítá tvůj prohlížeč naživo — nic se nikam neposílá."
  },
  "calc.inputs.title": { sk: "Tvoje údaje", en: "Your details", cz: "Tvoje údaje" },
  "calc.out.title":    { sk: "Tvoje čísla", en: "Your numbers", cz: "Tvoje čísla" },

  "calc.sex":        { sk: "Pohlavie", en: "Sex", cz: "Pohlaví" },
  "calc.sex.male":   { sk: "Muž", en: "Male", cz: "Muž" },
  "calc.sex.female": { sk: "Žena", en: "Female", cz: "Žena" },
  "calc.sex.other":  { sk: "Iné", en: "Other", cz: "Jiné" },
  "calc.age":        { sk: "Vek", en: "Age", cz: "Věk" },
  "calc.height":     { sk: "Výška (cm)", en: "Height (cm)", cz: "Výška (cm)" },
  "calc.weight":     { sk: "Váha (kg)", en: "Weight (kg)", cz: "Váha (kg)" },

  "calc.activity":         { sk: "Úroveň aktivity", en: "Activity level", cz: "Úroveň aktivity" },
  "calc.act.sedentary":    { sk: "Sedavá (málo pohybu)", en: "Sedentary (little exercise)", cz: "Sedavá (málo pohybu)" },
  "calc.act.light":        { sk: "Ľahká (1–3× týždenne)", en: "Light (1–3×/week)", cz: "Lehká (1–3× týdně)" },
  "calc.act.moderate":     { sk: "Stredná (3–5× týždenne)", en: "Moderate (3–5×/week)", cz: "Střední (3–5× týdně)" },
  "calc.act.active":       { sk: "Aktívna (6–7× týždenne)", en: "Active (6–7×/week)", cz: "Aktivní (6–7× týdně)" },
  "calc.act.veryactive":   { sk: "Veľmi aktívna (2× denne / fyzická práca)", en: "Very active (2×/day or physical job)", cz: "Velmi aktivní (2× denně / fyzická práce)" },
  "calc.act.hint":         { sk: "Subten je pri štarte konzervatívny a strop násobiča drží na 1,5× — týždenná adaptácia ho potom doladí podľa reálnych dát.", en: "Subten starts conservatively and caps the multiplier at 1.5× — weekly adaptation then fine-tunes it from your real data.", cz: "Subten je při startu konzervativní a strop násobiče drží na 1,5× — týdenní adaptace ho pak doladí podle reálných dat." },

  "calc.goal":          { sk: "Cieľ", en: "Goal", cz: "Cíl" },
  "calc.goal.fatloss":  { sk: "Deficit (−500 kcal)", en: "Calorie deficit (−500 kcal)", cz: "Deficit (−500 kcal)" },
  "calc.goal.maintain": { sk: "Udržanie", en: "Maintain", cz: "Udržení" },
  "calc.goal.gain":     { sk: "Naberanie (+300 kcal)", en: "Muscle gain (+300 kcal)", cz: "Nabírání (+300 kcal)" },
  "calc.goal.recomp":   { sk: "Rekompozícia (0 kcal)", en: "Recomp (0 kcal)", cz: "Rekompozice (0 kcal)" },

  "calc.bodyfat":      { sk: "% telesného tuku — voliteľné", en: "Body fat % — optional", cz: "% tělesného tuku — volitelné" },
  "calc.bodyfat.hint": { sk: "Pre výpočet čistej hmoty (lean mass).", en: "Used to estimate lean body mass.", cz: "Pro výpočet čisté hmoty (lean mass)." },

  "calc.week.title":  { sk: "Tréningový týždeň", en: "Training week", cz: "Tréninkový týden" },
  "calc.week.hint":   {
    sk: "Nastav typ záťaže pre každý deň — sacharidy sa rozložia podľa neho (carb cycling). Týždenný priemer ostáva rovný cieľu.",
    en: "Set the load type for each day — carbs are distributed accordingly (carb cycling). The weekly average stays equal to the target.", cz: "Nastav typ zátěže pro každý den — sacharidy se rozloží podle něj (carb cycling). Týdenní průměr zůstává roven cíli."
  },
  "calc.week.legend": { sk: "Oddych ×1,0 · Sila ×1,6 · Kardio ×2,4 · Šport/dlhý ×3,5", en: "Rest ×1.0 · Strength ×1.6 · Cardio ×2.4 · Sport/long ×3.5", cz: "Odpočinek ×1,0 · Síla ×1,6 · Kardio ×2,4 · Sport/dlouhý ×3,5" },

  "calc.type.rest":     { sk: "Oddych", en: "Rest", cz: "Odpočinek" },
  "calc.type.strength": { sk: "Sila", en: "Strength", cz: "Síla" },
  "calc.type.cardio":   { sk: "Kardio", en: "Cardio", cz: "Kardio" },
  "calc.type.sport":    { sk: "Šport", en: "Sport", cz: "Sport" },

  "calc.dayshort.mon": { sk: "Po", en: "Mon", cz: "Po" },
  "calc.dayshort.tue": { sk: "Ut", en: "Tue", cz: "Út" },
  "calc.dayshort.wed": { sk: "St", en: "Wed", cz: "St" },
  "calc.dayshort.thu": { sk: "Št", en: "Thu", cz: "Čt" },
  "calc.dayshort.fri": { sk: "Pi", en: "Fri", cz: "Pá" },
  "calc.dayshort.sat": { sk: "So", en: "Sat", cz: "So" },
  "calc.dayshort.sun": { sk: "Ne", en: "Sun", cz: "Ne" },
  "calc.day.mon": { sk: "Pondelok", en: "Monday", cz: "Pondělí" },
  "calc.day.tue": { sk: "Utorok", en: "Tuesday", cz: "Úterý" },
  "calc.day.wed": { sk: "Streda", en: "Wednesday", cz: "Středa" },
  "calc.day.thu": { sk: "Štvrtok", en: "Thursday", cz: "Čtvrtek" },
  "calc.day.fri": { sk: "Piatok", en: "Friday", cz: "Pátek" },
  "calc.day.sat": { sk: "Sobota", en: "Saturday", cz: "Sobota" },
  "calc.day.sun": { sk: "Nedeľa", en: "Sunday", cz: "Neděle" },

  "calc.wear.title":   { sk: "Dáta z hodiniek — voliteľné", en: "Watch data — optional", cz: "Data z hodinek — volitelné" },
  "calc.wear.note":    {
    sk: "Tieto skóre v appke počítajú dáta z Apple Watch / Apple Health. Tu si ich môžeš odsimulovať ručným zadaním.",
    en: "In the app these scores come from Apple Watch / Apple Health. Here you can simulate them by entering values manually.", cz: "Tato skóre v aplikaci počítají data z Apple Watch / Apple Health. Tady si je můžeš odsimulovat ručním zadáním."
  },
  "calc.wear.hrv":     { sk: "HRV (ms, SDNN)", en: "HRV (ms, SDNN)", cz: "HRV (ms, SDNN)" },
  "calc.wear.rhr":     { sk: "Pokojový tep (bpm)", en: "Resting HR (bpm)", cz: "Klidový tep (bpm)" },
  "calc.wear.sleep":   { sk: "Spánok (hodiny)", en: "Sleep (hours)", cz: "Spánek (hodiny)" },
  "calc.wear.heavy":   { sk: "Včera ťažký tréning?", en: "Heavy workout yesterday?", cz: "Včera těžký trénink?" },
  "calc.wear.strain":  { sk: "Pre strain skóre", en: "For strain score", cz: "Pro strain skóre" },
  "calc.wear.active":  { sk: "Aktívne kcal", en: "Active kcal", cz: "Aktivní kcal" },
  "calc.wear.workout": { sk: "Tréning (min)", en: "Workout (min)", cz: "Trénink (min)" },
  "calc.wear.steps":   { sk: "Kroky", en: "Steps", cz: "Kroky" },
  "calc.wear.sleepq":  { sk: "Pre sleep skóre", en: "For sleep score", cz: "Pro sleep skóre" },
  "calc.wear.deep":    { sk: "Hlboký spánok %", en: "Deep sleep %", cz: "Hluboký spánek %" },
  "calc.wear.rem":     { sk: "REM %", en: "REM %", cz: "REM %" },
  "calc.wear.eff":     { sk: "Efektivita %", en: "Efficiency %", cz: "Efektivita %" },
  "calc.wear.spo2":    { sk: "SpO₂ %", en: "SpO₂ %", cz: "SpO₂ %" },
  "calc.no":           { sk: "Nie", en: "No", cz: "Ne" },
  "calc.yes":          { sk: "Áno", en: "Yes", cz: "Ano" },

  "calc.bmr":     { sk: "BMR", en: "BMR", cz: "BMR" },
  "calc.bmr.sub": { sk: "Bazálny metabolizmus (Mifflin-St Jeor)", en: "Basal metabolic rate (Mifflin-St Jeor)", cz: "Bazální metabolismus (Mifflin-St Jeor)" },
  "calc.tdee":    { sk: "TDEE", en: "TDEE", cz: "TDEE" },
  "calc.tdee.sub":    { sk: "Celkový denný výdaj (konzervatívny štart)", en: "Total daily energy (conservative start)", cz: "Celkový denní výdej (konzervativní start)" },
  "calc.tdee.capped": { sk: "Násobič obmedzený na 1,5× (konzervatívny štart)", en: "Multiplier capped at 1.5× (conservative start)", cz: "Násobič omezen na 1,5× (konzervativní start)" },
  "calc.target":     { sk: "Denný cieľ", en: "Daily target", cz: "Denní cíl" },
  "calc.target.sub": { sk: "Kalorický cieľ pre tvoj cieľ", en: "Calorie target for your goal", cz: "Kalorický cíl pro tvůj cíl" },
  "calc.target.guard": { sk: "BMI < 18,5 — pri podváhe rušíme deficit (udržanie)", en: "BMI < 18.5 — deficit disabled for underweight (maintain)", cz: "BMI < 18,5 — při podváze rušíme deficit (udržení)" },

  "calc.bmi":        { sk: "BMI", en: "BMI", cz: "BMI" },
  "calc.bmi.under":  { sk: "Podváha", en: "Underweight", cz: "Podváha" },
  "calc.bmi.normal": { sk: "Norma", en: "Normal", cz: "Norma" },
  "calc.bmi.over":   { sk: "Nadváha", en: "Overweight", cz: "Nadváha" },
  "calc.bmi.obese":  { sk: "Obezita", en: "Obese", cz: "Obezita" },

  "calc.hydration":     { sk: "Hydratácia", en: "Hydration", cz: "Hydratace" },
  "calc.hydration.sub": { sk: "35 ml na kg hmotnosti", en: "35 ml per kg of body weight", cz: "35 ml na kg hmotnosti" },
  "calc.leanmass":      { sk: "Čistá hmota", en: "Lean mass", cz: "Čistá hmota" },
  "calc.leanmass.sub":  { sk: "Hmotnosť bez tuku", en: "Fat-free mass", cz: "Hmotnost bez tuku" },

  "calc.macros.title": { sk: "Makrá", en: "Macros", cz: "Makra" },
  "calc.macros.sub":   {
    sk: "Bielkoviny a tuky držíme stabilné; sacharidy sa menia podľa záťaže dňa (carb cycling). Hodnoty nižšie sú denný základ.",
    en: "Protein and fat stay steady; carbs shift with each day's load (carb cycling). The numbers below are the daily baseline.", cz: "Bílkoviny a tuky držíme stabilní; sacharidy se mění podle zátěže dne (carb cycling). Hodnoty níže jsou denní základ."
  },
  "calc.macros.base": { sk: "Základ", en: "Baseline", cz: "Základ" },
  "calc.protein": { sk: "Bielkoviny", en: "Protein", cz: "Bílkoviny" },
  "calc.carbs":   { sk: "Sacharidy", en: "Carbs", cz: "Sacharidy" },
  "calc.fat":     { sk: "Tuky", en: "Fat", cz: "Tuky" },
  "calc.fiber":   { sk: "Vláknina", en: "Fiber", cz: "Vláknina" },

  "calc.cycle.title": { sk: "Carb cycling — týždeň", en: "Carb cycling — the week", cz: "Carb cycling — týden" },
  "calc.cycle.sub":   {
    sk: "Sacharidy sa prerozdelia podľa typu dňa. Týždenný priemer sa rovná cieľu — nič sa nepridáva navyše.",
    en: "Carbs are redistributed by day type. The weekly average equals the target — nothing is added on top.", cz: "Sacharidy se přerozdělí podle typu dne. Týdenní průměr se rovná cíli — nic se nepřidává navíc."
  },
  "calc.cycle.day":  { sk: "Deň", en: "Day", cz: "Den" },
  "calc.cycle.type": { sk: "Typ", en: "Type", cz: "Typ" },
  "calc.cycle.kcal": { sk: "Kalórie dňa", en: "Day calories", cz: "Kalorie dne" },
  "calc.cycle.avg":  { sk: "Týždenný priemer sacharidov", en: "Weekly average carbs", cz: "Týdenní průměr sacharidů" },
  "calc.decimal":    { sk: ",", en: ".", cz: "," },

  "calc.scores.title": { sk: "Skóre regenerácie", en: "Recovery scores", cz: "Skóre regenerace" },
  "calc.scores.sub":   { sk: "Orientačné skóre z dát hodiniek. V appke sa počítajú automaticky z Apple Health.", en: "Indicative scores from watch data. In the app they are computed automatically from Apple Health.", cz: "Orientační skóre z dat hodinek. V aplikaci se počítají automaticky z Apple Health." },
  "calc.scores.hint":  { sk: "<b>Tip:</b> Vyplň <b>Dáta z hodiniek</b> vľavo a doplníme aj orientačné Recovery, Sleep a Strain skóre, aké appka ukazuje z Apple Watch.", en: "<b>Tip:</b> Fill in <b>Watch data</b> on the left and we'll add indicative Recovery, Sleep and Strain scores too, like the app shows from Apple Watch.", cz: "<b>Tip:</b> Vyplň <b>Data z hodinek</b> vlevo a doplníme i orientační Recovery, Sleep a Strain skóre, jaká aplikace ukazuje z Apple Watch." },
  "calc.recovery": { sk: "Recovery", en: "Recovery", cz: "Recovery" },
  "calc.sleep":    { sk: "Sleep score", en: "Sleep score", cz: "Sleep score" },
  "calc.strain":   { sk: "Strain", en: "Strain", cz: "Strain" },

  "calc.rec.ready":     { sk: "Pripravený", en: "Ready", cz: "Připraven" },
  "calc.rec.excellent": { sk: "Výborný", en: "Excellent", cz: "Výborný" },
  "calc.rec.good":      { sk: "Dobrý", en: "Good", cz: "Dobrý" },
  "calc.rec.moderate":  { sk: "Stredný", en: "Moderate", cz: "Střední" },
  "calc.rec.fair":      { sk: "Slabší", en: "Fair", cz: "Slabší" },
  "calc.rec.rest":      { sk: "Potrebuje oddych", en: "Needs rest", cz: "Potřebuje odpočinek" },

  "calc.slp.excellent": { sk: "Výborný", en: "Excellent", cz: "Výborný" },
  "calc.slp.good":      { sk: "Dobrý", en: "Good", cz: "Dobrý" },
  "calc.slp.fair":      { sk: "Priemerný", en: "Fair", cz: "Průměrný" },
  "calc.slp.poor":      { sk: "Slabý", en: "Poor", cz: "Slabý" },

  "calc.str.peak":   { sk: "Vrchol", en: "Peak", cz: "Vrchol" },
  "calc.str.high":   { sk: "Vysoký", en: "High", cz: "Vysoký" },
  "calc.str.medium": { sk: "Stredný", en: "Medium", cz: "Střední" },
  "calc.str.low":    { sk: "Nízky", en: "Low", cz: "Nízký" },
  "calc.str.rest":   { sk: "Oddych", en: "Rest", cz: "Odpočinek" },

  "calc.disclaimer": {
    sk: "Orientačný prepočet podľa verejne dokumentovaných vzorcov Subtenu. Nenahrádza lekársku ani odbornú výživovú radu. Appka cieľ priebežne adaptuje podľa reálnych dát (hmotnosť + príjem za 21 dní), čo táto jednorazová kalkulačka nerobí.",
    en: "An indicative calculation based on Subten's documented formulas. It does not replace medical or professional nutrition advice. The app continuously adapts your target from real data (weight + intake over 21 days), which this one-shot calculator does not do.", cz: "Orientační přepočet podle veřejně dokumentovaných vzorců Subtenu. Nenahrazuje lékařskou ani odbornou výživovou radu. Aplikace cíl průběžně adaptuje podle reálných dat (váha + příjem za 21 dní), což tato jednorázová kalkulačka nedělá."
  },

  /* ── calculator: SEO meta (localized <title> / description / OG) ── */
  "calc.meta.title": {
    sk: "Nutričná kalkulačka — BMR, TDEE, kalórie a makrá | Subten",
    en: "Nutrition Calculator — BMR, TDEE, Calories & Macros | Subten",
    cz: "Nutriční kalkulačka — BMR, TDEE, kalorie a makra | Subten"
  },
  "calc.meta.desc": { sk: "Bezplatná nutričná kalkulačka: vypočítaj si BMR, TDEE, denný kalorický cieľ a makrá (bielkoviny, sacharidy, tuky, vláknina) s carb cyclingom a hydratáciou. Overené vzorce, hotovo za pár sekúnd, bez registrácie.", en: "Free nutrition calculator: work out your BMR, TDEE, daily calorie target and macros (protein, carbs, fat, fiber) with carb cycling and hydration. Verified formulas, done in seconds, no signup.", cz: "Bezplatná nutriční kalkulačka: spočítej si BMR, TDEE, denní kalorický cíl a makra (bílkoviny, sacharidy, tuky, vláknina) s carb cyclingem a hydratací. Ověřené vzorce, hotovo za pár sekund, bez registrace." },

  /* ── calculator: SEO content + FAQ ── */
  "calc.seo.kicker": { sk: "Ako to počítame", en: "How it works", cz: "Jak to počítáme" },
  "calc.seo.h2": {
    sk: "BMR, TDEE a makro kalkulačka — ako funguje",
    en: "BMR, TDEE & macro calculator — how it works",
    cz: "BMR, TDEE a makro kalkulačka — jak funguje"
  },
  "calc.seo.intro": {
    sk: "Táto bezplatná nutričná kalkulačka premení tvoj vek, výšku, váhu, úroveň aktivity a cieľ na kompletný denný plán — BMR, TDEE, kalorický cieľ a makrá — pomocou rovnakých overených vzorcov ako appka Subten.",
    en: "This free nutrition calculator turns your age, height, weight, activity level and goal into a complete daily plan — BMR, TDEE, calorie target and macros — using the same evidence-based formulas as the Subten app.",
    cz: "Tato bezplatná nutriční kalkulačka promění tvůj věk, výšku, váhu, úroveň aktivity a cíl v kompletní denní plán — BMR, TDEE, kalorický cíl a makra — pomocí stejných ověřených vzorců jako aplikace Subten."
  },
  "calc.faq.title": { sk: "Časté otázky o kalkulačke", en: "Calculator FAQ", cz: "Časté otázky o kalkulačce" },

  "calc.faq.q1": { sk: "Čo je BMR (bazálny metabolizmus)?", en: "What is BMR (basal metabolic rate)?", cz: "Co je BMR (bazální metabolismus)?" },
  "calc.faq.a1": {
    sk: "BMR je energia, ktorú telo spáli v úplnom pokoji na základné životné funkcie. Subten používa rovnicu Mifflin-St Jeor: 10×váha(kg) + 6,25×výška(cm) − 5×vek + konštanta podľa pohlavia.",
    en: "BMR is the energy your body burns at complete rest to keep basic functions running. Subten uses the Mifflin-St Jeor equation: 10×weight(kg) + 6.25×height(cm) − 5×age + a sex constant.",
    cz: "BMR je energie, kterou tělo spálí v úplném klidu na základní životní funkce. Subten používá rovnici Mifflin-St Jeor: 10×váha(kg) + 6,25×výška(cm) − 5×věk + konstanta podle pohlaví."
  },
  "calc.faq.q2": { sk: "Aký je rozdiel medzi BMR a TDEE?", en: "What's the difference between BMR and TDEE?", cz: "Jaký je rozdíl mezi BMR a TDEE?" },
  "calc.faq.a2": {
    sk: "TDEE (celkový denný energetický výdaj) je BMR vynásobené koeficientom aktivity — kalórie, ktoré reálne spáliš za deň. Kalorický cieľ sa potom odvíja od TDEE podľa toho, či chceš byť v deficite, udržiavať alebo naberať.",
    en: "TDEE (total daily energy expenditure) is your BMR multiplied by an activity factor — the calories you actually burn in a day. Your calorie target is then built on top of TDEE depending on whether you want a calorie deficit, maintenance or a surplus.",
    cz: "TDEE (celkový denní energetický výdej) je BMR vynásobené koeficientem aktivity — kalorie, které reálně spálíš za den. Kalorický cíl se pak odvíjí od TDEE podle toho, zda chceš být v deficitu, udržovat nebo nabírat."
  },
  "calc.faq.q3": { sk: "Ako si vypočítam makrá?", en: "How do I calculate my macros?", cz: "Jak si spočítám makra?" },
  "calc.faq.a3": {
    sk: "Začni bielkovinami (1,6–2,2 g na kg hmotnosti), tuky nastav aspoň na 0,6 g/kg alebo 20 % kalórií a zvyšok doplň sacharidmi. Subten pridáva aj vlákninu 14 g na 1000 kcal.",
    en: "Start with protein (1.6–2.2 g per kg of body weight), set fat to at least 0.6 g/kg or 20% of calories, and fill the rest with carbs. Subten also adds fiber at 14 g per 1000 kcal.",
    cz: "Začni bílkovinami (1,6–2,2 g na kg hmotnosti), tuky nastav alespoň na 0,6 g/kg nebo 20 % kalorií a zbytek doplň sacharidy. Subten přidává i vlákninu 14 g na 1000 kcal."
  },
  "calc.faq.q4": { sk: "Čo je carb cycling?", en: "What is carb cycling?", cz: "Co je carb cycling?" },
  "calc.faq.a4": {
    sk: "Carb cycling presúva sacharidy počas týždňa podľa záťaže — viac v ťažké dni, menej v dni voľna — pričom týždenný priemer ostáva rovný cieľu. Bielkoviny a tuky sú stabilné.",
    en: "Carb cycling shifts your carbs across the week by training load — more on hard days, fewer on rest days — while keeping the weekly average equal to your target. Protein and fat stay steady.",
    cz: "Carb cycling přesouvá sacharidy během týdne podle zátěže — víc v těžké dny, méně ve dny volna — přičemž týdenní průměr zůstává roven cíli. Bílkoviny a tuky jsou stabilní."
  },
  "calc.faq.q5": { sk: "Je táto kalorická kalkulačka zadarmo?", en: "Is this calorie calculator free?", cz: "Je tato kalorická kalkulačka zdarma?" },
  "calc.faq.a5": { sk: "Áno — kalkulačka je úplne zadarmo a beží celá v tvojom prehliadači; bez registrácie a zadané údaje nikam neodosielame. Na denné sledovanie a AI trénera vyskúšaj aplikáciu Subten.", en: "Yes — the calculator is completely free and runs entirely in your browser; no signup, and we don't send the values you enter anywhere. For daily tracking and an AI coach, try the Subten app.", cz: "Ano — kalkulačka je zcela zdarma a běží celá v tvém prohlížeči; bez registrace a zadané údaje nikam neodesíláme. Na denní sledování a AI trenéra vyzkoušej aplikaci Subten." },
  "nav.cta.live": { sk: "Stiahnuť", en: "Download", cz: "Stáhnout" },
  "coach.name": { sk: "AI tréner", en: "AI coach", cz: "AI trenér" },
  "free.f7": { sk: "Apple Watch a Apple Health", en: "Apple Watch & Apple Health", cz: "Apple Watch a Apple Health" },
  "free.f8": { sk: "AI tréner, sken z fotky a plány sú v Premium", en: "AI coach, photo scan and plans are in Premium", cz: "AI trenér, sken z fotky a plány jsou v Premium" },
  "free.cta.live": { sk: "Stiahnuť v App Store", en: "Download on the App Store", cz: "Stáhnout v App Storu" },
  "pro.cta.live": { sk: "Stiahnuť a vyskúšať Premium", en: "Download and try Premium", cz: "Stáhnout a vyzkoušet Premium" },
  "price.byok": { sk: "Máš vlastný kľúč od OpenRoutera? <strong>BYOK</strong> je jednorazový nákup za 3,99&nbsp;€ (nie predplatné) — AI funkcie potom bežia cez tvoj kľúč a náklady na AI ti účtuje OpenRouter.", en: "Have your own OpenRouter key? <strong>BYOK</strong> is a one-time purchase of €3.99 (not a subscription) — AI features then run through your key, and OpenRouter bills you for the AI usage.", cz: "Máš vlastní klíč od OpenRouteru? <strong>BYOK</strong> je jednorázový nákup za 3,99&nbsp;€ (ne předplatné) — AI funkce pak běží přes tvůj klíč a náklady na AI ti účtuje OpenRouter." },
  "cta.title.live": { sk: "Subten je v App Store", en: "Subten is on the App Store", cz: "Subten je v App Storu" },
  "cta.lede.live": { sk: "Stiahni si Subten pre iPhone a Apple Watch.", en: "Get Subten for iPhone and Apple Watch.", cz: "Stáhni si Subten pro iPhone a Apple Watch." },
  "cta.android": { sk: "Verzia pre Android sa pripravuje.", en: "The Android version is in the works.", cz: "Verze pro Android se připravuje." },
  "meta.title": { sk: "Subten — jedlo, tréning a regenerácia v jednej aplikácii", en: "Subten — food, training and recovery in one app", cz: "Subten — jídlo, trénink a regenerace v jedné aplikaci" },
  "meta.desc": { sk: "Subten spája výživu, tréning a regeneráciu v jednej prehľadnej aplikácii. Zápis jedla, AI odhad kalórií a makier, tréningové plány a denné skóre regenerácie.", en: "Subten brings nutrition, training and recovery together in one clean app. Log meals, get AI estimates of calories and macros, follow training plans and see your daily recovery score.", cz: "Subten spojuje výživu, trénink a regeneraci v jedné přehledné aplikaci. Zápis jídla, AI odhad kalorií a maker, tréninkové plány a denní skóre regenerace." },
  "meta.locale": { sk: "sk_SK", en: "en_US", cz: "cs_CZ" },
  "meta.ogimage": { sk: "https://subten-app.eu/assets/brand/og-sk.png", en: "https://subten-app.eu/assets/brand/og-en.png", cz: "https://subten-app.eu/assets/brand/og-cs.png" },
  "meta.ogalt": { sk: "Subten — jedlo, tréning a regenerácia v jednej aplikácii", en: "Subten — food, training and recovery in one app", cz: "Subten — jídlo, trénink a regenerace v jedné aplikaci" },
  "shot.today.alt": { sk: "Obrazovka Dnes v aplikácii Subten: zostávajúce kalórie a makrá", en: "Today screen in the Subten app: remaining calories and macros", cz: "Obrazovka Dnes v aplikaci Subten: zbývající kalorie a makra" },
  "shot.coach.alt": { sk: "AI tréner v aplikácii Subten", en: "AI coach in the Subten app", cz: "AI trenér v aplikaci Subten" },
  "shot.scan.alt": { sk: "Sken jedla z fotky: rozpoznané položky s odhadom AI", en: "Photo food scan: recognised items with AI estimates", cz: "Sken jídla z fotky: rozpoznané položky s odhadem AI" },
  "shot.training.alt": { sk: "Tréningový plán do posilňovne v aplikácii Subten", en: "Gym training plan in the Subten app", cz: "Tréninkový plán do posilovny v aplikaci Subten" },
  "shot.recovery.alt": { sk: "Denné hodnotenie: regenerácia, HRV, pokojový tep a spánok", en: "Daily review: recovery, HRV, resting heart rate and sleep", cz: "Denní hodnocení: regenerace, HRV, klidový tep a spánek" },
  "rec.kicker": { sk: "Knižnica receptov", en: "Recipe library", cz: "Knihovna receptů" },
  "rec.title": { sk: "Recepty s kalóriami a makrami", en: "Recipes with calories and macros", cz: "Recepty s kaloriemi a makry" },
  "rec.lede": { sk: "Každý recept má uvedené kalórie a makrá (hodnoty sú orientačné). Filtruj podľa kategórie, cieľa alebo kalorického rozpočtu a nájdi jedlo pre svoj plán.", en: "Every recipe lists its calories and macros (values are estimates). Filter by category, goal or calorie budget and find a meal for your plan.", cz: "Každý recept má uvedené kalorie a makra (hodnoty jsou orientační). Filtruj podle kategorie, cíle nebo kalorického rozpočtu a najdi jídlo pro svůj plán." },
  "rec.no.title": { sk: "Žiadne recepty", en: "No recipes found", cz: "Žádné recepty" },
  "rec.no.desc": { sk: "Skús inú kombináciu filtrov.", en: "Try a different combination of filters.", cz: "Zkus jinou kombinaci filtrů." },
  "rec.cta.title": { sk: "Recepty priamo v aplikácii", en: "Recipes right in the app", cz: "Recepty přímo v aplikaci" },
  "rec.cta.desc": { sk: "Jedlá si v Subten zapíšeš za pár sekúnd a vidíš, koľko ti do denného cieľa ešte chýba.", en: "Log meals in Subten in seconds and see how much is left to reach your daily goal.", cz: "Jídla si v Subten zapíšeš za pár sekund a vidíš, kolik ti do denního cíle ještě chybí." },
  "rec.cta.btn.live": { sk: "Stiahnuť v App Store", en: "Download on the App Store", cz: "Stáhnout v App Storu" },
  "gen.cta.btn.live": { sk: "Stiahnuť v App Store", en: "Download on the App Store", cz: "Stáhnout v App Storu" },
  "rec.meta.title": { sk: "Subten — recepty s kalóriami a makrami", en: "Subten — recipes with calories and macros", cz: "Subten — recepty s kaloriemi a makry" },
  "rec.meta.desc": { sk: "700 receptov s kalóriami a makrami, ingredienciami a postupom. Filtruj podľa kategórie, cieľa alebo kalorického rozpočtu. Hodnoty sú orientačné.", en: "700 recipes with calories and macros, ingredients and steps. Filter by category, goal or calorie budget. Values are estimates.", cz: "700 receptů s kaloriemi a makry, ingrediencemi a postupem. Filtruj podle kategorie, cíle nebo kalorického rozpočtu. Hodnoty jsou orientační." },
  "rec.search": { sk: "Hľadaj recept...", en: "Search recipe...", cz: "Hledej recept..." }
};

/* ---------- runtime (netreba upravovať) ---------- */
(function () {
  const DICT = window.SUBTEN_I18N;
  const LANGS = window.SUBTEN_LANGUAGES || [{ code: "sk", label: "SK" }, { code: "en", label: "EN" }];
  const CODES = LANGS.map(l => l.code);
  const FALLBACK = CODES.includes("en") ? "en" : CODES[0];
  const KEY = "subten-lang";

  const ALIAS = { cs: "cz" };        // ?lang=cs  ->  interný kód "cz"
  const HTML_LANG = { cz: "cs" };    // platný BCP-47 kód do <html lang>
  const norm = c => ALIAS[c] || c;
  const LIVE = !!(window.SUBTEN_RELEASE && window.SUBTEN_RELEASE.live);
  let explicitParam = false;

  function storedLang() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function initialLang() {
    // 1) ?lang=xx vyhráva (lokalizovaná URL pre vyhľadávače a hreflang; "cs" aj staré "cz")
    try {
      const q = norm(new URLSearchParams(location.search).get("lang"));
      if (q && CODES.includes(q)) { explicitParam = true; return q; }
    } catch (e) {}
    // 2) jazyk, ktorý si návštevník vybral sám
    const stored = norm(storedLang());
    if (CODES.includes(stored)) return stored;
    // 3) prvá návšteva: jazyk prehliadača (sk / cs), inak angličtina
    const prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (const p of prefs) {
      const base = String(p).toLowerCase().split("-")[0];
      if (base === "sk") return "sk";
      if (base === "cs" || base === "cz") return "cz";
      if (base === "en") return "en";
    }
    return FALLBACK;
  }

  // Po zapnutí predaja (SUBTEN_RELEASE.live) má kľúč "xyz.live" prednosť pred "xyz".
  function entryFor(key) {
    key = key && key.trim();
    if (LIVE && DICT[key + ".live"]) return DICT[key + ".live"];
    return DICT[key];
  }
  function valueOf(entry, lang) { return entry[lang] != null ? entry[lang] : entry[FALLBACK]; }

  // pevná medzera za jednopísmenovými predložkami/spojkami v nadpisoch (sk, cs)
  const ONE_LETTER = /(^|[\s(])([ksvzouaiKSVZOUAI])\s+(?=\S)/g;
  function tieHeadings(lang) {
    if (lang === "en") return;
    document.querySelectorAll("h1,h2,h3,h4,.display,.h2").forEach(h => {
      const w = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = w.nextNode())) {
        const t = n.nodeValue.replace(ONE_LETTER, "$1$2\u00A0").replace(ONE_LETTER, "$1$2\u00A0");
        if (t !== n.nodeValue) n.nodeValue = t;
      }
    });
  }

  // ---- dropdown switcher ----
  const GLOBE = '<svg class="lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>';
  const CHEV = '<svg class="lang-chev" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 1l5 5 5-5"/></svg>';
  const CHECK = '<svg class="lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';

  function closeMenu(t) { t.classList.remove("open"); const b = t.querySelector(".lang-btn"); if (b) b.setAttribute("aria-expanded", "false"); }
  function closeAllMenus() { document.querySelectorAll(".lang-toggle.open").forEach(closeMenu); }
  function openMenu(t) {
    closeAllMenus();
    t.classList.add("open");
    const b = t.querySelector(".lang-btn"); if (b) b.setAttribute("aria-expanded", "true");
    const sel = t.querySelector(".lang-menu button.active") || t.querySelector(".lang-menu button");
    if (sel) sel.focus();
  }
  function toggleMenu(t) { t.classList.contains("open") ? closeMenu(t) : openMenu(t); }

  let globalBound = false;
  function bindGlobalClose() {
    if (globalBound) return; globalBound = true;
    document.addEventListener("click", e => { if (!e.target.closest(".lang-toggle")) closeAllMenus(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeAllMenus(); });
  }

  // Build / refresh every .lang-toggle from the LANGUAGES config
  function buildToggles() {
    document.querySelectorAll(".lang-toggle").forEach(t => {
      if (t.dataset.built) return;
      t.dataset.built = "1";
      const opts = LANGS.map(l =>
        `<li role="none"><button type="button" role="option" data-lang="${l.code}" aria-selected="false">` +
        `<span class="lang-name">${l.name || l.label}</span>${CHECK}</button></li>`).join("");
      t.innerHTML =
        `<button type="button" class="lang-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Language">` +
        `${GLOBE}<span class="lang-cur">${LANGS[0].label}</span>${CHEV}</button>` +
        `<ul class="lang-menu" role="listbox" tabindex="-1">${opts}</ul>`;

      const btn = t.querySelector(".lang-btn");
      const menu = t.querySelector(".lang-menu");
      btn.addEventListener("click", e => { e.stopPropagation(); toggleMenu(t); });
      menu.querySelectorAll("button").forEach(b => {
        b.addEventListener("click", () => { (window.SubtenSetLang || apply)(b.dataset.lang); closeMenu(t); btn.focus(); });
      });
      menu.addEventListener("keydown", e => {
        const items = [...menu.querySelectorAll("button")];
        const i = items.indexOf(document.activeElement);
        if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
        else if (e.key === "Home") { e.preventDefault(); items[0].focus(); }
        else if (e.key === "End") { e.preventDefault(); items[items.length - 1].focus(); }
        else if (e.key === "Escape") { e.preventDefault(); closeMenu(t); btn.focus(); }
      });
    });
    bindGlobalClose();
  }

  function apply(lang, persist) {
    lang = norm(lang);
    if (!CODES.includes(lang)) lang = CODES[0];
    document.documentElement.lang = HTML_LANG[lang] || lang;
    const idx = CODES.indexOf(lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const entry = entryFor(el.getAttribute("data-i18n"));
      if (entry) { const v = valueOf(entry, lang); if (v != null) el.innerHTML = v; }
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.getAttribute("data-i18n-attr").split(";").forEach(pair => {
        const i = pair.indexOf(":");
        if (i < 0) return;
        const entry = entryFor(pair.slice(i + 1));
        if (entry) { const v = valueOf(entry, lang); if (v != null) el.setAttribute(pair.slice(0, i).trim(), v); }
      });
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const entry = entryFor(el.getAttribute("data-i18n-placeholder"));
      if (entry) { const v = valueOf(entry, lang); if (v != null) el.setAttribute("placeholder", v); }
    });
    // canonical: pri URL s ?lang= ukazuje sám na seba (platné pre hreflang)
    document.querySelectorAll('link[rel="canonical"][data-lang-canonical]').forEach(c => {
      const base = c.getAttribute("data-lang-canonical");
      c.setAttribute("href", explicitParam ? base + "?lang=" + (HTML_LANG[lang] || lang) : base);
    });
    // whole-block language switch (legal pages); fall back to first available block
    const blocks = document.querySelectorAll("[data-lang-block]");
    if (blocks.length) {
      const present = new Set([...blocks].map(b => b.getAttribute("data-lang-block")));
      const showCode = present.has(lang) ? lang : (present.has(FALLBACK) ? FALLBACK : [...present][0]);
      blocks.forEach(el => { el.style.display = el.getAttribute("data-lang-block") === showCode ? "" : "none"; });
    }
    tieHeadings(lang);
    // dropdown UI state: current label on the button + active/checked option
    const meta = LANGS[idx] || LANGS[0];
    document.querySelectorAll(".lang-toggle").forEach(t => {
      const cur = t.querySelector(".lang-cur");
      if (cur && meta) cur.textContent = meta.label;
      const btn = t.querySelector(".lang-btn");
      if (btn && meta) btn.setAttribute("aria-label", "Language: " + (meta.name || meta.label));
      t.querySelectorAll(".lang-menu button").forEach(b => {
        const on = b.dataset.lang === lang;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
    });
    // uloží sa len vedomá voľba návštevníka, nie automaticky zistený jazyk
    if (persist) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
    window.__subtenLang = lang;
    try { document.dispatchEvent(new CustomEvent("subten:lang", { detail: { lang } })); } catch (e) {}
  }

  window.SubtenSetLang = function (l) { apply(l, true); };
  function init() { buildToggles(); apply(initialLang()); }
  // Skripty sú na konci <body>, DOM je už hotový — prekladáme hneď (bez bliknutia slovenčiny).
  if (document.body) init();
  else document.addEventListener("DOMContentLoaded", init);
})();
