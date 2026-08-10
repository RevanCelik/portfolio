const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function initScrollAnimations() {
    const animatedGroups = [
        [".about-image-wrapper", ".about-content"],
        [".section-label", ".skills-grid .skill-item", ".skills-mobile-cta"],
        [".projects-title", ".project-card", ".project-insights-title", ".project-insight"],
        [".contact-intro", ".contact-details", ".contact-form"]
    ];

    const elements = animatedGroups.flatMap((selectors) =>
        selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)))
    );

    elements.forEach((element, index) => {
        element.classList.add("scroll-reveal");
        element.style.setProperty("--reveal-order", index % 4);
    });

    if (window.matchMedia(REDUCED_MOTION_QUERY).matches || !("IntersectionObserver" in window)) {
        elements.forEach(showElement);
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            showElement(entry.target);
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px"
    });

    elements.forEach((element) => observer.observe(element));
}

function showElement(element) {
    element.classList.add("is-visible");
}

initScrollAnimations();
