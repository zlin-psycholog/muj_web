// ==========================================================================
// PSYCHOTERAPIE - Interaktivní funkce
// ==========================================================================

// Mobilní menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Zavřít menu po kliknutí na odkaz
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Stín navigace při scrollování
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Zpracování formuláře
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Otevře e-mailového klienta s vyplněnou zprávou
    // Toto je nejjednodušší řešení bez serveru
    const subject = encodeURIComponent(`Poptávka terapie - ${name}`);
    const body = encodeURIComponent(
        `Jméno: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}`
    );

    window.location.href = `mailto:terapie@example.cz?subject=${subject}&body=${body}`;

    return false;
}
