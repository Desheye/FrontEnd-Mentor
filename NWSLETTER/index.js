const btn = document.getElementById("btn");
const modalPage = document.getElementById("mP");
const emailInput = document.getElementById("name");
const errorMsg = document.querySelector(".errorMsg");

btn.addEventListener("click", function() {
    const emailValue = emailInput.value;
    if (isValidEmail(emailValue)) {
        modalPage.style.visibility = 'visible';
        setTimeout(function() {
            modalPage.style.visibility = 'hidden';
        }, 2000);

        // Clear the email input field
        emailInput.value = '';
    } else {
        showError();
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to show error message
function showError() {
    errorMsg.style.display = 'block';
}

// Event listener for email input to hide error message while typing
emailInput.addEventListener("input", function() {
    const emailValue = emailInput.value;
    if (isValidEmail(emailValue)) {
        errorMsg.style.display = 'none';
    } else {
        showError();
    }
});
