/* ============================================
   KAUSHAL PRAJAPATI — PORTFOLIO SCRIPTS
   Flagship & Practice Archive (Light Theme)
   ============================================ */

(function () {
    'use strict';

    /* ── 1. Typing Animation ── */
    const phrases = ['Web Developer', 'Frontend Engineer', 'Building KP Living', 'Practicing Daily', 'Learning Full-Stack'];
    const typingEl = document.getElementById('typingText');
    let phraseIdx = 0,
        charIdx = 0,
        isDeleting = false;

    function typeEffect() {
        if (!typingEl) return;
        const phrase = phrases[phraseIdx];
        typingEl.textContent = phrase.substring(0, isDeleting ? --charIdx : ++charIdx);

        let delay = isDeleting ? 30 : 70;

        if (!isDeleting && charIdx === phrase.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 400;
        }
        setTimeout(typeEffect, delay);
    }
    setTimeout(typeEffect, 500);

    /* ── 2. Scroll Reveal (Intersection Observer) ── */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));

    /* ── 3. Navigation & Scroll Effects ── */
    const nav = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const scrollIndicator = document.getElementById('scrollIndicator');

    function handleScroll() {
        // Nav blur background
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        }

        // Active link highlighting
        const scrollPos = window.scrollY + 180;
        sections.forEach((sec) => {
            const top = sec.offsetTop,
                height = sec.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach((link) => {
                    link.classList.toggle('active', link.dataset.section === sec.id);
                });
            }
        });

        // Fade out hero scroll indicator
        if (scrollIndicator) {
            scrollIndicator.style.opacity = window.scrollY > 80 ? '0' : '1';
            scrollIndicator.style.pointerEvents = window.scrollY > 80 ? 'none' : 'auto';
        }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* ── 4. Mobile Navigation Toggle ── */
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
        });
        // Close on click
        navLinksContainer.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('open');
            });
        });
    }

    /* ── 5. Version History Toggles (Flagship) ── */
    const versionToggles = document.querySelectorAll('.version-toggle');
    versionToggles.forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(targetId);
            if (!panel) return;

            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !isExpanded);
            panel.classList.toggle('open');
        });
    });

    /* ── 6. Mini Version History Toggles (Archive Cards) ── */
    const miniToggles = document.querySelectorAll('.mini-ver-toggle');
    miniToggles.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent accidental navigation if nested in an anchor
            const targetId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(targetId);
            if (panel) {
                panel.classList.toggle('open');
                btn.innerHTML = panel.classList.contains('open') ? 'History ▲' : 'History ▼';
            }
        });
    });

    /* ── 7. Smooth Scrolling for Anchor Links ── */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const offset = nav ? nav.offsetHeight + 16 : 16;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth',
                });
            }
        });
    });
})();
