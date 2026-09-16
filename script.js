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


    // ==========================
    // BOTÃO NÃO
    // ==========================

    document.getElementById("nao").addEventListener("click", function() {
        sumir();
    });


    // ==========================
    // BOTÃO SIM
    // ==========================

    document.getElementById("sim").addEventListener("click", function() {
        mostrarTela("dia");
    });





    // ==========================
    // FORMULÁRIO
    // ==========================

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", async function(event) {

        event.preventDefault();


        // Pega os valores
        const nome = document.getElementById("name").value.trim();
        const local = document.getElementById("local").value.trim();
        const data = document.getElementById("data").value;


        // ==========================
        // CRIA O ID
        // ==========================

        const id = `${nome}_${data}`;

        console.log("ID criado:", id);


        try {

            // ==========================
            // SALVA NO FIRESTORE
            // ==========================

            await setDoc(
                doc(db, "mensagens", id),
                {
                    nome: nome,

                    encontro: {
                        local: local,
                        data: data
                    }
                }
            );


            console.log("Documento salvo com ID:", id);

            formulario.reset();

            mostrarTela("eba");


        } catch (erro) {

            console.error("Erro ao enviar:", erro);

        }

    });

});


// ==========================
// ESCONDE O BOTÃO NÃO
// ==========================

function sumir() {

    document.getElementById("nao").style.display = "none";

}
