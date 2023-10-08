document.addEventListener("DOMContentLoaded", function () {
  const songsData = [
    {
      partLabel: "Parte 1",
      phrases: [
        "Oh where, o where, can my ....",
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
      driveFileId: "1Cw0XZHlMi0oqyHXVS8dEXxN7UX6oW8dp" // Replace with your Google Drive file ID for the first part
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
      driveFileId: "17Z3486If9dsitFA2D-Rr257Cfg-eU0em" // Replace with your Google Drive file ID for the second part
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
      driveFileId: "1VEOE_Fio7GvaS3k9KiDkoEF2XkXLv-9E" // Replace with your Google Drive file ID for the second part
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
      driveFileId: "1EWFqEI3pU63NfxyR5kJOuIh4GuKkKOR4" // Replace with your Google Drive file ID for the second part
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


  // Add event listeners for the audio control buttons

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


  // Add an event listener to the restart button
restartButton.addEventListener("click", () => {
  // Reset the current song and phrase index, as well as the score
  currentSongIndex = 0;
  currentPhraseIndex = 0;
  score = 0;
  
  // Load the first phrase of the first part
  loadPhrase(currentSongIndex, currentPhraseIndex);
  
  // Show the skip button
  skipButton.style.display = "block";
});

// Add an event listener to the skip button
skipButton.addEventListener("click", () => {
  // Check if there are more parts to skip to
  if (currentSongIndex < songsData.length - 1) {
    // Pause the current audio before loading the new part
    if (currentAudio) {
      currentAudio.pause();
    }

    // Increase the current song index to skip to the next part
    currentSongIndex++;
    currentPhraseIndex = 0; // Reset the phrase index for the new part
    score = 0; // Reset the score for the new part
    // Load the first phrase of the new part
    loadPhrase(currentSongIndex, currentPhraseIndex);
  }
});

    // Add an event listener to the go back button
goBackButton.addEventListener("click", () => {
  // Check if there are previous parts to go back to
  if (currentSongIndex > 0) {
    // Decrease the current song index to go back to the previous part
    currentSongIndex--;
    currentPhraseIndex = 0; // Reset the phrase index for the previous part
    score = 0; // Reset the score for the previous part
    // Load the first phrase of the previous part
    loadPhrase(currentSongIndex, currentPhraseIndex);
    
    // Show the skip button again
    skipButton.style.display = "block";
  }
});

function loadAudio(driveFileId) {
  const driveFileURL = `https://drive.google.com/uc?id=${driveFileId}`;
  currentAudio = new Audio(driveFileURL);
  audio.src = "";
  audio.load();
}

  function loadPhrase(songIndex, phraseIndex) {
      const currentSong = songsData[songIndex];
      const phrase = currentSong.phrases[phraseIndex];
      const options = currentSong.options[phraseIndex];
      const audioId = `audio-${songIndex}-${phraseIndex}`; // Unique audio element ID
    
      // Store the current playback position
      const currentTime = audio.currentTime;
    
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
    
      loadAudio(currentSong.driveFileId, audioId);
      scoreDisplay.textContent = `Frases Concluídas: ${score}`;
    
      // Set the playback position to the stored value
      audio.currentTime = currentTime;
    }      
    

  function selectOption(selectedOption, songIndex, phraseIndex) {
      const currentSong = songsData[songIndex];
      const currentAnswers = currentSong.answers[phraseIndex];
    
      const optionBoxes = optionsContainer.querySelectorAll(".option-box");
    
      // Remove the 'correct' and 'wrong' classes from all option boxes
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
        currentAudio.pause(); // Pause the audio before moving to the next part
        // Increase the current song index to skip to the next part
        currentSongIndex++;
        currentPhraseIndex = 0; // Reset the phrase index for the new part
        score = 0; // Reset the score for the new part
        // Load the first phrase of the new part
        loadPhrase(currentSongIndex, currentPhraseIndex);
      }
    }

  // Initialize the first phrase and audio
  loadPhrase(currentSongIndex, currentPhraseIndex);
  loadAudio(songsData[currentSongIndex].driveFileId);
});