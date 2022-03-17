var cartas = [
    carta1 = {
        nome: "Rogerinho do Ingá",
        atributos: {
            carisma: 5,
            velocidade: 10,
            soco: 8,
            conhecimentos: 6,
        },
    },
    carta2 = {
        nome: "Maurílio dos Anjos",
        atributos: {
            carisma: 10,
            velocidade: 7,
            soco: 5,
            conhecimentos: 9,
        },
    },
    carta3 = {
        nome: "Julinho da Van",
        atributos: {
            carisma: 8,
            velocidade: 9,
            soco: 9,
            conhecimentos: 6,
        },
    },
    carta4 = {
        nome: "Renan",
        atributos: {
            carisma: 9,
            velocidade: 8,
            soco: 6,
            conhecimentos: 9,
        },
    }
]

var cartaMaquina
var cartaJogador

function sortearCarta() {
    var escolhaAtributoTxt = document.getElementById("escolher-atributo")
    escolhaAtributoTxt.innerHTML = `Escolha o seu atributo`
    var numeroCartaMaquina = parseInt(Math.random() * 4)
    cartaMaquina = cartas[numeroCartaMaquina]
    //console.log(cartaMaquina)

    var numeroCartaJogador = parseInt(Math.random() * 4)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 4)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += ` <input type="radio" name="atributo" value="${atributo}" checked>` + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributo() {
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0 ; i < radioAtributos.length ; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributo()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = `Você venceu!`
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = `Você perdeu, otário!`
    } else {
        elementoResultado.innerHTML = `Empate!`
    }
    console.log(cartaMaquina)
    document.getElementById("btnJogar").disabled = true
}