const fruits = [
    "apple", "banana", "cherry", "fig", "grape", "kiwi", "lemon",
    "mango", "orange", "papaya", "pear", "pineapple", "plum",
    "strawberry", "watermelon", "apricot", "blueberry", "coconut", "cranberry",
    "blackberry", "grapefruit", "guava", "lime", "lychee"
        ];


        let level = 1;
        let attempts = 4;
        let correctWord;
        let wordSequence = [];
        let clickedWords = [];
        let gameStarted = false;
        let gameOver = false;
        let sequenceShowing = false;
        let canClickOptions = false;

        const wordContainer = document.getElementById("word-container");
        const attemptsDisplay = document.getElementById("attempts");
        const messageDisplay = document.getElementById("message");
        const startButton = document.getElementById("startButton");
        const restartButton = document.getElementById("restartButton");

        let interval;

        function startLevel() {
            wordContainer.innerHTML = '';
            clickedWords = [];
            restartButton.style.display = 'none';
            gameOver = false;
            canClickOptions = false;

            wordSequence = generateSequence(level);
            wordSequence = shuffle(wordSequence); // Embaralhar a sequência
            showWordsInSequence(wordSequence);
        }

        function shuffle(array) {
            // Algoritmo de embaralhamento Fisher-Yates
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function showWordsInSequence(sequence) {
            sequenceShowing = true;
            let index = 0;
            interval = setInterval(() => {
                if (index < sequence.length) {
                    wordContainer.innerHTML = sequence[index];
                    index++;
                } else {
                    wordContainer.innerHTML = '';
                    clearInterval(interval);
                    sequenceShowing = false;
                    canClickOptions = true;
                    setTimeout(() => {
                        messageDisplay.textContent = "Agora, clique nas palavras que você viu!";
                        displayWordsToClick(wordSequence);
                    }, 500);
                }
            }, 1000);
        }

        function displayWordsToClick(sequence) {
            const shuffledSequence = shuffle([...sequence]); // Criar uma cópia embaralhada da sequência
            shuffledSequence.forEach(word => {
                const wordElement = document.createElement("div");
                wordElement.classList.add("word");
                wordElement.textContent = word;
                if (!sequenceShowing && canClickOptions) {
                    wordElement.onclick = () => checkWord(word);
                }
                wordContainer.appendChild(wordElement);
            });
        }

        function checkWord(word) {
            if (gameOver || sequenceShowing || !canClickOptions) return;

            if (wordSequence[clickedWords.length] === word) {
                clickedWords.push(word);
                if (clickedWords.length === wordSequence.length) {
                    if (level === 6) { // Alterar o nível para corresponder ao número de frutas
                        messageDisplay.textContent = "Parabéns! Você completou o jogo.";
                        restartButton.style.display = 'block';
                        gameOver = true;
                    } else {
                        level++;
                        messageDisplay.textContent = "Correto!";
                        canClickOptions = false; // Impedir cliques até que a próxima sequência seja exibida
                        setTimeout(() => {
                            messageDisplay.textContent = "";
                            startLevel();
                        }, 1000);
                    }
                }
            } else {
                attempts--;
                attemptsDisplay.textContent = attempts;
                if (attempts === 0) {
                    messageDisplay.textContent = "Fim de Jogo";
                    restartButton.style.display = 'block';
                    clearInterval(interval);
                    gameOver = true;
                } else {
                    messageDisplay.textContent = "Incorreto! Tente Novamente";
                    canClickOptions = false; // Impedir cliques até que a próxima sequência seja exibida
                    setTimeout(() => showWordsInSequence(wordSequence), 1000);
                }
            }
        }

        function generateSequence(level) {
            const sequence = [];
            const usedWords = [];
            for (let i = 0; i < level && i < fruits.length; i++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * fruits.length);
                } while (usedWords.includes(fruits[randomIndex]));
                sequence.push(fruits[randomIndex]);
                usedWords.push(fruits[randomIndex]);
            }
            return sequence;
        }

        startButton.addEventListener("click", () => {
            if (gameOver) return;
            gameStarted = true;
            startButton.style.display = 'none';
            startLevel();
        });

        restartButton.addEventListener("click", () => {
            if (gameStarted) {
                restartButton.style.display = 'none';
                attempts = 4;
                attemptsDisplay.textContent = attempts;
                messageDisplay.textContent = "";
                gameOver = false;
                level = 1;
                startLevel();
            }
        });