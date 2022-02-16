function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fgen = document.getElementsByName('radgen')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fgen[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', '../ex016/imagens/menino-950.png')
                //Tá com problema no tamanho
            } else if (idade > 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', '../ex016/imagens/jovem-homem-400.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', '../ex016/imagens/adulto-950.png')
                //Tá com problema no tamanho
            } else {
                //Idoso
                img.setAttribute('src', '../ex016/imagens/idoso-315.png')
            }

        } else if (fgen[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', '../ex016/imagens/menina-250.png')
            } else if (idade > 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', '../ex016/imagens/jovem-mulher-850.png')
                //Tá com problema no tamanho
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', '../ex016/imagens/adulta-450.png')
            } else {
                //Idoso
                img.setAttribute('src', '../ex016/imagens/idosa-400.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}