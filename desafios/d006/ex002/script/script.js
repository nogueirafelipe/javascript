let btnConverter = document.querySelector("button#btnConverter")
let elementoInput = document.querySelector("section#inputCelsius")
let res = document.querySelector("section#resultado")

function converter() {
    res.innerHTML = ""
    elementoInput.innerHTML = `<p>Digite uma temperatura em °C (Celsius): <input type="number" id="tempCelsius"> <button id="btnEnviar" onclick="enviarTemperatura()">Enviar</button></p>`
    btnConverter.disabled = true
}

function enviarTemperatura() {
    let celsius = Number(document.querySelector("input#tempCelsius").value)
    let fahrenheit = (celsius * 1.8) + 32
    let kelvin = celsius + 273.15

    elementoInput.innerHTML = ""
    res.innerHTML = `<h2>A temperatura de ${celsius}°C corresponde a:</h2>`
    res.innerHTML += `<p>${kelvin.toFixed(2).replace(".", ",")}K (Kelvin)</p>
                     <p>${fahrenheit.toFixed(2).replace(".", ",")}°F (Fahrenheit)</p>`
    btnConverter.disabled = false
}