function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar, dados faltando!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando Passo 1.')
            p = 1
        }
        if (i < f) {
           for (let c = i ; c <= f ; c += p) { // Contagem crescente
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for (let c = i ; c >= f ; c -= p) { // Contagem decrescente
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}









/*var initxt = document.getElementById('inicio')
var inicio = Number(initxt.value)

var fimtxt = document.getElementById('fim')
var fim = Number(fimtxt.value)

var passtxt = document.getElementById('passo')
var passo = Number(passtxt.value)

var mostra = document.getElementById('mostra')

function contar(){
    while (inicio <= fim) {
        mostra.innerHTML = inicio
        inicio = inicio + passo
    }
}*/