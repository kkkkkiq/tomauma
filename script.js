console.log("funcionando")
// Troca de telas
function mostrarTela(id) {

    const telas = document.querySelectorAll(".telasop");

    telas.forEach(function(tela) {
        tela.style.display = "none";
    });

    document.getElementById(id).style.display = "flex";
}


// Quando a página carregar
document.addEventListener("DOMContentLoaded", function() {

    mostrarTela("per");

    // Botão NÃO
    document.getElementById("nao").addEventListener("click", function() {
        sumir();
    });

    // Botão SIM
    document.getElementById("sim").addEventListener("click", function() {
        mostrarTela("dia");
    });

});


// Esconde o botão NÃO
function sumir() {

    document.getElementById("nao").style.display = "none";

}

import { app } from "./firebase.js";


console.log("Firebase conectado!");
console.log(app);

import { db } from "./firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    const nome = document.getElementById("name").value;
    const local = document.getElementById("local").value;
    const data = document.getElementById("data").value;


    try {

        await addDoc(collection(db, "mensagens"), {

            nome: nome,
            local: local,
            data: data

        });

        alert("Mensagem enviada!");

        formulario.reset();


    } catch (erro) {

        console.error("Erro ao enviar:", erro);

        alert("Erro ao enviar a mensagem.");

    }

});

