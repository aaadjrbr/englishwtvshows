const quizQuestions = [
    {
      startTime: 36, // Start time in seconds
      endTime: 40, // End time in seconds
      correctAnswer: "I'll be fine, alright? Really, everyone I hope she'll be very happy"
    },
    {
      startTime: 40,
      endTime: 42.9,
      correctAnswer: "No, you don't. No, I don't. To hell with her, she left me"
    },
    {
      startTime: 1 * 60 + 25,
      endTime: 1 * 60 + 30,
      correctAnswer: "but I don't want to be single, okay? I just, I just, I just want to be married again"
    },
    {
      startTime: 2 * 60 + 33.7,
      endTime: 2 * 60 + 34.9,
      correctAnswer: "Sweet and low?"
    },
    {
        startTime: 3 * 60 + 7.9,
        endTime: 3 * 60 + 10,
        correctAnswer: "Who wasn't invited to the wedding"
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
      audioPlayer = new Audio("https://firebasestorage.googleapis.com/v0/b/english-with-tv-shows.appspot.com/o/content-section%2Fvideo-quiz-audios%2FFriendsRachelRunsOutonherWeddingtoBarry(Season%201%20Clip).mp3?alt=media&token=50ffa404-d938-482e-8302-51a5ddfb160a");
    }
    audioPlayer.currentTime = question.startTime;
  
    // Start playback directly after setting currentTime
    audioPlayer.play();
  
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
  