const quizQuestions = [
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FFriends-audios%2F36-39-friends.mp3?alt=media&token=05e2f896-28ab-4d4b-91ca-489051c97219",
    correctAnswer: "I'll be fine, alright? Really, everyone I hope she'll be very happy"
  }, //36 - 39.9 sec
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FFriends-audios%2F40-42-friends.mp3?alt=media&token=7f9cb050-7bc1-453b-ac41-5af886168d83",
    correctAnswer: "No, you don't. No, I don't. To hell with her, she left me"
  }, //40 - 42.9 sec
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FFriends-audios%2F1.25-1.30-friends.mp3?alt=media&token=d4744c31-4243-4978-a9f6-1b0ba303105f",
    correctAnswer: "but I don't want to be single, okay? I just, I just, I just want to be married again"
  }, //1.25 - 1.30 sec
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FFriends-audios%2F2.33-2.34-friends.mp3?alt=media&token=5eedffcb-393e-420f-b251-c01c3461d62c",
    correctAnswer: "Sweet and low?"
  }, //2.33,7 - 2.34,9 sec
  {
    audioClip: "https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FFriends-audios%2F3.7-3.10-friends.mp3?alt=media&token=488a0fff-13ba-4833-b5e1-c05824b9d23d",
    correctAnswer: "Who wasn't invited to the wedding"
  }, //3.7,9 - 3.10 sec

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

