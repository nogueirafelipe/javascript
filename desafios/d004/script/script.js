function calcular() {
    let prod = prompt('Que produto você está comprando?')
    if (prod.length == 0) {
        alert('Por favor, clique novamente no botão e digite o nome do produto!')
    } else {
        let preco = prompt(`Quanto custa ${prod} que você está comprando?`)
        if (preco.length == 0) {
            alert('É preciso digitar o preço. Comece novamente.')
        } else {
            let pgto = prompt(`Qual foi o valor que você deu para pagar ${prod}?`)
            if (pgto.length == 0) {
                alert('Você precisa dizer quanto deu para pagar, só assim podemos calcular seu troco. Comece novamente.')
            } else {
                let valor = Number(preco)
                let pag = Number(pgto)
                let troco = Number(pag-valor)
                valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                pag = pag.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                troco = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                alert(`Você comprou ${prod} que custou ${valor}.
Deu ${pag} em dinheiro e vai receber ${troco} de troco.
Volte sempre!`)
            }
        }
    }
}