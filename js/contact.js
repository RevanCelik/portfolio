const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");

contactForm.addEventListener("submit", handleContactFormSubmit);

/**
 * Prevents the unfinished contact form from being submitted
 * and displays a temporary status message.
 *
 * @param {SubmitEvent} event - The form submission event.
 * @returns {void}
 */
function handleContactFormSubmit(event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    contactFormStatus.textContent =
        "Das Kontaktformular wird aktuell noch eingerichtet.";
}