function converteFahrenheit() {
    let celsiustxt = document.querySelector("input#valor")
    let res = document.querySelector("h2#valorConvertido")
    if (celsiustxt.value.length == 0) {
        alert("Digite a temperatura em Celsius °C!")
    } else {
        let celsius = Number(celsiustxt.value)
        let fahrenheit = (celsius * 1.8) + 32

        res.innerHTML = `O resultado em Fahrenheit é: ${parseInt(fahrenheit)}°F.`
    }
}
function converteKelvin() {
    let celsiustxt = document.querySelector("input#valor")
    let res = document.querySelector("h2#valorConvertido")
    if (celsiustxt.value.length == 0) {
        alert("Digite a temperatura em Celsius °C!")
    } else {
        let celsius = Number(celsiustxt.value)
        let kelvin = celsius + 273

        res.innerHTML = `O resultado em Kelvin é: ${parseInt(kelvin)}K.`
    }
}