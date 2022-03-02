function clicar() {
    let botao = document.getElementById('btn')
    let num = prompt('Digite um número inteiro qualquer: ')
    if (num.length == 0) {
        alert('Por favor, clique novamente no botão e digite um número!')
    } else {
        let n = Number(num)
        alert(`Antes de ${n}, temos o número ${n-1}.
Depois de ${n}, temos o número ${n+1}.`)
    }
}