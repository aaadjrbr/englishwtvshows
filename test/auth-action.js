import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.10/firebase-app.js";
import { getAuth, applyActionCode, confirmPasswordReset } from "https://www.gstatic.com/firebasejs/10.6.10/firebase-auth.js";

// Initialize Firebase
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

// Function to handle password reset confirmation
function handlePasswordReset() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (newPassword !== confirmPassword) {
      document.getElementById('reset-password-message').textContent = 'Passwords do not match.';
      return;
    }
    confirmPasswordReset(auth, actionCode, newPassword)
      .then(() => {
        document.getElementById('reset-password-message').textContent = 'Your password has been reset successfully.';
        document.getElementById('back-to-login').style.display = 'block'; // Display the back to login link
      })
      .catch((error) => {
        document.getElementById('reset-password-message').textContent = `Error: ${error.message}`;
      });
  }
  

// Extract the mode and actionCode from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');
const actionCode = urlParams.get('oobCode');

// Show the appropriate UI based on the mode
switch (mode) {
  case 'resetPassword':
    // Show password reset UI
    document.getElementById('reset-password').style.display = 'block';
    document.getElementById('reset-password-btn').addEventListener('click', handlePasswordReset);
    break;
  case 'verifyEmail':
    // Process email verification
    applyActionCode(auth, actionCode)
      .then(() => {
        document.getElementById('verify-email').style.display = 'block';
        document.getElementById('message').textContent = 'Email verified successfully!';
      })
      .catch((error) => {
        document.getElementById('verify-email').style.display = 'block';
        document.getElementById('message').textContent = `Error: ${error.message}`;
      });
    break;
  // Add other cases as necessary
}
