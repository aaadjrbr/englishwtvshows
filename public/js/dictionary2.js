// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBAGs-2m-qzleMxKS7-G4Vi53yOwhm99SA",
    authDomain: "english-with-tv-shows.firebaseapp.com",
    projectId: "english-with-tv-shows",
    storageBucket: "english-with-tv-shows.appspot.com",
    messagingSenderId: "382097760520",
    appId: "1:382097760520:web:a8a33c9143a76e21320cbd",
    measurementId: "G-M2SEMVXFPL"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Função para lidar com o envio do formulário de login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Formulário de login submetido"); // Adicione esta linha

    const inputNome = document.getElementById("nome").value;
    const inputSenha = document.getElementById("senha").value;

    firebase.auth().signInWithEmailAndPassword(inputNome, inputSenha)
    .then(() => { // Remova 'userCredential' se não for usada
        // Login bem-sucedido
        window.location.href = '../../bem-vindo.html';
    })
    .catch((error) => {
        // Erro no login
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = error.message;
        errorMessage.style.display = "block";
    });


// Função para fazer logout
function logout() {
    firebase.auth().signOut().then(() => {
        // Logout bem-sucedido
        window.location.href = '../../index.html';
    }).catch((error) => {
        // Erro no logout
        console.error("Erro ao fazer logout:", error);
    });
}

// Anexa a função de logout ao botão ou link de logout
document.getElementById("logoutButton").addEventListener("click", logout);

});
