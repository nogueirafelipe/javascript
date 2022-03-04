function verificar() {
    let ant = prompt('Qual era o preço anterior do produto? (Use ponto para separar os centavos)')
    let res = document.getElementById('res')
    if (ant.length == 0) {
        alert('Digite o preço anterior!')
    } else {
        let pos = prompt('Qual é o preço atual do produto? (Use ponto para separar os centavos)')
        let a = Number(ant)
        let p = Number(pos)
        //a = a.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        //p = p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        if (pos.length == 0) {
            alert('Digite o preço atual!')
        } else if (p > a) {
            let entre = p - a
            let porcen = entre / a * 100
            a = a.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            p = p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            entre = entre.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

            res.innerHTML = `<h2>Analisando os valores informados</h2>`
            res.innerHTML += `<p>O produto custava ${a} e agora custa ${p}.</p>`
            res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
            res.innerHTML += `<p>O preço subiu ${entre} em relação ao preço anterior.</p>`
            res.innerHTML += `<p>Uma variação de ${parseInt(porcen)}% pra cima.</p>`
        } else if (p < a) {
            entre = a - p
            porcen = entre / a * 100
            a = a.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            p = p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            entre = entre.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

            res.innerHTML = `<h2>Analisando os valores informados</h2>`
            res.innerHTML += `<p>O produto custava ${a} e agora custa ${p}.</p>`
            res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
            res.innerHTML += `<p>O preço caiu ${entre} em relação ao preço anterior.</p>`
            res.innerHTML += `<p>Uma variação de ${parseInt(porcen)}% pra baixo.</p>`
        } else {
            res.innerHTML = `<h2>Analisando os valores informados</h2>`
            res.innerHTML += `<p>Não houve mudança de preço.</p>`
        }
    } 
}