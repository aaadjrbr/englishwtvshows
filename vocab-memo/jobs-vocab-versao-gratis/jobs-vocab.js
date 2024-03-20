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
    '🌟 Fantástico!',
    '👏 Ótimo trabalho!',
    '👌 Perfeito!',
    '🤩 Impressionante!',
    '🥇 Número um!',
    '🏆 Você está arrasando!',
    '🌠 Incrível!',
    '💪 Você está no caminho certo!',
    '👊 Você é um campeão!',
    '🌻 Maravilhoso!',
    '😄 Continue assim!',
    '💥 Sensacional!',
    '🎓 Você é um gênio!',
    '🚀 Você está progredindo!',
    '🤗 Está indo muito bem!',
    '💡 Inteligente!',
    '⭐ Estrela brilhante!',
    '🔥 Excepcional!',
    '💕 Parabéns!',
    '📚 Seu esforço vale a pena!'
    // Add more feedback messages as needed
];

const correctVideoFeedback2 = [
    '✔️ Parabéns! Clique em "Próximo" para mais vídeos.',
    '👍 Muito bem! Clique em "Próximo" para mais vídeos.'
]

const correctVideoFeedback = [
    '✔️ Parabéns! Você acertou!',
    '👍 Muito bem!',
    '🎉 Excelente trabalho!',
    '💯 Você acertou!',
    '🌟 Fantástico!',
    '👏 Ótimo trabalho!',
    '👌 Perfeito!',
    '🤩 Impressionante!',
    '🥇 Número um!',
    '🏆 Você está arrasando!',
    '🌠 Incrível!',
    '💪 Você está no caminho certo!',
    '👊 Você é um campeão!',
    '🌻 Maravilhoso!',
    '😄 Continue assim!',
    '💥 Sensacional!',
    '🎓 Você é um gênio!',
    '🚀 Você está progredindo!',
    '🤗 Está indo muito bem!',
    '💡 Inteligente!',
    '⭐ Estrela brilhante!',
    '🔥 Excepcional!',
    '💕 Parabéns!',
    '📚 Seu esforço vale a pena!'
    // Add more feedback messages as needed
];


const questions = [
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Factor.webp?alt=media&token=94681b4b-e23d-4ab1-a01b-4e5972084ad7&_gl=1*k7arps*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzE1MjUuMzcuMC4w',
        options: ['Doctor', 'Actor', 'Vet', 'Fireman'],
        correctOption: 'Actor',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Fbus-driver.webp?alt=media&token=efa3502c-9054-449b-9684-e236048b9813&_gl=1*1yga0h8*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzE3MzUuNDEuMC4w',
        options: ['Farmer', 'Police Officer', 'Singer', 'Bus Driver'],
        correctOption: 'Bus Driver',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Fchef.webp?alt=media&token=a179d961-5b7e-427b-898d-34136864a04c&_gl=1*1i5f9bk*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzE4MTcuNTEuMC4w',
        options: ['Accountant', 'Teacher', 'Server', 'Chef'],
        correctOption: 'Chef',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Fdoctor.webp?alt=media&token=cc111e4d-329b-4f4a-8285-394e1d1d956b&_gl=1*181x7pk*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzE5MTYuNTAuMC4w',
        options: ['Nurse', 'Secretary', 'Locksmith', 'Doctor'],
        correctOption: 'Doctor',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Ffarmer.jpg?alt=media&token=f47a94f7-40cb-4b6a-8ca3-879c629960e1&_gl=1*1lzyiby*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzI1MjQuNDYuMC4w',
        options: ['Farmer', 'Hairdresser', 'Plumber', 'Vet'],
        correctOption: 'Farmer',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Ffire-man.webp?alt=media&token=4cebc989-35ad-4fc0-acce-50d68d934de3&_gl=1*322vq6*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzMxMDUuMzMuMC4w',
        options: ['Judge', 'Lawyer', 'Server', 'Fireman/Firefigther'],
        correctOption: 'Fireman/Firefigther',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Fpolice-officer.jpg?alt=media&token=80b7150d-4ed3-4e76-8748-cbfbf1c8f127&_gl=1*1xtmabd*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzMyNTMuMzUuMC4w',
        options: ['Police Officer', 'Hairdresser', 'Plumber', 'Vet'],
        correctOption: 'Police Officer',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Fsinger.jpg?alt=media&token=2eefdaf3-7087-4952-949e-228d5f168fd7&_gl=1*1g1ewlw*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzM0MjUuMzMuMC4w',
        options: ['Waiter', 'Writer', 'Singer', 'Director'],
        correctOption: 'Singer',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Fteacher.jpg?alt=media&token=4650d8af-9eb0-42aa-b0cf-7f1cb5dfdc61&_gl=1*1wtxf4a*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzc2MTYuMjMuMC4w',
        options: ['Teacher', 'Artist', 'Musician', 'Priest'],
        correctOption: 'Teacher',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Fserver.webp?alt=media&token=08476e48-a869-412d-a2fd-563bc35efb67&_gl=1*djnagy*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzM2NjAuMzIuMC4w',
        options: ['Salesperson', 'Scientist', 'Cashier', 'Server'],
        correctOption: 'Server',
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-images%2Fphotographer.jpg?alt=media&token=82881a5b-668b-4a8a-b228-257ac020a5b1&_gl=1*12uok3f*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzM3NTUuNDQuMC4w',
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
    const optionButtons = optionsContainer.querySelectorAll('button');

    // Disable all option buttons
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    if (selectedOption === question.correctOption) {
        const randomIndex = Math.floor(Math.random() * correctFeedback.length);
        feedbackElement.textContent = correctFeedback[randomIndex];
        nextButton1.style.display = 'block';
        score++; // Increment the score for correct answers

    } else {
        attemptsRemaining--;

        if (attemptsRemaining > 0) {
            feedbackElement.textContent = `😕 Incorreto. Tente novamente. Você tem mais ${attemptsRemaining} tentativa(s). ⌛`;
            // Enable all option buttons for another attempt
            optionButtons.forEach(button => {
                button.disabled = false;
            });
        } else {
            feedbackElement.textContent = `❌ Incorreto. A resposta correta é: "${question.correctOption}"`;
            nextButton1.style.display = 'block'; // Display the "Next" button for incorrect answers after 2 attempts
        }
    }
}



function displayScore() {
    questionElement.innerHTML = `<h2>🥳✨🎉 Parabéns! Você completou tudo.<br/> Vá para o próximo desafio abaixo. 👇</h2>`;
    optionsContainer.innerHTML = `<h3>Sua pontuação final é: ${score}/${questions.length}</h3>`;
    feedbackElement.innerHTML = '<h3>Gostou desse Quiz? Atualize a página para refazer. 🔄</h3>';
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
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-videos%2Factor-farmer-server-photographer.mp4?alt=media&token=ce36c64b-730d-482a-9666-5985eab92a8a&_gl=1*2vwy7t*_ga*MTc3Mzk3ODA2Ni4xNjk0NzIzNTU1*_ga_CW55HF8NVT*MTY5ODMzMDI0OS4xMy4xLjE2OTgzMzQyMDkuMTkuMC4w',
        correctAnswer: 'Actor, Farmer, Server, Photographer', // Replace with the correct answer
    },
    {
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-videos%2Fbusdriver-fireman-artist-priest.mp4?alt=media&token=143b1a0c-ec7c-48d5-a525-9c30917eccea',
        correctAnswer: 'Bus Driver, Fireman, Artist, Priest', // Replace with the correct answer
    },
    {
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/vocabulary-section%2Fjobs-videos%2Fchef-policeofficer-dentist-salesman.mp4?alt=media&token=0c42eb16-b81e-4bbe-84f6-9a2158eff605',
        correctAnswer: 'Chef, Police Officer, Dentist, Salesman', // Replace with the correct answer
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
    nextButton2.style.display = 'none'; // Hide the "Next" button for the next question
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
    attempts = 0; // Reset attempts counter
    if (videoCurrentQuestionIndex < videoQuestions.length) {
        showVideoQuestion();
        nextButton2.style.display = 'none'; // Hide the "Next" button for the next question
    } else {
        // Hide the content inside the quiz-info-container quiz-video-info
        const quizVideoInfo = document.querySelector('.quiz-video-info');
        quizVideoInfo.style.display = 'none';
        
        // Display the feedback and completion message
        videoQuestionElement.innerHTML = `
            <h2>🥳🎉 Parabéns! Continue assim.<br><br> Quer mais? Vá p/ <a style="color: #428fca;" href="../../index-second.html">início</a> e assine a versão completa!</h2>
            <button class="next-button" id="restart-button">Faça o quiz novamente</button>
        `;
        textInputElement.style.display = 'none';
        videoFeedbackElement.innerHTML = '<h3>🚀 Você completou todo desafio! 🚀</h3>';
        
        // Attach event listener to the "do the quiz again" button
        const restartButton = document.getElementById('restart-button');
        restartButton.addEventListener('click', function() {
            // Reload the page to restart the quiz
            location.reload();
        });
        
        // Optionally, you can also hide the input field, "Corrigir" (Check) button, and "Próximo" (Next) button
        textInputElement.style.display = 'none';
        checkButton.style.display = 'none';
        nextButton2.style.display = 'none';
    }
}





function checkVideoAnswer() {
    const videoQuestion = videoQuestions[videoCurrentQuestionIndex];
    const userAnswer = textInputElement.value.trim();

    // Check if the input field is empty
    if (userAnswer === '') {
        videoFeedbackElement.textContent = '⚠️ Por favor, digite algo antes de corrigir.';
        // Clear the message after 3 seconds
        setTimeout(function() {
            videoFeedbackElement.textContent = '';
        }, 3000);
        return; // Exit the function if the input field is empty
    }

    if (userAnswer.toLowerCase() === videoQuestion.correctAnswer.toLowerCase()) {
        const randomIndex = Math.floor(Math.random() * correctVideoFeedback2.length);
        videoFeedbackElement.textContent = correctVideoFeedback2[randomIndex];
        nextButton2.style.display = 'block'; // Display the "Next" button
    } else {
        attempts++;
        if (attempts === 1) {
            videoFeedbackElement.textContent = '😕 Incorreto. Tente novamente.';
        } else if (attempts === 2) {
            videoFeedbackElement.textContent = '😕 Incorreto novamente. Você tem mais uma chance.';
        } else if (attempts === 3) {
            videoFeedbackElement.textContent = `❌ Incorreto. A resposta correta é: "${videoQuestion.correctAnswer}"`;
            nextButton2.style.display = 'block'; // Display the "Next" button after three attempts
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