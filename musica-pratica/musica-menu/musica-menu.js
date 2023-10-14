// JavaScript code to control page navigation and dynamically show items

const playlistItems = document.querySelectorAll('.playlist-view-bloco');
const itemsPerPage = 10; // Number of items to display per page
let currentPage = 0; // Current page

// Function to show items for the current page
function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    playlistItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to navigate to the next page
function nextPage() {
    currentPage++;
    showPage(currentPage);
}

// Function to navigate to the previous page
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Add event listeners to the buttons
document.getElementById('nextPage').addEventListener('click', nextPage);
document.getElementById('previousPage').addEventListener('click', previousPage);

// Initial page load
showPage(currentPage);
