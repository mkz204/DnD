document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Navbar Scroll Effect (Optional Visual Polish)
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-brand-bg/95');
                navbar.classList.remove('bg-brand-bg/80');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-brand-bg/95');
                navbar.classList.add('bg-brand-bg/80');
            }
        });
    }
});
