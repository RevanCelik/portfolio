const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");
const contactSubmitButton = contactForm.querySelector(
    ".contact-submit-button"
);

contactForm.addEventListener("submit", handleContactFormSubmit);

/**
 * Sends the contact form data to the PHP mail endpoint.
 *
 * @param {SubmitEvent} event - The form submission event.
 * @returns {Promise<void>}
 */
async function handleContactFormSubmit(event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    setFormLoadingState(true);

    try {
        const response = await sendContactForm();
        const result = await readJsonResponse(response);

        if (!response.ok || !result.success) {
            throw new Error(result.error || "Nachricht konnte nicht gesendet werden.");
        }

        showContactFormSuccess();
    } catch (error) {
        showContactFormError(error);
    } finally {
        setFormLoadingState(false);
    }
}

/**
 * Sends the current form values as JSON to the PHP endpoint.
 *
 * @returns {Promise<Response>}
 */
function sendContactForm() {
    const formData = new FormData(contactForm);

    const payload = {
        name: formData.get("name")?.toString().trim(),
        email: formData.get("email")?.toString().trim(),
        message: formData.get("message")?.toString().trim()
    };

    return fetch(contactForm.action, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
}

/**
 * Reads the JSON response and throws a useful error for invalid responses.
 *
 * @param {Response} response - Response returned by the PHP endpoint.
 * @returns {Promise<object>}
 */
async function readJsonResponse(response) {
    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
        throw new Error(
            "Der Server hat keine gültige JSON-Antwort zurückgegeben."
        );
    }

    return response.json();
}

/**
 * Updates the form while a request is running.
 *
 * @param {boolean} isLoading - Whether the form is currently submitting.
 * @returns {void}
 */
function setFormLoadingState(isLoading) {
    contactSubmitButton.disabled = isLoading;
    contactSubmitButton.textContent = isLoading ? "Wird gesendet..." : "Senden";

    if (isLoading) {
        contactFormStatus.textContent = "";
        contactFormStatus.className = "contact-form-status";
    }
}

/**
 * Displays the success message and resets the form.
 *
 * @returns {void}
 */
function showContactFormSuccess() {
    contactFormStatus.textContent =
        "Deine Nachricht wurde erfolgreich gesendet.";

    contactFormStatus.className =
        "contact-form-status contact-form-status-success";

    contactForm.reset();
}

/**
 * Displays a submission error.
 *
 * @param {unknown} error - The caught submission error.
 * @returns {void}
 */
function showContactFormError(error) {
    console.error("Contact form error:", error);

    contactFormStatus.textContent =
        error instanceof Error
            ? error.message
            : "Beim Senden ist ein Fehler aufgetreten.";

    contactFormStatus.className =
        "contact-form-status contact-form-status-error";
}