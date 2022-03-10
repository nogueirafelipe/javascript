let listaDiscos = ["../ex001/imagens/real-surreal.png", "../ex001/imagens/eter.png", "../ex001/imagens/magnetite.png", "../ex001/imagens/respiro.png"]

let links = ["https://open.spotify.com/album/5QR2xVbwCNxOBgssCLEmhP", "https://open.spotify.com/album/5S71TKsxpeudKOiZ4smyrW", "https://open.spotify.com/album/5JlPzVtOZzhAWpQezY3aVS", "https://open.spotify.com/album/2wKOCCeBGn6D2KJImp97vW"]

//let res = document.querySelector("main#res")

/*for (let i = 0 ; i < listaDiscos.length && i < links.length ; i++){
    document.write(`<a href=${links[i]} target="_blank" rel="external"><img src=${listaDiscos[i]}></a>`)
}*/

let i = 0

while (i < listaDiscos.length && i < links.length) {
    document.write(`<a href=${links[i]} target="_blank" rel="external"><img src=${listaDiscos[i]}></a>`)
    i++
}