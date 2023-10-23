document.addEventListener("DOMContentLoaded", function () {
  const phrases = [
    "She goes to the zoo.",
    "She sees a lion.",
    "The lion roars.",
    "She sees an elephant.",
    "The elephant has a long trunk.",
    "She sees a turtle.",
    "The turtle is slow.",
    "She sees a rabbit.",
    "The rabbit has soft fur.",
    "She sees a gorilla.",
    "The gorilla is eating a banana."
  ];

  const redoButton = document.getElementById("redoButton");
  const currentPhraseElement = document.getElementById("currentPhrase");
  const wordContainer = document.getElementById("wordContainer");
  const selectedWordsContainer = document.getElementById("selectedWords");
  const checkButton = document.getElementById("checkButton");
  const hintButton = document.getElementById("hintButton");
  const hintContainer = document.getElementById("hint");
  const resultMessage = document.getElementById("resultMessage");
  const redoQuizButton = document.getElementById("redoQuizButton");

  let currentPhraseIndex = 0;
  let words = getWords(phrases[currentPhraseIndex]);
  let hintDisplayed = false;
  let processInProgress = false;

  checkButton.disabled = true;
  redoQuizButton.style.display = "none";

  function setProcessInProgress(status) {
    processInProgress = status;
    checkButton.disabled = status;
    hintButton.disabled = status;
    redoButton.disabled = status;
  }

  function displayCurrentPhrase() {
    words = getWords(phrases[currentPhraseIndex]);
    currentPhraseElement.textContent = phrases[currentPhraseIndex];
    shuffleArray(words);
    wordContainer.innerHTML = "";
    selectedWordsContainer.textContent = "";
    words.forEach(word => {
      const wordDiv = document.createElement("div");
      wordDiv.textContent = word;
      wordContainer.appendChild(wordDiv);
      wordDiv.style.display = "block";

      wordDiv.addEventListener("click", () => {
        if (wordDiv.style.display !== "none") {
          const clickedWord = wordDiv.textContent;
          wordDiv.style.display = "none";
          selectedWordsContainer.textContent += clickedWord + " ";
          checkButton.disabled = false;
        }
      });
    });

    // Reset hintDisplayed when the phrase changes
    hintDisplayed = false;
  }

  function redo() {
    if (!processInProgress) {
      hintDisplayed = false;
      words = getWords(phrases[currentPhraseIndex]);
      shuffleArray(words);
      selectedWordsContainer.textContent = "";
      hintContainer.style.display = "none";
      checkButton.disabled = true;
      displayCurrentPhrase();
    }
  }

  function redoQuiz() {
    currentPhraseIndex = 0;
    displayCurrentPhrase();
    resultMessage.textContent = "";
    redoQuizButton.style.display = "none";
  }

  redoButton.addEventListener("click", redo);
  redoQuizButton.addEventListener("click", redoQuiz);

  hintButton.addEventListener("click", () => {
    if (!processInProgress) {
      if (!hintDisplayed) {
        hintContainer.style.display = "block";
        hintContainer.textContent = "💡 Sequência correta: " + phrases[currentPhraseIndex];
        hintDisplayed = true;

        setTimeout(() => {
          hintContainer.style.display = "none";
        }, 2500);
      } else {
        // Allow clicking on the "Hint" button again after the hint is displayed
        hintDisplayed = false;
      }
    }
});


  checkButton.addEventListener("click", () => {
    if (!processInProgress) {
      const selectedWords = selectedWordsContainer.textContent.trim().split(" ");
      if (selectedWords.length > 0) {
        setProcessInProgress(true);

        setTimeout(() => {
          const correctWords = getWords(phrases[currentPhraseIndex]);

          if (arraysAreEqual(selectedWords, correctWords)) {
            resultMessage.textContent = "Correto! Mandou bem! 👍😃";

            setTimeout(() => {
              resultMessage.textContent = "";
              currentPhraseIndex++;
              if (currentPhraseIndex < phrases.length) {
                displayCurrentPhrase();
              } else {
                resultMessage.textContent = "🎉 Parabéns! Você completou todas as frases! 🎉";
                redoQuizButton.style.display = "block";
              }
              setProcessInProgress(false);
            }, 1000);
          } else {
            resultMessage.textContent = "Ops! Tente novamente. 😅🔁";

            setTimeout(() => {
              resultMessage.textContent = "";
              hintDisplayed = false;
              words = getWords(phrases[currentPhraseIndex]);
              shuffleArray(words);
              selectedWordsContainer.textContent = "";
              checkButton.disabled = true;
              displayCurrentPhrase();
              setProcessInProgress(false);
            }, 1000);
          }
        }, 1000);
      }
    }
  });

  function getWords(phrase) {
    return phrase.split(" ");
  }

  function arraysAreEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((word, index) => word === arr2[index]);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  displayCurrentPhrase();
});
