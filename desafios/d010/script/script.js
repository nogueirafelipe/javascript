function calcular() {
    let varA = prompt('Qual é o valor de a?')
    if (varA.length == 0) {
        alert('Digite o valor de a!')
    } else {
        let varB = prompt('Qual é o valor de b?')
        if (varB.length == 0) {
            alert('Digite o valor de b!')
        } else {
            let varC = prompt('Qual é o valor de c?')
            if (varC.length == 0) {
                alert('Digite o valor de c!')
            } else {
                let a = Number(varA)
                let b = Number(varB)
                let c = Number(varC)
                let total = (b**2) - 4 * a * c
                let res = document.getElementById('res')

                res.innerHTML = `<h2>Resolução:</h2>`
                res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
                res.innerHTML += `<p>O cálculo realizado será <strong>&#9651; = ${b}² - 4 . ${a} . ${c}</strong></p>`
                res.innerHTML += `<p>O valor calculado foi <strong>&#9651; = ${total}</strong></p>`
            }
        }
    }
}