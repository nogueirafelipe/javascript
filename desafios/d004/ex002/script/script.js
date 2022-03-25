let botaoIniciar = document.querySelector("button#btnIniciar")
let res = document.querySelector("section#resultado")
let inputs = document.querySelector("section#inputs")

function iniciar() {
    inputs.innerHTML = `<p>Que produto você está comprando? <input type="text" id="produto"> <button onclick="enviarProduto()" id="btnProduto">Enviar</button></p>`
    botaoIniciar.disabled = true
}

function enviarProduto() {
    var produto = document.querySelector("input#produto").value

    inputs.innerHTML += `<p>Quanto custa ${produto} que você está comprando? <input type="number" id="preco"> <button onclick="enviarPreco()" id="btnPreco">Enviar</button></p>`

    let btnProduto = document.querySelector("button#btnProduto")
    btnProduto.disabled = true

    //enviarValor(produto)
}

function enviarPreco() {
    //var produto = document.querySelector("input#produto").value
    var preco = Number(document.querySelector("input#preco").value)
    inputs.innerHTML += `<p>Qual foi o valor que você deu para pagar? <input type="number" id="valor"> <button onclick="enviarValor()">Enviar</button></p>`

    let btnPreco = document.querySelector("button#btnPreco")
    btnPreco.disabled = true
}

function enviarValor() {
    var produto = document.querySelector("input#produto").value
    var preco = Number(document.querySelector("input#preco").value)
    var valor = Number(document.querySelector("input#valor").value)
    let troco = valor - preco

    inputs.innerHTML = ""

    res.innerHTML = `<h2>Você comprou${produto} que custou ${preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</h2>`
    res.innerHTML += `<h2>Deu ${valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} em dinheiro e vai receber ${troco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} de troco.</h2>`
    res.innerHTML += `<h2>Volte sempre!</h2>`

    botaoIniciar.disabled = false
}