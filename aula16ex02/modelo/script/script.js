let num = document.querySelector("input#fNum")
let lista = document.querySelector("select#fLista")
let res = document.querySelector("div#resultado")
let valores = []
let btnFinalizar = document.querySelector("input#btnFinalizar")

btnFinalizar.disabled = true

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100 ? true : false
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1 ? true : false
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)

        btnFinalizar.disabled = false

        res.innerHTML = ""
    } else {
        alert("Valor inválido ou já encontrado na lista!")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    let totalElementos = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    for(let pos in valores) {
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / totalElementos
    
    res.innerHTML = ""
    res.innerHTML += `<p>Ao todo temos ${totalElementos} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>O resultado da soma de todos os valores é ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`
}