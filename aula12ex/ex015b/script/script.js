function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if (hora >= 0 && hora < 12) {
        img.src = '../ex015b/imagens/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '../ex015b/imagens/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = '../ex015b/imagens/noite.png'
        document.body.style.backgroundColor = '#22596f'
    }
}