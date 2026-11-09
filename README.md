# Web – Mgr. Marek Vávra, psychoterapie

Web běží na **https://www.zlin-psycholog.cz** přes GitHub Pages
(repozitář `zlin-psycholog/muj_web`, větev `main`).

## Co kde je

- `index.html` – obsah a struktura stránky (texty, sekce, údaje pro vyhledávače)
- `styles.css` – vzhled (barvy, fonty, rozložení)
- `script.js` – interaktivita (mobilní menu, kontaktní formulář, rok v patičce)
- `foto-portret.jpg` – portrét v sekci „O mně“ (slouží i jako náhled při sdílení odkazu)
- `fonts/` – písmo Inter uložené přímo u webu (nenačítá se z Googlu)
- `favicon.svg`, `apple-touch-icon.png` – ikonky (záložka prohlížeče, plocha iPhonu)
- `robots.txt`, `sitemap.xml` – soubory pro vyhledávače
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

## Kontaktní formulář

Nastavuje se nahoře v `script.js`:

- `KONTAKTNI_EMAIL` – e-mail pro záložní odeslání
- `WEB3FORMS_KLIC` – přístupový klíč ze služby https://web3forms.com

Dokud je klíč prázdný, formulář jen otevře e-mailovou aplikaci návštěvníka
(nespolehlivé). Po vložení klíče chodí zprávy rovnou do e-mailu, na který
byl klíč vystaven.

E-mail je ještě na dvou místech v `index.html`: v sekci „Kontakt“
a v údajích pro vyhledávače v hlavičce (`"email"`).

## Nové fotky

Fotky před vložením zmenšit na šířku cca 1100 px (jinak zpomalují web):

```bash
sips -Z 1100 -s format jpeg -s formatOptions 62 puvodni.jpg --out nova-fotka.jpg
```

## Co ještě zbývá doplnit

- **Jak pracuji** – v `index.html` vyhledat „Zde bude“ a nahradit textem.
- **FAQ** – sekce je dočasně skrytá. Pro zobrazení v `index.html`:
  1. u `<section id="faq" class="section" hidden>` smazat slovo `hidden`,
  2. v menu nahoře odkomentovat řádek s odkazem „Časté otázky“,
  3. nahradit `<div class="image-placeholder ...">` fotkou:
     ```html
     <img src="nazev-fotky.jpg" alt="Popis fotky" width="1100" height="825" loading="lazy">
     ```
- **Formulář** – vložit klíč Web3Forms (viz výše).
