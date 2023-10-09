var currentVideo = 1;
var videoCount = 3; // Total number of videos

// JavaScript function to show a specific video container
function showVideo(step) {
    // Hide the current video container
    document.getElementById('video' + currentVideo).classList.remove('active-video2');

    // Calculate the next video index
    var nextVideo = currentVideo + step;

    // Ensure the next video index is within bounds
    if (nextVideo < 1) {
        nextVideo = videoCount;
    } else if (nextVideo > videoCount) {
        nextVideo = 1;
    }

    // Show the selected video container
    document.getElementById('video' + nextVideo).classList.add('active-video2');

    // Update the current video variable
    currentVideo = nextVideo;
}