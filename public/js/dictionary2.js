/*
function translateText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    // Remove leading/trailing spaces and punctuation
    const cleanedInput = inputText.replace(/^[.,!?'"]+|[.,!?'"]+$/g, '');

    const translatedTextElement = document.getElementById('translatedText');
    const notFoundTextElement = document.getElementById('notFoundText');

    if (dictionary.hasOwnProperty(cleanedInput)) {
        // Translation found, display it
        const translatedText = dictionary[cleanedInput];
        translatedTextElement.style.display = 'block';
        translatedTextElement.textContent = translatedText;

        // Clear the translated text after 10 seconds
        setTimeout(function () {
            translatedTextElement.style.display = 'none';
            translatedTextElement.textContent = '';
        }, 10000); // 10,000 milliseconds (10 seconds)

        // Hide the "Word not found" message
        notFoundTextElement.style.display = 'none';
    } else {
        // Word not found, show the message and hide the translation
        translatedTextElement.style.display = 'none';
        translatedTextElement.textContent = '';

        // Display the "Word not found" message with a clickable link to Google Translate
        notFoundTextElement.style.display = 'block';
        notFoundTextElement.innerHTML = 'Desculpe não encontrei essa palavra &#128533. Você pode tentar o <a href="https://translate.google.com/" target="_blank">Google Tradutor</a>';

        // Clear the "Word not found" message after 10 seconds
        setTimeout(function () {
            notFoundTextElement.style.display = 'none';
            notFoundTextElement.innerHTML = '';
        }, 10000); // 10,000 milliseconds (10 seconds)
    }
}

// Add an event listener to the input field for the "Enter" key
const inputField = document.getElementById('inputText');
inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        translateText(); // Call the translateText function when Enter is pressed
    }
});


// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
*/




// User data
const users = [
    {
        nome: "teste",
        senha: "teste"
    },
    // Add more users as needed
];

// Function to handle form submission (authentication)
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const inputNome = document.getElementById("nome").value;
    const inputSenha = document.getElementById("senha").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    // Check if the entered nome and senha are correct (based on your sample data)
    const user = users.find(u => u.nome === inputNome && u.senha === inputSenha);

    // After the user is authenticated
    if (user) {
        // Store the session token and timestamp in localStorage
        const currentTime = new Date().getTime();
        localStorage.setItem('sessionToken', inputNome);
        localStorage.setItem('sessionTimestamp', currentTime);

        // Redirect to a different page after successful login
        window.location.href = '../../bem-vindo.html'; // Replace with your desired page URL

    } else {
        // Authentication failed, show the error message
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";

        // Automatically hide the error message after 5 seconds
        setTimeout(function () {
            errorMessage.style.display = "none";
        }, 5000); // 5000 milliseconds = 5 seconds
    }
});

// Check if the user is authenticated on page load
function isAuthenticated() {
    // Check if the session token and timestamp are present in localStorage
    const sessionToken = localStorage.getItem('sessionToken');
    const sessionTimestamp = localStorage.getItem('sessionTimestamp');

    if (sessionToken && sessionTimestamp) {
        // Check if the session is expired after 1 hour (3600000 milliseconds)
        if (new Date().getTime() - parseInt(sessionTimestamp) <= 3600000) {
            return true;
        } else {
            // Session has expired, clear the session data from localStorage
            localStorage.removeItem('sessionToken');
            localStorage.removeItem('sessionTimestamp');
        }
    }

    return false;
}


// Function to clear the session token from localStorage on logout
function logout() {
    // Remove the session token from localStorage
    localStorage.removeItem('sessionToken');

    // Redirect to the login page or any other desired page
    window.location.href = '../../index.html'; // Replace with your login page URL
}

// Attach the logout function to your logout button or link
document.getElementById("logoutButton").addEventListener("click", logout);

// Rest of your code remains the same

// Check if remembered credentials exist in localStorage
const rememberedNome = localStorage.getItem("rememberedNome");
const rememberedSenha = localStorage.getItem("rememberedSenha");

if (rememberedNome && rememberedSenha) {
    // Fill the login form fields if credentials are remembered
    document.getElementById("nome").value = rememberedNome;
    document.getElementById("senha").value = rememberedSenha;

    // After filling the form fields, hide the error message
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "none";

    // Now, we will check if the user is authenticated using the stored credentials
    const user = users.find(u => u.nome === rememberedNome && u.senha === rememberedSenha);

    if (user) {
        // User is authenticated, show the hidden content
        const hiddenContent = document.getElementById("hiddenContent");
        hiddenContent.style.display = "block";
    } else {
        // Authentication failed, show the error message
        errorMessage.style.display = "block";
    }
}



