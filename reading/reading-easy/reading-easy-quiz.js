//Verb "to be" Quiz

const questions = [
    {
        question: "Nancy and her son were living in America for a year before the incident with the dog.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Nancy and her son found an apartment in Arcadia within two months of coming to America.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The neighbor's dog attacked Nancy's son, leading to the confrontation.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Nancy was willing to physically harm the dog to protect her son.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
        {
        question: "After the dog incident, Nancy and her son spent the entire weekend in their apartment.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Nancy and her son moved to a new apartment closer to her son's school.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Nancy's son's coughing and asthma attack were exacerbated by all the walking they did.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Nancy also suffered from asthma.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Nancy wanted to buy a new car for her family.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "A Honda salesman who spoke Nancy's language agreed to pick her up to discuss buying a new car.",
        options: ["True", "False"],
        correctAnswer: "True"
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

// Start the quiz
showQuestion();

//end of quiz