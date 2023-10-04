document.addEventListener("DOMContentLoaded", function () {
    const lyricsData = [
        {
            phrase: "You gotta go and get angry at all of my _____, You know I try, but I don't do too well with _____, I hope I don't run out of time, could someone call the _____?",
            options: [
                ["modesty", "honesty", "sincerity", "courtesy", "integrity", "verity"],
                ["apologies", "theories", "money", "hypotheses", "philosophies", "strategies"],
                ["guarantee", "trainee", "key", "referee", "degree", "employee"]
                
            ],
            answers: ["honesty", "apologies", "referee"],
            driveFileId: "1wUJBftIoH-LQU6rujPDswpN4R0UNbFOF" // Replace with your Google Drive file ID
        },
        {
            phrase: "'Cause I just need one more shot at _____ I know you know that I made those _____ maybe once or twice.",
            options: [
                ["forgiveness", "effectiveness", "reflectiveness", "forgetfulness", "tenderness", "willingness"],
                ["mistakes", "lakes", "takes", "shakes", "breaks", "awakes"],
                ["twice", "mice", "nice", "sometimes", "paradise", "precise"]
                
            ],
            answers: ["forgiveness", "mistakes", "twice"],
            driveFileId: "1g5bKvSQm_mHs_jMLyepXQ9ZxFUVTiYrG" // Replace with your Google Drive file ID
        },
        // Add more parts here with their respective Google Drive file IDs
    ];

    let currentPartIndex = 0;
    let score = 0;

    const phraseContainer = document.getElementById("phrase");
    const optionsContainer = document.getElementById("options-container");
    const checkButton = document.getElementById("check-button");
    const nextButton = document.getElementById("next-button");
    const scoreDisplay = document.getElementById("score");
    const audio = document.getElementById("audio");
    const doItOverButton = document.getElementById("do-it-over-button"); // Add this line

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function loadAudio(driveFileId) {
        const driveFileURL = `https://drive.google.com/uc?id=${driveFileId}`;
        audio.src = driveFileURL;
        audio.load();
    }

    function loadPhrase(partIndex) {
        const currentPart = lyricsData[partIndex];
        const phrase = currentPart.phrase;
        phraseContainer.textContent = phrase;
        optionsContainer.innerHTML = "";

        currentPart.options.forEach((optionGroup, gapIndex) => {
            shuffleArray(optionGroup);
            const optionSelect = document.createElement("select");
            optionSelect.classList.add("gap-select");
            optionSelect.dataset.gapIndex = gapIndex;

            optionGroup.forEach((option) => {
                const optionItem = document.createElement("option");
                optionItem.value = option;
                optionItem.textContent = option;
                optionSelect.appendChild(optionItem);
            });

            optionsContainer.appendChild(optionSelect);
        });

        loadAudio(currentPart.driveFileId);
        checkButton.disabled = false;
    }

    function checkAnswer() {
        const currentPart = lyricsData[currentPartIndex];
        const gapSelects = document.querySelectorAll(".gap-select");
        const userAnswers = Array.from(gapSelects).map((select) => select.value);

        const correctAnswers = currentPart.answers;

        let partScore = 0;

        for (let i = 0; i < correctAnswers.length; i++) {
            const gapSelect = gapSelects[i];
            if (userAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
                partScore++;
                gapSelect.classList.add("correct");
                gapSelect.classList.remove("wrong");
            } else {
                gapSelect.classList.add("wrong");
                gapSelect.classList.remove("correct");
            }
        }

        score += partScore;
        scoreDisplay.textContent = `Score: ${score}`;
        checkButton.disabled = true;
        nextButton.disabled = false;
    }

    function nextPart() {
        const gapSelects = document.querySelectorAll(".gap-select");
        gapSelects.forEach((gapSelect) => {
            gapSelect.classList.remove("correct", "wrong");
        });

        if (currentPartIndex < lyricsData.length - 1) {
            currentPartIndex++;
            loadPhrase(currentPartIndex);
            nextButton.disabled = true;
        } else {
            phraseContainer.textContent = "Congratulations! You've completed the exercise.";
            optionsContainer.innerHTML = "";
            checkButton.disabled = true;
            nextButton.disabled = true;
            doItOverButton.style.display = "block"; // Show the "Do it over" button
        }
    }

    // Function to reset the quiz
    function resetQuiz() {
        currentPartIndex = 0;
        score = 0;
        loadPhrase(currentPartIndex);
        scoreDisplay.textContent = "Score: 0";
        doItOverButton.style.display = "none"; // Hide the "Do it over" button
    }

    loadPhrase(currentPartIndex);

    checkButton.addEventListener("click", checkAnswer);
    nextButton.addEventListener("click", nextPart);
    doItOverButton.addEventListener("click", resetQuiz); // Add this line
});