document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobil Menü Fonksiyonu ---
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            navMenu.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            navMenu.classList.remove('open');
            menuOpen = false;
        }
    });

    // Menü linklerine tıklandığında mobil menüyü kapat
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navMenu.classList.remove('open');
            menuOpen = false;
        });
    });

    // --- Navbar Kaydırma Efekti ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Aktif Sekmeyi Takip Etme ---
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Kaydırınca Belirme Efekti (Scroll Reveal) ---
    const revealElements = document.querySelectorAll('.data-reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
