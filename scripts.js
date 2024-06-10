const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('nav');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    nav.classList.toggle('active');
});

