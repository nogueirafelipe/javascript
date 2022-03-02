function converter() {
    let metro = prompt('Digite uma distância em metros (m):')
    let res = document.getElementById('res')
    if (metro.length == 0) {
        alert('Valor inválido! Tente novamente.')
    } else {
        let m = Number(metro)
        let km = m/1000
        let hm = m/100
        let dam = m/10
        let dm = m*10
        let cm = m*100
        let mm = m*1000
        //m.toFixed(3).replace('.', ',')
        res.innerHTML = `<h2>A distância de ${m} metros corresponde a:</h2>`
        res.innerHTML += `${km.toFixed(3).replace('.', ',')} quilômetros (Km)`
        res.innerHTML += `<p>${hm.toFixed(3).replace('.', ',')} hectômetros (Hm)</p>`
        res.innerHTML += `<p>${dam.toFixed(3).replace('.', ',')} decâmetros (Dam)</p>`
        res.innerHTML += `<p>${dm.toFixed(3).replace('.', ',')} decímetros (dm)</p>`
        res.innerHTML += `<p>${cm.toFixed(3).replace('.', ',')} centímetros (cm)</p>`
        res.innerHTML += `<p>${mm.toFixed(3).replace('.', ',')} milímetros (mm)</p>`
    }
}

//Não consegui deixar igual ao exemplo!!

//km = /1000
//cm = *100
//mm = *1000
//hm = /100
//dam = /10
//dm = *10