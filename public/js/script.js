function translateText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    // Remove leading/trailing spaces and punctuation
    const cleanedInput = inputText.replace(/^[.,!?'"]+|[.,!?'"]+$/g, '');

    const translatedTextElement = document.getElementById('translatedText');
    const notFoundTextElement = document.getElementById('notFoundText');

    if (dictionary.hasOwnProperty(cleanedInput)) {
        // Translation found, display it
        const translatedText = dictionary[cleanedInput];
        translatedTextElement.style.display = 'block';
        translatedTextElement.textContent = translatedText;

        // Clear the translated text after 10 seconds
        setTimeout(function () {
            translatedTextElement.style.display = 'none';
            translatedTextElement.textContent = '';
        }, 10000); // 10,000 milliseconds (10 seconds)

        // Hide the "Word not found" message
        notFoundTextElement.style.display = 'none';
    } else {
        // Word not found, show the message and hide the translation
        translatedTextElement.style.display = 'none';
        translatedTextElement.textContent = '';

        // Display the "Word not found" message with a clickable link to Google Translate
        notFoundTextElement.style.display = 'block';
        notFoundTextElement.innerHTML = 'Desculpe não encontrei essa palavra &#128533. Você pode tentar o <a href="https://translate.google.com/" target="_blank">Google Tradutor</a>';

        // Clear the "Word not found" message after 10 seconds
        setTimeout(function () {
            notFoundTextElement.style.display = 'none';
            notFoundTextElement.innerHTML = '';
        }, 10000); // 10,000 milliseconds (10 seconds)
    }
}

// Add an event listener to the input field for the "Enter" key
const inputField = document.getElementById('inputText');
inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        translateText(); // Call the translateText function when Enter is pressed
    }
});


// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
