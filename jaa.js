// ----------------------
// DOM
// ----------------------
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

// ----------------------
// Validation Functions
// ----------------------
function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.style.border = "2px solid red";
        return false;
    } else {
        nameError.textContent = "";
        nameInput.style.border = "2px solid green";
        return true;
    }
}

function validateEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailInput.style.border = "2px solid red";
        return false;
    } else if (!emailInput.value.match(pattern)) {
        emailError.textContent = "Enter a valid email";
        emailInput.style.border = "2px solid red";
        return false;
    } else {
        emailError.textContent = "";
        emailInput.style.border = "2px solid green";
        return true;
    }
}

function validateMessage() {
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required";
        messageInput.style.border = "2px solid red";
        return false;
    } else {
        messageError.textContent = "";
        messageInput.style.border = "2px solid green";
        return true;
    }
}

// ----------------------
// Events
// ----------------------
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();
    
    if (nameValid && emailValid && messageValid) {
        successMessage.textContent = "Thank you! Your message has been sent successfully.";
        successMessage.style.color = "green";
        form.reset();
        // Reset borders
        nameInput.style.border = "";
        emailInput.style.border = "";
        messageInput.style.border = "";
    } else {
        successMessage.textContent = "";
    }
});