import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to protect a page
export function protectPage() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not logged in, redirect to login page
      window.location.href = './test.html';
    } else {
      // User is logged in, display welcome message
      const welcomeMessage = `Hi ${user.displayName || 'user'}, welcome to the protected page!`;
      document.getElementById('welcome-message').textContent = welcomeMessage;
    }
  });
}
  
// Logout function
export function logout() {
    signOut(auth).then(() => {
      // Sign-out successful.
  
      // Optionally clear any auth-related data from local storage if you have set any
      localStorage.removeItem('isLoggedIn'); // If you're using this to track auth state
  
      // Redirect to the login page or home page
      window.location.href = './test.html';
    }).catch((error) => {
      // An error happened during the logout
      console.error("Logout failed", error);
    });
  }
