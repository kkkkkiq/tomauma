// ==========================
// IMPORTS
// ==========================

import { db } from "./firebase.js";

import {
    doc,
    setDoc
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

        const nome = document.getElementById("name").value.trim();
        const local = document.getElementById("local").value.trim();
        const data = document.getElementById("data").value;


        // Cria o ID personalizado
        const id = `${nome}_${data}`;


        console.log("ID criado:", id);


        try {

            await setDoc(doc(db, "mensagens", id), {

                nome: nome,

                encontro: {
                    local: local,
                    data: data
                }

            });

            alert("Mensagem enviada!");

            formulario.reset();


        } catch (erro) {

            console.error("Erro ao enviar:", erro);

    // Botão MARCAR
    document.getElementById("marcar").addEventListener("click", function() {
        mostrarTela("eba");
    });

        }

    });

});


// ==========================
// ESCONDE O BOTÃO NÃO
// ==========================

function sumir() {

    document.getElementById("nao").style.display = "none";

}
