function enviar() {
    let input = document.getElementById("nometxt")
    let filme = input.value
    let res = document.querySelector("h2#res")
    if (filme.length == 0) {
        alert("Digite o nome do filme!")
    } else {
        res.innerHTML = filme
    }    
}