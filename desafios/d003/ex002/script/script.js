let res = document.querySelector("section#resultado")
let campoNum = document.querySelector("section#inputNumero")
let botaoIniciar = document.querySelector("button#btnIniciar")

function iniciar() {
    campoNum.innerHTML = `<p>Digite um número inteiro qualquer: <input type="number" id="numTxt"> <button onclick="enviarNumero()">Enviar</button></p>`
    //var numero = Number(document.querySelector("input#idadeTxt").value)
    res.innerHTML = ""
    botaoIniciar.disabled = true
}

function enviarNumero() {
    var numero = Number(document.querySelector("input#numTxt").value)
    let antecessor = numero - 1
    let sucessor = numero + 1

    campoNum.innerHTML = ""
    res.innerHTML = `<h2>Antes de ${numero}, temos o número ${antecessor}.</h2>`
    res.innerHTML += `<h2>Depois de ${numero}, temos o número ${sucessor}.</h2>`
    botaoIniciar.disabled = false 
}