// Troca de telas
function mostrarTela(id) {

    const telas = document.querySelectorAll(".telasop");

    telas.forEach(function(tela) {
        tela.style.display = "none";
    });

    document.getElementById(id).style.display = "flex";
}


// Primeira tela
document.addEventListener("DOMContentLoaded", function() {
    mostrarTela("per");
});


// Botão NÃO
function sumir() {

    document.getElementById("nao").style.display = "none";

}

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBCK3GllJATXLb4xXA3UfPVVn0o4bouKHc",
    authDomain: "tomar-uma-b4eb1.firebaseapp.com",
    projectId: "tomar-uma-b4eb1",
    storageBucket: "tomar-uma-b4eb1.firebasestorage.app",
    messagingSenderId: "637521049777",
    appId: "1:637521049777:web:285a9ff789e8d9140dca90",
    measurementId: "G-NH9N7ZQB12"
};


// Inicializa o Firebase
const app = initializeApp(firebaseConfig);


// Conecta ao Firestore
const db = getFirestore(app);
