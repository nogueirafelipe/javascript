let num = [5, 8, 2, 9, 3]
num.sort() //É um método interno - Vai colocar os elementos em ordem crescente - Nesse caso ficaria: 2, 3, 5, 8, 9

//num[3] = 4 => Vai colocar o 4 na posição 3 (no lugar do 9)

//num.push(7) => É um método interno - Vai colocar o 7 na última posição

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} valores`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4) //Retorna a chave - Se o número dentro dos parênteses não estiver no vetor, retorna -1
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}

//  console.log(num.length) //nume.length não tem parênteses, pois não é um método, é um atributo

//console.log(`Seu número é o ${num[0]}`)

//CUIDADO: A ordem em que o código está escrito influencia o resultado
