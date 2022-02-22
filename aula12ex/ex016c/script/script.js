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
                img.setAttribute('src', '../ex016c/imagens/menino-300.png')
            } else if (idade < 21) {
                img.setAttribute('src', '../ex016c/imagens/jovem-homem-400.png')
            } else if (idade < 60) {
                img.setAttribute('src', '../ex016c/imagens/adulto-325.png')
            } else {
                img.setAttribute('src', '../ex016c/imagens/idoso-315.png')
            }
        }
        if (gen[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', '../ex016c/imagens/menina-250.png')
            } else if (idade < 21) {
                img.setAttribute('src', '../ex016c/imagens/jovem-mulher-500.png')
            } else if (idade < 60) {
                img.setAttribute('src', '../ex016c/imagens/adulta-450.png')
            } else {
                img.setAttribute('src', '../ex016c/imagens/idosa-400.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}