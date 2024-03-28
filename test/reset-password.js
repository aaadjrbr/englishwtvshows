// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, confirmPasswordReset } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Initialize Firebase using your existing configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAGs-2m-qzleMxKS7-G4Vi53yOwhm99SA",
    authDomain: "english-with-tv-shows.firebaseapp.com",
    projectId: "english-with-tv-shows",
    storageBucket: "english-with-tv-shows.appspot.com",
    messagingSenderId: "382097760520",
    appId: "1:382097760520:web:a8a33c9143a76e21320cbd",
    measurementId: "G-M2SEMVXFPL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Extract the oobCode from the URL
const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get('oobCode');

// Handle the password reset form submission
document.getElementById('password-reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    confirmPasswordReset(auth, oobCode, newPassword)
        .then(() => {
            // Password reset successful
            document.getElementById('message').innerText = 'Your password has been reset successfully.';
            // Redirect the user to the login page or show a success message
            window.location.href = './test.html'; // Assuming the login page is login.html
        })
        .catch((error) => {
            // Error occurred
            let errorMessage = error.message;
            if (error.code === 'auth/invalid-action-code') {
                errorMessage = 'Invalid or expired password reset link.';
            }
            document.getElementById('message').innerText = `Error: ${errorMessage}`;
        });
});
