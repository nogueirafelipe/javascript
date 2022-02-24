let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        //alert('Tudo certo!')
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}

/*function adicionar() {
    let num = document.getElementById('fnum')
    let lis = document.getElementById('flista')

    if (num.value.length == 0 || Number(num.value) > 100 || Number(num.value) < 1) {
        alert('Valor inválido ou já adicionado!')
    } else {
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        //item.value = `tab${}`
        //sel.innerHTML = ''
        
        lis.appendChild(item)
    }
}*/