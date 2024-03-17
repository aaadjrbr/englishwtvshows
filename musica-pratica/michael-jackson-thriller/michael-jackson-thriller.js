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
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part1.mp3?alt=media&token=0dcdab23-4f29-4f54-b202-67602ad3a14a"
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
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part2.mp3?alt=media&token=ad717254-713b-40f2-a4f9-76384afafdac"
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
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part3.mp3?alt=media&token=49bdb9b4-034d-4891-88ea-40176027dff7"
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
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part4.mp3?alt=media&token=d4e9080d-07c8-43a0-a090-0e758d0d42c3"
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
      audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part5.mp3?alt=media&token=b31855b1-2757-4e9c-b1e3-392a5639e46b"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part6.mp3?alt=media&token=6f4b838e-bfbd-420f-9aa5-fe801d7f4bb5"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part7.mp3?alt=media&token=bb89fd4c-259e-4f0a-8482-e91ab132ff3c"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part8.mp3?alt=media&token=ccf25abc-65d1-48f7-a473-8118fcbd1329"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part9.mp3?alt=media&token=99a22fb4-a45d-460b-9fa3-6c4c96af028d"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part10.mp3?alt=media&token=68938763-81e6-4998-ae82-b4b0b4a74efa"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part11.mp3?alt=media&token=05b409f2-a144-49fb-8aa5-6982e47a82f1"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part12.mp3?alt=media&token=d7dcf360-aedf-45c4-84d9-50a8688df641"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part13.mp3?alt=media&token=ab592530-1e74-4eac-a9a0-de9a4a06b3c2"
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
    audioURL: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/music-section%2Fmichael-jackson%2Fmichael-jackson-thriller-part14.mp3?alt=media&token=27596c7e-137e-49df-a3f4-0cc0035b6d84"
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
      phraseContainer.textContent = "Parabéns! Você mandou bem na música! Pronto para dar um passo adiante? É só clicar em 'Voltar' e seguir praticando! 🥳";
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