document.addEventListener("DOMContentLoaded", function () {
  const songsData = [
    {
      partLabel: "Parte 1",
      phrases: [
        "It's close to ...",
        "and something ...",
        "lurking in the ...",
        // Add four more phrases here for the first part
      ],
      options: [
        ["mid-day", "midnight"],
        ["evil's", "eagles"],
        ["park", "dark"],
        // Add four more sets of options here for the first part
      ],
      answers: [
        ["midnight"],
        ["evil's"],
        ["dark"],
        // Add four more sets of answers here for the first part
      ],
      driveFileId: "1raUJE2jzzs5t-fZMWFOgHH1bGbQtQd60" // Replace with your Google Drive file ID for the first part
    },
    {
      partLabel: "Parte 2",
      phrases: [
        "Under the ...",
        "you see a ...",
        "that almost stops your ...",
        // Add four more phrases here for the first part
      ],
      options: [
        ["bluelight", "moonlight"],
        ["light", "sight"],
        ["heart", "hard"],
        // Add four more sets of options here for the first part
      ],
      answers: [
        ["moonlight"],
        ["sight"],
        ["heart"],
        // Add four more sets of answers here for the first part
      ],
      driveFileId: "12HdolutY8SoPqIQpsyRcXO2W2pDXI7RP" // Replace with your Google Drive file ID for the first part
    },
    {
      partLabel: "Parte 3",
      phrases: [
        "You try to ...",
        "but terror takes the ...",
        "before you ...",
        // Add four more phrases here for the first part
      ],
      options: [
        ["scream", "dream"],
        ["town", "sound"],
        ["fake it", "make it"],
        // Add four more sets of options here for the first part
      ],
      answers: [
        ["scream"],
        ["sound"],
        ["make it"],
        // Add four more sets of answers here for the first part
      ],
      driveFileId: "1B6FxfrZSzJAKjq7G5Ulldg2Ko4BvuaL5" // Replace with your Google Drive file ID for the first part
    },
    {
      partLabel: "Parte 4",
      phrases: [
        "You start to ...",
        "as horror looks you ...",
        "between the ...",
        "you're ...",
        // Add four more phrases here for the first part
      ],
      options: [
        ["freeze", "seize"],
        ["right", "might"],
        ["lies", "eyes"],
        ["terrified", "paralyzed"],
        // Add four more sets of options here for the first part
      ],
      answers: [
        ["freeze"],
        ["right"],
        ["eyes"],
        ["paralyzed"],
        // Add four more sets of answers here for the first part
      ],
      driveFileId: "1V6CYoWe5yrCHJtBYuMk4z7JQj3ZHjX8V" // Replace with your Google Drive file ID for the first part
    },
    {
      partLabel: "Parte 5",
      phrases: [
        "'Cause this is thriller, thriller ...",
        "And no one's gonna ...",
        "From the ...",
        "about to ...",
        // Add four more phrases here for the first part
      ],
      options: [
        ["fight", "night"],
        ["save you", "see you"],
        ["priest", "beast"],
        ["spike", "strike"],
        // Add four more sets of options here for the first part
      ],
      answers: [
        ["night"],
        ["save you"],
        ["beast"],
        ["strike"],
        // Add four more sets of answers here for the first part
      ],
      driveFileId: "1uW4uwobpftlIpXyG1bmPAKkodSZ-kuBj" // Replace with your Google Drive file ID for the first part
    },
  {
    partLabel: "Parte 6",
    phrases: [
        ["You know it's thriller, thriller ..."],
        ["You're fighting for your ..."],
        ["inside a killer ..."],   
      ],
    options: [
        ["fight", "night"],
        ["light", "life"],
        ["chiller", "thriller"],
    ],
    answers: [
        ["night"],
        ["life"],
        ["thriller"],
    ],
    driveFileId: "1YTpaHv0eLoXkGVgleAM19vgShl7jnS11" // Replace with your Google Drive file ID for the second part
  },
  {
    partLabel: "Parte 7",
    phrases: [
        ["You hear the door ..."],
        ["and ..."],
        ["there's nowhere left to ..."],   
      ],
    options: [
        ["slim", "slam"],
        ["idealize", "realize"],
        ["run", "come"],
    ],
    answers: [
        ["slam"],
        ["realize"],
        ["run"],
    ],
    driveFileId: "1i72Z1BcMzWs-LfJsiL4-1lxgsMbmARa0" // Replace with your Google Drive file ID for the second part
  },
  {
    partLabel: "Parte 8",
    phrases: [
        ["You feel the cold ..."],
        ["and ..."],
        ["if you'll ever see the ..."],   
      ],
    options: [
        ["hand", "land"],
        ["thunder", "wonder"],
        ["sun", "one"],
    ],
    answers: [
        ["hand"],
        ["wonder"],
        ["sun"],
    ],
    driveFileId: "1zGlGGhCBlfkayAmGvWKDJ3IxBp2ijtnf" // Replace with your Google Drive file ID for the second part
  },
  {
    partLabel: "Parte 9",
    phrases: [
        ["You closer your ..."],
        ["and ..."],
        ["that this is just ..."],   
      ],
    options: [
        ["lies", "eyes"],
        ["hope", "nope"],
        ["imagination", "information"],
    ],
    answers: [
        ["eyes"],
        ["hope"],
        ["imagination"],
    ],
    driveFileId: "1QmRiV7sE4mv50Qeu6yR3M0KYJ1wCKAY5" // Replace with your Google Drive file ID for the second part
  },
  {
    partLabel: "Parte 10",
    phrases: [
        ["But all the ..."],
        ["you hear a ..."],
        ["creeping up ..."],
        ["you're out of ..."],
      ],
    options: [
        ["style", "while"],
        ["creature", "teacher"],
        ["blind", "behind"],
        ["line", "time"],
    ],
    answers: [
        ["while"],
        ["creature"],
        ["behind"],
        ["time"],
    ],
    driveFileId: "1hLA1IRXfpLB3Yc9-2EAxI4iM97eMd0MG" // Replace with your Google Drive file ID for the second part
  },
  {
    partLabel: "Parte 11",
    phrases: [
        ["They're out to ..."],
        ["there's ..."],
        ["closing in on every ..."],
      ],
    options: [
        ["grab you", "get you"],
        ["demons", "dreamers"],
        ["tide", "side"],
    ],
    answers: [
        ["get you"],
        ["demons"],
        ["side"],
    ],
    driveFileId: "1dHa4wBgdnW2AV89byhZfLeVGO7QLiII-" // Replace with your Google Drive file ID for the second part
  },
  {
    partLabel: "Parte 12",
    phrases: [
        ["They will ..."],
        ["unless you change that ..."],
        ["on your ..."],
      ],
    options: [
        ["finesse you", "possess you"],
        ["slumber", "number"],
        ["dial", "vial"],
    ],
    answers: [
        ["possess you"],
        ["number"],
        ["dial"],
    ],
    driveFileId: "1vQFvY8_SIx0Bwh22E_j1_U1MtWfzBOfv" // Replace with your Google Drive file ID for the second part
  },
  {
    partLabel: "Parte 13",
    phrases: [
        ["Now is the ..."],
        ["for you and I to ..."],
        ["close ..."],
      ],
    options: [
        ["time", "sign"],
        ["huddle", "cuddle"],
        ["forever", "together"],
    ],
    answers: [
        ["time"],
        ["cuddle"],
        ["together"],
    ],
    driveFileId: "1DO9qwz7yd1hNcoHF4Xy62acP2FubPYV5" // Replace with your Google Drive file ID for the second part
  },
  {
    partLabel: "Parte 14",
    phrases: [
        ["All through the ..."],
        ["I'll save you from the ..."],
        ["one the ..."],
        ["I'll make you ..."],
      ],
    options: [
        ["night", "light"],
        ["error", "terror"],
        ["scene", "screen"],
        ["free", "see"],
    ],
    answers: [
        ["night"],
        ["terror"],
        ["screen"],
        ["see"],
    ],
    driveFileId: "1Is8N1MffwAtyVGCeP860Ng6DOOHoSRft" // Replace with your Google Drive file ID for the second part
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
        phraseContainer.textContent = "🥳✨🎉 Parabéns! Você completou tudo.";
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