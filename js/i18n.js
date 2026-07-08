/* ============================================================
   SUBTEN — TEXTY A JAZYKY (lokalizácia)
   ============================================================

   AKO ZMENIŤ TEXT:
   Nájdi riadok s textom a prepíš ho medzi úvodzovkami "...".
   Každý text má verziu pre každý jazyk, napr.:
       "hero.cta1": { sk: "Stiahnuť zadarmo", en: "Download free", cz: "Stáhnout zdarma" },
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
  { code: "sk", label: "SK", name: "Slovenčina" },
  { code: "en", label: "EN", name: "English" },
  { code: "cz", label: "CZ", name: "Čeština" }
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
  "nav.coach":    { sk: "AI Coach", en: "AI Coach", cz: "AI Coach" },
  "nav.pricing":  { sk: "Cenník", en: "Pricing", cz: "Ceník" },
  "nav.faq":      { sk: "FAQ", en: "FAQ", cz: "FAQ" },
  "nav.generator":{ sk: "Generátor", en: "Generator", cz: "Generátor" },
  "nav.soon":     { sk: "čoskoro", en: "soon", cz: "brzy" },
  "nav.calculator":{ sk: "Kalkulačka", en: "Calculator", cz: "Kalkulačka" },
  "nav.recipes":  { sk: "Recepty", en: "Recipes", cz: "Recepty" },
  "nav.cta":      { sk: "Stiahnuť", en: "Get the app", cz: "Stáhnout" },

  /* hero */
  "hero.badge":   { sk: "Nové · AI tréner v reálnom čase", en: "New · Real-time AI coach", cz: "Nové · AI trenér v reálném čase" },
  "hero.title":   {
    sk: "Jedlo, tréning a&nbsp;<span class='text-grad'>regenerácia</span> v jednej appke.",
    en: "Food, training and&nbsp;<span class='text-grad'>recovery</span> in one app.", cz: "Jídlo, trénink a&nbsp;<span class='text-grad'>regenerace</span> v jedné appce."
  },
  "hero.lede":    {
    sk: "Subten spojí kalórie, makrá, tréningový plán a dáta z hodiniek — a tvoj AI tréner ti každý deň povie, čo robiť ďalej.",
    en: "Subten brings together calories, macros, your training plan and watch data — and your AI coach tells you exactly what to do next, every day.", cz: "Subten spojí kalorie, makra, tréninkový plán a data z hodinek — a tvůj AI trenér ti každý den řekne, co dělat dál."
  },
  "hero.cta1":    { sk: "Stiahnuť zadarmo", en: "Download free", cz: "Stáhnout zdarma" },
  "hero.cta2":    { sk: "Pozrieť funkcie", en: "See features", cz: "Prohlédnout funkce" },
  "hero.meta1":   { sk: "Zadarmo na stiahnutie", en: "Free to download", cz: "Zdarma ke stažení" },
  "hero.meta2":   { sk: "Synchronizácia s Apple Health", en: "Syncs with Apple Health", cz: "Synchronizace s Apple Health" },
  "hero.meta3":   { sk: "Bez reklám", en: "No ads", cz: "Bez reklam" },

  /* store badges */
  "badge.ios.top":  { sk: "Čoskoro na", en: "Coming soon on", cz: "Brzy na" },
  "badge.and.top":  { sk: "Čoskoro na", en: "Coming soon on", cz: "Brzy na" },

  /* strip */
  "strip.1": { sk: "Apple Health & Watch", en: "Apple Health & Watch", cz: "Apple Health & Watch" },
  "strip.2": { sk: "HRV & spánok", en: "HRV & sleep", cz: "HRV & spánek" },
  "strip.3": { sk: "AI sken jedla", en: "AI food scan", cz: "AI sken jídla" },
  "strip.4": { sk: "Periodizované plány", en: "Periodized plans", cz: "Periodizované plány" },
  "strip.5": { sk: "Makrá & kalórie", en: "Macros & calories", cz: "Makra & kalorie" },
  "strip.6": { sk: "Slovensky & anglicky", en: "Slovak & English", cz: "Slovensky, anglicky & česky" },

  /* features */
  "feat.kicker": { sk: "Čo Subten dokáže", en: "What Subten does", cz: "Co Subten umí" },
  "feat.title":  { sk: "Všetko pre tvoj progres — bez piatich appiek.", en: "Everything for your progress — without five apps.", cz: "Vše pro tvůj progres — bez pěti appek." },
  "feat.lede":   { sk: "Sleduj jedlo, trénuj podľa plánu, meraj regeneráciu a nechaj sa viesť AI trénerom. V jednom čistom rozhraní.", en: "Track food, train to a plan, measure recovery and get guided by an AI coach. In one clean interface.", cz: "Sleduj jídlo, trénuj podle plánu, měř regeneraci a nech se vést AI trenérem. V jednom čistém rozhraní." },

  "food.title":     { sk: "Jedlo a makrá", en: "Food & macros", cz: "Jídlo a makra" },
  "food.desc":      { sk: "Naskenuj čiarový kód alebo odfoť tanier. Subten dopočíta kalórie, bielkoviny, sacharidy, tuky aj vlákninu.", en: "Scan a barcode or snap your plate. Subten works out calories, protein, carbs, fat and fiber.", cz: "Naskenuj čárový kód nebo vyfoť talíř. Subten dopočítá kalorie, bílkoviny, sacharidy, tuky i vlákninu." },
  "training.title": { sk: "Tréning a šport", en: "Training & sport", cz: "Trénink a sport" },
  "training.desc":  { sk: "Plány do posilňovne aj periodizované športové cykly — futbal, hokej, beh, cyklistika a ďalšie.", en: "Gym splits and periodized sport cycles — football, hockey, running, cycling and more.", cz: "Plány do posilovny i periodizované sportovní cykly — fotbal, hokej, běh, cyklistika a další." },
  "recovery.title": { sk: "Regenerácia", en: "Recovery", cz: "Regenerace" },
  "recovery.desc":  { sk: "HRV, pokojový tep, spánok a SpO₂ z hodiniek v jednom skóre pripravenosti.", en: "HRV, resting heart rate, sleep and SpO₂ from your watch in one readiness score.", cz: "HRV, klidový tep, spánek a SpO₂ z hodinek v jednom skóre připravenosti." },
  "coachf.title":   { sk: "AI Coach", en: "AI Coach", cz: "AI Coach" },
  "coachf.desc":    { sk: "Tvoj osobný tréner v telefóne — pýtaj sa na výživu, tréning aj motiváciu.", en: "Your personal coach in your pocket — ask about nutrition, training and motivation.", cz: "Tvůj osobní trenér v telefonu — ptej se na výživu, trénink i motivaci." },
  "progress.title": { sk: "Progres a prehľad", en: "Progress & insights", cz: "Progres a přehled" },
  "progress.desc":  { sk: "Týždenné hodnotenia, trend váhy a výkonnostný profil, ktorý ukáže, kam smeruješ.", en: "Weekly reviews, weight trend and a performance profile that shows where you're heading.", cz: "Týdenní hodnocení, trend váhy a výkonnostní profil, který ukáže, kam směřuješ." },

  /* showcase: food */
  "sc.food.title": { sk: "Zaznamenaj jedlo za pár sekúnd", en: "Log meals in seconds", cz: "Zaznamenej jídlo za pár sekund" },
  "sc.food.desc":  { sk: "Sken, fotka alebo vyhľadávanie z databázy. Obľúbené a časté jedlá máš po ruke a Subten ti ukáže, čo ti ešte do cieľa chýba.", en: "Scan, photo or search the database. Favorites and frequent foods are a tap away, and Subten shows exactly what's left to hit your goal.", cz: "Sken, fotka nebo vyhledávání z databáze. Oblíbená a častá jídla máš po ruce a Subten ti ukáže, co ti ještě do cíle chybí." },
  "sc.food.li1":   { sk: "Sken čiarového kódu a rozpoznávanie z fotky", en: "Barcode scan & photo recognition", cz: "Sken čárového kódu a rozpoznání z fotky" },
  "sc.food.li2":   { sk: "Bielkoviny, sacharidy, tuky aj vláknina", en: "Protein, carbs, fat and fiber", cz: "Bílkoviny, sacharidy, tuky i vláknina" },
  "sc.food.li3":   { sk: "Raňajky, obedy, snacky aj vlastné jedlá", en: "Breakfast, lunch, snacks and custom foods", cz: "Snídaně, obědy, snacky i vlastní jídla" },

  /* showcase: training */
  "sc.train.title": { sk: "Trénuj podľa plánu, nie od oka", en: "Train to a plan, not by guesswork", cz: "Trénuj podle plánu, ne od oka" },
  "sc.train.desc":  { sk: "Vyber si rozpis do posilňovne alebo periodizovaný plán pre svoj šport. Subten ti pripraví týždeň a vedie ťa cvik po cviku.", en: "Pick a gym split or a periodized plan for your sport. Subten lays out your week and guides you exercise by exercise.", cz: "Vyber si rozpis do posilovny nebo periodizovaný plán pro svůj sport. Subten ti připraví týden a vede tě cvik po cviku." },
  "sc.train.li1":   { sk: "Celé telo, PPL, Upper/Lower, Wendler a ďalšie", en: "Full body, PPL, Upper/Lower, Wendler and more", cz: "Celé tělo, PPL, Upper/Lower, Wendler a další" },
  "sc.train.li2":   { sk: "Periodizované cykly pre 8+ športov", en: "Periodized cycles for 8+ sports", cz: "Periodizované cykly pro 8+ sportů" },
  "sc.train.li3":   { sk: "Knižnica cvikov s návodmi a zásahmi svalov", en: "Exercise library with guides and muscle maps", cz: "Knihovna cviků s návody a zásahy svalů" },

  /* showcase: recovery */
  "sc.rec.title": { sk: "Vieš, kedy zatlačiť a kedy si oddýchnuť", en: "Know when to push and when to rest", cz: "Víš, kdy zabrat a kdy si odpočinout" },
  "sc.rec.desc":  { sk: "Subten číta HRV, pokojový tep, spánok aj dýchanie z hodiniek a každé ráno ti dá jasné skóre pripravenosti — aj s vysvetlením.", en: "Subten reads HRV, resting heart rate, sleep and breathing from your watch and gives you a clear readiness score every morning — with the why.", cz: "Subten čte HRV, klidový tep, spánek i dýchání z hodinek a každé ráno ti dá jasné skóre připravenosti — i s vysvětlením." },
  "sc.rec.li1":   { sk: "Skóre regenerácie 0–100 každé ráno", en: "Recovery score 0–100 every morning", cz: "Skóre regenerace 0–100 každé ráno" },
  "sc.rec.li2":   { sk: "HRV, pokojový tep, SpO₂ a dýchanie", en: "HRV, resting HR, SpO₂ and breathing", cz: "HRV, klidový tep, SpO₂ a dýchání" },
  "sc.rec.li3":   { sk: "Týždenné trendy, váha a kalórie", en: "Weekly trends, weight and calories", cz: "Týdenní trendy, váha a kalorie" },

  /* steps */
  "steps.kicker": { sk: "Ako to funguje", en: "How it works", cz: "Jak to funguje" },
  "steps.title":  { sk: "Začni za tri minúty", en: "Get started in three minutes", cz: "Začni za tři minuty" },
  "step1.title":  { sk: "Prepoj hodinky", en: "Connect your watch", cz: "Propoj hodinky" },
  "step1.desc":   { sk: "Spoj Subten s Apple Health alebo svojím nositeľom — spánok, tep a pohyb sa načítajú samé.", en: "Link Subten with Apple Health or your wearable — sleep, heart rate and activity flow in automatically.", cz: "Spoj Subten s Apple Health nebo svým nositelným zařízením — spánek, tep a pohyb se načtou samy." },
  "step2.title":  { sk: "Nastav cieľ", en: "Set your goal", cz: "Nastav cíl" },
  "step2.desc":   { sk: "Chudnutie, naberanie alebo výkon? Subten dopočíta kalórie a makrá presne na mieru.", en: "Lose, gain or perform? Subten calculates your calories and macros to match.", cz: "Hubnutí, nabírání nebo výkon? Subten dopočítá kalorie a makra přesně na míru." },
  "step3.title":  { sk: "Nechaj sa viesť", en: "Let it guide you", cz: "Nech se vést" },
  "step3.desc":   { sk: "Každý deň dostaneš jasný plán jedla, tréningu a regenerácie — a AI trénera, keď sa potrebuješ poradiť.", en: "Every day you get a clear plan for food, training and recovery — plus an AI coach whenever you need advice.", cz: "Každý den dostaneš jasný plán jídla, tréninku a regenerace — a AI trenéra, když se potřebuješ poradit." },

  /* coach */
  "coach.kicker": { sk: "AI Coach", en: "AI Coach", cz: "AI Coach" },
  "coach.title":  { sk: "Osobný tréner, ktorý ťa pozná", en: "A personal coach that knows you", cz: "Osobní trenér, který tě zná" },
  "coach.lede":   { sk: "Coach vidí tvoje dáta — jedlo, tréning, spánok aj regeneráciu — a odpovedá konkrétne na tvoju situáciu. Po slovensky aj anglicky.", en: "Your coach sees your data — food, training, sleep and recovery — and answers for your exact situation. In Slovak and English.", cz: "Coach vidí tvoje data — jídlo, trénink, spánek i regeneraci — a odpovídá konkrétně na tvoji situaci. Slovensky i anglicky." },
  "coach.q1":     { sk: "Mám dnes trénovať? Spal som len 5 hodín.", en: "Should I train today? I only slept 5 hours.", cz: "Mám dnes trénovat? Spal jsem jen 5 hodin." },
  "coach.a1":     { sk: "Regenerácia je 68/100 — dobrá. Choď trénovať, ale drž nižšiu intenzitu a vynechaj zlyhanie. A doplň bielkoviny — chýba ti 41 g do cieľa.", en: "Recovery is 68/100 — solid. Train, but keep intensity moderate and skip going to failure. And top up protein — you're 41 g short of your goal.", cz: "Regenerace je 68/100 — dobrá. Jdi trénovat, ale drž nižší intenzitu a vynech selhání. A doplň bílkoviny — chybí ti 41 g do cíle." },
  "coach.q2":     { sk: "Oplatí sa kazeín pred spaním?", en: "Is casein before bed worth it?", cz: "Vyplatí se kasein před spaním?" },
  "coach.a2":     { sk: "Ak ti to sedí do makier, kľudne. Pomalé bielkoviny cez noc neuškodia, ale celkový denný príjem bielkovín rozhoduje viac.", en: "If it fits your macros, sure. Slow protein overnight won't hurt, but your total daily protein matters far more.", cz: "Pokud ti sedí do maker, klidně. Pomalé bílkoviny přes noc neuškodí, ale celkový denní příjem bílkovin rozhoduje víc." },
  "coach.privacy": { sk: "<strong>AI, ktorá uprednostní tvoj iPhone.</strong> Na novších iPhonoch bežia rozhovory s trénerom aj denné a týždenné vyhodnotenia priamo v zariadení, kedykoľvek sa dá — a v <strong>Súkromnom režime</strong> coach obsah telefón nikdy neopustí (po stiahnutí modelu na Wi-Fi funguje aj offline). Keď to lokálne nejde (staršie iPhony, niektoré jazyky, alebo funkcie s fotkou ako sken jedla a posúdenie postavy), požiadavka sa spracuje v cloude — vždy len s tvojím výslovným súhlasom.", en: "<strong>AI that prefers your iPhone.</strong> On newer iPhones the coach and your daily &amp; weekly reviews run on-device whenever possible — and with <strong>Private mode</strong> on, coach content never leaves your phone (and works offline once the model is downloaded on Wi-Fi). When on-device isn't available (older iPhones, some languages, or photo features like food scan and body assessment), the request is processed in the cloud — always only with your explicit consent.", cz: "<strong>AI, která upřednostní tvůj iPhone.</strong> Na novějších iPhonech běží rozhovory s trenérem i denní a týdenní vyhodnocení přímo v zařízení, kdykoli to jde — a v <strong>Soukromém režimu</strong> coach obsah telefon nikdy neopustí (po stažení modelu na Wi-Fi funguje i offline). Když to lokálně nejde (starší iPhony, některé jazyky, nebo funkce s fotkou jako sken jídla a posouzení postavy), žádost se zpracuje v cloudu — vždy jen s tvým výslovným souhlasem." },
  "coach.note":   { sk: "Subten Coach nie je lekár ani výživový poradca. Pri zdravotných otázkach vyhľadaj odborníka.", en: "Subten Coach is not a doctor or dietitian. For medical questions, consult a professional.", cz: "Subten Coach není lékař ani výživový poradce. Při zdravotních otázkách vyhledej odborníka." },

  /* pricing */
  "price.kicker": { sk: "Cenník", en: "Pricing", cz: "Ceník" },
  "price.title":  { sk: "Začni zadarmo. Odomkni viac, keď budeš chcieť.", en: "Start free. Unlock more when you're ready.", cz: "Začni zdarma. Odemkni víc, až budeš chtít." },
  "price.lede":   { sk: "Žiadne reklamy. Zruš kedykoľvek.", en: "No ads. Cancel anytime.", cz: "Žádné reklamy. Zrušíš kdykoli." },
  "free.name":    { sk: "Free", en: "Free", cz: "Free" },
  "free.per":     { sk: "navždy", en: "forever", cz: "navždy" },
  "free.sub":     { sk: "Všetko základné, čo potrebuješ na štart.", en: "Everything you need to get going.", cz: "Vše základní, co potřebuješ na start." },
  "free.f1":      { sk: "Sledovanie jedla a makier", en: "Food & macro tracking", cz: "Sledování jídla a maker" },
  "free.f2":      { sk: "Databáza cvikov a vlastný tréning", en: "Exercise library & custom workouts", cz: "Databáze cviků a vlastní trénink" },
  "free.f3":      { sk: "Denné skóre regenerácie", en: "Daily recovery score", cz: "Denní skóre regenerace" },
  "free.f4":      { sk: "Synchronizácia s Apple Health", en: "Apple Health sync", cz: "Synchronizace s Apple Health" },
  "free.f5":      { sk: "AI funkcie a AI Coach", en: "AI features & AI Coach", cz: "AI funkce a AI Coach" },
  "free.f6":      { sk: "Hotové a periodizované plány", en: "Ready-made & periodized plans", cz: "Hotové a periodizované plány" },
  "free.cta":     { sk: "Stiahnuť zadarmo", en: "Download free", cz: "Stáhnout zdarma" },
  "pro.name":     { sk: "Premium", en: "Premium", cz: "Premium" },
  "pro.badge":    { sk: "Najobľúbenejšie", en: "Most popular", cz: "Nejoblíbenější" },
  "pro.per":      { sk: "/ mesiac", en: "/ month", cz: "/ měsíc" },
  "pro.per.year": { sk: "/ rok", en: "/ year", cz: "/ rok" },
  "pro.toggle.month": { sk: "Mesačne", en: "Monthly", cz: "Měsíčně" },
  "pro.toggle.year":  { sk: "Ročne", en: "Yearly", cz: "Ročně" },
  "pro.save":     { sk: "−37 %", en: "−37%", cz: "−37 %" },
  "pro.trial.month": { sk: "1 týždeň zadarmo na vyskúšanie", en: "1-week free trial", cz: "1 týden zdarma na vyzkoušení" },
  "pro.trial.year":  { sk: "1 týždeň zadarmo na vyskúšanie", en: "1-week free trial", cz: "1 týden zdarma na vyzkoušení" },
  "pro.sub":      { sk: "Plný výkon Subten vrátane AI trénera.", en: "The full power of Subten, including the AI coach.", cz: "Plný výkon Subtenu včetně AI trenéra." },
  "pro.f1":       { sk: "Všetko z Free", en: "Everything in Free", cz: "Vše z Free" },
  "pro.f2":       { sk: "AI Coach", en: "AI Coach", cz: "AI Coach" },
  "pro.f3":       { sk: "Periodizované športové plány", en: "Periodized sport plans", cz: "Periodizované sportovní plány" },
  "pro.f4":       { sk: "Sken jedla z fotky", en: "Photo food scanning", cz: "Sken jídla z fotky" },
  "pro.f5":       { sk: "Týždenné hodnotenia a trendy", en: "Weekly reviews & trends", cz: "Týdenní hodnocení a trendy" },
  "pro.f6":       { sk: "Plán jedál a nákupný zoznam", en: "Meal plans & shopping lists", cz: "Plán jídel a nákupní seznam" },
  "pro.cta":      { sk: "Vyskúšať Premium", en: "Try Premium", cz: "Vyzkoušet Premium" },

  /* generator */
  "gen.kicker":     { sk: "Tréningový generátor", en: "Training generator", cz: "Tréninkový generátor" },
  "gen.title":      { sk: "Tvoj plán na mieru<br>za 30 sekúnd", en: "Your custom plan<br>in 30 seconds", cz: "Tvůj plán na míru<br>za 30 sekund" },
  "gen.lede":       { sk: "Vyber cieľ, úroveň a počet dní. Subten ti vygeneruje kompletný rozpis s ukážkami cvikov — a QR kódom na import do appky.", en: "Pick your goal, level and training days. Subten generates a full plan with exercise demos — and a QR code to import into the app.", cz: "Vyber cíl, úroveň a počet dní. Subten ti vygeneruje kompletní rozpis s ukázkami cviků — a QR kódem pro import do appky." },
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
  "gen.goal.fat":   { sk: "Chudnutie", en: "Fat loss", cz: "Hubnutí" },
  "gen.goal.fat.d": { sk: "Znížiť tuk, udržať svaly a zrýchliť metabolizmus.", en: "Burn fat, preserve muscle and boost metabolism.", cz: "Snížit tuk, udržet svaly a zrychlit metabolismus." },
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
  "gen.qr.title":   { sk: "Importuj do Subten appky", en: "Import into Subten app", cz: "Importuj do Subten appky" },
  "gen.qr.desc":    { sk: "Naskenuj QR kód v appke Subten a celý plán sa ti automaticky načíta — s ukážkami cvikov a časovačom.", en: "Scan the QR code in the Subten app and the entire plan loads automatically — with exercise demos and rest timer.", cz: "Naskenuj QR kód v appce Subten a celý plán se ti automaticky načte — s ukázkami cviků a časovačem." },
  "gen.qr.copy":    { sk: "Kopírovať plán", en: "Copy plan", cz: "Kopírovat plán" },
  "gen.qr.download":{ sk: "Stiahnuť QR", en: "Download QR", cz: "Stáhnout QR" },
  "gen.qr.hint":    { sk: "V appke Subten choď do Tréning → Importovať → Skenovať QR", en: "In Subten app go to Training → Import → Scan QR", cz: "V appce Subten jdi do Trénink → Importovat → Skenovat QR" },
  "gen.cta.title":  { sk: "Chceš plný zážitok?", en: "Want the full experience?", cz: "Chceš plný zážitek?" },
  "gen.cta.desc":   { sk: "V appke Subten dostaneš presné vedenie cvik po cviku, GIF animácie, časovač odpočinku a automatické prispôsobenie podľa regenerácie.", en: "In the Subten app you get step-by-step guidance, GIF animations, rest timer and automatic adjustments based on your recovery.", cz: "V appce Subten dostaneš přesné vedení cvik po cviku, GIF animace, časovač odpočinku a automatické přizpůsobení podle regenerace." },
  "gen.cta.btn":    { sk: "Stiahnuť Subten", en: "Download Subten", cz: "Stáhnout Subten" },
  "gen.restart":    { sk: "Vygenerovať nový plán", en: "Generate new plan", cz: "Vygenerovat nový plán" },

  /* generator — coming soon */
  "gen.cs.badge": { sk: "Čoskoro", en: "Coming soon", cz: "Již brzy" },
  "gen.cs.title": { sk: "Generátor čoskoro spustíme", en: "The generator is coming soon", cz: "Generátor brzy spustíme" },
  "gen.cs.text":  {
    sk: "Pracujeme na generátore tréningových plánov na mieru — vyberieš si cieľ, úroveň a počet dní a dostaneš kompletný rozpis s ukážkami cvikov. Medzitým vyskúšaj našu kalkulačku alebo si stiahni appku.",
    en: "We're building a custom training-plan generator — pick your goal, level and training days and get a full plan with exercise demos. In the meantime, try our calculator or get the app.",
    cz: "Pracujeme na generátoru tréninkových plánů na míru — vybereš si cíl, úroveň a počet dní a dostaneš kompletní rozpis s ukázkami cviků. Mezitím vyzkoušej naši kalkulačku nebo si stáhni appku."
  },
  "gen.cs.cta":   { sk: "Vyskúšať kalkulačku", en: "Try the calculator", cz: "Vyzkoušet kalkulačku" },

  /* faq */
  "faq.kicker": { sk: "FAQ", en: "FAQ", cz: "FAQ" },
  "faq.title":  { sk: "Časté otázky", en: "Frequently asked", cz: "Časté otázky" },
  "faq.q1": { sk: "Funguje Subten s Apple Watch?", en: "Does Subten work with Apple Watch?", cz: "Funguje Subten s Apple Watch?" },
  "faq.a1": { sk: "Áno. Subten sa prepojí cez Apple Health a načíta HRV, pokojový tep, spánok, SpO₂ aj kroky. Cez Health podporujeme aj ďalšie nositeľné zariadenia.", en: "Yes. Subten connects through Apple Health and reads HRV, resting heart rate, sleep, SpO₂ and steps. Other wearables are supported through Health too.", cz: "Ano. Subten se propojí přes Apple Health a načte HRV, klidový tep, spánek, SpO₂ i kroky. Přes Health podporujeme i další nositelná zařízení." },
  "faq.q2": { sk: "Je appka v slovenčine?", en: "Is the app in Slovak?", cz: "Je appka v češtině?" },
  "faq.a2": { sk: "Áno, Subten je plne v slovenčine aj angličtine — vrátane AI trénera.", en: "Yes — Subten is fully available in Slovak and English, including the AI coach.", cz: "Aplikace je plně ve slovenštině a angličtině — včetně AI trenéra. Slovenštině jako Čech rozumíš bez problémů a web máme kompletně v češtině." },
  "faq.q3": { sk: "Potrebujem Premium, aby to malo zmysel?", en: "Do I need Premium for it to be useful?", cz: "Potřebuji Premium, aby to mělo smysl?" },
  "faq.a3": { sk: "Nie. Sledovanie jedla, makier, základné plány a denné skóre regenerácie sú zadarmo. Premium pridáva AI trénera, sken z fotky a periodizované športové plány.", en: "No. Food and macro tracking, basic plans and the daily recovery score are free. Premium adds the AI coach, photo scanning and periodized sport plans.", cz: "Ne. Sledování jídla, maker, základní plány a denní skóre regenerace jsou zdarma. Premium přidává AI trenéra, sken z fotky a periodizované sportovní plány." },
  "faq.q4": { sk: "Ako je to s mojimi dátami?", en: "What about my data?", cz: "Jak je to s mými daty?" },
  "faq.a4": { sk: "Tvoje zdravotné dáta zostávajú tvoje. Na novších iPhonoch beží AI tréner priamo v zariadení, kedykoľvek sa dá, a v Súkromnom režime coach obsah telefón nikdy neopustí. Cloud sa použije pri funkciách s fotkou (sken jedla, posúdenie postavy), na starších zariadeniach a ako záloha — vždy len s tvojím výslovným súhlasom, pseudonymne a bez uchovávania. Nič nepredávame a účet aj dáta môžeš kedykoľvek vymazať.", en: "Your health data stays yours. On newer iPhones the AI coach runs on-device whenever possible, and Private mode guarantees coach content never leaves your phone. The cloud is used for photo features (food scan, body assessment), on older devices, and as a fallback — always only with your explicit consent, pseudonymously and without retention. We never sell anything, and you can delete your account and data anytime.", cz: "Tvoje zdravotní data zůstávají tvoje. Na novějších iPhonech běží AI trenér přímo v zařízení, kdykoli to jde, a v Soukromém režimu coach obsah telefon nikdy neopustí. Cloud se použije u funkcí s fotkou (sken jídla, posouzení postavy), na starších zařízeních a jako záloha — vždy jen s tvým výslovným souhlasem, pseudonymně a bez uchovávání. Nic neprodáváme a účet i data můžeš kdykoli smazat." },
  "faq.q5": { sk: "Nahrádza Coach lekára alebo trénera?", en: "Is Coach a replacement for a doctor or trainer?", cz: "Nahrazuje Coach lékaře nebo trenéra?" },
  "faq.a5": { sk: "Nie. AI Coach je pomocník pri rozhodovaní, nie zdravotná služba. Pri zdravotných ťažkostiach sa obráť na odborníka.", en: "No. The AI Coach helps you make decisions — it's not a medical service. For health issues, see a professional.", cz: "Ne. AI Coach je pomocník při rozhodování, ne zdravotní služba. Při zdravotních potížích se obrať na odborníka." },

  /* final cta */
  "cta.soon": { sk: "Spúšťame čoskoro pre iPhone a Android", en: "Launching soon for iPhone and Android", cz: "Spouštíme brzy pro iPhone a Android" },
  "cta.title": { sk: "Buď medzi prvými, kto vyskúša Subten", en: "Be among the first to try Subten", cz: "Buď mezi prvními, kdo vyzkouší Subten" },
  "cta.lede":  { sk: "Nechaj nám e-mail a dáme ti vedieť hneď, ako spustíme. Žiadny spam — len jedna správa pri štarte.", en: "Leave your email and we'll let you know the moment we launch. No spam — just one message at launch.", cz: "Nech nám e-mail a dáme ti vědět hned, jak spustíme. Žádný spam — jen jedna zpráva při startu." },
  "cta.email_ph": { sk: "tvoj@email.sk", en: "your@email.com", cz: "tvuj@email.cz" },
  "cta.notify": { sk: "Daj mi vedieť", en: "Notify me", cz: "Dej mi vědět" },
  "cta.success": { sk: "Hotovo! Ozveme sa ti pri spustení 🎉", en: "Done! We'll be in touch at launch 🎉", cz: "Hotovo! Ozveme se ti při spuštění 🎉" },
  "cta.privacy": { sk: "Tvoj e-mail použijeme len na oznámenie spustenia.", en: "We'll only use your email to announce the launch.", cz: "Tvůj e-mail použijeme jen k oznámení spuštění." },
  "cta.alsoon": { sk: "Čoskoro v obchodoch", en: "Coming soon to stores", cz: "Brzy v obchodech" },
  "cta.invalid": { sk: "Zadaj platný e-mail", en: "Enter a valid email", cz: "Zadej platný e-mail" },

  /* footer */
  "footer.tagline": { sk: "Tréning, výživa a regenerácia v jednej appke. Tvoj AI tréner vždy po ruke.", en: "Training, nutrition and recovery in one app. Your AI coach, always with you.", cz: "Trénink, výživa a regenerace v jedné appce. Tvůj AI trenér vždy po ruce." },
  "footer.product": { sk: "Produkt", en: "Product", cz: "Produkt" },
  "footer.legal":   { sk: "Právne", en: "Legal", cz: "Právní" },
  "footer.contact": { sk: "Kontakt", en: "Contact", cz: "Kontakt" },
  "footer.privacy": { sk: "Ochrana súkromia", en: "Privacy Policy", cz: "Ochrana soukromí" },
  "footer.terms":   { sk: "Podmienky používania", en: "Terms of Service", cz: "Podmínky používání" },
  "footer.delete":  { sk: "Vymazanie účtu", en: "Delete account", cz: "Smazání účtu" },
  "footer.support": { sk: "Podpora", en: "Support", cz: "Podpora" },
  "footer.rights":  { sk: "© 2026 Subten. Všetky práva vyhradené.", en: "© 2026 Subten. All rights reserved.", cz: "© 2026 Subten. Všechna práva vyhrazena." },
  "footer.made":    { sk: "Vytvorené na Slovensku 🇸🇰", en: "Made in Slovakia 🇸🇰", cz: "Vyrobeno na Slovensku 🇸🇰" },

  /* ── calculator ── */
  "calc.kicker":  { sk: "Nutričná kalkulačka zadarmo", en: "Free nutrition calculator", cz: "Nutriční kalkulačka zdarma" },
  "calc.h1":      { sk: "Nutričná kalkulačka — BMR, TDEE a&nbsp;makrá", en: "Free nutrition calculator — BMR, TDEE &amp; macros", cz: "Nutriční kalkulačka — BMR, TDEE a&nbsp;makra" },
  "calc.lede":    {
    sk: "Rovnaké vzorce, aké poháňajú Subten: BMR, TDEE, denný kalorický cieľ, makrá s carb cyclingom, hydratácia a skóre regenerácie. Všetko počíta tvoj prehliadač naživo — nič sa nikam neposiela.",
    en: "The same formulas that power Subten: BMR, TDEE, daily calorie target, macros with carb cycling, hydration and recovery scores. Everything is computed live in your browser — nothing is sent anywhere.", cz: "Stejné vzorce, jaké pohánějí Subten: BMR, TDEE, denní kalorický cíl, makra s carb cyclingem, hydratace a skóre regenerace. Vše počítá tvůj prohlížeč naživo — nic se nikam neposílá."
  },
  "calc.inputs.title": { sk: "Tvoje údaje", en: "Your details", cz: "Tvoje údaje" },
  "calc.out.title":    { sk: "Tvoje výsledky", en: "Your results", cz: "Tvoje výsledky" },

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
  "calc.act.hint":         {
    sk: "Subten je pri štarte konzervatívny a strop násobiča drží na 1,5× — týždenná adaptácia ho potom doladí podľa reálnych dát.",
    en: "Subten starts conservatively and caps the multiplier at 1.5× — weekly adaptation then fine-tunes it from your real data.", cz: "Subten je při startu konzervativní a strop násobiče drží na 1,5× — týdenní adaptace ho pak doladí podle reálných dat."
  },

  "calc.goal":          { sk: "Cieľ", en: "Goal", cz: "Cíl" },
  "calc.goal.fatloss":  { sk: "Chudnutie (−500 kcal)", en: "Fat loss (−500 kcal)", cz: "Hubnutí (−500 kcal)" },
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
    en: "In the app these scores come from Apple Watch / Apple Health. Here you can simulate them by entering values manually.", cz: "Tato skóre v appce počítají data z Apple Watch / Apple Health. Tady si je můžeš odsimulovat ručním zadáním."
  },
  "calc.wear.hrv":     { sk: "HRV (ms, SDNN)", en: "HRV (ms, SDNN)", cz: "HRV (ms, SDNN)" },
  "calc.wear.rhr":     { sk: "Kľudový tep (bpm)", en: "Resting HR (bpm)", cz: "Klidový tep (bpm)" },
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
  "calc.scores.sub":   {
    sk: "WHOOP-style heuristiky z dát hodiniek. V appke sa počítajú automaticky z Apple Health.",
    en: "WHOOP-style heuristics from watch data. In the app they are computed automatically from Apple Health.", cz: "Heuristiky ve stylu WHOOP z dat hodinek. V appce se počítají automaticky z Apple Health."
  },
  "calc.scores.hint":  {
    sk: "<b>Tip:</b> Vyplň <b>Dáta z hodiniek</b> vľavo a doplníme aj Recovery, Sleep a Strain skóre — presne ako ich appka ukazuje z Apple Watch.",
    en: "<b>Tip:</b> Fill in <b>Watch data</b> on the left and we'll add Recovery, Sleep and Strain scores too — exactly how the app shows them from Apple Watch.", cz: "<b>Tip:</b> Vyplň <b>Data z hodinek</b> vlevo a doplníme i Recovery, Sleep a Strain skóre — přesně jak je appka ukazuje z Apple Watch."
  },
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
  "calc.meta.desc": {
    sk: "Bezplatná nutričná kalkulačka: vypočítaj si BMR, TDEE, denný kalorický cieľ a makrá (bielkoviny, sacharidy, tuky, vláknina) s carb cyclingom a hydratáciou. Presné vzorce, výsledky hneď, bez registrácie.",
    en: "Free nutrition calculator: work out your BMR, TDEE, daily calorie target and macros (protein, carbs, fat, fiber) with carb cycling and hydration. Exact formulas, instant results, no signup.",
    cz: "Bezplatná nutriční kalkulačka: spočítej si BMR, TDEE, denní kalorický cíl a makra (bílkoviny, sacharidy, tuky, vláknina) s carb cyclingem a hydratací. Přesné vzorce, výsledky ihned, bez registrace."
  },

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
    cz: "Tato bezplatná nutriční kalkulačka promění tvůj věk, výšku, váhu, úroveň aktivity a cíl v kompletní denní plán — BMR, TDEE, kalorický cíl a makra — pomocí stejných ověřených vzorců jako appka Subten."
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
    sk: "TDEE (celkový denný energetický výdaj) je BMR vynásobené koeficientom aktivity — kalórie, ktoré reálne spáliš za deň. Kalorický cieľ sa potom odvíja od TDEE podľa toho, či chceš chudnúť, udržať alebo naberať.",
    en: "TDEE (total daily energy expenditure) is your BMR multiplied by an activity factor — the calories you actually burn in a day. Your calorie target is then built on top of TDEE depending on whether you want to lose, maintain or gain.",
    cz: "TDEE (celkový denní energetický výdej) je BMR vynásobené koeficientem aktivity — kalorie, které reálně spálíš za den. Kalorický cíl se pak odvíjí od TDEE podle toho, zda chceš hubnout, udržet nebo nabírat."
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
  "calc.faq.a5": {
    sk: "Áno — kalkulačka je úplne zadarmo a beží celá v tvojom prehliadači; bez registrácie a žiadne dáta neopúšťajú tvoje zariadenie. Na denné sledovanie a AI trénera vyskúšaj appku Subten.",
    en: "Yes — the calculator is completely free and runs entirely in your browser; no signup and no data leaves your device. For daily tracking and an AI coach, try the Subten app.",
    cz: "Ano — kalkulačka je zcela zdarma a běží celá v tvém prohlížeči; bez registrace a žádná data neopouštějí tvoje zařízení. Na denní sledování a AI trenéra vyzkoušej appku Subten."
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
    // ?lang=xx wins (lets search engines index a localized URL per language
    // and powers the hreflang alternates).
    try {
      const q = new URLSearchParams(location.search).get("lang");
      if (q && CODES.includes(q)) return q;
    } catch (e) {}
    const stored = localStorage.getItem(KEY);
    if (CODES.includes(stored)) return stored;
    // First visit defaults to English; users can still switch to SK/CZ.
    return CODES.includes("en") ? "en" : CODES[0];
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
    localStorage.setItem(KEY, lang);
    window.__subtenLang = lang;
  }

  window.SubtenSetLang = apply;
  function init() { buildToggles(); apply(initialLang()); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
