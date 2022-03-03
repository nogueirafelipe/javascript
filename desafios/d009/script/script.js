function reajustar() {
    let nome = prompt('Qual é o nome do funcionário?')
    if (nome.length == 0) {
        alert('Digite o nome do funcionário!')
    } else {
        let sal = prompt(`Qual é o salário de ${nome}?`)
        if (sal.length == 0) {
            alert('Digite o salário do funcionário!')
        } else {
            let reaj = prompt(`O salário de ${nome} será reajustado em qual porcentagem? (Use ponto ao invés de vírgula.)`)
            if (reaj.length == 0) {
                alert('Digite a porcentagem!')
            } else {
                let res = document.getElementById('res')
                let s = Number(sal)
                let r = Number(reaj)
                let aumento = (r / 100) * s
                let total = s + aumento
                s = s.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                aumento = aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                total = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

                res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
                res.innerHTML += `<p>O salário atual era ${s}.</p>`
                res.innerHTML += `<p>Com um aumento de ${r}%, o salário vai aumentar ${aumento} no próximo mês.</p>`
                res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${total}.</p>`
            }
        }
    }
}