// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const flashcard = document.getElementById('flashcard');
const cardContent = document.getElementById('card-content');
const showAnswerButton = document.querySelector('button:nth-of-type(1)');
const nextCardButton = document.querySelector('button:nth-of-type(2)');
const seeQuestionButton = document.querySelector('button:nth-of-type(3)'); // New button
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');

let isFlipped = false;
let currentCardIndex = 0;

const flashcards = [
    { question: 'I', answer: 'Eu' },
    { question: 'you', answer: 'Você' },
    { question: 'he', answer: 'Ele' },
    { question: 'she', answer: 'Ela' },
    { question: 'it', answer: 'Isso' },
    { question: 'we', answer: 'Nós' },
    { question: 'they', answer: 'Eles' },
    { question: 'me', answer: 'Me' },
    { question: 'you (plural)', answer: 'Vocês' },
    { question: 'him', answer: 'Ele (objeto)' },
    { question: 'her', answer: 'Ela (objeto)' },
    { question: 'it', answer: 'Isso (objeto)' },
    { question: 'us', answer: 'Nós (objeto)' },
    { question: 'them', answer: 'Eles (objeto)' },
    { question: 'this', answer: 'Isso' },
    { question: 'that', answer: 'Aquilo' },
    { question: 'here', answer: 'Aqui' },
    { question: 'there', answer: 'Ali' },
    { question: 'who', answer: 'Quem' },
    { question: 'what', answer: 'O quê' },
    { question: 'where', answer: 'Onde' },
    { question: 'when', answer: 'Quando' },
    { question: 'why', answer: 'Por quê' },
    { question: 'how', answer: 'Como' },
    { question: 'not', answer: 'Não' },
    { question: 'all', answer: 'Todos' },
    { question: 'many', answer: 'Muitos' },
    { question: 'some', answer: 'Algum' },
    { question: 'few', answer: 'Poucos' },
    { question: 'other', answer: 'Outro' },
    { question: 'more', answer: 'Mais' },
    { question: 'new', answer: 'Novo' },
    { question: 'old', answer: 'Velho' },
    { question: 'good', answer: 'Bom' },
    { question: 'bad', answer: 'Ruim' },
    { question: 'big', answer: 'Grande' },
    { question: 'small', answer: 'Pequeno' },
    { question: 'long', answer: 'Longo' },
    { question: 'short', answer: 'Curto' },
    { question: 'high', answer: 'Alto' },
    { question: 'low', answer: 'Baixo' },
    { question: 'right', answer: 'Direito' },
    { question: 'wrong', answer: 'Errado' },
    { question: 'day', answer: 'Dia' },
    { question: 'night', answer: 'Noite' },
    { question: 'time', answer: 'Tempo' },
    { question: 'year', answer: 'Ano' },
    { question: 'day', answer: 'Dia' },
    { question: 'week', answer: 'Semana' },
    { question: 'month', answer: 'Mês' },
    { question: 'today', answer: 'Hoje' },
    { question: 'tomorrow', answer: 'Amanhã' },
    { question: 'yesterday', answer: 'Ontem' },
    { question: 'now', answer: 'Agora' },
    { question: 'then', answer: 'Então' },
    { question: 'soon', answer: 'Logo' },
    { question: 'later', answer: 'Mais tarde' },
    { question: 'early', answer: 'Cedo' },
    { question: 'late', answer: 'Tarde' },
    { question: 'always', answer: 'Sempre' },
    { question: 'sometimes', answer: 'Às vezes' },
    { question: 'never', answer: 'Nunca' },
    { question: 'under', answer: 'Sob' },
    { question: 'over', answer: 'Sobre' },
    { question: 'in', answer: 'Em' },
    { question: 'on', answer: 'Em cima de' },
    { question: 'at', answer: 'Em' },
    { question: 'by', answer: 'Por' },
    { question: 'with', answer: 'Com' },
    { question: 'without', answer: 'Sem' },
    { question: 'and', answer: 'E' },
    { question: 'or', answer: 'Ou' },
    { question: 'but', answer: 'Mas' },
    { question: 'because', answer: 'Porque' },
    { question: 'if', answer: 'Se' },
    { question: 'so', answer: 'Então' },
    { question: 'as', answer: 'Como' },
    { question: 'too', answer: 'Também' },
    { question: 'very', answer: 'Muito' },
    { question: 'really', answer: 'Realmente' },
    { question: 'here', answer: 'Aqui' },
    { question: 'there', answer: 'Lá' },
    { question: 'this', answer: 'Isso' },
    { question: 'that', answer: 'Aquilo' },
    { question: 'these', answer: 'Esses' },
    { question: 'those', answer: 'Aqueles' },
    { question: 'my', answer: 'Meu' },
    { question: 'your', answer: 'Seu' },
    { question: 'his', answer: 'Dele' },
    { question: 'her', answer: 'Dela' },
    { question: 'its', answer: 'Dele/dela (para objetos)' },
    { question: 'our', answer: 'Nosso' },
    { question: 'their', answer: 'Deles' },
    { question: 'big', answer: 'Grande' },
    { question: 'small', answer: 'Pequeno' },
    { question: 'tall', answer: 'Alto' },
    { question: 'short', answer: 'Baixo' },
    { question: 'fat', answer: 'Gordo' },
    { question: 'thin', answer: 'Magro' },
    { question: 'wide', answer: 'Largo' },
    { question: 'narrow', answer: 'Estreito' },
    { question: 'hot', answer: 'Quente' },
    { question: 'cold', answer: 'Frio' },
    { question: 'fast', answer: 'Rápido' },
    { question: 'slow', answer: 'Devagar' },
    { question: 'good', answer: 'Bom' },
    { question: 'bad', answer: 'Ruim' },
    { question: 'happy', answer: 'Feliz' },
    { question: 'sad', answer: 'Triste' },
    { question: 'easy', answer: 'Fácil' },
    { question: 'difficult', answer: 'Difícil' },
    { question: 'beautiful', answer: 'Bonito' },
    { question: 'ugly', answer: 'Feio' },
    { question: 'rich', answer: 'Rico' },
    { question: 'poor', answer: 'Pobre' },
    { question: 'young', answer: 'Jovem' },
    { question: 'old', answer: 'Velho' },
    { question: 'strong', answer: 'Forte' },
    { question: 'weak', answer: 'Fraco' },
    { question: 'healthy', answer: 'Saudável' },
    { question: 'sick', answer: 'Doente' },
    { question: 'alive', answer: 'Vivo' },
    { question: 'dead', answer: 'Morto' },
    { question: 'far', answer: 'Longe' },
    { question: 'near', answer: 'Perto' },
    { question: 'clean', answer: 'Limpo' },
    { question: 'dirty', answer: 'Sujo' },
    { question: 'early', answer: 'Cedo' },
    { question: 'late', answer: 'Tarde' },
    { question: 'light', answer: 'Leve' },
    { question: 'dark', answer: 'Escuro' },
    { question: 'empty', answer: 'Vazio' },
    { question: 'full', answer: 'Cheio' },
    { question: 'dry', answer: 'Seco' },
    { question: 'wet', answer: 'Molhado' },
    { question: 'open', answer: 'Aberto' },
    { question: 'closed', answer: 'Fechado' },
    { question: 'here', answer: 'Aqui' },
    { question: 'there', answer: 'Lá' },
    { question: 'this', answer: 'Isso' },
    { question: 'that', answer: 'Aquilo' },
    { question: 'these', answer: 'Esses' },
    { question: 'those', answer: 'Aqueles' },
    { question: 'one', answer: 'Um' },
    { question: 'two', answer: 'Dois' },
    { question: 'three', answer: 'Três' },
    { question: 'four', answer: 'Quatro' },
    { question: 'five', answer: 'Cinco' },
    { question: 'six', answer: 'Seis' },
    { question: 'seven', answer: 'Sete' },
    { question: 'eight', answer: 'Oito' },
    { question: 'nine', answer: 'Nove' },
    { question: 'ten', answer: 'Dez' },
    { question: 'first', answer: 'Primeiro' },
    { question: 'second', answer: 'Segundo' },
    { question: 'third', answer: 'Terceiro' },
    { question: 'last', answer: 'Último' },
    { question: 'inside', answer: 'Dentro' },
    { question: 'outside', answer: 'Fora' },
    { question: 'up', answer: 'Para cima' },
    { question: 'down', answer: 'Para baixo' },
    { question: 'in', answer: 'Em' },
    { question: 'on', answer: 'Em cima de' },
    { question: 'at', answer: 'Em' },
    { question: 'by', answer: 'Por' },
    { question: 'with', answer: 'Com' },
    { question: 'without', answer: 'Sem' },
    { question: 'near', answer: 'Perto' },
    { question: 'far', answer: 'Longe' },
    { question: 'before', answer: 'Antes' },
    { question: 'after', answer: 'Depois' },
    { question: 'during', answer: 'Durante' },
    { question: 'while', answer: 'Enquanto' },
    { question: 'because', answer: 'Porque' },
    { question: 'if', answer: 'Se' },
    { question: 'so', answer: 'Então' },
    { question: 'but', answer: 'Mas' },
    { question: 'or', answer: 'Ou' },
    { question: 'as', answer: 'Como' },
    { question: 'like', answer: 'Como' },
    { question: 'than', answer: 'Do que' },
    { question: 'for', answer: 'Para' },
    { question: 'against', answer: 'Contra' },
    { question: 'between', answer: 'Entre' },
    { question: 'among', answer: 'Entre' },
    { question: 'through', answer: 'Através' },
    { question: 'above', answer: 'Acima' },
    { question: 'below', answer: 'Abaixo' },
    { question: 'under', answer: 'Sob' },
    { question: 'over', answer: 'Sobre' },
    { question: 'about', answer: 'Sobre' },
    { question: 'around', answer: 'Ao redor' },
    { question: 'before', answer: 'Antes' },
    { question: 'after', answer: 'Depois' },
    { question: 'since', answer: 'Desde' },
    { question: 'until', answer: 'Até' },
    { question: 'to', answer: 'Para' },
    { question: 'from', answer: 'De' },
    { question: 'into', answer: 'Para dentro de' },
    { question: 'on', answer: 'Em' },
    { question: 'off', answer: 'Fora' },
    { question: 'above', answer: 'Acima' },
    { question: 'below', answer: 'Abaixo' },
    { question: 'through', answer: 'Através' },
    { question: 'across', answer: 'Através de' },
    { question: 'along', answer: 'Ao longo de' },
    { question: 'around', answer: 'Ao redor' },
    { question: 'behind', answer: 'Atrás de' },
    { question: 'in front of', answer: 'Na frente de' },
    { question: 'next to', answer: 'Ao lado de' },
    { question: 'between', answer: 'Entre' },
    { question: 'among', answer: 'Entre' },
    { question: 'up', answer: 'Para cima' },
    { question: 'down', answer: 'Para baixo' },
    { question: 'in', answer: 'Em' },
    { question: 'out', answer: 'Fora' },
    { question: 'on', answer: 'Em cima de' },
    { question: 'off', answer: 'Fora' },
    { question: 'over', answer: 'Sobre' },
    { question: 'under', answer: 'Sob' },
    { question: 'through', answer: 'Através' },
    { question: 'into', answer: 'Para dentro de' },
    { question: 'away', answer: 'Longe' },
    { question: 'here', answer: 'Aqui' },
    { question: 'there', answer: 'Lá' },
    { question: 'now', answer: 'Agora' },
    { question: 'then', answer: 'Então' },
    { question: 'soon', answer: 'Logo' },
    { question: 'later', answer: 'Mais tarde' },
    { question: 'today', answer: 'Hoje' },
    { question: 'tonight', answer: 'Esta noite' },
    { question: 'last night', answer: 'Ontem à noite' },
    { question: 'morning', answer: 'Manhã' },
    { question: 'afternoon', answer: 'Tarde' },
    { question: 'evening', answer: 'Noite' },
    { question: 'week', answer: 'Semana' },
    { question: 'month', answer: 'Mês' },
    { question: 'tomorrow', answer: 'Amanhã' },
    { question: 'yesterday', answer: 'Ontem' },
    { question: 'before', answer: 'Antes de' },
    { question: 'after', answer: 'Depois de' },
    { question: 'when', answer: 'Quando' },
    { question: 'while', answer: 'Enquanto' },
    { question: 'beside', answer: 'Ao lado de' },
    { question: 'inside', answer: 'Dentro' },
    { question: 'outside', answer: 'Fora' },
    { question: 'up', answer: 'Para cima' },
    { question: 'down', answer: 'Para baixo' },
    { question: 'away', answer: 'Longe' },
    { question: 'next to', answer: 'Ao lado de' },
    // Add more flashcards here
];

// Shuffle the flashcards array before starting
shuffleArray(flashcards);

function showAnswer() {
    if (!isFlipped) {
        answerElement.textContent = flashcards[currentCardIndex].answer;
        cardContent.style.transform = 'rotateY(180deg)';
        isFlipped = true;

        // Show the "See Question Again" button
        seeQuestionButton.style.display = 'inline-block';
    }
}

function nextCard() {
    if (isFlipped) {
        cardContent.style.transform = 'rotateY(0deg)';
        isFlipped = false;
        // Move to the next card
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        // Update question for the next card
        questionElement.textContent = flashcards[currentCardIndex].question;

        // Hide the "See Question Again" button when moving to the next card
        seeQuestionButton.style.display = 'none';
    }
}

function seeQuestionAgain() {
    if (isFlipped) {
        cardContent.style.transform = 'rotateY(0deg)';
        isFlipped = false;

        // Hide the "See Question Again" button after clicking it
        seeQuestionButton.style.display = 'none';
    }
}

// Initialize the first question
questionElement.textContent = flashcards[currentCardIndex].question;

// Hide the "See Question Again" button initially
seeQuestionButton.style.display = 'none';

// Add event listeners for the buttons
showAnswerButton.addEventListener('click', showAnswer);
nextCardButton.addEventListener('click', nextCard);
seeQuestionButton.addEventListener('click', seeQuestionAgain);