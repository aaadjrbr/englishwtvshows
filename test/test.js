const phrases = [
    { portuguese: 'Este é um gato.', english: 'This is a cat.' },
    { portuguese: 'A água é importante.', english: 'Water is important.' },
    { portuguese: 'Eu gosto de aprender.', english: 'I like to learn.' }
];

const phraseContainer = document.getElementById("original__text");
const wordContainer = document.querySelector(".word__container");
const feedbackContainer = document.getElementById("feedback_container");
const checkButton = document.querySelector(".check_button");
const skipButton = document.querySelector(".skip_button");

let currentPhraseIndex = 0;
let currentPhraseWords = [];

// Array to store the selected words in the order they are clicked
let selectedWordsOrder = [];

// Number of chances the user has
let chancesLeft = 2;

// Function to display a new phrase
function displayPhrase() {
    if (currentPhraseIndex < phrases.length) {
        const currentPhrase = phrases[currentPhraseIndex];
        document.getElementById("portuguese__text").textContent = currentPhrase.portuguese;
        document.getElementById("english__text").textContent = ''; // Clear the English translation
        document.getElementById("original__text").textContent = ''; // Clear the original phrase

        currentPhraseWords = currentPhrase.english.split(' ');

        // Shuffle the words randomly
        currentPhraseWords = shuffleArray(currentPhraseWords);

        // Clear word container, selected words order, and feedback
        wordContainer.innerHTML = '';
        selectedWordsOrder = [];
        feedbackContainer.textContent = '';
        feedbackContainer.classList.remove("correct", "incorrect"); // Clear feedback styles

        // Create word bubbles for the English words
        currentPhraseWords.forEach((word) => {
            const wordBalloon = document.createElement("div");
            wordBalloon.className = "word";
            wordBalloon.textContent = word;

            wordBalloon.addEventListener("click", () => {
                // When clicked, toggle the selected class
                wordBalloon.classList.toggle("selected");

                // Update the translated phrase in the order of selection
                if (wordBalloon.classList.contains("selected")) {
                    selectedWordsOrder.push(wordBalloon.textContent);
                } else {
                    const indexToRemove = selectedWordsOrder.indexOf(wordBalloon.textContent);
                    if (indexToRemove !== -1) {
                        selectedWordsOrder.splice(indexToRemove, 1);
                    }
                }
                const translatedPhrase = selectedWordsOrder.join(' ');
                phraseContainer.textContent = translatedPhrase;
            });

            wordContainer.appendChild(wordBalloon);
        });
    } else {
        // User has completed all phrases
        phraseContainer.textContent = "Parabéns! Você completou todas as frases.";
    }
}

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}


// Function to check the user's answer
function checkAnswer() {
    const userWords = selectedWordsOrder.join(' ');
    const currentPhrase = phrases[currentPhraseIndex].english;

    if (userWords === currentPhrase) {
        // User's answer is correct
        feedbackContainer.textContent = "Mandou bem!";
        feedbackContainer.classList.remove("incorrect"); // Remove incorrect class
        feedbackContainer.classList.add("correct"); // Add class for correct feedback

        // Clear the English translation
        document.getElementById("english__text").textContent = '';

        setTimeout(() => {
            currentPhraseIndex++;
            if (currentPhraseIndex < phrases.length) {
                displayPhrase(); // Display the next phrase
                chancesLeft = 2; // Reset chances
            } else {
                feedbackContainer.textContent = "Parabéns! Você completou todas as frases.";
                currentPhraseIndex = 0; // Reset the exercise
                displayPhrase(); // Display the first phrase
                chancesLeft = 2; // Reset chances
            }
        }, 2500); // Delay for 2,5 second before proceeding
    } else {
        if (chancesLeft > 0) {
            // User's answer is incorrect, but they have chances left
            feedbackContainer.textContent = `Incorreto. Você tem ${chancesLeft} tentativas.`;
            feedbackContainer.classList.remove("correct"); // Remove correct class
            feedbackContainer.classList.add("incorrect"); // Add class for incorrect feedback
            chancesLeft--;
        } else {
            // User has used all chances, reveal the correct answer
            feedbackContainer.textContent = `Incorreto. A resposta correta é: "${currentPhrase}".`;
            feedbackContainer.classList.remove("correct"); // Remove correct class
            feedbackContainer.classList.add("incorrect"); // Add class for incorrect feedback

            setTimeout(() => {
                currentPhraseIndex++;
                if (currentPhraseIndex < phrases.length) {
                    displayPhrase(); // Display the next phrase
                    chancesLeft = 2; // Reset chances
                } else {
                    feedbackContainer.textContent = "Parabéns! Você completou todas as frases.";
                    currentPhraseIndex = 0; // Reset the exercise
                    displayPhrase(); // Display the first phrase
                    chancesLeft = 2; // Reset chances
                }
            }, 2000); // Delay for 2 second before proceeding
        }
    }

    // Clear selection and selected words order
    const selectedWords = document.querySelectorAll(".word.selected");
    selectedWords.forEach((element) => element.classList.remove("selected"));
    selectedWordsOrder = [];
}

// Function to skip to the next phrase
function skipPhrase() {
    currentPhraseIndex++;
    if (currentPhraseIndex < phrases.length) {
        displayPhrase(); // Display the next phrase
        chancesLeft = 2; // Reset chances
    }
}

// Event listeners for the Check and Skip buttons
checkButton.addEventListener("click", checkAnswer);
skipButton.addEventListener("click", skipPhrase);

// Initialize the exercise
displayPhrase();

// Function to check if all words have been completed
function checkAllWordsCompleted() {
    return currentPhraseIndex >= phrases.length;
}