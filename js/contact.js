const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");
const contactSubmitButton = contactForm.querySelector(".contact-submit-button");
const contactFields = [
    document.getElementById("contactName"),
    document.getElementById("contactEmail"),
    document.getElementById("contactMessage"),
    document.getElementById("contactPrivacy")
];

let isSubmitting = false;

contactFields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", updateSubmitButton);
    field.addEventListener("change", updateSubmitButton);
});

contactForm.addEventListener("submit", handleContactFormSubmit);
document.addEventListener("languagechange", refreshVisibleValidationMessages);
updateSubmitButton();

/**
 * Returns a translated contact-form text with a German fallback.
 *
 * @param {string} key - Translation key.
 * @param {string} fallback - Text used if translations are unavailable.
 * @returns {string}
 */
function getContactText(key, fallback) {
    const language = document.documentElement.lang || "de";

    if (typeof translations !== "undefined") {
        return translations[language]?.[key] || translations.de?.[key] || fallback;
    }

    return fallback;
}

/**
 * Validates one field and displays its message only after blur or submit.
 *
 * @param {HTMLInputElement|HTMLTextAreaElement} field - Field to validate.
 * @returns {boolean}
 */
function validateField(field) {
    const errorElement = document.getElementById(`${field.id}Error`);
    const message = getFieldErrorMessage(field);

    field.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", String(Boolean(message)));
    errorElement.textContent = message;

    return !message;
}

/**
 * Gets the appropriate validation message for a contact field.
 *
 * @param {HTMLInputElement|HTMLTextAreaElement} field - Field to inspect.
 * @returns {string}
 */
function getFieldErrorMessage(field) {
    const isEmptyTextField = field.type !== "checkbox" && !field.value.trim();

    if (field.validity.valueMissing || isEmptyTextField) {
        const requiredMessages = {
            contactName: ["contactNameRequired", "Bitte gib deinen Namen ein."],
            contactEmail: ["contactEmailRequired", "Bitte gib deine E-Mail-Adresse ein."],
            contactMessage: ["contactMessageRequired", "Bitte gib eine Nachricht ein."],
            contactPrivacy: ["contactPrivacyRequired", "Bitte bestätige die Datenschutzerklärung."]
        };
        const [key, fallback] = requiredMessages[field.id];
        return getContactText(key, fallback);
    }

    if (field.id === "contactEmail" && field.validity.typeMismatch) {
        return getContactText(
            "contactEmailInvalid",
            "Bitte gib eine gültige E-Mail-Adresse ein."
        );
    }

    return "";
}

/** Enables submission only when all values, including consent, are valid. */
function updateSubmitButton() {
    const hasValidValues = contactFields.every((field) => {
        if (field.type === "checkbox") {
            return field.checked;
        }

        return Boolean(field.value.trim()) && field.validity.valid;
    });

    contactSubmitButton.disabled = isSubmitting || !hasValidValues;
}

/** Re-translates validation messages that are currently visible. */
function refreshVisibleValidationMessages() {
    contactFields.forEach((field) => {
        const errorElement = document.getElementById(`${field.id}Error`);
        if (errorElement.textContent) {
            validateField(field);
        }
    });

    if (isSubmitting) {
        contactSubmitButton.textContent = getContactText("submitLoading", "Wird gesendet...");
    }
}

/** Sends the form after a final validation check. */
async function handleContactFormSubmit(event) {
    event.preventDefault();

    const validationResults = contactFields.map((field) => validateField(field));
    const isValid = validationResults.every(Boolean);
    if (!isValid) {
        contactFields.find((field) => !field.validity.valid)?.focus();
        return;
    }

    setFormLoadingState(true);

    try {
        const response = await sendContactForm();
        const result = await readJsonResponse(response);

        if (!response.ok || !result.success) {
            throw new Error("Contact form submission failed");
        }

        showContactFormSuccess();
    } catch (error) {
        showContactFormError(error);
    } finally {
        setFormLoadingState(false);
    }
}

/** Sends the current form values as JSON to the PHP endpoint. */
function sendContactForm() {
    const formData = new FormData(contactForm);
    const payload = {
        name: formData.get("name")?.toString().trim(),
        email: formData.get("email")?.toString().trim(),
        message: formData.get("message")?.toString().trim(),
        privacy: formData.get("privacy") === "on"
    };

    return fetch(contactForm.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
}

/** Reads a JSON response and rejects invalid server responses. */
async function readJsonResponse(response) {
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        throw new Error("Invalid server response");
    }

    return response.json();
}

/** Updates the form while a request is running. */
function setFormLoadingState(loading) {
    isSubmitting = loading;
    contactSubmitButton.textContent = loading
        ? getContactText("submitLoading", "Wird gesendet...")
        : getContactText("submitButton", "Senden");

    if (loading) {
        contactFormStatus.textContent = "";
        contactFormStatus.className = "contact-form-status";
    }

    updateSubmitButton();
}

/** Displays the success message, resets the form, and disables submission. */
function showContactFormSuccess() {
    contactFormStatus.textContent = getContactText(
        "contactSuccess",
        "Deine Nachricht wurde erfolgreich gesendet."
    );
    contactFormStatus.className = "contact-form-status contact-form-status-success";
    contactForm.reset();

    contactFields.forEach((field) => {
        field.classList.remove("is-invalid");
        field.setAttribute("aria-invalid", "false");
        document.getElementById(`${field.id}Error`).textContent = "";
    });
}

/** Displays a safe, user-friendly submission error. */
function showContactFormError(error) {
    console.error("Contact form error:", error);
    contactFormStatus.textContent = getContactText(
        "contactError",
        "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut."
    );
    contactFormStatus.className = "contact-form-status contact-form-status-error";
}
