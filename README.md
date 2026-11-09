# Web – Mgr. Marek Vávra, psychoterapie Zlín

Web běží na **https://www.zlin-psycholog.cz** přes GitHub Pages
(repozitář `zlin-psycholog/muj_web`, větev `main`).

## Co kde je

- `index.html` – obsah a struktura stránky (texty, sekce)
- `styles.css` – vzhled (barvy, fonty, rozložení)
- `script.js` – interaktivita (mobilní menu, kontaktní formulář)
- `foto-portret.jpg` – portrét v sekci „O mně“
- `favicon.svg` – ikonka v záložce prohlížeče
- `CNAME` – vlastní doména pro GitHub Pages (neměnit)

## Jak zveřejnit změnu

1. Upravit a uložit soubor.
2. Ve složce projektu v terminálu spustit:
   ```bash
   git add .
   git commit -m "popis změny"
   git push
   ```
3. Za 1–2 minuty je změna vidět na webu (případně obnovit stránku s Cmd+Shift+R).

Náhled před zveřejněním: otevřít `index.html` dvojklikem v prohlížeči.

## Kontaktní e-mail

`zlinpsycholog@gmail.com` – je na dvou místech:
- `index.html`, sekce „Kontakt“
- `script.js`, řádek s `mailto:` (kam posílá formulář)

## Co ještě zbývá doplnit

V `index.html` vyhledat text „Zde bude“:
- O mně: Vzdělání, Odborné kurzy
- Jak pracuji: popis přístupu k terapii
- FAQ: „S čím se na mě můžete obrátit?“
- Krátký text pod FAQ
- Reference: 3 citace klientů

Dále:
- Sekce „Pár čísel“: místo pomlček `–` doplnit čísla
- U FAQ nahradit `<div class="image-placeholder ...">` fotkou:
  ```html
  <img src="nazev-fotky.jpg" alt="Popis fotky" class="profile-image">
  ```
