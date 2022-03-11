function adcicionarImagem() {
    let imagemFilmeFavorito = document.getElementById("filmeimg").value
    let guardaImagem = []
    if (imagemFilmeFavorito.endsWith(".jpg")) {
        listarImagemNaTela(imagemFilmeFavorito)
    } else if (imagemFilmeFavorito.length == 0) {
        alert("Digite um endereço de imagem!")
    } else {
        alert("Endereço de imagem inaválido!")
    }
    document.getElementById("filmeimg").value = ""
    guardaImagem.push(imagemFilmeFavorito)
}

function listarImagemNaTela(imagem) {
    let elementoImagem = `<img src=${imagem}>`
    let listaImagens = document.getElementById("listaFilmes")
    listaImagens.innerHTML = listaImagens.innerHTML + elementoImagem
}

function adicionarNome() {
    let nomeFilmeFavorito = document.getElementById("filmeNome").value
    let guradaNome = []
    if (nomeFilmeFavorito.length == 0) {
        alert("Digite o nome do filme!")
    } else {
        listarNomeNaTela(nomeFilmeFavorito)
    }
    document.getElementById("filmeNome").value = ""
    guradaNome.push(nomeFilmeFavorito)
}

function listarNomeNaTela(nome) {
    let listaNomes = document.getElementById("listaFilmesNomes")
    listaNomes.innerHTML = "<p style='display: inline-block'>" + listaNomes.innerHTML  + nome + "</p>"
}