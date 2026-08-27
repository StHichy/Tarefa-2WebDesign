let quantidadePizzas = 0;

function adicionarPedido(nomePizza, botao) {

    quantidadePizzas++;

    // Encontra o card da pizza que foi clicada
    const card = botao.parentElement;

    // Encontra o tamanho selecionado dentro desse card
    const tamanhoSelecionado = card.querySelector(".tamanho").value;

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