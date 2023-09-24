// script.js
const popupContainer = document.getElementById('popupContainer');
const popupImage = document.getElementById('popupImage');
const closeButton = document.getElementById('closeButton');
let popupTimeout;

function showPopup() {
    popupContainer.style.display = 'block';

    // Set a timeout to hide the popup after 4 minutes (4 * 60 * 1000 milliseconds)
    popupTimeout = setTimeout(hidePopup, 4 * 60 * 1000);
}

function hidePopup() {
    popupContainer.style.display = 'none';

    // Clear the timeout to prevent automatic showing after hiding
    clearTimeout(popupTimeout);
}

function closePopupWithEsc(event) {
    if (event.key === 'Escape') {
        hidePopup();
    }
}

function closePopupWithClickOutside(event) {
    if (event.target === popupContainer) {
        hidePopup();
    }
}

closeButton.addEventListener('click', hidePopup);
document.addEventListener('keydown', closePopupWithEsc);
popupContainer.addEventListener('click', closePopupWithClickOutside);

// Show the pop-up when the page loads
showPopup();
