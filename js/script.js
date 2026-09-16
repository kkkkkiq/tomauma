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


