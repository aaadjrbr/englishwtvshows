import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Initialize Firebase as before...
const firebaseConfig = {
    apiKey: "AIzaSyBAGs-2m-qzleMxKS7-G4Vi53yOwhm99SA",
    authDomain: "english-with-tv-shows.firebaseapp.com",
    projectId: "english-with-tv-shows",
    storageBucket: "english-with-tv-shows.appspot.com",
    messagingSenderId: "382097760520",
    appId: "1:382097760520:web:a8a33c9143a76e21320cbd",
    measurementId: "G-M2SEMVXFPL"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to send a password reset email and redirect to the login page
function resetPassword() {
  const email = document.getElementById('reset-email').value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      document.getElementById('message').innerText = 'Password reset email sent! Please check your inbox.';
      // Redirect to the login page after a short delay
      setTimeout(() => {
        window.location.href = 'test.html'; // Update this to the path of your login page
      }, 3000); // 3-second delay before redirecting
    })
    .catch((error) => {
      const errorMessage = error.message;
      document.getElementById('message').innerText = `Error: ${errorMessage}`;
    });
}

// Attach event listener to the reset password button
document.getElementById('reset-password-btn').addEventListener('click', resetPassword);