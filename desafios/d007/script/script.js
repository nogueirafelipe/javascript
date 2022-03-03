let dolar = prompt('Quanto está a cotação do dólar agora? Use ponto ao invés de vírgula.')
if (dolar.length == 0) {
    alert('Por favor, digite um número!')
} else {
    function converter() {
        let real = prompt('Quantos R$ você tem na carteira? Use ponto ao invés de vírgula.')
        let res = document.getElementById('res')
        if (real.length == 0) {
            alert('Por favor, digite um número!')
        } else {
            let dol = Number(dolar)
            let rbl = Number(real)
            let total = rbl / dol
            dol = dol.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
            rbl = rbl.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            total = total.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
            res.innerHTML = `<p>Você tem ${rbl}.</p>`
            res.innerHTML += `<p>Na atual cotação do dólar, que é ${dol}, você consegue comprar ${total}.</p>`
        }
    }
}
