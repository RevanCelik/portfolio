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
        aboutDescription: "Durch meine mehrjährige Erfahrung in der IT bringe ich fundierte Kenntnisse in Administration, technischem Support und der Analyse komplexer IT-Umgebungen mit. Meine Stärke liegt in der strukturierten Problemlösung und Ursachenanalyse. Dabei entwickle ich auch eigene Tools, um Prozesse effizienter zu gestalten. Ich arbeite mich gerne in neue Technologien ein und möchte mein technisches Wissen kontinuierlich erweitern und weiterentwickeln.",
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
        submitLoading: "Wird gesendet...",
        contactNameRequired: "Bitte gib deinen Namen ein.",
        contactEmailRequired: "Bitte gib deine E-Mail-Adresse ein.",
        contactEmailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
        contactMessageRequired: "Bitte gib eine Nachricht ein.",
        contactPrivacyRequired: "Bitte bestätige die Datenschutzerklärung.",
        contactSuccess: "Deine Nachricht wurde erfolgreich gesendet.",
        contactError: "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
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
        aboutDescription: "With several years of experience in IT, I have developed a strong background in administration, technical support, and the analysis of complex IT environments. My strengths lie in structured problem-solving and root cause analysis. I also enjoy developing my own tools to improve processes and efficiency. I am motivated to continuously expand my technical knowledge, explore new technologies, and grow professionally.",
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
        contactTitle: "Contact me",
        contactDescription: "Do you have an interesting project idea, need support for your team, or just want to exchange ideas? Feel free to send me a message.",
        contactNameLabel: "Your Name",
        contactNamePlaceholder: "Your Name",
        contactEmailLabel: "Your Email",
        contactEmailPlaceholder: "Your Email",
        contactMessageLabel: "Your Message",
        contactMessagePlaceholder: "Your Message",
        privacyText: 'I have read the <a href="./legal/privacypolicy.html">privacy policy</a> and agree to the processing of my data.',
        submitButton: "Send",
        submitLoading: "Sending...",
        contactNameRequired: "Please enter your name.",
        contactEmailRequired: "Please enter your email address.",
        contactEmailInvalid: "Please enter a valid email address.",
        contactMessageRequired: "Please enter a message.",
        contactPrivacyRequired: "Please accept the privacy policy.",
        contactSuccess: "Your message was sent successfully.",
        contactError: "Something went wrong while sending. Please try again later.",
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
    document.dispatchEvent(new CustomEvent("languagechange"));
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
