function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 15
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '../ex015/imagens/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = '../ex015/imagens/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //boa noite
        img.src = '../ex015/imagens/noite.png'
        document.body.style.backgroundColor = '#22596f'
    }
}


