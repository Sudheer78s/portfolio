// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
}

// Scroll Reveal Animation (Intersection Observer)
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-right');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// Typing Effect for Hero Title
const typeEffect = () => {
    const textEl = document.querySelector('.type-effect');
    if (!textEl) return;
    
    const words = ["Developer", "Designer", "Creator", "Engineer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at end of word
            typeSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            // Pause before typing next word
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect after a short delay
    setTimeout(type, 1000);
}

// Initialize scripts
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    revealElements();
    typeEffect();
});
