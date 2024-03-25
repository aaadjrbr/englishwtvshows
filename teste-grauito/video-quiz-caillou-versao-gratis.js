const quizQuestions = [
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FCaillou-audios%2F54-59-caillou.mp3?alt=media&token=00081081-b37e-412f-b147-1d197b76073b",
    correctAnswer: "Today's story is called Caillou Makes Cookies"
  }, //59.7 - 59.3 sec
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FCaillou-audios%2F1.25-1.29-caillou.mp3?alt=media&token=d458482a-a982-4c03-b98f-ee6900c34562",
    correctAnswer: "You can still play, just do it quietly"
  }, //1:25.5 - 1:29 sec
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FCaillou-audios%2F1.47-1.51-caillou.mp3?alt=media&token=c07e531a-3304-4592-8022-4150654756ae",
    correctAnswer: "Cookies. I want cookies. I'm hungry"
  }, //1:47 - 1:51.3 sec
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FCaillou-audios%2F2.35-2.39-caillou.mp3?alt=media&token=d912f720-0448-4a42-9f64-1e05f5835fa9",
    correctAnswer: "Caillou decided to make some honey cookies"
  }, //2:35 - 2:39 sec
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FCaillou-audios%2F3.50-3.57-caillou.mp3?alt=media&token=1f36b9ce-6de5-4f2e-b600-c05678f6f6cc",
    correctAnswer: "Who made these good cookies? I did and mommy helped"
  }, //3:50.8 - 3:57.3 sec
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let attemptCount = 0;
let audioPlayer;
let timeoutId;

function playSegment() {
  const question = quizQuestions[currentQuestionIndex];
  if (!audioPlayer) {
    audioPlayer = new Audio();
  }
  audioPlayer.src = question.audioClip;
  audioPlayer.play();
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

function pauseAudio() {
  if (audioPlayer) {
    audioPlayer.pause();
    clearTimeout(timeoutId);
  }
}


document.getElementById("play-button").addEventListener("click", playSegment);
document.getElementById("pause-button").addEventListener("click", pauseAudio);
document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("previous-button").addEventListener("click", previousQuestion);
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

// Remove the playSegment
