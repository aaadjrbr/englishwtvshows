
document.addEventListener('DOMContentLoaded', function() {
  // Trigger animation when the DOM is fully loaded
  animateText();
});

function animateText() {
  const textElements = document.querySelectorAll('.animate-text');
  
  textElements.forEach((element, index) => {
    const delay = index * 500; // Add a delay for each element
    setTimeout(() => {
      element.style.animationPlayState = 'running';
    }, delay);
  });
}


// Set the time delay in milliseconds (2 seconds in this example)
const timeDelay = 2000;

// Function to perform the redirection
function redirect() {
  window.location.replace("./index-second.html"); // Replace with your desired URL
}

// Set a timer to call the redirect function after the specified time delay
setTimeout(redirect, timeDelay);

// Add an event listener for the popstate event to trigger the redirection
window.addEventListener('popstate', function() {
  redirect();
});

// Store a state to prevent multiple redirects in the session history
window.history.replaceState({ page: 1 }, '', window.location.href);
