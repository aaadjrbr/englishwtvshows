const phrases = [
    { portuguese: "Oi.", english: "Hi." },
    { portuguese: 'Esse cara diz, "Olá,"', english: 'This guy says, "Hello,"' },
    { portuguese: "Eu quero me matar.", english: "I want to kill myself." },
    { portuguese: "Tudo bem, querida?", english: "You okay, sweetie?" },
    { portuguese: "Eu só sinto como se", english: "I just feel like" },
    { portuguese: "alguém tivesse enfiado a mão pela minha garganta", english: "someone reached down my throat" },
    { portuguese: "pegado meu intestino delgado,", english: "grabbed my small intestine," },
    { portuguese: "puxado pra fora pela minha boca", english: "pulled it out of my mouth" },
    { portuguese: "e amarrado no meu pescoço.", english: "and tied it around my neck." },
    { portuguese: "Biscoito?", english: "Cookie?" },
    { portuguese: "Carol tirou as coisas dela hoje.", english: "Carol moved her stuff out today." },
    { portuguese: "(todos)", english: "(all)" },
    { portuguese: "Ah.", english: "Ohh." },
    { portuguese: "Deixa eu te pegar um café.", english: "- Let me get you some coffee." },
    { portuguese: "Obrigado.", english: "- Thanks." },
    { portuguese: "Ah, que nojo.", english: "Oh, ugh." },
    { portuguese: "Ah, não. Não, para.", english: "Uh-oh, no. No, don't." },
    { portuguese: "Para de limpar minha aura.", english: "Stop cleansing my aura." },
    { portuguese: "Não. Deixa", english: "Don't. Just leave" },
    { portuguese: "minha aura em paz, tá bom?", english: "my aura alone, okay?" },
    { portuguese: "Eu vou ficar bem, tá?", english: "I'll be fine, alright?" },
    { portuguese: "Sério, todo mundo", english: "Really, everyone" },
    { portuguese: "Eu espero que ela seja muito feliz.", english: "I hope she'll be very happy." },
    { portuguese: "Não, você não espera.", english: "- No, you don't" },
    { portuguese: "Não, eu não espero.", english: "- No, I don't." },
    { portuguese: "Que se dane, ela me deixou!", english: "To hell with her, she left me!" },
    { portuguese: "E você nunca soube", english: "And you never knew" },
    { portuguese: "que ela era lésbica.", english: "she was a lesbian." },
    { portuguese: "Não, tá bom?", english: "No, okay?" },
    { portuguese: "Por que todo mundo", english: "Why does everyone" },
    { portuguese: "continua insistindo nisso?", english: "keep fixating on that?" },
    { portuguese: "Ela não sabia,", english: "She didn't know," },
    { portuguese: "como eu deveria saber?", english: "how should I know?" },
    { portuguese: "Às vezes,", english: "Sometimes," },
    { portuguese: "eu queria ser lésbica.", english: "I wish I was a lesbian." },
    { portuguese: "Eu disse isso em voz alta?", english: "Did I say that out loud?" },
    { portuguese: "Tá, Ross, olha, você está", english: "Alright, Ross, look, you're" },
    { portuguese: "sentindo muita dor agora.", english: "feeling a lot of pain right now." },
    { portuguese: "Você está com raiva.", english: "You're angry." },
    { portuguese: "Você está sofrendo.", english: "You're hurting." },
    { portuguese: "Posso te dizer", english: "Can I tell you" },
    { portuguese: "qual é a resposta?", english: "what the answer is?" },
    { portuguese: "Clubes de strip-tease!", english: "Strip joints!" },
    { portuguese: "Vamos lá, você está solteiro.", english: "Come on, you're single." },
    { portuguese: "Liberte um pouco dos hormônios...", english: "Have some hormones.." },
    { portuguese: "Mas eu não quero", english: "But I don't want" },
    { portuguese: "estar solteiro, tá bom?", english: "to be single, okay?" },
    { portuguese: "Eu só, eu só,", english: "I just, I just," },
    { portuguese: "eu só quero casar de novo.", english: "I just want to be married again." },
    { portuguese: "E eu acabei", english: "And I just" },
    { portuguese: "de ganhar um milhão de dólares.", english: "won a million dollars." },
    { portuguese: "Rachel?", english: "Rachel?" },
    { portuguese: "[suspiro]", english: "[gasps]" },
    { portuguese: "Oh, Deus, Monica, oi. Graças a Deus.", english: "Oh, God, Monica, hi. Thank god." },
    { portuguese: "Eu acabei de ir ao seu prédio", english: "I just went to your building" },
    { portuguese: "e você não estava lá.", english: "and you weren't there." },
    { portuguese: "E aí um cara com um martelo grande", english: "And then this guy with a big" },
    { portuguese: "disse que você poderia estar aqui", english: "hammer said you might be here" },
    { portuguese: "e você está. Você está.", english: "and you are. You are." },
    { portuguese: "Posso te pegar um café?", english: "Can I get you some coffee?" },
    { portuguese: "Descafeinado.", english: "Decaf." },
    { portuguese: "Ok, pessoal, essa é Rachel,", english: "Okay, everybody this is Rachel," },
    { portuguese: "mais uma sobrevivente do Lincoln High.", english: "another Lincoln High survivor." },
    { portuguese: "Esse é todo mundo.", english: "This-this is everybody." },
    { portuguese: "Esse é Chandler, e Phoebe", english: "This is Chandler, and Phoebe" },
    { portuguese: "e Joey.", english: "and Joey." },
    { portuguese: "E você lembra", english: "And you remember" },
    { portuguese: "do meu irmão, Ross?", english: "my brother, Ross?" },
    { portuguese: "Claro! Oi.", english: "- Sure! Hi." },
    { portuguese: "Oi.", english: "- Hey." },
    { portuguese: "Então, você quer nos contar agora,", english: "So you want to tell us now," },
    { portuguese: "ou vamos esperar", english: "or are we waiting" },
    { portuguese: "por quatro damas de honra encharcadas?", english: "for four wet bridesmaids?" },
    { portuguese: "Ah, Deus! Bem...", english: "Oh, God! Well.." },
    { portuguese: "...começou mais ou menos meia hora", english: "...it started about a half-hour" },
    { portuguese: "antes do casamento.", english: "before the wedding." },
    { portuguese: "Eu estava no quarto onde", english: "I was in this room where" },
    { portuguese: "estávamos guardando os presentes", english: "we were keeping all the presents" },
    { portuguese: "E eu estava olhando", english: "And I was looking" },
    { portuguese: "para essa sopeira.", english: "at this gravy boat." },
    { portuguese: "Uma sopeira Limoges", english: "This really" },
    { portuguese: "realmente linda.", english: "gorgeous Limoges gravy boat." },
    { portuguese: "Quando de repente...", english: "When all of sudden.." },
    { portuguese: "Adoçante?", english: "Sweet N' Low?" },
    { portuguese: "Eu percebi", english: "I realized" },
    { portuguese: "Eu percebi que eu estava", english: "I realized that I was" },
    { portuguese: "mais excitada", english: "more turned on" },
    { portuguese: "por essa sopeira", english: "by this gravy boat" },
    { portuguese: "do que pelo Barry.", english: "than by Barry." },
    { portuguese: "E aí eu surtei.", english: "And then I got" },
    { portuguese: "E foi então que me atingiu", english: "really freaked out." },
    { portuguese: "o quanto Barry", english: "And that's when it hit me" },
    { portuguese: "se parece com o Sr. Cabeça de Batata.", english: "how much Barry" },
    { portuguese: "Sabe, eu sempre", english: "looks Mr. Potato Head." },
    { portuguese: "soube que ele parecia familiar, mas...", english: "You know, I mean, I always" },
    { portuguese: "Enfim, eu só tinha", english: "knew he looked familiar, but.." },
    { portuguese: "que sair de lá", english: "Anyway, I just had" },
    { portuguese: "e comecei a me perguntar", english: "to get out of there" },
    { portuguese: '"Por que estou fazendo isso?"', english: "and I started wondering" },
    { portuguese: 'e "Por quem estou fazendo isso?"', english: '"Why am I doing this?"' },
    { portuguese: "Então, de qualquer forma,", english: '"and "Who am I doing this for?"' },
    { portuguese: "eu simplesmente não sabia para onde ir", english: "So, anyway," },
    { portuguese: "e eu sei que você e eu", english: "I just didn't know where to go" },
    { portuguese: "nos distanciamos um pouco", english: "and I know that you and I" },
    { portuguese: "mas você é a única pessoa que eu", english: "have kind of drifted apart" },
    { portuguese: "conhecia que morava aqui na cidade.", english: "but you're the only person I" },
    { portuguese: "Que não estava", english: "knew who lived here in the city." },
    { portuguese: "convidada para o casamento.", english: "Who wasn't" },
    { portuguese: "Ah, eu meio que esperava", english: "invited to the wedding." },
    { portuguese: "que isso não fosse um problema.", english: "Oh, I was kind of hoping" }
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
        
            // Disable the buttons and wordContainer for 2 seconds
            isButtonDisabled = true;
            checkButton.disabled = true;
            skipButton.disabled = true;
            wordContainer.style.pointerEvents = 'none'; // Disable clicking on words
        
            setTimeout(() => {
                isButtonDisabled = false;
                checkButton.disabled = false;
                skipButton.disabled = false;
                wordContainer.style.pointerEvents = 'auto'; // Re-enable clicking on words
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
        
                }, 1500);
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