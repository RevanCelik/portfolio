function initLegalLanguage() {
    const language = localStorage.getItem("portfolioLanguage") === "en" ? "en" : "de";
    const englishSection = document.querySelector(".legal-language-block");

    if (!englishSection) {
        return;
    }

    const germanContent = Array.from(englishSection.parentElement.children)
        .filter((element) => element !== englishSection);
    const isEnglish = language === "en";

    document.documentElement.lang = language;
    germanContent.forEach((element) => {
        element.hidden = isEnglish;
    });
    englishSection.hidden = !isEnglish;

    const englishHeading = englishSection.querySelector("h2");
    if (englishHeading) {
        englishHeading.hidden = true;
    }

    updateLegalPageChrome(language);
}

function updateLegalPageChrome(language) {
    const isPrivacyPolicy = window.location.pathname.endsWith("privacypolicy.html");
    const translations = {
        de: {
            homeLabel: "Zur Startseite",
            navLabel: "Rechtliche Navigation",
            otherPage: isPrivacyPolicy ? "Impressum" : "Datenschutz",
            title: isPrivacyPolicy ? "Datenschutzerklärung" : "Impressum",
            updated: "Stand: Juli 2026",
            legalNotice: "Impressum",
            privacyPolicy: "Datenschutz"
        },
        en: {
            homeLabel: "Go to homepage",
            navLabel: "Legal navigation",
            otherPage: isPrivacyPolicy ? "Legal Notice" : "Privacy Policy",
            title: isPrivacyPolicy ? "Privacy Policy" : "Legal Notice",
            updated: "Last updated: July 2026",
            legalNotice: "Legal Notice",
            privacyPolicy: "Privacy Policy"
        }
    }[language];

    document.title = `${translations.title} | Revan Celik`;
    document.querySelector(".legal-logo")?.setAttribute("aria-label", translations.homeLabel);
    document.querySelector(".legal-nav")?.setAttribute("aria-label", translations.navLabel);

    const navLinks = document.querySelectorAll(".legal-nav a");
    if (navLinks[1]) {
        navLinks[1].textContent = translations.otherPage;
    }

    const title = document.querySelector(".legal-title");
    const updated = document.querySelector(".legal-updated");
    if (title) title.textContent = translations.title;
    if (updated) updated.textContent = translations.updated;

    const footerLinks = document.querySelectorAll(".legal-footer a");
    if (footerLinks[1]) footerLinks[1].textContent = translations.legalNotice;
    if (footerLinks[2]) footerLinks[2].textContent = translations.privacyPolicy;
}

initLegalLanguage();
