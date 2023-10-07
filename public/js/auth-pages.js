// User data
const users = [
    {
        nome: "adj",
        senha: "adj"
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
        // Set a session cookie with an expiration time (1 hour)
        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000); // 1 hour
        document.cookie = `sessionToken=${inputNome}; expires=${expirationTime.toUTCString()}`;

        // Redirect to a different page after successful login
        window.location.href = '../../test.html'; // Replace with your desired page URL

    } else {
        // Authentication failed, show the error message
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";

        // Automatically hide the error message after 5 seconds
        setTimeout(function() {
            errorMessage.style.display = "none";
        }, 5000); // 5000 milliseconds = 5 seconds
    }
});

// Check if the user is authenticated on page load
function isAuthenticated() {
    const cookies = document.cookie.split('; ');
    const sessionCookie = cookies.find(cookie => cookie.startsWith('sessionToken='));

    // Check if the session token is present and not expired
    if (sessionCookie) {
        const expirationDate = new Date(sessionCookie.split('=')[1]);
        return expirationDate > new Date(); // Check if it's still valid
    }
    return false;
}

if (isAuthenticated()) {
    // User is authenticated, show the hidden content
    const hiddenContent = document.getElementById("hiddenContent");
    hiddenContent.style.display = "block";
}

// Function to clear the session cookie on logout
function logout() {
    document.cookie = 'sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Redirect to the login page or any other desired page
    window.location.href = '../../test.html'; // Replace with your login page URL
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

        // Get references to the password input and the reveal password button
        const passwordInput = document.getElementById('senha');
        const togglePasswordButton = document.getElementById('togglePassword');

        function togglePasswordVisibility() {
            const senhaInput = document.getElementById("senha");
            const toggleIcon = document.getElementById("togglePassword");

            if (senhaInput.type === "password") {
                senhaInput.type = "text";
                toggleIcon.innerHTML = "🙉"; //
            } else {
                senhaInput.type = "password";
                toggleIcon.innerHTML = "🙈"; // 
            }
        }

        // Attach the togglePasswordVisibility function to the button's click event
        togglePasswordButton.addEventListener('click', togglePasswordVisibility);