function converteDolar() {
    let valorRealtxt = document.querySelector("input#valor")
    let res = document.querySelector("h2#valorConvertido")
    if (valorRealtxt.value.length == 0) {
        alert("Digite o valor em real R$!")
    } else {
        let valorRealNum = Number(valorRealtxt.value)
        let valorDolar = valorRealNum / 5.09

        res.innerHTML = `O resultado em dólar é: ${valorDolar.toLocaleString("en-US", {style: "currency", currency: "USD"})}.`
    }
}
function converteEuro() {
    let valorRealtxt = document.querySelector("input#valor")
    let res = document.querySelector("h2#valorConvertido")
    if (valorRealtxt.value.length == 0) {
        alert("Digite o valor em real R$!")
    } else {
        let valorRealNum = Number(valorRealtxt.value)
        let valorEuro = valorRealNum / 5.53

        res.innerHTML = `O resultado em euro é: ${valorEuro.toLocaleString("fr-FR", {style: "currency", currency: "EUR"})}.`
    }
}
function converteLibra() {
    let valorRealtxt = document.querySelector("input#valor")
    let res = document.querySelector("h2#valorConvertido")
    if (valorRealtxt.value.length == 0) {
        alert("Digite o valor em real R$!")
    } else {
        let valorRealNum = Number(valorRealtxt.value)
        let valorLibra = valorRealNum / 6.63

        res.innerHTML = `O resultado em libra esterlina é: ${valorLibra.toLocaleString("en-EN", {style: "currency", currency: "GBP"})}`
    }
}
function converteBitcoin() {
    let valorRealtxt = document.querySelector("input#valor")
    let res = document.querySelector("h2#valorConvertido")
    if (valorRealtxt.value.length == 0) {
        alert("Digite o valor em real R$!")
    } else {
        let valorRealNum = Number(valorRealtxt.value)
        let valorBitcoin = valorRealNum / 196940.62

        res.innerHTML = `O resultado em bitcoin é: ${valorBitcoin.toLocaleString("en-US", {style: "currency", currency: "BTC"})}`
    }
}