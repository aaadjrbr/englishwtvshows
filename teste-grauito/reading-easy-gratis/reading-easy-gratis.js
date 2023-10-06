// Your existing code for displaying sentences and navigation

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
let currentSentenceIndex = 0;

function showSentence(index) {
    // Hide all sentences
    const sentences = document.querySelectorAll('.sentence');
    sentences.forEach((sentence, i) => {
        if (i === index) {
            sentence.style.display = 'block';
        } else {
            sentence.style.display = 'none';
        }
    });

    // Enable/disable Next and Back buttons based on the current index
    document.getElementById('backButton').disabled = index === 0;
    document.getElementById('nextButton').disabled = index === sentences.length - 1;
}

// Function to toggle dark mode and update button label
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const darkModeLabel = darkModeToggle.textContent;
    darkModeToggle.textContent = darkModeLabel === '🌙🦉 Dark Mode' ? '🕯️ Light Mode' : '🌙🦉 Dark Mode';
}

// Add an event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', () => {
    toggleDarkMode();
});

// Back Button Click Event
document.getElementById('backButton').addEventListener('click', () => {
    if (currentSentenceIndex > 0) {
        currentSentenceIndex--;
        showSentence(currentSentenceIndex);
    }
});

// Function to retrieve sentences and translations
function getSentences() {
    return window.phrases.map((phrase) => {
        const wordsWithTranslations = phrase.words.map((wordObj) => {
            return `<span class="word" data-translation="${wordObj.translation}">${wordObj.word}</span>`;
        });
        return wordsWithTranslations.join(" ");
    });
}

// Display the first sentence when the page loads
const sentencesContent = getSentences();
sentencesContent.forEach((sentence, index) => {
    const textElement = document.getElementById(`text${index + 1}`);
    textElement.innerHTML = sentence;

    // Initialize tippy for words with translations
    const words = textElement.querySelectorAll('.word');
    words.forEach((word) => {
        tippy(word, {
            content: word.getAttribute('data-translation'),
            trigger: 'click',
            interactive: true,
        });
    });
});

// Show the first sentence initially
showSentence(currentSentenceIndex);

// Get references to the audio elements and store them in an array
const audioElements = document.querySelectorAll('audio');

// Function to pause audio
function pauseAudio(index) {
    if (index >= 0 && index < audioElements.length) {
        audioElements[index].pause();
        audioElements[index].currentTime = 0; // Reset audio to the beginning
    }
}

// Function to show the next sentence
function showNextSentence() {
    if (currentSentenceIndex < window.phrases.length - 1) {
        // Pause the current audio (if it's playing)
        pauseAudio(currentSentenceIndex);

        // Increment the index to the next sentence
        currentSentenceIndex++;

        // Show the next sentence
        showSentence(currentSentenceIndex);
    }
}

// Next Button Click Event
document.getElementById('nextButton').addEventListener('click', showNextSentence);
