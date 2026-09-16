formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    console.log("1 - Formulário enviado");


    const nome = document.getElementById("name").value.trim();
    const local = document.getElementById("local").value.trim();
    const data = document.getElementById("data").value;

    console.log("2 - Dados:", nome, local, data);


    const id = `${nome}_${data}`;

    console.log("3 - ID:", id);


    try {

        console.log("4 - Tentando salvar no Firebase...");

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

        console.log("5 - SALVOU NO FIREBASE!");

        formulario.reset();

        console.log("6 - Indo para tela eba...");

        mostrarTela("eba");

        console.log("7 - Tela eba mostrada!");

    } catch (erro) {

        console.error("ERRO:", erro);

    }

});
