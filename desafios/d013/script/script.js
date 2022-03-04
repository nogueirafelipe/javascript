function verificar() {
    let nome = prompt('Qual é o nome do aluno?')
    let res = document.querySelector('div#res')
    if (nome.length == 0) {
        alert('Digite o nome do aluno!')
    } else {
        let pnota = prompt(`Primeira nota de ${nome} (Caso necessário, use ponto ao invés de vírgula):`)
        if (pnota.length == 0) {
            alert('Informe a primeira nota!')
        } else {
            let snota = prompt(`Segunda nota de ${nome}: (Caso necessário, use ponto ao invés de vírgula):`)
            if (snota.length == 0) {
                alert('Informe a segunda nota!')
            } else {
                let pn = Number(pnota)
                let sn = Number(snota)
                let media = (pn + sn) / 2
                if (media < 3) {
                    res.innerHTML = `<h2>Situação:</h2>`
                    res.innerHTML += `<p>A média das notas de ${nome} é ${media.toFixed(1)}</p>`
                    res.innerHTML += `<p><span style="background-color: #E28783; color: #7F180B;">REPROVADO \u{274C}</span></p>`
                } else if (media < 6) {
                    res.innerHTML = `<h2>Situação:</h2>`
                    res.innerHTML += `<p>A média das notas de ${nome} é ${media.toFixed(1)}</p>`
                    res.innerHTML += `<p><span style="background-color: #FFFF4D; color: #808000;">RECUPERAÇÃO \u{270B}</span></p>`
                } else {
                    res.innerHTML = `<h2>Situação:</h2>`
                    res.innerHTML += `<p>A média das notas de ${nome} é ${media.toFixed(1)}</p>`
                    res.innerHTML += `<p><span style="background-color: #A6EB9A; color: #3F852A;">APROVADO \u{2714}</span></p>`
                }
            }
        }
    }
}