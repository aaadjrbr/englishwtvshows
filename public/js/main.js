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


// LOADER STUFF

document.addEventListener("DOMContentLoaded", function () {
  // Array of phrases with line breaks
  const phrases = [
    "<strong>Você sabia?</strong><br>Com 2.000 palavras você<br> entende 80% do inglês falado 🤔",
    "<strong>A língua inglesa é incrível!</strong><br>Ela tem mais de 170.000 palavras! 📚",
    "<strong>Curiosidade:</strong><br>Existem mais de 50 sotaques diferentes em inglês! 🗣️",
    "<strong>Fatos Interessantes:</strong><br>O inglês é a língua oficial em 59 países! 🌎",
    "<strong>Vocabulário Rico:</strong><br>O inglês tem palavras para tudo, até para o<br> medo de ficar sem celular (nomofobia)! 😱📱",
    "<strong>Origem Curiosa:</strong><br>O inglês tem influências do latim, <br>francês, alemão e até mesmo do árabe! 🌍",
    "<strong>Palavras Longas:</strong><br>O inglês tem palavras enormes, como<br> 'pneumonoultramicroscopicsilicovolcanoconiosis'! 😮",
    "<strong>A língua do negócio:</strong><br>O inglês é a língua mais usada em<br> negócios e comércio internacional! 💼",
    "<strong>Idioma Universal:</strong><br>O inglês é a língua franca da<br> internet e da aviação! ✈️🌐",
    "<strong>Curiosidade:</strong><br>Algumas palavras em inglês não têm<br> tradução direta, como 'awkward'! 🤷‍♂️",
  ];
  

  // Select a random phrase from the array
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];

  // Update the loader text with the random phrase
  const loaderPhrase = document.getElementById("loader-phrase");
  loaderPhrase.innerHTML = randomPhrase;

  // After some time (you can adjust the delay), hide the loader and display the content
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 2100); // 2.1 seconds delay (adjust as needed)
});