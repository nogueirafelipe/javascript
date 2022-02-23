function carregar() {
    let data = new Date()
    let hora = data.getHours()
    //let hora = 1
    let msg = document.getElementById('msg')
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    let res = document.getElementById('foto')
    let img = document.createElement('img')

    if (hora >= 0 && hora < 6) {
        img.setAttribute('src', '../ex015f/imagens/madrugada.png')
        document.body.style.backgroundColor = '#00101a'
    } else if (hora < 12) {
        img.setAttribute('src', '../ex015f/imagens/manha.png')
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora < 19) {
        img.setAttribute('src', '../ex015f/imagens/tarde.png')
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.setAttribute('src', '../ex015f/imagens/noite.png')
        document.body.style.backgroundColor = '#22596f'
    }
    res.appendChild(img)
} // 00101a e2cd9f b9846f 22596f