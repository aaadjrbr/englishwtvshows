import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
const provider = new GoogleAuthProvider();

// Google sign-in
export function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log("Google user signed in:", user.uid);
        // Redirect to a different page or display a success message
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email; // The email of the user's account used
        const credential = GoogleAuthProvider.credentialFromError(error); // The firebase.auth.AuthCredential type that was used
        console.error("Error in Google sign-in:", errorMessage, "Code:", errorCode, "Email:", email, "Credential:", credential);
      });
}


// Email Password Signup
export function signUpWithEmailPassword(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Account created successfully
        console.log("User created:", userCredential.user.uid);
        // You can redirect the user to another page here
      })
      .catch((error) => {
        // Error during account creation
        console.error("Error in user creation:", error.message);
      });
}


// Login function
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-btn').addEventListener('click', function() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          document.getElementById('message').innerText = 'Logged in successfully';
    
          // Redirect to the dashboard page
          window.location.href = './protected-page.html';
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          document.getElementById('message').innerText = errorMessage;
        });
    });
});
