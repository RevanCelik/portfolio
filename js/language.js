const translations = {
    de: {
        navAbout: "Über mich",
        navSkills: "Skills",
        navProjects: "Projekte",
        navContact: "Kontakt",
        contactButton: "Kontakt",
        profession: "Frontend Developer",
        aboutTitlePart1: "Warum",
        aboutTitlePart2: "ich",
        aboutDescription: "Ich bin ein passionierter Frontend Developer mit Leidenschaft für moderne Webtechnologien.",
        aboutIntro: "Ich bin",
        aboutLocation: "aus Langen",
        aboutRemote: "offen für<br>Remote-Arbeit",
        aboutRelocate: "offen für<br>neue Möglichkeiten",
        aboutButton: "Lass uns reden",
        skillsTitle: "Meine Skills",
        projectsTitle: "Meine Projekte",
        projectDescriptionJoin: "Ein vom Kanban-System inspirierter Task-Manager. Erstelle und organisiere Aufgaben per Drag-and-drop, weise Benutzer zu und verwalte Kategorien.",
        projectDescriptionElPolloLoco: "Ein Jump-and-Run-Spiel auf Basis eines objektorientierten Programmieransatzes. Hilf Pepe dabei, Münzen und Salsa-Flaschen zu sammeln, um gegen das verrückte Huhn zu kämpfen.",
        projectInsightsTitle: "Auf der Suche nach einem Problemlöser? Das zeichnet meine Arbeitsweise aus.",
        insightResponsibilityTitle: "Eigenverantwortung",
        insightResponsibilityLabel: "Projektplanung",
        insightResponsibilityText: "Ich strukturiere größere Aufgaben in überschaubare Schritte und entwickle Lösungen eigenständig von der Planung bis zur Umsetzung.",
        insightProblemSolvingTitle: "Problemlösung",
        insightProblemSolvingLabel: "Debugging & Analyse",
        insightProblemSolvingText: "Fehler sehe ich nicht nur als Hindernis, sondern als Möglichkeit, Zusammenhänge besser zu verstehen und nachhaltige Lösungen zu entwickeln.",
        insightDevelopmentTitle: "Weiterentwicklung",
        insightDevelopmentLabel: "Clean Code",
        insightDevelopmentText: "Mit jedem Projekt achte ich stärker auf klare Strukturen, wiederverwendbaren Code und eine verständliche Dokumentation.",
        contactTitle: "Kontakt",
        contactDescription: "Du hast eine interessante Projektidee, suchst Unterstützung für dein Team oder möchtest dich einfach austauschen? Dann schreib mir gerne eine Nachricht.",
        contactNameLabel: "Dein Name",
        contactNamePlaceholder: "Dein Name",
        contactEmailLabel: "Deine E-Mail-Adresse",
        contactEmailPlaceholder: "Deine E-Mail-Adresse",
        contactMessageLabel: "Deine Nachricht",
        contactMessagePlaceholder: "Deine Nachricht",
        privacyText: 'Ich habe die <a href="./legal/privacypolicy.html">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.',
        submitButton: "Senden",
        legalNotice: "Impressum",
        privacyPolicy: "Datenschutzerklärung",
    },

    en: {
        navAbout: "About me",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        contactButton: "Contact",
        profession: "Frontend Developer",
        aboutTitleWhy: "Why",
        aboutTitleMe: "me",
        aboutDescription: "I have been working in IT for several years and currently work as a Customer Support Engineer in second- and third-level support. My responsibilities include technical analysis and troubleshooting in complex IT environments as well as supporting and analyzing our company software. A key part of my work is evaluating log files and raw data to identify root causes. To optimize these processes, I have developed my own tools that make support data analysis easier. In addition, I support IT and telephony environments and regularly work with Microsoft technologies, including Microsoft Teams.",
        aboutIntro: "I am",
        aboutLocation: "from Langen",
        aboutRemote: "open to<br>remote work",
        aboutRelocate: "open to<br>new opportunities",
        aboutButton: "Let's talk",
        skillsTitle: "My Skills",
        projectsTitle: "My Projects",
        projectDescriptionJoin: "A task manager inspired by the Kanban system. Create and organize tasks with drag and drop, assign users, and manage categories.",
        projectDescriptionElPolloLoco: "A jump-and-run game based on an object-oriented programming approach. Help Pepe collect coins and salsa bottles to fight the crazy chicken.",
        projectInsightsTitle: "Looking for a problem solver? This is what defines the way I work.",
        insightResponsibilityTitle: "Responsibility",
        insightResponsibilityLabel: "Project planning",
        insightResponsibilityText: "I break down larger tasks into manageable steps and develop solutions independently from planning to implementation.",
        insightProblemSolvingTitle: "Problem solving",
        insightProblemSolvingLabel: "Debugging & analysis",
        insightProblemSolvingText: "I do not see errors only as obstacles, but as opportunities to better understand connections and develop sustainable solutions.",
        insightDevelopmentTitle: "Continuous improvement",
        insightDevelopmentLabel: "Clean code",
        insightDevelopmentText: "With every project, I pay more attention to clear structures, reusable code, and understandable documentation.",
        contactTitle: "Contact",
        contactDescription: "Do you have an interesting project idea, need support for your team, or just want to exchange ideas? Feel free to send me a message.",
        contactNameLabel: "Your name",
        contactNamePlaceholder: "Your name",
        contactEmailLabel: "Your email address",
        contactEmailPlaceholder: "Your email address",
        contactMessageLabel: "Your message",
        contactMessagePlaceholder: "Your message",
        privacyText: 'I have read the <a href="./legal/privacypolicy.html">privacy policy</a> and agree to the processing of my data.',
        submitButton: "Send",
        legalNotice: "Legal Notice",
        privacyPolicy: "Privacy Policy",
    }
};

function setLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (!translations[language][key]) {
            return;
        }

        element.innerHTML = translations[language][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;

        if (!translations[language][key]) {
            return;
        }

        element.placeholder = translations[language][key];
    });

    document.querySelectorAll("[data-lang-button]").forEach((button) => {
        button.classList.toggle("active", button.dataset.langButton === language);
    });

    localStorage.setItem("portfolioLanguage", language);
}

function initLanguageSwitch() {
    const savedLanguage = localStorage.getItem("portfolioLanguage") || "de";

    setLanguage(savedLanguage);

    document.querySelectorAll("[data-lang-button]").forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.langButton);
        });
    });
}

initLanguageSwitch();