var currentVideo = 1;
var videoCount = document.querySelectorAll('.video-container2').length;
var videos = document.querySelectorAll('.video-container2 iframe');

// JavaScript function to show a specific video container
function showVideo(step) {
    // Pause the current video
    videos[currentVideo - 1].src = videos[currentVideo - 1].src; // Reloads the iframe to pause the video

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

// Start playing the first video
videos[currentVideo - 1].src = videos[currentVideo - 1].src; // Reloads the iframe to play the video