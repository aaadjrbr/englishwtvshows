// Create and append the footer element to the document
const footer = document.createElement('footer');
footer.innerHTML = `
<footer class="text-white text-center">
    <div class="container">
        <p>&copy; 2024 English w/ TV Shows. Todos os direitos reservados.</p><br>
        <p>Powered by <a href="../../index-second.html">English w/ Adenilson</a> | <a href="../../public/politica-privacidade.html">Política de Privacidade</a>.</p>
    </div>
</footer>
`;
document.body.appendChild(footer);

// Add CSS styles for the footer
const style = document.createElement('style');
style.textContent = `
    /* Footer Styles */
    footer {
        text-align: center;
        color: #fff; /* White text color */
        padding: 10px 0; /* Add some padding top and bottom */
        /* Add text shadow */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Horizontal offset, Vertical offset, Blur radius, Color */
    }
`;
document.head.appendChild(style);
