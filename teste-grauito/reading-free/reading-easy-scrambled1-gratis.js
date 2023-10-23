document.addEventListener("DOMContentLoaded", function() {
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
  let currentPhraseIndex = 0;
  let words = getWords(phrases[currentPhraseIndex]);
  let hintDisplayed = false;

  displayCurrentPhrase();

  redoButton.addEventListener("click", redo);
  checkButton.addEventListener("click", checkOrder);
  hintButton.addEventListener("click", displayHint);

  function redo() {
    hintDisplayed = false; // Reset hint display status
    words = getWords(phrases[currentPhraseIndex]);
    shuffleArray(words);
    selectedWordsContainer.innerHTML = "";
    hintContainer.style.display = "none"; // Hide the hint
    displayCurrentPhrase();
  }

  wordContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV") {
      const clickedWord = event.target.textContent;
      words = words.filter(word => word !== clickedWord);
      selectedWordsContainer.innerHTML += clickedWord + " ";
      event.target.style.display = "none";
    }
  });

  function getWords(phrase) {
    return phrase.split(" ");
  }

  function displayCurrentPhrase() {
    words = getWords(phrases[currentPhraseIndex]);
    currentPhraseElement.textContent = phrases[currentPhraseIndex];
    shuffleArray(words);
    wordContainer.innerHTML = "";
    selectedWordsContainer.innerHTML = "";
    words.forEach(word => {
      const wordDiv = document.createElement("div");
      wordDiv.textContent = word;
      wordContainer.appendChild(wordDiv);
      wordDiv.style.display = "block";
    });
  }

  function checkOrder() {
    const selectedWords = selectedWordsContainer.textContent.trim().split(" ");
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
        }
      }, 1500);
    } else {
      resultMessage.textContent = "Ops! Tente novamente. 😅🔁";

      setTimeout(() => {
        resultMessage.textContent = "";
        hintDisplayed = false; // Reset hint display status
        words = getWords(phrases[currentPhraseIndex]);
        shuffleArray(words);
        selectedWordsContainer.innerHTML = "";
        displayCurrentPhrase();
      }, 1500);
    }
  }

  function displayHint() {
    if (!hintDisplayed) {
      hintContainer.style.display = "block";
      hintContainer.innerHTML = "💡 Sequência correta: " + phrases[currentPhraseIndex];
      hintDisplayed = true;

      setTimeout(() => {
        hintContainer.style.display = "none";
      }, 2500);
    }
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
});
