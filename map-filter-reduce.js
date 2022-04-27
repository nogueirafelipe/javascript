/*
São três métodos exclusivos para manipulação de arrays
Tanto map quanto filter retornam um array no final de seu uso, já o reduce pode retornar qualquer outra coisa.
*/

/*
MAP
Itera o array, aplica sobre cada valor a função que foi passada para ele e retorna para um novo array
*/
const numeros = [2, 3, 6, 5, 10]

const novoArrayMap = numeros.map(function(numero) {
    return numero * 2
})
console.log("novoArrayMap:", novoArrayMap)

//O mesmo exemplo com arrow function
const arrayMapArrow = numeros.map(numero => numero * 2)
console.log("arrayMapArrow:", arrayMapArrow)

//O mesmo exemplo sem map e com for
let novoArrayNumeros = []

for (let i = 0; i < numeros.length; i++) {
    novoArrayNumeros.push(numeros[i]*2)
}
console.log(numeros)
console.log(novoArrayNumeros)

//Outro exemplo de uso do map
const nomes = ["Felipe", "Nogueira", "Francisco", "Beatriz"]
const nomesMinusculos = nomes.map(nome => nome.toLowerCase())
console.log("nomesMinusculos:", nomesMinusculos)

/*
FILTER
Muito parecido com o map. A sintaxe é a mesma.
A diferença é que a função passada no filter precisa retornar um valor booleano.
Sempre que a função retornar true, o filter vai armazenar esse valor num array. Se retornar false, ele não vai armazenar aquele valor num array.
*/
//Exemplo com for
let multiplos2 = []
for (let n = 0; n < numeros.length; n++) {
    if (numeros[n] % 2 === 0) {
        multiplos2.push(numeros[n])
    }
}
console.log("multiplos2:", multiplos2)

//Exemplo com filter
const numerosFiltrados = numeros.filter(numero => numero % 2 === 0)
console.log("numerosFiltrados:", numerosFiltrados)

/*
MAP E FILTER JUNTOS
*/
const arrayMapFilter = numeros.filter(numero => numero % 2 === 0).map(numero => numero * 2)
console.log("arrayMapFilter:", arrayMapFilter)

/*
REDUCE
Itera sobre arrays, assim como map e filter, mas não retorna apenas arrays.
A sintaxe é a mesma de map e filter, a única diferença é que ele recebe dois parâmetros, a função e o valor inicial.
A função, por sua vez, também recebe dois parâmetros, o valor atual (na primeira iteração é o valor inicial) e o valor do array que está sendo iterado (é o parâmetro do map e do filter).
*/
//Exemplo com for
let soma = 0
for (let x = 0; x < numeros.length; x++) {
    soma += numeros[x]
}
console.log("soma:", soma)

//Exemplo com reduce
const exemploReduce = numeros.reduce((valorAcumulador, valorArray) => valorAcumulador + valorArray, 0)
console.log("exemploReduce:", exemploReduce)

//Outro exemplo de uso do reduce
const pessoas = [
    {
        nome: "Felipe",
        idade: 26
    },
    {
        nome: "Beatriz",
        idade: 24
    },
    {
        nome: "Francisco",
        idade: 53
    },
    {
        nome: "Laura",
        idade: 2
    },
    {
        nome: "Joãozinho",
        idade: 15
    }
]
const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
    const propMaiorOuMenor = valorArray.idade >= 18 ? "maiores" : "menores"
    valorAcumulador[propMaiorOuMenor].push(valorArray)
    return valorAcumulador
}, {maiores: [], menores: []})

console.log("pessoasAgrupadas:", pessoasAgrupadas)