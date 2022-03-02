function clicar() {
    let botao = document.getElementById('btn')
    let nome = prompt('Qual é o seu nome?')
    if (nome.length == 0) {
        alert('Por favor, clique novamente no botão e digite seu nome!')
    } else {
        let idade = prompt(`Olá ${nome}! Quantos anos você tem?`)
        if (idade.length == 0) {
            alert('Por favor, clique novamente no botão e digite seu nome e idade!')
        } else {
            alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
        }
    }
}