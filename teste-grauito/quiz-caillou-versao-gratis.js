const phrases = [
    { portuguese: "Você está ficando um garotão.", english: "You're getting to be a big boy." },
    { portuguese: "Eu sou apenas uma criança de quatro anos.", english: "I'm just a kid who's four." },
    { portuguese: "A cada dia eu cresço mais um pouco.", english: "Each day I grow some more." },
    { portuguese: "Eu gosto de explorar.", english: "I like exploring." },
    { portuguese: "Eu sou o Caillou.", english: "I'm Caillou." },
    { portuguese: "Tantas coisas para fazer.", english: "So many things to do." },
    { portuguese: "Cada dia é algo novo.", english: "Each day is something new." },
    { portuguese: "Eu vou compartilhar com você.", english: "I'll share them with you." },
    { portuguese: "Eu sou o Caillou.", english: "I'm Caillou." },
    { portuguese: "Meu mundo está girando,", english: "My world is turning," },
    { portuguese: "mudando a cada dia,", english: "changing each day," },
    { portuguese: "com mamãe e papai", english: "with mommy and daddy" },
    { portuguese: "Estou encontrando meu caminho!", english: "I'm finding my way!" },
    { portuguese: "Crescer não é tão difícil,", english: "Growing up is not so tough," },
    { portuguese: "exceto quando eu já tive o suficiente.", english: "except when I've had enough." },
    { portuguese: "Mas há muitas coisas divertidas.", english: "But there's lots of fun stuff." },
    { portuguese: "Eu sou o Caillou,", english: "I'm Caillou," },
    { portuguese: "Caillou, Caillou, eu sou o Caillou.", english: "Caillou, Caillou, I'm Caillou." },
    { portuguese: "Eh heh heh heh heh...", english: "Eh heh heh heh heh..." },
    { portuguese: "Esse sou eu", english: "That's me" },
    { portuguese: "Hora da história, crianças.", english: "Storytime, kids." },
    { portuguese: "Agora, o que o Caillou fez hoje?", english: "Now, what did Caillou do today?" },
    { portuguese: "A história de hoje se chama", english: "Today's story is called" },
    { portuguese: '"Caillou faz biscoitos",', english: '"Caillou makes Cookies,"' },
    { portuguese: "Tudo aconteceu quando o Caillou tinha apenas três anos.", english: "It all happened when Caillou was just three years old." },
    { portuguese: "La-la-la...la-la-la.", english: "La-la-la...la-la-la." },
    { portuguese: "Caillou. Você tem que brincar quietinho agora.", english: "Caillou. You have to play quietly now." },
    { portuguese: "Rosie vai tirar uma soneca.", english: "Rosie is going to take her nap." },
    { portuguese: "Shhh.", english: "Shhh." },
    { portuguese: "Caillou.", english: "Caillou." },
    { portuguese: "Mas... eu quero brincar.", english: "But...I want to play." },
    { portuguese: "Você ainda pode brincar--", english: "You can still play--" },
    { portuguese: "só faça isso quietinho.", english: "just do it quietly." },
    { portuguese: "Caillou achou que ser quieto", english: "Caillou felt that being quiet" },
    { portuguese: "não era tão divertido quanto ser barulhento.", english: "wasn't as much fun as being noisy." },
    { portuguese: "Caillou...", english: "Caillou..." },
    { portuguese: "Eu pedi para você brincar quietinho.", english: "I asked you to play quietly." },
    { portuguese: "Biscoitos. Eu quero biscoitos.", english: "Cookies. I want cookies." },
    { portuguese: "Estou com fome.", english: "I'm hungry." },
    { portuguese: "Então o Caillou foi para a cozinha...", english: "So Caillou went to the kitchen..." },
    { portuguese: "Melzinhoooo.", english: "Honeeeeeey." },
    { portuguese: "Whoooooaaah.", english: "Whoooooaaah." },
    { portuguese: "Caillou decidiu fazer alguns biscoitos de mel.", english: "Caillou decided to make some honey cookies." },
    { portuguese: "E assim, Caillou começou a trabalhar—", english: "And so, Caillou got to work—" },
    { portuguese: "fazendo um monte de biscoitos de mel:", english: "making a whole bunch of honey cookies:" },
    { portuguese: "gordos, magrinhos,", english: "fat ones, skinny ones," },
    { portuguese: "achatados e redondos.", english: "flat ones, and round ones." },
    { portuguese: "Oh Caillou. O que você está fazendo?", english: "Oh Caillou. What are you doing?" },
    { portuguese: "Estou fazendo biscoitos.", english: "I'm making cookies." },
    { portuguese: "Olha a bagunça que você fez.", english: "Look at the mess you made." },
    { portuguese: "Você quer ajudar a mamãe a limpar?", english: "Do you want to help Mommy clean it up?" },
    { portuguese: "Sim, mamãe--eu e você.", english: "Yes, Mommy--me and you." },
    { portuguese: "Temos que garantir que a cozinha fique bem limpa. (Pausa)", english: "We have to make sure the kitchen is nice and clean. (Beat)" },
    { portuguese: "Agora, onde está aquela pá de lixo?", english: "Now where's that dustpan?" },
    { portuguese: "Eu encontrei.", english: "I found it." },
    { portuguese: "Assim mesmo,", english: "That's the way," },
    { portuguese: "meu ajudante favorito.", english: "my favorite helper." },
    { portuguese: "Caillou.", english: "Caillou." },
    { portuguese: "Caillou estava muito orgulhoso.", english: "Caillou was very proud." },
    { portuguese: "Ele estava ajudando a mamãe a fazer biscoitos.", english: "He was helping Mommy make cookies." },
    { portuguese: "Mamãe--", english: "Mommy--" },
    { portuguese: "você fez uma bagunça.", english: "you made a mess." },
    { portuguese: "Você está certa, mamãe também faz bagunças.", english: "You're right, Mommy makes messes too." },
    { portuguese: "Papai. Papai.", english: "Daddy. Daddy." },
    { portuguese: "Experimente os biscoitos. Experimente os biscoitos.", english: "Try the cookies. Try the cookies." },
    { portuguese: "Mmmmm. Quem fez esses bons biscoitos?", english: "Mmmmm. Who made these good cookies?" },
    { portuguese: "Eu fiz--e a mamãe ajudou.", english: "I did--and Mommy helped." },
    { portuguese: "Mamãe. Papai. Olha.", english: "Mommy. Daddy. Look." },
    { portuguese: "O que você está fazendo, Caillou?", english: "What are you making, Caillou?" },
    { portuguese: "Uma grande bagunça.", english: "A big mess." }
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
    
            // Hide the skip button if the current phrase is the last one
            skipButton.style.display = currentPhraseIndex === phrases.length - 1 ? "none" : "inline";
    
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
        if (currentPhraseIndex === phrases.length - 1) {
            feedbackContainer.textContent = "Você pode pular, é a última frase.";
            skipButton.disabled = true;
            return;
        }
    
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
      
    
      // Pop up button
    
    
    document.querySelector('.button-popup').addEventListener('click', function() {
      document.querySelector('.overlay').style.display = 'block';
      document.querySelector('.popup').style.display = 'block';
    });
    
    document.querySelector('.overlay').addEventListener('click', function() {
      document.querySelector('.overlay').style.display = 'none';
      document.querySelector('.popup').style.display = 'none';
    });
    
    document.querySelector('.close').addEventListener('click', function() {
      document.querySelector('.overlay').style.display = 'none';
      document.querySelector('.popup').style.display = 'none';
    });