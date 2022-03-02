function converter() {
    let celsius = prompt('Digite uma temperatura em °C (Celsius):')
    let res = document.getElementById('res')
    
    if (celsius.length == 0){
        alert('Por favor, digite um valor!')
    } else {
        let cel = Number(celsius)
        let kel = cel + 273.15
        let far = (cel * 1.8) + 32

        res.innerHTML = `<h2>A temperatura de ${cel}°C corresponde a:</h2>`
        res.innerHTML += `<p>${kel}°K (Kelvin)</p>`
        res.innerHTML += `<p>${far}°F (Fahrenheit)</p>`
        //res += ''
    }
    res.innerHTML += ''
}