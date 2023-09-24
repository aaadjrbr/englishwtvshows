// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

//PAUSE VIDEO

  // Get a reference to the video element
  var video = document.getElementById("video-bg");

  // Get a reference to the pause button
  var pauseButton = document.getElementById("pauseVideoBtn");

  // Add a click event listener to the button
  pauseButton.addEventListener("click", function () {
    if (video.paused) {
      // If the video is paused, play it
      video.play();
      pauseButton.innerText = "Pausar ⏸️";
    } else {
      // If the video is playing, pause it
      video.pause();
      pauseButton.innerText = "Play ▶️";
    }
  });


  // JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("video-bg");
  video.play();
});
