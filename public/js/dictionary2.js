// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAGs-2m-qzleMxKS7-G4Vi53yOwhm99SA",
    authDomain: "english-with-tv-shows.firebaseapp.com",
    projectId: "english-with-tv-shows",
    storageBucket: "english-with-tv-shows.appspot.com",
    messagingSenderId: "382097760520",
    appId: "1:382097760520:web:a8a33c9143a76e21320cbd",
    measurementId: "G-M2SEMVXFPL"
  };

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Function to handle form submission (authentication)
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const inputNome = document.getElementById("nome").value;
    const inputSenha = document.getElementById("senha").value;

    firebase.auth().signInWithEmailAndPassword(inputNome, inputSenha)
        .then((userCredential) => {
            // Login bem-sucedido
            window.location.href = '../../bem-vindo.html';
        })
        .catch((error) => {
            // Erro no login
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.innerText = error.message;
            errorMessage.style.display = "block";
        });

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

    firebase.auth().signOut().then(() => {
        // Logout bem-sucedido
        window.location.href = '../../index.html';
    }).catch((error) => {
        // Erro no logout
        console.error("Erro ao fazer logout:", error);
    });
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