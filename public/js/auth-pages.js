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
    // User is authenticated, show the hidden content
    const hiddenContent = document.getElementById("hiddenContent");
    hiddenContent.style.display = "block";

    // Show the success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    if (rememberMe) {
        // Save the user's credentials to localStorage if "Remember Me" is checked
        localStorage.setItem("rememberedNome", inputNome);
        localStorage.setItem("rememberedSenha", inputSenha);
    } else {
        // Clear the remembered credentials if "Remember Me" is not checked
        localStorage.removeItem("rememberedNome");
        localStorage.removeItem("rememberedSenha");
    }

    // Hide the error message (if it was displayed previously)
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "none";

    // Automatically hide the success message after 5 seconds
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 5000); // 5000 milliseconds = 5 seconds
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