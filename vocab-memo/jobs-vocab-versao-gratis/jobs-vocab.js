// JavaScript for the First Quiz (Image Quiz)
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options-container');
const feedbackElement = document.querySelector('.feedback');
const nextButton1 = document.getElementById('next-button-1');

const questions = [
    {
        image: '../../public/assets/images/jobs/actor.png',
        options: ['Doctor', 'Actor', 'Vet', 'Fireman'],
        correctOption: 'Actor',
    },
    {
        image: '../../public/assets/images/jobs/bus-driver.png',
        options: ['Farmer', 'Police Officer', 'Singer', 'Bus Driver'],
        correctOption: 'Bus Driver',
    },
    {
        image: '../../public/assets/images/jobs/chef.png',
        options: ['Accountant', 'Teacher', 'Server', 'Chef'],
        correctOption: 'Chef',
    },
    {
        image: '../../public/assets/images/jobs/doctor.png',
        options: ['Nurse', 'Secretary', 'Locksmith', 'Doctor'],
        correctOption: 'Doctor',
    },
    {
        image: '../../public/assets/images/jobs/farmer.png',
        options: ['Farmer', 'Hairdresser', 'Plumber', 'Vet'],
        correctOption: 'Farmer',
    },
    {
        image: '../../public/assets/images/jobs/fireman.png',
        options: ['Judge', 'Lawyer', 'Server', 'Fireman/Firefigther'],
        correctOption: 'Fireman/Firefigther',
    },
    {
        image: '../../public/assets/images/jobs/police-officer.png',
        options: ['Police Officer', 'Hairdresser', 'Plumber', 'Vet'],
        correctOption: 'Police Officer',
    },
    {
        image: '../../public/assets/images/jobs/singer.png',
        options: ['Waiter', 'Writer', 'Singer', 'Director'],
        correctOption: 'Singer',
    },
    {
        image: '../../public/assets/images/jobs/teacher.png',
        options: ['Teacher', 'Artist', 'Musician', 'Priest'],
        correctOption: 'Teacher',
    },
    {
        image: '../../public/assets/images/jobs/server.png',
        options: ['Salesperson', 'Scientist', 'Cashier', 'Server'],
        correctOption: 'Server',
    },
    {
        image: '../../public/assets/images/jobs/photographer.jpg',
        options: ['Vet', 'Teacher', 'Fireman', 'Photographer'],
        correctOption: 'Photographer',
    },
    // Add more questions in the same format
];

let currentQuestionIndex = 0;

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerHTML = `<img src="${question.image}" alt="Question ${currentQuestionIndex + 1}">`;

    shuffleArray(question.options); // Shuffle the options array

    optionsContainer.innerHTML = ''; // Clear the options container

    question.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    feedbackElement.textContent = '';
    nextButton1.style.display = 'none';
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];

    if (selectedOption === question.correctOption) {
        feedbackElement.textContent = 'Correct!';
        nextButton1.style.display = 'block';
    } else {
        feedbackElement.textContent = 'Incorrect. Try again.';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = '<h2>Quiz Complete!</h2>';
        optionsContainer.innerHTML = '';
        feedbackElement.innerHTML = '';
        nextButton1.style.display = 'none';
    }
}

showQuestion();

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}


// JavaScript for the Second Quiz (Video Quiz)
const videoQuestionElement = document.querySelector('.question-video-quiz');
const textInputElement = document.getElementById('text-input');
const videoFeedbackElement = document.querySelector('.feedback-video-quiz');
const checkButton = document.getElementById('check-button');
const nextButton2 = document.getElementById('next-button-2');

const videoQuestions = [
    {
        videoUrl: 'https://drive.google.com/uc?export=download&id=1K7lWBHa_1m3Rg9v8tVoTIkvU_n1SB_CA',
        correctAnswer: 'Actor, Farmer, Server, Photographer', // Replace with the correct answer
    },
    // Add more questions for the video quiz
];

let videoCurrentQuestionIndex = 0;
let attempts = 0; // Track the number of attempts

function showVideoQuestion() {
    const videoQuestion = videoQuestions[videoCurrentQuestionIndex];
    videoQuestionElement.innerHTML = `
        <video controls width="400">
            <source src="${videoQuestion.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

    textInputElement.value = ''; // Clear the input field
    videoFeedbackElement.textContent = '';
    attempts = 0; // Reset the number of attempts for each new question
}

function checkVideoAnswer() {
    const videoQuestion = videoQuestions[videoCurrentQuestionIndex];
    const userAnswer = textInputElement.value.trim();

    if (userAnswer.toLowerCase() === videoQuestion.correctAnswer.toLowerCase()) {
        videoFeedbackElement.textContent = 'Correct!';
        nextButton2.style.display = 'block'; // Display the "Next" button
    } else {
        attempts++;
        if (attempts === 1) {
            videoFeedbackElement.textContent = 'Incorrect. Try again.';
        } else if (attempts === 2) {
            videoFeedbackElement.textContent = `Incorrect. The correct answer is: "${videoQuestion.correctAnswer}"`;
            nextButton2.style.display = 'block'; // Display the "Next" button after two attempts
        }
    }
}

function nextVideoQuestion() {
    videoFeedbackElement.textContent = ''; // Clear feedback before proceeding
    videoCurrentQuestionIndex++;
    if (videoCurrentQuestionIndex < videoQuestions.length) {
        showVideoQuestion();
        nextButton2.style.display = 'none'; // Hide the "Next" button for the next question
    } else {
        videoQuestionElement.innerHTML = '<h2>Video Quiz Complete!</h2>';
        textInputElement.style.display = 'none';
        videoFeedbackElement.innerHTML = 'Congratulations! You have concluded the quiz.';
        checkButton.style.display = 'none';
        nextButton2.style.display = 'none';
    }
}

showVideoQuestion();

// Attach event listeners
checkButton.addEventListener('click', checkVideoAnswer);
nextButton2.addEventListener('click', nextVideoQuestion);

// Enable Enter key for the text input field
textInputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkVideoAnswer();
    }
});