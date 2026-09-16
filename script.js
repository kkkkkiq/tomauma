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


