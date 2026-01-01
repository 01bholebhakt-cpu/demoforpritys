// Header Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .trans-text, .masonry-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// Subtle parallax for Hero
window.addEventListener('scroll', function() {
    const heroImg = document.querySelector('.hero-img');
    let offset = window.pageYOffset;
    if (heroImg) {
        heroImg.style.transform = 'translateY(' + offset * 0.4 + 'px)';
    }
});
