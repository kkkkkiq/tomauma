// ==========================
// IMPORTS
// ==========================

import { db } from "./firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


// ==========================
// TROCA DE TELAS
// ==========================

function mostrarTela(id) {

    const telas = document.querySelectorAll(".telasop");

    telas.forEach(function(tela) {
        tela.style.display = "none";
    });

    document.getElementById(id).style.display = "flex";
}


// ==========================
// QUANDO A PÁGINA CARREGAR
// ==========================

document.addEventListener("DOMContentLoaded", function() {

    console.log("JavaScript funcionando!");

    mostrarTela("per");


    // Botão NÃO
    document.getElementById("nao").addEventListener("click", function() {
        sumir();
    });


    // Botão SIM
    document.getElementById("sim").addEventListener("click", function() {
        mostrarTela("dia");
    });


    // Formulário
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

});


// ==========================
// ESCONDE O BOTÃO NÃO
// ==========================

function sumir() {

    document.getElementById("nao").style.display = "none";

}
