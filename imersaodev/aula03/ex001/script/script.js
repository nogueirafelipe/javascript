let numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    let res = document.getElementById("resultado")
    let chute = Number(document.getElementById("valor").value)
    //let tentativas = 3

    if (chute > 10 || chute < 0) {
        res.innerHTML = `Você precisa digitar um número entre 0 e 10!`
    } else if (chute == numeroSecreto) {
        res.innerHTML = `Você acertou! O número secreto era ${numeroSecreto}.`
    } else if (chute > numeroSecreto) {
        res.innerHTML = `Um pouco menos...`
    } else if (chute < numeroSecreto) {
        res.innerHTML = `Um pouco mais...`
    }
}