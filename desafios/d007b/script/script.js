function converter() {
    let dolar = document.getElementById('dolar')
    let real = document.getElementById('real')
    if (dolar.value.length == 0 || real.value.length == 0) {
        alert('Por favor, preencha o campo!')
    } else {
        let dol = Number(dolar.value)
        let rbl = Number(real.value)
        let total = rbl / dol
        let res = document.getElementById('res')
        dol = dol.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        rbl = rbl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        total = total.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

        res.innerHTML = `Você tem ${rbl}.`
        res.innerHTML += `<p>Na cotação atual do dólar, que é ${dol}, você consegue comprar ${total}.</p>`
    }
}