const dialogueElement = document.getElementById('dialogue');
const characterImage = document.getElementById('character');
const tryAgainButton = document.getElementById('try-again');
const giveUpButton = document.getElementById('give-up');
const backButton = document.getElementById('back');
const preloadedImages = {}; // Store preloaded images

const dialogues = [
    {
        text: 'How are you?',
        options: ['I am fine. And you?', 'My name is Peter.', 'What is your name?'],
        correctOption: 1,
    },
    {
        text: 'What is your favorite color?',
        options: ['I like blue.', 'I am a student.', 'My name is Linda.'],
        correctOption: 1,
    },
    {
        text: 'Where are you from?',
        options: ['I am 25 years old.', 'I am from New York.', 'How are you doing?'],
        correctOption: 2,
    },
    {
        text: 'What do you do for a living?',
        options: ['I like reading books.', 'I am a teacher.', 'My name is James.'],
        correctOption: 2,
    },
    {
        text: 'How do you go to work?',
        options: ['I like music.', 'My name is Sarah.', 'I go by car.'],
        correctOption: 3,
    },
    {
        text: 'What time is it?',
        options: ["It's 3 o'clock.", 'I am a student.', 'My name is Alex.'],
        correctOption: 1,
    },
    {
        text: 'Do you like sports?',
        options: ['I am from London.', 'How are you today?', 'I like soccer.'],
        correctOption: 3,
    },
    {
        text: "What's your favorite food?",
        options: ['I am a doctor.', 'I like pizza.', 'My name is Emma.'],
        correctOption: 2,
    },
    {
        text: 'How many siblings do you have?',
        options: [ 'I enjoy traveling.', 'My name is Jack.', 'I have two brothers.'],
        correctOption: 3,
    },
    {
        text: "What's the weather like today?",
        options: ["It's sunny.", 'I am a student.', 'My name is Lily.'],
        correctOption: 1,
    },
    // Add more dialogues here
];

const resultImages = {
    correct: '../../public/assets/images/dialogues/correct.jpg',
    incorrect: '../../public/assets/images/dialogues/incorrect.jpg',
    congrats: '../../public/assets/images/dialogues/congrats.jpg',
};

let currentDialogueIndex = 0;

function preloadImage(imageUrl) {
    const img = new Image();
    img.src = imageUrl;
    preloadedImages[imageUrl] = img;
}

function displayDialogue(index) {
    const dialogue = dialogues[index];
    dialogueElement.textContent = dialogue.text;

    characterImage.src = resultImages.correct; // Display the correct image initially

    for (let i = 0; i < 3; i++) {
        const optionBtn = document.getElementsByClassName('options')[0].getElementsByTagName('button')[i];
        optionBtn.textContent = dialogue.options[i];
        optionBtn.disabled = false; // Enable answer buttons
    }

    tryAgainButton.style.display = 'none';
    giveUpButton.style.display = 'none';
    backButton.style.display = 'none'; // Initially hide the "Back" button
}

function checkAnswer(selectedOption) {
    const currentDialogue = dialogues[currentDialogueIndex];
    if (selectedOption === currentDialogue.correctOption) {
        // Correct answer
        currentDialogueIndex++;
        if (currentDialogueIndex < dialogues.length) {
            displayDialogue(currentDialogueIndex);
        } else {
            dialogueElement.textContent = '🥳 Parabéns! Você concluiu o diálogo. Volte e estude outro.';
            characterImage.src = resultImages.congrats;
            hideOptions(); // Call the function to hide options
            backButton.style.display = 'inline'; // Show the "Back" button
        }
    } else {
        // Incorrect answer
        characterImage.src = resultImages.incorrect;
        for (let i = 0; i < 3; i++) {
            const optionBtn = document.getElementsByClassName('options')[0].getElementsByTagName('button')[i];
            optionBtn.disabled = true; // Disable answer buttons
        }
        dialogueElement.textContent = "Sorry, I don't understand. Could you repeat? 🥺";
        tryAgainButton.style.display = 'inline';
        giveUpButton.style.display = 'inline';
    }
}

function hideOptions() {
    for (let i = 0; i < 3; i++) {
        const optionBtn = document.getElementsByClassName('options')[0].getElementsByTagName('button')[i];
        optionBtn.style.display = 'none';
    }
}

tryAgainButton.addEventListener('click', () => {
    displayDialogue(currentDialogueIndex);
});

giveUpButton.addEventListener('click', () => {
    // Redirect to a different page
    window.location.href = '../dialogue-menu.html'; // Replace with the desired URL
});

backButton.addEventListener('click', () => {
    // Redirect to a different page
    window.location.href = '../dialogue-menu.html'; // Replace with the desired URL
});

displayDialogue(currentDialogueIndex);