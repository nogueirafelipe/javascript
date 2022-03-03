function calcular() {
    let prod = prompt('Qual é o produto que você está comprando?')
    if (prod.length == 0) {
        alert('[ERRO] Digite um produto!')
    } else {
        let preco = prompt(`Qual é o preço de ${prod}? Use ponto para separar os centavos.`)
        if (preco.length == 0){
            alert('[ERRO] Digite o preço do produto!')
        } else {
            let p = Number(preco)
            let desc = (10 / 100) * p
            let total = p - desc
            let res = document.getElementById('res')
            p = p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            desc = desc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            total = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

            res.innerHTML = `<h2>Calculando desconto de 10% para ${prod}</h2>`
            res.innerHTML += `<p>O preço original era ${p}.</p>`
            res.innerHTML += `<p>Você acaba de ganhar ${desc} de desconto.</p>`
            res.innerHTML += `<p>No fim, você vai pagar ${total} no produto ${prod}.</p>`

        }
    }
}

//Tentei resolver sem os prompts, não consegui!

/*function enviar() {
    let produto = document.getElementById('prodtxt')
    if (produto.length == 0) {
        alert('Por favor, preencha o campo!')
    } else {
        let valor = document.createElement('p')
        let valtxt = document.getElementById('valor')

        let preco = document.createElement('input')
        preco.setAttribute('type', 'number')
        preco.setAttribute('class', 'num')
        preco.setAttribute('id', 'precotxt')
        let preinp = document.getElementById('precoin')

        valor.innerText = `Qual é o preço de ${produto}?`
        valtxt.appendChild(valor)
        preinp.appendChild(preco)

        if (preco.value.length == 0) {
            alert('Por favor, preencha o campo!')
        } 
    }
}
function desconto() {
    //let produto = document.getElementById('prodtxt')
    let p = Number(preco.value)
    let desc = (10 / 100) * p
    let total = p - desc
    p = p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    desc = desc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    total = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let res = document.getElementById('res')

    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    res.innerHTML += `<p>O preço original era ${p}.</p>`
    res.innerHTML += `<p>Você acaba de receber ${desc} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${total} no produto ${produto}.</p>`
}*/