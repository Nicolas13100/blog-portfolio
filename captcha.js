
function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Veuillez compléter le reCAPTCHA.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
