    // Set the time delay in milliseconds (5 seconds in this example)
    const timeDelay = 2000;

    // Function to perform the redirection
    function redirect() {
      window.location.href = "./index-second.html"; // Replace with your desired URL
    }

    // Set a timer to call the redirect function after the specified time delay
    setTimeout(redirect, timeDelay);