function carregar() {
    let data = new Date()
    let hora = data.getHours()
    //let hora = 0
    let msg = document.getElementById('msg')
    let res = document.getElementById('foto')
    let img = document.createElement('img')
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`

    if (hora >= 0 && hora < 12) {
        img.setAttribute('src', '../ex015e/imagens/manha.png')
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora < 19) {
        img.setAttribute('src', '../ex015e/imagens/tarde.png')
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.setAttribute('src', '../ex015e/imagens/noite.png')
        document.body.style.backgroundColor = '#22596f'
    }
    res.appendChild(img)
}