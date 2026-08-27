let quantidadePizzas = 0;

function adicionarPedido(nomePizza) {

    quantidadePizzas++;

    const mensagem = document.getElementById("mensagem");

    const contador = document.getElementById("contador");

    mensagem.innerHTML =
        "A pizza <strong>" +
        nomePizza +
        "</strong> foi adicionada ao seu pedido! 🍕";

    contador.innerHTML =
        "Total de pizzas: " + quantidadePizzas;

}