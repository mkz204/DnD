document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (successMessage && urlParams.get('status') === 'success') {
        successMessage.classList.remove('hidden');
        successMessage.classList.add('flex');
        document.body.style.overflow = 'hidden';

        const closeBtn = successMessage.querySelector('button');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                successMessage.classList.add('hidden');
                successMessage.classList.remove('flex');
                document.body.style.overflow = '';
                window.history.replaceState({}, document.title, window.location.pathname);
            });
        }
    } else if (errorMessage && urlParams.get('status') === 'error') {
        errorMessage.classList.remove('hidden');
        setTimeout(() => {
            errorMessage.classList.add('hidden');
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 5000);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.getElementById('mainNav')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
