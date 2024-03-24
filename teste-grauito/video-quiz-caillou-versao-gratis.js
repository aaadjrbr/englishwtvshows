const quizQuestions = [
  {
    startTime: 54.7, // Start time in seconds
    endTime: 59.3, // End time in seconds
    correctAnswer: "Today's story is called Caillou Makes Cookies"
  },
  {
    startTime: 1 * 60 + 25.5,
    endTime: 1 * 60 + 29,
    correctAnswer: "You can still play, just do it quietly"
  },
  {
    startTime: 1 * 60 + 47,
    endTime: 1 * 60 + 51.3,
    correctAnswer: "Cookies. I want cookies. I'm hungry"
  },
  {
    startTime: 2 * 60 + 35,
    endTime: 2 * 60 + 39,
    correctAnswer: "Caillou decided to make some honey cookies"
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let attemptCount = 0;
let audioPlayer;
let timeoutId;

function playSegment() {
  const question = quizQuestions[currentQuestionIndex];
  if (!audioPlayer) {
    audioPlayer = new Audio("https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FCaillouMakesCookies(S01E01).mp3?alt=media&token=be6c2471-fcca-4c08-bff9-5c4c478b4789");
  }
  audioPlayer.currentTime = question.startTime;

  // Wait for the 'canplay' event before playing
  audioPlayer.addEventListener('canplay', function() {
    audioPlayer.play();
  }, { once: true }); // Use 'once: true' to remove the event listener after it fires

  // Stop the audio at the end time
  clearTimeout(timeoutId);
  const playDuration = (question.endTime - question.startTime) * 1000;
  timeoutId = setTimeout(() => {
    audioPlayer.pause();
  }, playDuration);
}



function checkAnswer() {
  const userAnswer = document.getElementById("answer").value;
  const question = quizQuestions[currentQuestionIndex];
  const resultElement = document.getElementById("result");

  const cleanUserAnswer = userAnswer.toLowerCase().replace(/[^\w\s]/g, "").trim();
  const cleanCorrectAnswer = question.correctAnswer.toLowerCase().replace(/[^\w\s]/g, "").trim();

  if (cleanUserAnswer === cleanCorrectAnswer) {
    resultElement.textContent = "✔️ Correto!";
    attemptCount = 0;
  } else {
    attemptCount++;
    if (attemptCount >= 2) {
      resultElement.innerHTML = `🥺❌ Incorreto. A resposta correta é:<br> <i>"${question.correctAnswer}"</i>`;
      attemptCount = 0;
    } else {
      resultElement.textContent = "❌ Incorreto, tentar novamente.";
    }
  }

  document.getElementById("next-button").style.display = 'inline';

  if (currentQuestionIndex === quizQuestions.length - 1 && cleanUserAnswer === cleanCorrectAnswer) {
    finishQuiz();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    document.getElementById("answer").value = '';
    document.getElementById("result").textContent = '';
    playSegment();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    document.getElementById("answer").value = '';
    document.getElementById("result").textContent = '';
    playSegment();
  }
}

function finishQuiz() {
  document.getElementById("quiz-finish").innerHTML = "🥳🎉 Parabéns. Você finalizou o quiz!<br/><br/>";
  const redoButton = document.createElement("button");
  redoButton.textContent = "Redo Quiz";
  redoButton.addEventListener("click", () => {
    location.reload(); // Refreshes the page
  });
  document.getElementById("quiz-finish").appendChild(redoButton);
  document.getElementById("quiz-finish").style.display = 'block';
}

function redoQuiz() {
  currentQuestionIndex = 0;
  attemptCount = 0;
  document.getElementById("quiz-finish").style.display = 'none';
  document.getElementById("answer").value = '';
  document.getElementById("result").textContent = '';
  playSegment();
}

document.getElementById("play-button").addEventListener("click", playSegment);
document.getElementById("pause-button").addEventListener("click", pauseAudio);
document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("previous-button").addEventListener("click", previousQuestion);
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

// Remove the playSegment
