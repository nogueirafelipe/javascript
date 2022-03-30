let btnIniciar = document.querySelector("button#btnIniciar")
let elementoInput = document.querySelector("section#inputs")
let res = document.querySelector("section#resultado")

function iniciar() {
    res.innerHTML = ""
    elementoInput.innerHTML = `<p id="txtInput">Qual é o produto que você está comprando? <input type="text" id="produto" required> <button onclick="enviarProduto()">Enviar</button></p>`
    btnIniciar.disabled = true
}

function enviarProduto() {
    let produto = document.querySelector("input#produto").value
    elementoInput.innerHTML = `<p id="txtInput">Qual é o preço de ${produto}? <input type="number" id="preco" required> <button onclick="calcularDesconto(${produto})">Calcular Desconto</button></p>`
}

function calcularDesconto(produto) {
    let preco = Number(document.querySelector("input#preco").value)
    let desconto = preco * 10 / 100
    let valorFinal = preco - desconto

    elementoInput.innerHTML = ""
    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    res.innerHTML += `<p id="txtInput">O preço original era ${preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.</p>`
    res.innerHTML += `<p id="txtInput">Você acaba de ganhar ${desconto.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} (-10%).</p>`
    res.innerHTML += `<p id="txtInput">No fim, você vai pagar ${valorFinal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} no produto ${produto}.</p>`

    btnIniciar.disabled = false
}