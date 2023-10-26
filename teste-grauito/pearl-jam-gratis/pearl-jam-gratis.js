document.addEventListener("DOMContentLoaded", function () {
  const songsData = [
    {
      partLabel: "Parte 1",
      phrases: [
        "Oh where, o where, can my ...",
        "The Lord took her away from ...",
        "She's gone to ...",
        "So I've got to be ...",
        "So I can see my ...",
        "When I leave this ...",
        // Add four more phrases here for the first part
      ],
      options: [
        ["baby be", "lady be"],
        ["my", "me"],
        ["haven", "heaven"],
        ["good", "god"],
        ["baby", "bubbly"],
        ["girl", "world"],

        // Add four more sets of options here for the first part
      ],
      answers: [
        ["baby be"],
        ["me"],
        ["heaven"],
        ["good"],
        ["baby"],
        ["world"],
        // Add four more sets of answers here for the first part
      ],
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fpearl-jam%2Flast-kiss-audios%2FLast-kiss-part1.mp3?alt=media&token=3137d7a6-3095-4294-909f-dfa591c84446&_gl=1*khvvl6*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzNDE3NjEuMzcuMC4w" // Replace with your Google FireBase link for each part
    },
    {
      partLabel: "Parte 2",
      phrases: [
          "We were out on a ...",
          "In my daddy's ...",
          "We hadn't driven very ...",
          "There in the road straight ...",
          "A car was ...",
          "The engine was ...",
      ],
      options: [
          ["day", "date"],
          ["car", "call"],
          ["fan", "far"],
          ["above", "ahead"],
          ["stalled", "stayed"],
          ["death", "dead"],
      ],
      answers: [
          ["date"],
          ["car"],
          ["far"],
          ["ahead"],
          ["stalled"],
          ["dead"],
      ],
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fpearl-jam%2Flast-kiss-audios%2FLast-kiss-part2.mp3?alt=media&token=3456c0a3-7398-4112-9a2c-04a59b1e6f85&_gl=1*1qs55ii*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzNDI0NDMuNjAuMC4w" // Replace with your Google FireBase link for each part
    },
    {
      partLabel: "Parte 3",
      phrases: [
        "I couldn't ...",
        "so I swerved to the ...",
        "I'll never forget the sound that ...",
        "The screaming ...",
        "the busting ...",
        "The painful scream I heard...",
      ],
      options: [
        ["stop", "stay"],
        ["rate", "right"],
        ["night", "nice"],
        ["tears", "tires"],
        ["gas", "glass"],
        ["last", "least"],
      ],
      answers: [
        ["stop"],
        ["right"],
        ["night"],
        ["tires"],
        ["glass"],
        ["last"],
      ],
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fpearl-jam%2Flast-kiss-audios%2FLast-kiss-part3.mp3?alt=media&token=f813a50d-8ea9-4ea7-93e8-4be282a35891&_gl=1*dpy8pt*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzNDI0OTYuNy4wLjA." // Replace with your Google FireBase link for each part
    },
    {
      partLabel: "Parte 4",
      phrases: [
        "When I woke ...",
        "the rain was falling ...",
        "There were people standing all ...",
        "Something ...",
        "flowing through my ...",
        "Somehow I found my baby that ...",
      ],
      options: [
        ["out", "up"],
        ["dawn", "down"],
        ["around", "abound"],
        ["warm", "worse"],
        ["eyes", "lies"],
        ["night", "right"],
      ],
      answers: [
        ["up"],
        ["down"],
        ["around"],
        ["warm"],
        ["eyes"],
        ["night"],
      ],
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fpearl-jam%2Flast-kiss-audios%2FLast-kiss-part4.mp3?alt=media&token=e1e06bc0-851a-4fd6-be1f-f9064cc5db47&_gl=1*mkv5b8*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzNDI1MzEuNjAuMC4w" // Replace with your Google FireBase link for each part
    },
    // Add more parts with labels, phrases, options, and answers here
  ];

  let currentSongIndex = 0;
  let currentPhraseIndex = 0;
  let score = 0;
  let currentAudio = null;

  const phraseContainer = document.getElementById("phrase");
  const partLabelContainer = document.getElementById("part-label");
  const optionsContainer = document.getElementById("options-container");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const skipButton = document.getElementById("skip-button");
  const goBackButton = document.getElementById("go-back-button");
  const restartButton = document.getElementById("restart-button");
  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");
  const restartAudioButton = document.getElementById("restart-audio-button");
  const audio = document.getElementById("audio");
  const fastForwardImage = document.getElementById("fast-forward-button");
  const rewindImage = document.getElementById("rewind-button");


  // Forward & Rewind Buttons
  fastForwardImage.addEventListener("click", fastForward);
  rewindImage.addEventListener("click", rewind);

// Function to fast forward 3 seconds
function fastForward() {
  if (currentAudio) {
    currentAudio.currentTime += 3; // Adjust the time you want to fast forward by
  }
}

// Function to rewind 3 seconds
function rewind() {
  if (currentAudio) {
    currentAudio.currentTime -= 3; // Adjust the time you want to rewind by
  }
}
  // Function to load audio
  function loadAudio(audioUrl) {
    if (currentAudio) {
      currentAudio.pause();
    }
    currentAudio = new Audio(audioUrl);
    audio.src = audioUrl;
    audio.load();
    
    // Reattach event listeners for audio control buttons
    playButton.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.play();
      }
    });

    pauseButton.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    });

    restartAudioButton.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.currentTime = 0;
        currentAudio.play();
      }
    });
  }

  // Function to load a phrase
  function loadPhrase(songIndex, phraseIndex) {
    const currentSong = songsData[songIndex];
    const phrase = currentSong.phrases[phraseIndex];
    const options = currentSong.options[phraseIndex];

    phraseContainer.textContent = phrase;
    partLabelContainer.textContent = currentSong.partLabel;
    optionsContainer.innerHTML = "";

    options.forEach((option, index) => {
      const optionBox = document.createElement("div");
      optionBox.classList.add("option-box");
      optionBox.textContent = option;
      optionBox.addEventListener("click", () => {
        selectOption(option, songIndex, phraseIndex);
      });

      optionsContainer.appendChild(optionBox);
    });

    loadAudio(currentSong.audioURL);
    scoreDisplay.textContent = `Frases Concluídas: ${score}`;
  }


// Function to select an option
function selectOption(selectedOption, songIndex, phraseIndex) {
  const currentSong = songsData[songIndex];
  const currentAnswers = currentSong.answers[phraseIndex];
  const optionBoxes = optionsContainer.querySelectorAll(".option-box");

  optionBoxes.forEach((box) => {
    box.classList.remove("correct", "wrong", "inactive");
  });

  if (currentAnswers.includes(selectedOption)) {
    optionBoxes.forEach((box) => {
      if (box.textContent === selectedOption) {
        box.classList.add("correct");
      } else {
        box.classList.add("inactive");
      }
    });
    phraseContainer.textContent = "✔️ Correto!";
    score++;
    setTimeout(() => {
      nextPhrase(songIndex, phraseIndex);
    }, 1000);
  } else {
    optionBoxes.forEach((box) => {
      if (box.textContent === selectedOption) {
        box.classList.add("wrong");
      } else {
        box.classList.add("inactive");
      }
    });
    phraseContainer.textContent = "😕 Incorreto. Tente novamente.";
    setTimeout(() => {
      optionBoxes.forEach((box) => {
        box.classList.remove("wrong");
        box.classList.remove("inactive");
      });
      phraseContainer.textContent = songsData[songIndex].phrases[phraseIndex];
    }, 1500);
  }
}



  // Function to go to the next phrase or part
  function nextPhrase(songIndex, phraseIndex) {
    if (songIndex === songsData.length - 1 && phraseIndex === songsData[songIndex].phrases.length - 1) {
      phraseContainer.textContent = "Assine já para a versão completa! Vá p/ início e comece hoje!";
      partLabelContainer.textContent = "";
      optionsContainer.innerHTML = "";
      scoreDisplay.textContent = `Frases Concluídas: ${score}`;
      skipButton.style.display = "none";
    } else if (phraseIndex < songsData[songIndex].phrases.length - 1) {
      loadPhrase(songIndex, phraseIndex + 1);
    } else if (songIndex < songsData.length - 1) {
      currentAudio.pause();
      currentSongIndex++;
      currentPhraseIndex = 0;
      score = 0;
      loadPhrase(currentSongIndex, currentPhraseIndex);
    }

    // Reattach event listeners for audio control buttons
    playButton.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.play();
      }
    });

    pauseButton.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    });

    restartAudioButton.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.currentTime = 0;
        currentAudio.play();
      }
    });
  }

  // Add an event listener to the restart button
  restartButton.addEventListener("click", () => {
    currentPhraseIndex = 0;
    score = 0;
    loadPhrase(currentSongIndex, currentPhraseIndex);
  });

  // Add an event listener to the skip button
  skipButton.addEventListener("click", () => {
    if (currentSongIndex < songsData.length - 1) {
      if (currentAudio) {
        currentAudio.pause();
      }
      currentSongIndex++;
      currentPhraseIndex = 0;
      score = 0;
      loadPhrase(currentSongIndex, currentPhraseIndex);
    }
  });

  // Add an event listener to the go back button
  goBackButton.addEventListener("click", () => {
    if (currentSongIndex > 0) {
      currentSongIndex--;
      currentPhraseIndex = 0;
      score = 0;
      loadPhrase(currentSongIndex, currentPhraseIndex);
    }
  });

  // Initialize the first phrase and audio
  loadPhrase(currentSongIndex, currentPhraseIndex);
  loadAudio(songsData[currentSongIndex].audioURL);
});