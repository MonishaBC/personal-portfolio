// Predefined username and password
const validUsername = "admin";
const validPassword = "password123";

// DOM elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const portfolioContainer = document.getElementById('portfolio-container');
const loginContainer = document.getElementById('login-container');

// Function to handle login
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check credentials
    if (username === validUsername && password === validPassword) {
        // Hide login form and show portfolio
        loginContainer.style.display = 'none';
        portfolioContainer.style.display = 'block';
    } else {
        // Show error message
        errorMessage.style.display = 'block';
    }
});
