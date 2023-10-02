// JavaScript for the First Quiz (Image Quiz)
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options-container');
const feedbackElement = document.querySelector('.feedback');
const nextButton1 = document.getElementById('next-button-1');

const correctFeedback = [
    '✔️ Parabéns! Você acertou!',
    '👍 Muito bem!',
    '🎉 Excelente trabalho!',
    '💯 Você acertou!',
    // Add more feedback messages as needed
];

const correctVideoFeedback = [
    '✔️ Mandou bem!',
    '👍 Muito bem!',
    '🎉 Excelente trabalho!',
    '💯 Você acertou!',
    // Add more feedback messages as needed
];


const questions = [
    {
        image: '../../public/assets/images/jobs/actor.jpg',
        options: ['Doctor', 'Actor', 'Vet', 'Fireman'],
        correctOption: 'Actor',
    },
    {
        image: '../../public/assets/images/jobs/bus-driver.jpg',
        options: ['Farmer', 'Police Officer', 'Singer', 'Bus Driver'],
        correctOption: 'Bus Driver',
    },
    {
        image: '../../public/assets/images/jobs/chef.jpg',
        options: ['Accountant', 'Teacher', 'Server', 'Chef'],
        correctOption: 'Chef',
    },
    {
        image: '../../public/assets/images/jobs/doctor.jpg',
        options: ['Nurse', 'Secretary', 'Locksmith', 'Doctor'],
        correctOption: 'Doctor',
    },
    {
        image: '../../public/assets/images/jobs/farmer.jpg',
        options: ['Farmer', 'Hairdresser', 'Plumber', 'Vet'],
        correctOption: 'Farmer',
    },
    {
        image: '../../public/assets/images/jobs/fireman.jpg',
        options: ['Judge', 'Lawyer', 'Server', 'Fireman/Firefigther'],
        correctOption: 'Fireman/Firefigther',
    },
    {
        image: '../../public/assets/images/jobs/police-officer.jpg',
        options: ['Police Officer', 'Hairdresser', 'Plumber', 'Vet'],
        correctOption: 'Police Officer',
    },
    {
        image: '../../public/assets/images/jobs/singer.jpg',
        options: ['Waiter', 'Writer', 'Singer', 'Director'],
        correctOption: 'Singer',
    },
    {
        image: '../../public/assets/images/jobs/teacher.jpg',
        options: ['Teacher', 'Artist', 'Musician', 'Priest'],
        correctOption: 'Teacher',
    },
    {
        image: '../../public/assets/images/jobs/server.jpg',
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

let score = 0; // Initialize the score
let currentQuestionIndex = 0;
let attemptsRemaining = 2; // Number of attempts allowed for an incorrect answer

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
        const randomIndex = Math.floor(Math.random() * correctFeedback.length);
        feedbackElement.textContent = correctFeedback[randomIndex];
        nextButton1.style.display = 'block';
        score++; // Increment the score for correct answers

    } else {
        attemptsRemaining--;

        if (attemptsRemaining === 1) {
            feedbackElement.textContent = '😕 Incorreto. Tente novamente. Você tem mais 1 tentativa. ⌛';
        } else if (attemptsRemaining === 0) {
            feedbackElement.textContent = `❌ Incorreto. A resposta correta é: "${question.correctOption}"`;
        }
    }

    if (attemptsRemaining === 0) {
        nextButton1.style.display = 'block'; // Display the "Next" button for incorrect answers after 2 attempts
    }
}


function displayScore() {
    questionElement.innerHTML = `<h2>🥳✨🎉 Parabéns! Você completou tudo.<br/> Vá para o próximo desafio abaixo. 👇</h2>`;
    optionsContainer.innerHTML = `<h3>Sua pontuação final é: ${score}/${questions.length}</h3>`;
    feedbackElement.innerHTML = '';
    nextButton1.style.display = 'none';

    // Hide the quiz info container for the first quiz
    const quiz1InfoContainer = document.querySelector('.quiz-1-info');
    quiz1InfoContainer.style.display = 'none';
}


function nextQuestion() {
    currentQuestionIndex++;
    attemptsRemaining = 2; // Reset the number of attempts for each new question

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        displayScore(); // Call the displayScore function when all questions are completed
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

    // Hide the paragraphs for quiz 1 info (just to be consistent)
    const quiz1InfoParagraphs = document.querySelectorAll('.quiz-2-info p');
    quiz1InfoParagraphs.forEach((paragraph) => {
        paragraph.style.display = 'none';
    });
}

function nextVideoQuestion() {
    videoFeedbackElement.textContent = ''; // Clear feedback before proceeding
    videoCurrentQuestionIndex++;
    if (videoCurrentQuestionIndex < videoQuestions.length) {
        showVideoQuestion();
        nextButton2.style.display = 'none'; // Hide the "Next" button for the next question
    } else {
        // Hide the content inside the quiz-info-container quiz-video-info
        const quizVideoInfo = document.querySelector('.quiz-video-info');
        quizVideoInfo.style.display = 'none';
        
        // Display the feedback and completion message
        videoQuestionElement.innerHTML = '<h2>🥳🎉 Parabéns! Continue assim.<br><br> Quer mais? Vá p/ "início" e assine p/ versão completa!</h2>';
        textInputElement.style.display = 'none';
        videoFeedbackElement.innerHTML = '<h3>🚀 Você completou todo desafio! 🚀</h3>';
        
        // Optionally, you can also hide the input field, "Corrigir" (Check) button, and "Próximo" (Next) button
        textInputElement.style.display = 'none';
        checkButton.style.display = 'none';
        nextButton2.style.display = 'none';
    }
}



function checkVideoAnswer() {
    const videoQuestion = videoQuestions[videoCurrentQuestionIndex];
    const userAnswer = textInputElement.value.trim();

            // Clear the translated text after 10 seconds
            setTimeout(function () {
                videoFeedbackElement.style.display = 'none';
                videoFeedbackElement.textContent = '';
            }, 1500); // 1,5 seconds

            if (userAnswer.toLowerCase() === videoQuestion.correctAnswer.toLowerCase()) {
                const randomIndex = Math.floor(Math.random() * correctVideoFeedback.length);
                videoFeedbackElement.textContent = correctVideoFeedback[randomIndex];
                nextButton2.style.display = 'block'; // Display the "Next" button
            } else {
        attempts++;
        if (attempts === 1) {
            videoFeedbackElement.textContent = '😕 Incorreto. Tente novamente.';
        } else if (attempts === 2) {
            videoFeedbackElement.textContent = `❌ Incorreto. A resposta correta é: "${videoQuestion.correctAnswer}"`;
            nextButton2.style.display = 'block'; // Display the "Next" button after two attempts
        }
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