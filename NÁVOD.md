# Subten — návod na úpravy

Stručný návod, ako si stránku jednoducho upravíš sám. Netreba programovať.

---

## 1. Výmena screenshotov v telefónoch

Na stránke je 5 mockupov telefónu (v hero sekcii aj v sekcii „Ako to funguje").
Každý je **drag-and-drop** — stačí naň **pretiahnuť obrázok** myšou, alebo naň
kliknúť a vybrať súbor z počítača.

- Podporované formáty: **PNG, JPG, WebP** (nie SVG).
- Najlepšie vyzerá screenshot v pomere telefónu (napr. 1320 × 2868 px), ale
  funguje akýkoľvek — orežeš si ho dvojklikom (pri filled slote môžeš obrázok
  posúvať a zväčšovať).
- Zmena sa **uloží natrvalo** — zobrazí sa aj po obnovení stránky, v zdieľanom
  odkaze aj v stiahnutom súbore.

Ktorý telefón je ktorý:

| Miesto | Predvolený screenshot |
|---|---|
| Hero — predný telefón | Today (dnešný prehľad) |
| Hero — zadný telefón | AI Coach |
| Sekcia „Jedlo" | Food |
| Sekcia „Tréning" | Tréningový plán |
| Sekcia „Regenerácia" | Týždenné trendy |

> Tip: pôvodné screenshoty sú uložené v priečinku `assets/img/`.

---

## 2. Výmena loga

Logo je vľavo hore v hlavičke — tiež **drag-and-drop**. Pretiahni naň svoje
logo (PNG s priehľadným pozadím vyzerá najlepšie).

- Logo v päte stránky a na právnych stránkach používa súbor
  `assets/brand/logo.svg`. Ak chceš zmeniť aj tie, nahraď tento súbor.

---

## 3. Jazyky a texty

Všetky texty stránky sú v jednom súbore: **`js/i18n.js`**.

**Zmena textu:** nájdi riadok a prepíš text medzi úvodzovkami. Príklad:
```
"hero.cta1": { sk: "Stiahnuť zadarmo", en: "Download free" },
```
Uprav časť za `sk:` (slovensky) alebo `en:` (anglicky).

**Pridanie nového jazyka** (napr. čeština „cs"):
1. Hore v `js/i18n.js` pridaj jazyk do zoznamu `SUBTEN_LANGUAGES`:
   ```
   window.SUBTEN_LANGUAGES = [
     { code: "sk", label: "SK" },
     { code: "en", label: "EN" },
     { code: "cs", label: "CZ" }
   ];
   ```
2. Ku každému textu dopíš preklad, napr.:
   ```
   "hero.cta1": { sk: "...", en: "...", cs: "Stáhnout zdarma" },
   ```
   (ak preklad chýba, automaticky sa použije angličtina)
3. Na právnych stránkach (`legal/`) pridaj k blokom ďalší
   `<div data-lang-block="cs"> ... </div>` s prekladom.

Prepínač jazykov v hlavičke sa doplní sám.

---

## 4. Čo ešte upraviť (placeholdery)

- **E-mail:** `support@subten-app.eu` — hľadaj v `js/i18n.js` a v pätách stránok.
- **Odkazy na App Store / Google Play:** zatiaľ `#` — doplň reálne odkazy
  v `index.html` (hľadaj `store-badge`).
- **Cena Premium:** `4,99 €/mesiac` — uprav v `index.html` (sekcia `pricing`).
- **Texty právnych dokumentov** sú priamo v súboroch v priečinku `legal/`.
