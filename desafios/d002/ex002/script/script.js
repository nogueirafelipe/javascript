let espacoNome = document.querySelector("section#inputNome")
let espacoIdade = document.querySelector("section#inputIdade")
let res = document.querySelector("section#resultado")
let botaoIniciar = document.querySelector("button#btnIniciar")

function iniciar() {
    espacoNome.innerHTML = `<p>Qual é o seu nome? <input type="text" id="nome"> <button onclick="enviarNome()">Enviar</button></p>`
    res.innerHTML = ""
    botaoIniciar.disabled = true
}

function enviarNome() {
    var nome = document.querySelector("input#nome").value
    if (nome.length == 0) {
        alert("Por favor, preencha o campo de nome!")
    } else {
        espacoIdade.innerHTML = `<p>Olá, ${nome}! Qual a sua idade? <input type="text" id="idade"> <button onclick="enviarIdade(nome)">Enviar</button></p>`
    }
}

function enviarIdade(nome) {
    var nome = document.querySelector("input#nome").value
    var idade = document.querySelector("input#idade").value
    if (idade.length == 0) {
        alert("Por favor, preencha o campo de idade!")
    } else {
        espacoNome.innerHTML = ""
        espacoIdade.innerHTML = ""
        res.innerHTML = `<h2>Acabei de conhecer ${nome}, que tem ${idade} anos de idade!</h2>`
    }
    botaoIniciar.disabled = false
}