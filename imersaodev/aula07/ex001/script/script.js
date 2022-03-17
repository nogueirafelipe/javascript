var cartas = [
    carta1 = {
        nome: "Rogerinho do Ingá",
        imagem: "https://i1.sndcdn.com/artworks-000371899050-m32dfo-t500x500.jpg",
        atributos: {
            carisma: 5,
            velocidade: 10,
            soco: 8,
        },
    },
    carta2 = {
        nome: "Maurílio dos Anjos",
        imagem: "https://pbs.twimg.com/media/Eae1c6RWsAEtOgH.jpg",
        atributos: {
            carisma: 10,
            velocidade: 7,
            soco: 5,
        },
    },
    carta3 = {
        nome: "Julinho da Van",
        imagem: "https://i1.sndcdn.com/artworks-000447180843-soockj-t500x500.jpg",
        atributos: {
            carisma: 8,
            velocidade: 9,
            soco: 9,
        },
    },
    carta4 = {
        nome: "Renan",
        imagem: "https://m.media-amazon.com/images/M/MV5BN2VkYTAwODEtYzlkYS00MDMwLWE5MjktZWNlMDM3NzJhYTZmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_.jpg",
        atributos: {
            carisma: 9,
            velocidade: 8,
            soco: 6,
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

    exibirCartaJogador()
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
        var resultadoFinal = `<p class="resultado-final">Você venceu!</p>`
    } else if (valorCartaJogador < valorCartaMaquina) {
        var resultadoFinal = `<p class="resultado-final">Você perdeu, otário!</p>`
    } else {
        var resultadoFinal = `<p class="resultado-final">Empate!</p>`
    }
    console.log(cartaMaquina)
    elementoResultado.innerHTML = resultadoFinal
    document.getElementById("btnJogar").disabled = true
    exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHtml = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" value="${atributo}" checked>` + atributo + ` ${cartaJogador.atributos[atributo]}<br>`
    }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + `</div>`
  
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHtml = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p type="text" name="atributo" value="${atributo}" checked>` + atributo + ` ${cartaMaquina.atributos[atributo]}</p>`
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + `</div>`
}