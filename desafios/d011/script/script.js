function verificar() {
    let ano = prompt('Qual é o ano que você quer verificar?')
    let Ano = Number(ano)
    let total = Ano / 4
    let res = document.getElementById('res')
    if (Number.isInteger(total)) {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
        res.innerHTML += `O ano de ${ano} <span style="text-transform: uppercase; background-color: #A6EB9A; color: #3D8327;"><strong>é bissexto</strong></span> \u{2705}`
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
        res.innerHTML += `O ano de ${ano} <span style="text-transform: uppercase; background-color: #E28783; color: #7F180B;"><strong>não é bissexto</strong></span> \u{274C}`
    }
}