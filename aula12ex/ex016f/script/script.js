function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let tAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (tAno.value.length == 0 || Number(tAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let gen = document.getElementsByName('radgen')
        let idade = ano - Number(tAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (gen[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', '../ex016f/imagens/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', '../ex016f/imagens/jh.png')
            } else if (idade < 60) {
                img.setAttribute('src', '../ex016f/imagens/adulto.png')
            } else {
                img.setAttribute('src', '../ex016f/imagens/idoso.png')
            }
        }
        if (gen[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', '../ex016f/imagens/menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', '../ex016f/imagens/jm.png')
            } else if (idade < 60) {
                img.setAttribute('src', '../ex016f/imagens/adulta.png')
            } else {
                img.setAttribute('src', '../ex016f/imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}