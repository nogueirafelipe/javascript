let player = {
    nome: document.getElementById("nometxt"),
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}

// function adicionarJogador() {
//     jogadores.push(document.getElementById("nometxt").value)
// }

function calculaPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

player.pontos = calculaPontos(player)

var jogadores = [""]

function exibirJogadoresNaTela(jogadores) {
    let elemento = ""
    for (let i = 0 ; i < jogadores.length ; i++) {
        elemento += `<tr><td>${jogadores[i].nome}</td>`
        elemento += `<td>${jogadores[i].vitorias}</td>`
        elemento += `<td>${jogadores[i].empates}</td>`
        elemento += `<td>${jogadores[i].derrotas}</td>`
        elemento += `<td>${jogadores[i].pontos}</td>`
        elemento += `<td><button onclick="adicionarVitoria(${i})">Vitória</button></td>`
        elemento += `<td><button onclick="adicionarEmpate(${i})">Empate</button></td>`
        elemento += `<td><button onclick="adicionarDerota(${i})">Derrota</button></td>`
        elemento += `</tr>`
    }
    let tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

exibirJogadoresNaTela(jogadores)



