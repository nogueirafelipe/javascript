let btnIniciar = document.querySelector("button#btnIniciar")
let elementoInput = document.querySelector("section#inputMetro")
let res = document.querySelector("section#resultado")

function converter() {
    res.innerHTML = ""
    elementoInput.innerHTML = `<p>Digite uma distância em metros (m): <input type="number" id="num"> <button id="btnNum" onclick="enviarNumero()">Enviar</button></p>`
    btnIniciar.disabled = true
}

function enviarNumero() {
    let metro = Number(document.querySelector("input#num").value)
    let km = metro/1000
    let hm = metro/100
    let dam = metro/10
    let dm = metro*10
    let cm = metro*100
    let mm = metro*1000
    elementoInput.innerHTML = ""
    if (metro < 1) {
        alert("Digite um número acima de zero!")
    } else if (metro == 1) {
        res.innerHTML = `<h2>A distância de ${metro} metro corresponde a:</h2>`
        res.innerHTML += `<p>${km.toLocaleString("pt-BR", {minimumFractionDigits: 3, maximumFractionDigits: 3})} quilômetros (Km)</p>`
        res.innerHTML += `<p>${hm.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} hectômetros (Hm)</p>`
        res.innerHTML += `<p>${dam.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} decâmetros (Dam)</p>`
        res.innerHTML += `<p>${dm.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} decímetros (dm)</p>`
        res.innerHTML += `<p>${cm.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} centímetros (cm)</p>`
        res.innerHTML += `<p>${mm.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} milímetros (mm)</p>`
    } else {
        res.innerHTML = `<h2>A distância de ${metro} metros corresponde a:</h2>`
        res.innerHTML += `<p>${km.toLocaleString("pt-BR", {minimumFractionDigits: 3, maximumFractionDigits: 3})} quilômetros (Km)</p>`
        res.innerHTML += `<p>${hm.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} hectômetros (Hm)</p>`
        res.innerHTML += `<p>${dam.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} decâmetros (Dam)</p>`
        res.innerHTML += `<p>${dm.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} decímetros (dm)</p>`
        res.innerHTML += `<p>${cm.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} centímetros (cm)</p>`
        res.innerHTML += `<p>${mm.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} milímetros (mm)</p>`
    }
    btnIniciar.disabled = false
}