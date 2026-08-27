let quantidadePizzas = 0;

function adicionarPedido(nomePizza) {

    quantidadePizzas++;

    const tamanhos = document.querySelectorAll(".tamanho");

    const tamanhoSelecionado = tamanhos[0].value;

    let tamanhoTexto = "";

    if (tamanhoSelecionado === "P") {
        tamanhoTexto = "Pequena";
    } else if (tamanhoSelecionado === "M") {
        tamanhoTexto = "Média";
    } else {
        tamanhoTexto = "Grande";
    }

    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("contador");

    mensagem.innerHTML =
        "Pizza <strong>" +
        nomePizza +
        "</strong> - Tamanho: <strong>" +
        tamanhoTexto +
        "</strong> adicionada ao pedido! 🍕";

    contador.innerHTML =
        "Total de pizzas: " + quantidadePizzas;
}