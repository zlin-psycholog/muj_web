// ==========================================================================
// PSYCHOTERAPIE - Interaktivní funkce
// ==========================================================================

// --------------------------------------------------------------------------
// NASTAVENÍ FORMULÁŘE
// Sem vložte přístupový klíč ze služby Web3Forms (https://web3forms.com).
// Dokud je prázdný, formulář jen otevře e-mailovou aplikaci návštěvníka.
// --------------------------------------------------------------------------
const WEB3FORMS_KLIC = '605e7ac5-ee2e-46d5-9039-339a1fd58049';
const KONTAKTNI_EMAIL = 'zlinpsycholog@gmail.com';

// Mobilní menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function nastavMenu(otevrit) {
    navLinks.classList.toggle('active', otevrit);
    menuToggle.classList.toggle('active', otevrit);
    menuToggle.setAttribute('aria-expanded', String(otevrit));
}

menuToggle.addEventListener('click', () => {
    nastavMenu(!navLinks.classList.contains('active'));
});

// Zavřít menu po kliknutí na odkaz
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => nastavMenu(false));
});

// Zavřít menu při kliknutí mimo navigaci
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) nastavMenu(false);
});

// Zavřít menu klávesou Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        nastavMenu(false);
        menuToggle.focus();
    }
});

// Linka pod navigací při scrollování
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Aktuální rok v patičce
document.getElementById('rok').textContent = new Date().getFullYear();

// Kontaktní formulář
const formular = document.getElementById('kontaktni-formular');
const stav = document.getElementById('stav-formulare');

function ukazStav(text, chyba) {
    stav.textContent = text;
    stav.classList.toggle('error', Boolean(chyba));
}

// Záložní řešení: otevře e-mailovou aplikaci s vyplněnou zprávou
function otevriEmail(name, email, message) {
    const subject = encodeURIComponent(`Poptávka terapie - ${name}`);
    const body = encodeURIComponent(
        `Jméno: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}`
    );
    window.location.href = `mailto:${KONTAKTNI_EMAIL}?subject=${subject}&body=${body}`;
}

formular.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = formular.elements.name.value.trim();
    const email = formular.elements.email.value.trim();
    const message = formular.elements.message.value.trim();

    // Bez klíče: jen otevřít e-mailovou aplikaci
    if (!WEB3FORMS_KLIC) {
        otevriEmail(name, email, message);
        ukazStav(`Otevírám váš e-mailový program. Pokud se nic nestalo, napište mi prosím přímo na ${KONTAKTNI_EMAIL}.`);
        return;
    }

    // Vyplněné skryté pole = robot, tiše ukončit
    if (formular.elements.botcheck.checked) return;

    const tlacitko = formular.querySelector('button[type="submit"]');
    tlacitko.disabled = true;
    ukazStav('Odesílám…');

    try {
        const odpoved = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                access_key: WEB3FORMS_KLIC,
                subject: `Zpráva z webu – ${name}`,
                from_name: 'Web zlin-psycholog.cz',
                name,
                email,
                message
            })
        });
        const vysledek = await odpoved.json();
        if (!odpoved.ok || !vysledek.success) throw new Error(vysledek.message || 'Odeslání selhalo');

        formular.reset();
        ukazStav('Děkuji, zpráva byla odeslána. Ozvu se vám co nejdříve.');
    } catch (chyba) {
        ukazStav(`Zprávu se nepodařilo odeslat. Napište mi prosím přímo na ${KONTAKTNI_EMAIL}.`, true);
    } finally {
        tlacitko.disabled = false;
    }
});
