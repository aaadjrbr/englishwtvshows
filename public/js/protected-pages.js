        // Check if the user is authenticated on this protected page
        if (!isAuthenticated()) {
            // Redirect to the login page or a specific access denied page
            window.location.href = '../../nao-conectado.html'; // Replace with your login page URL or access denied page URL
        } else {
            // Get the user's name from localStorage
            const userName = getUserName();

            // Display the welcome message with the user's name
            const welcomeMessage = document.getElementById("welcomeMessage");
            welcomeMessage.textContent = `Bem-vindo(a), ${userName}! 🤗`;
        }

        // Function to get the user's name from localStorage
        function getUserName() {
            // Retrieve the session token from localStorage
            const sessionToken = localStorage.getItem('sessionToken');

            // Find the user with the corresponding session token
            const user = users.find(u => u.nome === sessionToken);

            if (user) {
                return user.nome; // Assuming the user object has a "nome" property
            }

            // Return a default value or handle the case where the user's name is not found
            return "Aluno(a)";
        }

        // Function to clear localStorage and logout
        function logout() {
            // Remove the session token from localStorage
            localStorage.removeItem('sessionToken');

            // Redirect to the index page
            window.location.href = './index.html';
        }

        // Attach the logout function to your logout button
        document.getElementById("logoutButton").addEventListener("click", logout);