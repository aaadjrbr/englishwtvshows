const quizQuestions = [
  {
      startTime: 55, // Começa em 0 segundos
      endTime: 59, // Termina em 5 segundos
      correctAnswer: "Today's story is called Caillou Makes Cookies"
    },
    {
      startTime: 1 * 60 + 25.5, // Começa em 0 segundos
      endTime: 1 * 60 + 29, // Termina em 5 segundos
      correctAnswer: "You can still play, just do it quietly"
    },
    {
      startTime: 1 * 60 + 47, // Começa em 0 segundos
      endTime: 1 * 60 + 51.3, // Termina em 5 segundos
      correctAnswer: "Cookies. I want cookies. I'm hungry"
    },
    {
      startTime: 2 * 60 + 35, // Começa em 0 segundos
      endTime: 2 * 60 + 39, // Termina em 5 segundos
      correctAnswer: "Caillou decided to make some honey cookies"
    },
    {
      startTime: 2 * 60 + 58.5, // Começa em 0 segundos
      endTime: 3 * 60 + 1, // Termina em 5 segundos
      correctAnswer: "Look at the mess you made"
    },
    {
      startTime: 3 * 60 + 10.8, // Começa em 0 segundos
      endTime: 3 * 60 + 13, // Termina em 5 segundos
      correctAnswer: "Now, where's that dustpan?"
    },
    {
      startTime: 3 * 60 + 51, // Começa em 0 segundos
      endTime: 3 * 60 + 56, // Termina em 5 segundos
      correctAnswer: "Who made these good cookies? I did and mommy helped"
    },
    {
      startTime: 4 * 60 + 8, // Começa em 0 segundos
      endTime: 4 * 60 + 15, // Termina em 5 segundos
      correctAnswer: "What are you making Caillou? A big mess!"
    }


  // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;
let attemptCount = 0;
let player;

// Callback pronto da API do YouTube
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'ItRset_OVfc', // Coloque o ID do vídeo aqui
    playerVars: { 'origin': window.location.origin },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

  
  function playSegment() {
      const question = quizQuestions[currentQuestionIndex];
      player.seekTo(question.startTime);
      player.playVideo();
  }
  
  function pauseVideo() {
      player.pauseVideo();
      clearTimeout(timeoutId); // Limpa o timeout para evitar que pause o vídeo novamente
  }
  
  let timeoutId; // Declara uma variável para armazenar o ID do timeout globalmente
  
  function onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING) {
          const question = quizQuestions[currentQuestionIndex];
          let playTime = (question.endTime - question.startTime) * 1000;
          clearTimeout(timeoutId); // Limpa qualquer timeout existente
          timeoutId = setTimeout(() => player.pauseVideo(), playTime);
      }
  }
  
  
  function checkAnswer() {
      const userAnswer = document.getElementById("answer").value;
      const question = quizQuestions[currentQuestionIndex];
      const resultElement = document.getElementById("result");
  
      const cleanUserAnswer = userAnswer.toLowerCase().replace(/[^\w\s]/g, "").trim();
      const cleanCorrectAnswer = question.correctAnswer.toLowerCase().replace(/[^\w\s]/g, "").trim();
  
      if (cleanUserAnswer === cleanCorrectAnswer) {
          resultElement.textContent = "✔️ Correto!";
          attemptCount = 0; // Reset attempts for the next question
      } else {
          attemptCount++;
          if (attemptCount >= 2) {
              resultElement.innerHTML = `🥺❌ Incorreto. A resposta correta é:<br> <i>"${question.correctAnswer}"</i>`;
              attemptCount = 0; // Reset attempts for the next question
          } else {
              resultElement.textContent = "❌ Incorreto, tente novamente.";
          }
      }
  
      // Always show the next button after the user attempts to answer
      document.getElementById("next-button").style.display = 'inline';
  
      // Check if this is the last question and the user answered correctly
      if (currentQuestionIndex === quizQuestions.length - 1 && cleanUserAnswer === cleanCorrectAnswer) {
          finishQuiz();
      }
  }
   
  
  function nextQuestion() {
      if (currentQuestionIndex < quizQuestions.length - 1) {
          currentQuestionIndex++;
          document.getElementById("answer").value = ''; // Limpa a caixa de resposta
          document.getElementById("result").textContent = ''; // Limpa a mensagem de resultado
          playSegment();
      }
  }
  
  function previousQuestion() {
      if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          document.getElementById("answer").value = ''; // Limpa a caixa de resposta
          document.getElementById("result").textContent = ''; // Limpa a mensagem de resultado
          playSegment();
      }
  }

  function finishQuiz() {
      document.getElementById("quiz-finish").innerHTML = "🥳🎉 Parabéns. Você terminou o quiz!<br/><br/>";
      const redoButton = document.createElement("button");
      redoButton.textContent = "Refazer Quiz";
      redoButton.addEventListener("click", () => {
          location.reload(); // Refreshes the page
      });
      document.getElementById("quiz-finish").appendChild(redoButton);
      document.getElementById("quiz-finish").style.display = 'block';
  }    
  
  
  function redoQuiz() {
      currentQuestionIndex = 0; // Reseta o índice da pergunta
      attemptCount = 0; // Reseta a contagem de tentativas
      document.getElementById("quiz-finish").style.display = 'none';
      document.getElementById("answer").value = ''; // Limpa a caixa de resposta
      document.getElementById("result").textContent = ''; // Limpa a mensagem de resultado
      playSegment(); // Inicia o quiz novamente
  }   
  
  // Event listeners para os botões próximo e anterior
  document.getElementById("play-button").addEventListener("click", playSegment);
  document.getElementById("pause-button").addEventListener("click", pauseVideo);
  document.getElementById("next-button").addEventListener("click", nextQuestion);
  document.getElementById("previous-button").addEventListener("click", previousQuestion);
  document.getElementById("submit-answer").addEventListener("click", checkAnswer);
  
  // Inicia o quiz reproduzindo o primeiro segmento
  playSegment();
