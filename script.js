function adicionarPedido(nomePizza) {

    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML =
        "A pizza <strong>" +
        nomePizza +
        "</strong> foi adicionada ao seu pedido! 🍕";

}