const phrases = [
    { portuguese: "Olá!", english: "Hello!" },
    { portuguese: "Bom dia!", english: "Good morning!" },
    { portuguese: "Boa tarde!", english: "Good afternoon!" },
    { portuguese: "Boa noite!", english: "Good evening!" },
    { portuguese: "Como você está?", english: "How are you?" },
    { portuguese: "Estou bem, obrigado(a).", english: "I'm fine, thank you." },
    { portuguese: "Qual é o seu nome?", english: "What's your name?" },
    { portuguese: "Meu nome é Aden.", english: "My name is Aden." },
    { portuguese: "Prazer em conhecê-lo(a).", english: "Nice to meet you." },
    { portuguese: "Por favor", english: "Please" },
    { portuguese: "Obrigado(a)", english: "Thank you" },
    { portuguese: "De nada", english: "You're welcome" },
    { portuguese: "Sim", english: "Yes" },
    { portuguese: "Não", english: "No" },
    { portuguese: "Com licença / Desculpe", english: "Excuse me" },
    { portuguese: "Desculpe", english: "I'm sorry" },
    { portuguese: "Quanto custa isso?", english: "How much is this?" },
    { portuguese: "Onde fica o banheiro?", english: "Where is the bathroom?" },
    { portuguese: "Eu não entendo", english: "I don't understand" },
    { portuguese: "Você pode me ajudar?", english: "Can you help me?" },
    { portuguese: "Que horas são?", english: "What time is it?" },
    { portuguese: "Eu gosto disso", english: "I like it" },
    { portuguese: "Eu não gosto disso", english: "I don't like it" },
    { portuguese: "Como se diz... em português?", english: "How do you say... in Portuguese?" },
    { portuguese: "Eu preciso de ajuda", english: "I need help" },
    { portuguese: "Está delicioso", english: "It's delicious" },
    { portuguese: "Estou perdido(a)", english: "I'm lost" },
    { portuguese: "Você pode repetir, por favor?", english: "Can you repeat that, please?" },
    { portuguese: "O que é isso?", english: "What's this?" },
    { portuguese: "Quanto tempo leva?", english: "How long does it take?" },
    { portuguese: "Onde fica o caixa eletrônico mais próximo?", english: "Where is the nearest ATM?" },
    { portuguese: "Eu sou turista", english: "I'm a tourist" },
    { portuguese: "Como está o tempo hoje?", english: "How's the weather today?" },
    { portuguese: "Eu te amo", english: "I love you" },
    { portuguese: "Qual é o seu número de telefone?", english: "What's your phone number?" },
    { portuguese: "De onde você é?", english: "Where are you from?" },
    { portuguese: "Você fala inglês?", english: "Can you speak English?" },
    { portuguese: "Posso ter a conta, por favor?", english: "Can I have the bill, please?" },
    { portuguese: "Você tem um mapa?", english: "Do you have a map?" },
    { portuguese: "Qual é a sua comida favorita?", english: "What's your favorite food?" },
    { portuguese: "Eu não sei", english: "I don't know" },
    { portuguese: "Você pode me mostrar?", english: "Can you show me?" },
    { portuguese: "Eu tenho uma pergunta", english: "I have a question" },
    { portuguese: "Como foi o seu dia?", english: "How was your day?" },
    { portuguese: "Qual é o seu trabalho?", english: "What's your job?" },
    { portuguese: "Posso tirar uma foto?", english: "Can I take a photo?" },
    { portuguese: "Quantos anos você tem?", english: "How old are you?" },
    { portuguese: "Qual é a diferença de fuso horário?", english: "What's the time difference?" },
    { portuguese: "Eu preciso de um táxi", english: "I need a taxi" },
    { portuguese: "Estou perdido(a)", english: "I'm lost" },
    { portuguese: "Você aceita cartão de crédito?", english: "Do you accept credit cards?" },
    { portuguese: "Qual é a sua cor favorita?", english: "What's your favorite color?" },
    { portuguese: "Você pode recomendar um restaurante?", english: "Can you recommend a restaurant?" },
    { portuguese: "Este lugar está ocupado?", english: "Is this seat taken?" },
    { portuguese: "O que tem no cardápio?", english: "What's on the menu?" },
    { portuguese: "Você pode me ajudar com direções?", english: "Can you help me with directions?" },
    { portuguese: "Estou aqui de férias", english: "I'm here on vacation" },
    { portuguese: "Qual é o seu hobby?", english: "What's your hobby?" },
    { portuguese: "Sou alérgico(a) a...", english: "I'm allergic to..." },
    { portuguese: "Onde posso comprar lembranças?", english: "Where can I buy souvenirs?" },
    { portuguese: "Qual é a senha do Wi-Fi?", english: "What's the Wi-Fi password?" },
    { portuguese: "Quão longe fica a praia mais próxima?", english: "How far is it to the nearest beach?" },
    { portuguese: "Você pode recomendar um bom livro?", english: "Can you recommend a good book?" },
    { portuguese: "Eu não tenho reserva", english: "I don't have a reservation" },
    { portuguese: "Há uma farmácia por perto?", english: "Is there a pharmacy nearby?" },
    { portuguese: "Estou aqui para uma conferência", english: "I'm here for a conference" },
    { portuguese: "Qual é o seu filme favorito?", english: "What's your favorite movie?" },
    { portuguese: "Você pode me ajudar a encontrar o caminho de volta?", english: "Can you help me find my way back?" },
    { portuguese: "Qual é o custo de vida aqui?", english: "What's the cost of living here?" },
    { portuguese: "Posso experimentar isso?", english: "Can I try this on?" },
    { portuguese: "Qual é a melhor época para visitar?", english: "What's the best time to visit?" },
    { portuguese: "Você tem uma recomendação de prato típico?", english: "Do you have a recommendation for a local dish?" },
    { portuguese: "Há um museu por perto?", english: "Is there a museum nearby?" },
    { portuguese: "Como eu chego ao aeroporto?", english: "How do I get to the airport?" },
    { portuguese: "Estou aqui a trabalho", english: "I'm here for business" },
    { portuguese: "Onde posso comprar ingressos?", english: "Where can I buy tickets?" },
    { portuguese: "Posso tomar um copo de água?", english: "Can I have a glass of water?" },
    { portuguese: "Como chego à estação de trem?", english: "How do I get to the train station?" },
    { portuguese: "Qual é a melhor maneira de se locomover pela cidade?", english: "What's the best way to get around the city?" },
    { portuguese: "Há um hospital por perto?", english: "Is there a hospital nearby?" },
    { portuguese: "Você pode recomendar um bom lugar para fazer compras?", english: "Can you recommend a good place to shop?" },
    { portuguese: "Qual é a temperatura hoje?", english: "What's the temperature today?" },
    { portuguese: "Você pode chamar um táxi para mim?", english: "Can you call a taxi for me?" },
    { portuguese: "Eu não tenho muito dinheiro", english: "I don't have a lot of money" },
    { portuguese: "Qual é a estação de metrô mais próxima?", english: "What's the nearest metro station?" },
    { portuguese: "Você pode me ajudar com minha bagagem?", english: "Can you help me with my luggage?" },
    { portuguese: "Há uma agência dos Correios por perto?", english: "Is there a post office nearby?" },
    { portuguese: "Eu preciso de um médico", english: "I need a doctor" },
    { portuguese: "Você pode recomendar um bom bar?", english: "Can you recommend a good bar?" },
    { portuguese: "Qual é o preço disso?", english: "What's the price of this?" },
    { portuguese: "Você pode falar mais devagar?", english: "Can you speak more slowly?" },
    { portuguese: "Qual é o ponto de ônibus mais próximo?", english: "What's the nearest bus stop?" },
    { portuguese: "Posso ter um cardápio em inglês?", english: "Can I have a menu in English?" },
    { portuguese: "Estou procurando uma loja de souvenirs", english: "I'm looking for a souvenir shop" },
    { portuguese: "Qual é a melhor maneira de aprender português?", english: "What's the best way to learn Portuguese?" },
    { portuguese: "Posso tomar um café, por favor?", english: "Can I have a coffee, please?" },
    { portuguese: "Como chego ao centro da cidade?", english: "How do I get to the city center?" },
    { portuguese: "Há um posto de informações turísticas?", english: "Is there a tourist information office?" },
    { portuguese: "Posso pagar com cartão de crédito?", english: "Can I pay with a credit card?" },
    { portuguese: "Vou querer o mesmo que ele/ela.", english: "I'll have the same as him/her." }
    ];
    
    const phraseContainer = document.getElementById("original__text");
    const wordContainer = document.querySelector(".word__container");
    const feedbackContainer = document.getElementById("feedback_container");
    const checkButton = document.querySelector(".check_button");
    const skipButton = document.querySelector(".skip_button");
    
    let currentPhraseIndex = 0;
    let currentPhraseWords = [];
    
    let selectedWordsOrder = [];
    let chancesLeft = 2;
    let isButtonDisabled = false;
    
    function displayPhrase() {
      if (currentPhraseIndex < phrases.length) {
          const currentPhrase = phrases[currentPhraseIndex];
          document.getElementById("portuguese__text").textContent = currentPhrase.portuguese;
          document.getElementById("english__text").textContent = '';
          document.getElementById("original__text").textContent = '';
    
          currentPhraseWords = currentPhrase.english.split(' ');
          currentPhraseWords = shuffleArray(currentPhraseWords);
          wordContainer.innerHTML = '';
          selectedWordsOrder = [];
          feedbackContainer.textContent = '';
          feedbackContainer.classList.remove("correct", "incorrect");
    
          currentPhraseWords.forEach((word) => {
              const wordBalloon = document.createElement("div");
              wordBalloon.className = "word";
              wordBalloon.textContent = word;
    
              wordBalloon.addEventListener("click", () => {
                  wordBalloon.classList.toggle("selected");
    
                  if (wordBalloon.classList.contains("selected")) {
                      selectedWordsOrder.push(wordBalloon.textContent);
                  } else {
                      const indexToRemove = selectedWordsOrder.indexOf(wordBalloon.textContent);
                      if (indexToRemove !== -1) {
                          selectedWordsOrder.splice(indexToRemove, 1);
                      }
                  }
                  const translatedPhrase = selectedWordsOrder.join(' ');
                  phraseContainer.textContent = translatedPhrase;
              });
    
              wordContainer.appendChild(wordBalloon);
          });
      } else {
          phraseContainer.textContent = "Parabéns! Você completou todas as frases.";
          checkButton.disabled = true; // Disable the check button
          skipButton.disabled = true; // Disable the skip button
      }
    }
    
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    function checkAnswer() {
      if (isButtonDisabled) return; // Return if button is disabled
    
      if (checkAllWordsCompleted()) {
          feedbackContainer.textContent = "Você pulou todas as frases 🤔🤷🏽‍♂️";
          checkButton.disabled = true; // Disable the check button
          skipButton.disabled = true; // Disable the skip button
          return;
      }
    
      // Disable the buttons for 2 seconds
      isButtonDisabled = true;
      checkButton.disabled = true;
      skipButton.disabled = true;
    
      setTimeout(() => {
          isButtonDisabled = false;
          checkButton.disabled = false;
          skipButton.disabled = false;
      }, 2000);
    
      const userWords = selectedWordsOrder.join(' ');
      const currentPhrase = phrases[currentPhraseIndex].english;
    
      if (userWords === currentPhrase) {
          feedbackContainer.textContent = "✔️ Mandou bem!";
          feedbackContainer.classList.remove("incorrect");
          feedbackContainer.classList.add("correct");
    
          setTimeout(() => {
              currentPhraseIndex++;
              if (currentPhraseIndex < phrases.length) {
                  displayPhrase();
                  chancesLeft = 2;
              } else {
                  feedbackContainer.textContent = "🥳🎉 Parabéns! Você completou todas as frases.";
                  checkButton.disabled = true; // Disable the check button
                  skipButton.disabled = true; // Disable the skip button
    
                  // Hide the buttons
                  checkButton.style.display = "none";
                  skipButton.style.display = "none";
    
                  // Add a break line
                  var breakLine = document.createElement("br");
                  feedbackContainer.appendChild(breakLine);
    
                  // Add a button to redo the quiz
                  var redoButton = document.createElement("button");
                  redoButton.textContent = "Refazer o quiz";
                  redoButton.classList.add("check_button"); // Add the class "check_button"
                  redoButton.addEventListener("click", function () {
                      location.reload(); // Reload the page to redo the quiz
                  });
                  feedbackContainer.appendChild(redoButton);
              }
    
          }, 2500);
      } else {
          if (chancesLeft > 0) {
              feedbackContainer.textContent = `❌ Incorreto. Você tem ${chancesLeft} tentativas. ⏳`;
              feedbackContainer.classList.remove("correct");
              feedbackContainer.classList.add("incorrect");
              chancesLeft--;
          } else {
              feedbackContainer.textContent = `😕 Incorreto. A resposta correta é: "${currentPhrase}".`;
              feedbackContainer.classList.remove("correct");
              feedbackContainer.classList.add("incorrect");
    
              setTimeout(() => {
                  // Don't increment currentPhraseIndex if answer is incorrect
                  displayPhrase();
                  chancesLeft = 2;
              }, 2000);
          }
      }
    
      const selectedWords = document.querySelectorAll(".word.selected");
      selectedWords.forEach((element) => element.classList.remove("selected"));
      selectedWordsOrder = [];
    }
    
    function skipPhrase() {
      currentPhraseIndex++;
      if (currentPhraseIndex < phrases.length) {
          displayPhrase();
          chancesLeft = 2;
      } else {
          feedbackContainer.textContent = "Parabéns! Você completou todas as frases.";
          checkButton.disabled = true; // Disable the check button
          skipButton.disabled = true; // Disable the skip button
      }
    }
    
    checkButton.addEventListener("click", checkAnswer);
    skipButton.addEventListener("click", skipPhrase);
    
    displayPhrase();
    
    function checkAllWordsCompleted() {
      return currentPhraseIndex >= phrases.length;
    }