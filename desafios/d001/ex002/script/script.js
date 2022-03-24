let res = document.querySelector("section#resultado")
function botao1() {
    res.innerHTML = `<h2>Você clicou no 1º botão!</h2>`
}

function botao2() {
    res.innerHTML = `<h2>Você clicou no 2º botão!</h2>`
}

function botao3() {
    res.innerHTML = `<h2>Você clicou no 3º botão!</h2>`
}

function limpar() {
    res.innerHTML = ""
}