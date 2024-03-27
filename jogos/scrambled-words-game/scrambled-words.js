const userGuess = document.getElementById("user-guess");
const submitBtn = document.getElementById("submit");
const usersWord = document.getElementById("scrambled-word");
const info = document.getElementById("info");
const levelOutput = document.getElementById("level");
const scoreOutput = document.getElementById("score");
const attemptsOutput = document.getElementById("attempts");
const gameContainer = document.getElementById("game-container");
const guessContainer = document.getElementById("guess-container");
const rules = document.getElementById("rules");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");

let level = 1;
let score = 0;
let word;
let attempts = 0;
let correct = 0;

const lvlOneWords = [
  "coffee", "work", "home", "family", "friend", "food", "water", "time", "money", 
  "love", "health", "sleep", "phone", "car", "bus", "train", "plane", "book", 
  "movie", "music", "sport", "game", "weather", "news", "internet", "computer", "language", 
  "job", "school", "study", "learn", "help", "thank you", "please", "sorry", "yes", 
  "no", "good", "bad", "happy", "sad", "angry", "tired", "hungry", "thirsty", 
  "hot", "cold", "busy", "bored", "beautiful", "ugly", "old", "new", "big", 
  "small", "easy", "difficult", "important", "funny", "interesting", "useful", "strange", 
  "normal", "popular", "quiet", "loud", "fast", "slow", "expensive", "cheap", "free"
];

const lvlTwoWords = [
  "alleviate", "coalesce", "exacerbate", "indifferent", "perpetuate", "relinquish", "scrutinize", "vindicate", "abdicate",
  "benevolent", "discordant", "exemplary", "indulgent", "precipitate", "resilient", "spurious", "virulent", "aberrant",
  "censure", "dubious", "exonerate", "induce", "pervasive", "retract", "stoic", "vitriolic"
];

const lvlThreeWords = [
  "alacrity", "capitulate", "demagogue", "exacerbate", "fortuitous", "idiosyncrasy", "languid", "obfuscate", "perfidious",
  "querulous", "recalcitrant", "sagacious", "tantamount", "ubiquitous", "vociferous", "abrogate", "calumny", "deleterious",
  "ebullient", "facetious", "gregarious", "harangue", "impetuous", "juxtapose", "kowtow", "lugubrious", "maudlin",
  "nefarious", "obstreperous", "panacea", "quixotic", "recalcitrant", "sycophant", "taciturn", "ubiquitous", "vexatious",
  "wanton", "xenophobic", "yearn", "zealot", "acumen", "bombastic", "catalyst", "disparate", "efficacious",
  "fastidious", "grandiose", "hackneyed", "impecunious", "juxtapose", "kaleidoscope", "labyrinthine", "mellifluous", "nadir",
  "obfuscate", "panacea", "quagmire", "redolent", "serendipity", "truculent", "ubiquitous", "venerate", "wistful",
  "zealous"
];

const lvlFourWords = [
  "abstemious", "belligerent", "cacophony", "deleterious", "ebullient", "facile", "gregarious", "histrionic",
  "insidious", "juxtaposition", "kaleidoscope", "laconic", "magnanimous", "nefarious", "obsequious", "paradigm",
  "quintessential", "reverberate", "salient", "trepidation", "ubiquitous", "veracity", "wanton", "xenophobic",
  "yearn", "zenith", "acumen", "bombastic", "catalyst", "disparate", "efficacious", "fervent", "grandiose",
  "hackneyed", "impecunious", "juxtapose", "kaleidoscope", "labyrinthine", "mellifluous", "nadir", "obfuscate",
  "panacea", "quagmire", "redolent", "serendipity", "truculent", "ubiquitous", "venerate", "wistful", "zealous"
];

const lvlFiveWords = [
  "acrimonious", "bombastic", "cacophony", "denouement", "egregious", "fortuitous", "gregarious", "heterogeneous",
  "insidious", "juxtaposition", "kaleidoscope", "lugubrious", "magnanimous", "nefarious", "obfuscate", "paradigm",
  "quintessential", "reverberate", "salient", "tantamount", "ubiquitous", "veracity", "wanton", "xenophobic",
  "yearn", "zenith", "abrogate", "cacophony", "deleterious", "ebullient", "facile", "gregarious", "histrionic",
  "insidious", "juxtaposition", "kaleidoscope", "laconic", "magnanimous", "nefarious", "obsequious", "paradigm",
  "quintessential", "reverberate", "salient", "trepidation", "ubiquitous", "veracity", "wanton", "xenophobic",
  "yearn", "zenith", "acumen", "bombastic", "catalyst", "disparate", "efficacious", "fervent", "grandiose",
  "hackneyed", "impecunious", "juxtapose", "kaleidoscope", "labyrinthine", "mellifluous", "nadir", "obfuscate",
  "panacea", "quagmire", "redolent", "serendipity", "truculent", "ubiquitous", "venerate", "wistful", "zealous"
];

const lvlSixWords = [
  "ablution", "bailiwick", "cachinnate", "defalcate", "ebullient", "farrago", "gallimaufry", "hobbledehoy",
  "inveigle", "jactitation", "kenspeckle", "lollygag", "mugwump", "nidifice", "objurgate", "pandiculation",
  "quidnunc", "ratoon", "sangfroid", "tantivy", "ululate", "vagitus", "wamble", "xertz",
  "yaffingale", "zephyr", "abibliophobia", "bibliopole", "cacoethes", "dysania", "ergophobia", "frigorific",
  "gymnophoria", "hypsiphobia", "iatrophobia", "jentacular", "kakorrhaphiophobia", "logomachy", "mendacious", "nudiustertian",
  "opsimath", "pogonophobia", "quomodocunquize", "rhabdophobia", "selenophobia", "tantony", "uxorious", "vagarious",
  "witzelsucht", "xenodocheionology", "yatrogenesis", "zeugma", "abecedarian", "bibliopole", "circumlocution", "dysphemism",
  "epistemology", "futilitarian", "grandiloquent", "hendiadys", "idiosyncrasy", "juxtaposition", "kaleidoscopic", "logorrhea",
  "malapropism", "nugatory", "ontogeny", "pleonasm", "quixotry", "recalcitrant", "sycophancy", "tergiversation",
  "ubiquitous", "vituperation", "wanion", "xenoglossia", "yaffle", "zeitgeist"
];

const lvlSevenWords = [
  "abecedarian", "bibliopole", "circumlocution", "dysphemism", "epistemology", "futilitarian", "grandiloquent", "hendiadys",
  "idiosyncrasy", "juxtaposition", "kaleidoscopic", "logorrhea", "malapropism", "nugatory", "ontogeny", "pleonasm",
  "quixotry", "recalcitrant", "sycophancy", "tergiversation", "ubiquitous", "vituperation", "wanion", "xenoglossia",
  "yaffle", "zeitgeist", "abnegation", "blandishment", "captious", "defalcation", "effulgent", "factitious", "gustatory",
  "histrionics", "inveigh", "jocund", "kowtow", "lachrymose", "mellifluous", "nepotism", "obstreperous",
  "paucity", "querulous", "rebarbative", "sagacious", "taciturn", "umbrage", "vacuous", "winsome",
  "xenial", "yearn", "zenith", "abrogate", "cacophony", "deleterious", "ebullient", "facile",
  "gregarious", "histrionic", "insidious", "juxtaposition", "kaleidoscope", "laconic", "magnanimous", "nefarious",
  "obsequious", "paradigm", "quintessential", "reverberate", "salient", "trepidation", "ubiquitous", "veracity",
  "wanton", "xenophobic", "yearn", "zenith", "acumen", "bombastic", "catalyst", "disparate",
  "efficacious", "fervent", "grandiose", "hackneyed", "impecunious", "juxtapose", "kaleidoscope", "labyrinthine",
  "mellifluous", "nadir", "obfuscate", "panacea", "quagmire", "redolent", "serendipity", "truculent",
  "ubiquitous", "venerate", "wistful", "zealous"
];

const lvlEightWords = [
  "abnegation", "blandishment", "captious", "defalcation", "effulgent", "factitious", "gustatory", "histrionics",
  "inveigh", "jocund", "kowtow", "lachrymose", "mellifluous", "nepotism", "obstreperous", "paucity",
  "querulous", "rebarbative", "sagacious", "taciturn", "umbrage", "vacuous", "winsome", "xenial",
  "yearn", "zenith", "abrogate", "cacophony", "deleterious", "ebullient", "facile", "gregarious",
  "histrionic", "insidious", "juxtaposition", "kaleidoscope", "laconic", "magnanimous", "nefarious", "obsequious",
  "paradigm", "quintessential", "reverberate", "salient", "trepidation", "ubiquitous", "veracity", "wanton",
  "xenophobic", "yearn", "zenith", "acumen", "bombastic", "catalyst", "disparate", "efficacious",
  "fervent", "grandiose", "hackneyed", "impecunious", "juxtapose", "kaleidoscope", "labyrinthine", "mellifluous",
  "nadir", "obfuscate", "panacea", "quagmire", "redolent", "serendipity", "truculent", "ubiquitous",
  "venerate", "wistful", "zealous"
];


function reset() {
  level = 1;
  score = 0;
  correct = 0;
  attempts = 0;
  word = "";
  updateBoard();
  info.innerHTML = "";
  userGuess.value = "";
}

function randomWord(lvl) {
  word = lvl[Math.floor(Math.random() * lvl.length) - 1];
  return word;
}

function scrambleWord(word) {
  let letters = word.split("");
  let currentIndex = letters.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = letters[currentIndex];
    letters[currentIndex] = letters[randomIndex];
    letters[randomIndex] = temporaryValue;
  }

  return letters.join(" ");
}
function updateBoard() {
  scoreOutput.innerHTML = score;
  levelOutput.innerHTML = level;
  attemptsOutput.innerHTML = attempts;
}

function checkAnswer(guess) {
  console.log(`Correct: ${correct}`);

  if (correct == 3) {
    level += 1;
    correct = 0;
  }

  if (attempts == 3) {
    guessContainer.classList.toggle("hidden");
    info.innerHTML =
      "<p class='retry'>😵 Desculpe. Você está sem tentativas. 😭🥺👇</p><br/>";

    // Adicione o botão de reinício aqui
    info.innerHTML += "<button id='restart-button'>Reiniciar</button>";
    
    // Defina um evento para o botão de reinício
    document.getElementById("restart-button").addEventListener("click", function(e) {
      reset();
      setLevel();
      guessContainer.classList.remove("hidden");
      userGuess.value = "";
      info.innerHTML = ""; // Limpe a mensagem de erro anterior
    });

    return; // Saia da função após exibir a mensagem
  }

  if (guess === word) {
    info.innerHTML = "<span class='correct'>✔️ CORRETO</span>";
    score += 1;
    correct += 1;
    attempts = 0;
    setLevel();
  } else {
    info.innerHTML = "<span class='incorrect'>❌ Nope! Essa não é a palavra 🤷</span>";
    score -= 1;
    attempts += 1;
  }

  updateBoard();
}



function setLevel() {
  if (level == 1) {
    randomWord(lvlOneWords);
  } else if (level == 2) {
    randomWord(lvlTwoWords);
  } else if (level == 3) {
    randomWord(lvlThreeWords);
  } else if (level == 4) {
    randomWord(lvlFourWords);
  } else if (level == 5) {
    randomWord(lvlFiveWords);
  } else if (level == 6) {
    randomWord(lvlSixWords);
  } else if (level == 7) {
    randomWord(lvlSevenWords);
  } else if (level == 8) {
    randomWord(lvlEightWords);
  } else if (level == 9) {
    info.innerHTML =
      "<span class='win'>Você venceu! 🏆🥇🌟 </br> Você pode reiniciar ou continuar jogando.</span>";
    
    // Add a "Reiniciar" button and an event to restart the game
    info.innerHTML += "<button id='restart-button'>Reiniciar</button>";
    document.getElementById("restart-button").addEventListener("click", function(e) {
      reset();
      setLevel();
      guessContainer.classList.remove("hidden");
    });
  }

  console.log(`Word: ${word}`);
  usersWord.innerHTML = scrambleWord(word);
}

playBtn.addEventListener("click", function(e) {
  rules.classList.toggle("hidden");
  gameContainer.classList.remove("hidden");

  // Call setLevel when the game starts
  setLevel();
});


submitBtn.addEventListener("click", function(e) {
  checkAnswer(userGuess.value.toLowerCase());
  userGuess.value = "";
});

window.addEventListener(
  "keypress",
  function(e) {
    if (e.keyCode == 13) {
      checkAnswer(userGuess.value.toLowerCase());
      userGuess.value = "";
    }
  },
  false
);


const backToRulesBtn = document.getElementById("back-to-rules");

backToRulesBtn.addEventListener("click", function(e) {
  rules.classList.remove("hidden");
  gameContainer.classList.add("hidden");
});



resetBtn.addEventListener("click", function(e) {
  reset();
  setLevel();
  guessContainer.classList.remove("hidden");
  userGuess.value = "";
});

// Adicione esta função para reiniciar o jogo
document.getElementById("retry-button").addEventListener("click", function(e) {
  reset();
  setLevel();
  guessContainer.classList.remove("hidden");
  userGuess.value = "";
  info.innerHTML = ""; // Limpe a mensagem de erro anterior
});

setLevel();
