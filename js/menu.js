const BURGER_ICON_PATHS = {
    burger: "./img/Property 1=burger.svg",
    transition: "./img/Property 1=Transition.svg",
    closeMedium: "./img/Property 1=close medium.svg",
    closeFinal: "./img/Property 1=CLOSE FINAL.svg"
};

function initMobileMenu() {
    const header = document.querySelector(".header");
    const burgerButton = document.querySelector(".burger-button");
    const burgerIcon = document.querySelector(".burger-icon");
    const navigationLinks = document.querySelectorAll(".navigation a");

    if (!header || !burgerButton || !burgerIcon) {
        return;
    }

    burgerButton.addEventListener("click", () => {
        toggleMobileMenu(header, burgerButton, burgerIcon);
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMobileMenu(header, burgerButton, burgerIcon);
        });
    });
}

function toggleMobileMenu(header, burgerButton, burgerIcon) {
    const isOpen = header.classList.contains("menu-open");

    if (isOpen) {
        closeMobileMenu(header, burgerButton, burgerIcon);
        return;
    }

    openMobileMenu(header, burgerButton, burgerIcon);
}

function openMobileMenu(header, burgerButton, burgerIcon) {
    header.classList.add("menu-open");
    burgerButton.setAttribute("aria-expanded", "true");
    burgerButton.setAttribute("aria-label", "Menü schließen");

    burgerIcon.src = BURGER_ICON_PATHS.transition;

    setTimeout(() => {
        burgerIcon.src = BURGER_ICON_PATHS.closeMedium;
    }, 50);

    setTimeout(() => {
        burgerIcon.src = BURGER_ICON_PATHS.closeFinal;
    }, 80);
}

function closeMobileMenu(header, burgerButton, burgerIcon) {
    header.classList.remove("menu-open");
    burgerButton.setAttribute("aria-expanded", "false");
    burgerButton.setAttribute("aria-label", "Menü öffnen");
    burgerIcon.src = BURGER_ICON_PATHS.burger;
}

initMobileMenu();