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

let selectedWordsOrder = [];
let chancesLeft = 2;

function displayPhrase() {
    if (currentPhraseIndex < phrases.length) {
        const currentPhrase = phrases[currentPhraseIndex];
        document.getElementById("portuguese__text").textContent = currentPhrase.portuguese;
        document.getElementById("english__text").textContent = '';
        document.getElementById("original__text").textContent = '';

        currentPhraseWords = currentPhrase.english.split(' ');
        currentPhraseWords = shuffleArray(currentPhraseWords);
        wordContainer.innerHTML = '';
        selectedWordsOrder = [];
        feedbackContainer.textContent = '';
        feedbackContainer.classList.remove("correct", "incorrect");

        currentPhraseWords.forEach((word) => {
            const wordBalloon = document.createElement("div");
            wordBalloon.className = "word";
            wordBalloon.textContent = word;

            wordBalloon.addEventListener("click", () => {
                wordBalloon.classList.toggle("selected");

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
        phraseContainer.textContent = "Parabéns! Você completou todas as frases.";
        checkButton.disabled = true; // Disable the check button
        skipButton.disabled = true; // Disable the skip button
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer() {
    if (checkAllWordsCompleted()) {
        feedbackContainer.textContent = "Parabéns! Você completou todas as frases.";
        checkButton.disabled = true; // Disable the check button
        skipButton.disabled = true; // Disable the skip button
        return;
    }

    const userWords = selectedWordsOrder.join(' ');
    const currentPhrase = phrases[currentPhraseIndex].english;

    if (userWords === currentPhrase) {
        feedbackContainer.textContent = "Mandou bem!";
        feedbackContainer.classList.remove("incorrect");
        feedbackContainer.classList.add("correct");
        
        setTimeout(() => {
            currentPhraseIndex++;
            if (currentPhraseIndex < phrases.length) {
                displayPhrase();
                chancesLeft = 2;
            } else {
                feedbackContainer.textContent = "Parabéns! Você completou todas as frases.";
                checkButton.disabled = true; // Disable the check button
                skipButton.disabled = true; // Disable the skip button
            }
        }, 2500);
    } else {
        if (chancesLeft > 0) {
            feedbackContainer.textContent = `Incorreto. Você tem ${chancesLeft} tentativas.`;
            feedbackContainer.classList.remove("correct");
            feedbackContainer.classList.add("incorrect");
            chancesLeft--;
        } else {
            feedbackContainer.textContent = `Incorreto. A resposta correta é: "${currentPhrase}".`;
            feedbackContainer.classList.remove("correct");
            feedbackContainer.classList.add("incorrect");
            
            setTimeout(() => {
                currentPhraseIndex++;
                if (currentPhraseIndex < phrases.length) {
                    displayPhrase();
                    chancesLeft = 2;
                } else {
                    feedbackContainer.textContent = "Parabéns! Você completou todas as frases.";
                    checkButton.disabled = true; // Disable the check button
                    skipButton.disabled = true; // Disable the skip button
                }
            }, 2000);
        }
    }

    const selectedWords = document.querySelectorAll(".word.selected");
    selectedWords.forEach((element) => element.classList.remove("selected"));
    selectedWordsOrder = [];
}

function skipPhrase() {
    currentPhraseIndex++;
    if (currentPhraseIndex < phrases.length) {
        displayPhrase();
        chancesLeft = 2;
    } else {
        feedbackContainer.textContent = "Parabéns! Você completou todas as frases.";
        checkButton.disabled = true; // Disable the check button
        skipButton.disabled = true; // Disable the skip button
    }
}

checkButton.addEventListener("click", checkAnswer);
skipButton.addEventListener("click", skipPhrase);

displayPhrase();

function checkAllWordsCompleted() {
    return currentPhraseIndex >= phrases.length;
}