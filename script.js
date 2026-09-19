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

    // Esconde todas as telas
    telas.forEach(function(tela) {
        tela.style.display = "none";
    });

    // Procura a tela desejada
    const tela = document.getElementById(id);

    if (!tela) {
        console.error("Tela não encontrada:", id);
        return;
    }

    // Mostra a tela
    tela.style.display = "flex";

    console.log("Tela mostrada:", id);
}


// ==========================
// QUANDO A PÁGINA CARREGAR
// ==========================

document.addEventListener("DOMContentLoaded", function() {

    console.log("JavaScript funcionando!");


    // ==========================
    // PRIMEIRA TELA
    // ==========================

    mostrarTela("per");


    // ==========================
    // BOTÃO NÃO
    // ==========================

    const botaoNao = document.getElementById("nao");

    botaoNao.addEventListener("click", function() {

        botaoNao.style.display = "none";

    });


    // ==========================
    // BOTÃO SIM
    // ==========================

    const botaoSim = document.getElementById("sim");

    botaoSim.addEventListener("click", function() {

        mostrarTela("dia");

    });


    // ==========================
    // FORMULÁRIO
    // ==========================

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", async function(event) {

        // Impede o formulário de recarregar a página
        event.preventDefault();


        // ==========================
        // PEGA OS VALORES
        // ==========================

        const nome = document.getElementById("name").value.trim();

        const local = document.getElementById("local").value.trim();

        const data = document.getElementById("data").value;


        console.log(nome);
        console.log( local);
        console.log(data);


        // ==========================
        // CRIA O ID
        // ==========================

        const id = `${nome}_${data}`;

        console.log("ID criado:", id);


        // ==========================
        // SALVA NO FIREBASE
        // ==========================

        try {

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


            console.log("Documento salvo com sucesso!");

            console.log("ID do documento:", id);


            // ==========================
            // LIMPA O FORMULÁRIO
            // ==========================

            formulario.reset();


            // ==========================
            // VAI PARA A TELA EBA
            // ==========================

            mostrarTela("eba");


        } catch (erro) {

            console.error("Erro ao salvar no Firebase:", erro);

            alert("Ocorreu um erro ao marcar. Tente novamente.");

        }

    });

});
