
document.addEventListener('DOMContentLoaded', (event) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});


