let btnDolar = document.querySelector("button#btnDolar")
let btnEuro = document.querySelector("button#btnEuro")
let btnLibra = document.querySelector("button#btnLibra")
let btnBitcoin = document.querySelector("button#btnBitcoin")
let btnLimpar = document.querySelector("button#btnLimpar")
let elementoInput = document.querySelector("section#inputMoeda")
let res = document.querySelector("section#resultado")
let elementoLimpar = document.querySelector("section#cleanBtn")

btnLimpar.disabled = true

function converteDolar() {
    res.innerHTML = ""
    elementoInput.innerHTML = `<p id="txtInput">Quanto está a cotação do dólar agora? <input type="number" id="inputDolar"> <button onclick="enviarDolar()">Enviar</button></p>`
    btnDolar.disabled = true
    btnEuro.disabled = true
    btnLibra.disabled = true
    btnBitcoin.disabled = true
    btnLimpar.disabled = false
}

function enviarDolar() {
    let cotacaoDolar = Number(document.querySelector("input#inputDolar").value)
    if (cotacaoDolar <= 0) {
        alert("Digite um valor acima de zero!")
    } else {
        elementoInput.innerHTML = `<p id="txtInput">Quantos R$ você tem na carteira? <input type="number" id="inputReais"> <button onclick="realDolar(${cotacaoDolar})">Converter</button></p>`
    }
}

function realDolar(cotacaoDolar) {
    let real = Number(document.querySelector("input#inputReais").value)
    let realParaDolar = real / cotacaoDolar
    elementoInput.innerHTML = ""
    if (real <= 0) {
        alert("Digite um valor acima de zero!")
        elementoInput.innerHTML = `<p id="txtInput">Quantos R$ você tem na carteira? <input type="number" id="inputReais"> <button onclick="realDolar(${cotacaoDolar})">Converter</button></p>`
    } else {
        res.innerHTML = `<h2>Com ${real.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} você consegue comprar ${realParaDolar.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h2>`
        btnDolar.disabled = false
        btnEuro.disabled = false
        btnLibra.disabled = false
        btnBitcoin.disabled = false
        btnLimpar.disabled = true
    }
    
}

//EURO

function converteEuro() {
    res.innerHTML = ""
    elementoInput.innerHTML = `<p id="txtInput">Quanto está a cotação do euro agora? <input type="number" id="inputEuro"> <button onclick="enviarEuro()">Enviar</button></p>`
    btnDolar.disabled = true
    btnEuro.disabled = true
    btnLibra.disabled = true
    btnBitcoin.disabled = true
    btnLimpar.disabled = false
}

function enviarEuro() {
    let cotacaoEuro = Number(document.querySelector("input#inputEuro").value)
    if (cotacaoEuro <= 0) {
        alert("Digite um valor acima de zero!")
    } else {
        elementoInput.innerHTML = `<p id="txtInput">Quantos R$ você tem na carteira? <input type="number" id="inputReais"> <button onclick="realEuro(${cotacaoEuro})">Converter</button></p>`
    }
}

function realEuro(cotacaoEuro) {
    let reais = Number(document.querySelector("input#inputReais").value)
    let realParaEuro = reais / cotacaoEuro
    elementoInput.innerHTML = ""
    if (reais <= 0) {
        alert("Digite um valor acima de zero!")
        elementoInput.innerHTML = `<p id="txtInput">Quantos R$ você tem na carteira? <input type="number" id="inputReais"> <button onclick="realEuro(${cotacaoEuro})">Converter</button></p>`
    } else {
        res.innerHTML = `<h2>Com ${reais.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} você consegue comprar ${realParaEuro.toLocaleString("de-DE", {style: "currency", currency: "EUR"})}`
        btnDolar.disabled = false
        btnEuro.disabled = false
        btnLibra.disabled = false
        btnBitcoin.disabled = false
        btnLimpar.disabled = true
    }
    
}

//LIBRA

function converteLibra() {
    res.innerHTML = ""
    elementoInput.innerHTML = `<p id="txtInput">Quanto está a cotação da libra agora? <input type="number" id="inputLibra"> <button onclick="enviarLibra()">Enviar</button></p>`
    btnDolar.disabled = true
    btnEuro.disabled = true
    btnLibra.disabled = true
    btnBitcoin.disabled = true
    btnLimpar.disabled = false
}

function enviarLibra() {
    let cotacaoLibra = Number(document.querySelector("input#inputLibra").value)
    if (cotacaoLibra <= 0) {
        alert("Digite um valor acima de zero!")
    } else {
        elementoInput.innerHTML = `<p id="txtInput">Quantos R$ você tem na carteira? <input type="number" id="inputBrl"> <button onclick="realLibra(${cotacaoLibra})">Converter</button></p>`
    }
}

function realLibra(cotacaoLibra) {
    let brl = Number(document.querySelector("input#inputBrl").value)
    let realParaLibra = brl / cotacaoLibra
    elementoInput.innerHTML = ""
    if (brl <= 0) {
        alert("Digite um valor acima de zero!")
        elementoInput.innerHTML = `<p id="txtInput">Quantos R$ você tem na carteira? <input type="number" id="inputBrl"> <button onclick="realLibra(${cotacaoLibra})">Converter</button></p>`
    } else {
        res.innerHTML = `<h2>Com ${brl.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} você consegue comprar ${realParaLibra.toLocaleString("en-EN", {style: "currency", currency: "GBP"})}`
        btnDolar.disabled = false
        btnEuro.disabled = false
        btnLibra.disabled = false
        btnBitcoin.disabled = false
        btnLimpar.disabled = true
    }
}

//BITCOIN

function converteBitcoin() {
    res.innerHTML = ""
    elementoInput.innerHTML = `<p id="txtInput">Quanto está a cotação do bitcoin agora? (Sem ponto ou vírgula)</p><p><input type="number" id="inputBitcoin"> <button onclick="enviarBitcoin()">Enviar</button></p>`
    btnDolar.disabled = true
    btnEuro.disabled = true
    btnLibra.disabled = true
    btnBitcoin.disabled = true
    btnLimpar.disabled = false
    
}

function enviarBitcoin() {
    let cotacaoBitcoin = Number(document.querySelector("input#inputBitcoin").value)
    if (cotacaoBitcoin <= 0) {
        alert("Digite um valor acima de zero!")
    } else {
        elementoInput.innerHTML = `<p id="txtInput">Quantos R$ você tem na carteira? (Sem ponto ou vírgula)</p><p><input type="number" id="inputRs"> <button onclick="realBitcoin(${cotacaoBitcoin})">Converter</button></p>`
    }
}

function realBitcoin(cotacaoBitcoin) {
    let rs = Number(document.querySelector("input#inputRs").value)
    let realParaBitcoin = rs / cotacaoBitcoin
    elementoInput.innerHTML = ""
    if (rs <= 0) {
        alert("DIgite um valor acima de zero!")
        elementoInput.innerHTML = `<p id="txtInput">Quantos R$ você tem na carteira? (Sem ponto ou vírgula)</p><p><input type="number" id="inputRs"> <button onclick="realBitcoin(${cotacaoBitcoin})">Converter</button></p>`
    } else {
        res.innerHTML = `<h2>Com ${rs.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} você consegue comprar ₿ ${realParaBitcoin.toFixed(4).toLocaleString("en-US", {style: "currency", currency: "BTC"})}</h2>`
        btnDolar.disabled = false
        btnEuro.disabled = false
        btnLibra.disabled = false
        btnBitcoin.disabled = false
        btnLimpar.disabled = true
    }
}

//LIMPAR

function limpar() {
    elementoInput.innerHTML = ""
    res.innerHTML = ""
    btnDolar.disabled = false
    btnEuro.disabled = false
    btnLibra.disabled = false
    btnBitcoin.disabled = false
    btnLimpar.disabled = true
}