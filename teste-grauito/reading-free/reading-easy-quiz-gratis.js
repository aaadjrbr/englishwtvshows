const questions = [
    {
        question: "She goes to the zoo.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "She sees a lion.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The lion roars.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The elephant has feathers.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "She sees a turtle.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The turtle is fast.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "She sees a rabbit.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The rabbit has scales.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "She sees a gorilla.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The gorilla is playing the piano.",
        options: ["True", "False"],
        correctAnswer: "False"
    }
];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsContainer.innerHTML = "";
    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    const question = questions[currentQuestion];
    if (answer === question.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";

    resultContainer.style.display = "block";
    resultElement.innerHTML = `Você acertou ${score} de ${questions.length}!<br><br>Confira as respostas abaixo:<br>`;

        // Display correct answers for each question
        questions.forEach((question, index) => {
            resultElement.innerHTML += `<strong>Questão ${index + 1}:</strong> ${question.correctAnswer}<br>`;
        });  
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});


const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => {
    // Reset the quiz to its initial state
    currentQuestion = 0;
    score = 0;
    showQuestion();

    // Hide the result container if it's visible
    resultContainer.style.display = "none";
    // Show the question and options container
    questionElement.style.display = "block";
    optionsContainer.style.display = "block";
    // Show the next button
    nextButton.style.display = "block";
});


// Start the quiz
showQuestion();

//end of quiz