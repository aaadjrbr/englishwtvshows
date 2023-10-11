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
