// function foo(i) {
//     if (i >= 0) {
//         console.log(`begin: ${i}`)
//         foo(i - 1)
//         console.log(`end: ${i}`)
//     }
// }
// foo(3)

//FUNÇÕES ANINHADAS E CLOSURES
//Função interna: só pode ser acessada a partir de declarações em função externa.
//A função interna forma uma closure: pode usar os argumentos e variáveis da função externa, mas o mesmo NÃO VALE para a função externa.

// function addSquare(a, b) {
//     function square(x) {
//         return x*x
//     }
//     return square(a) + square(b)
// }
// console.log(addSquare(3, 4))

//Uma vez que a função interna forma uma closure, você pode chamar a função externa e especificar argumentos/parâmetros para função externa e interna.

// function fora(x) {
//     function dentro(y) {
//         return x + y
//     }
//     return dentro
// }
// fnResult = fora(3)
// result = fnResult(5)

// res = fora(3)(5)

// console.log(result)

/*
Múltiplas funções aninhadas
A função A contém a função B que contém a função C. Tanto B e C formam uma closure, então B pode acessar A, e C pode acessar B. Além disso, uma vez que C pode acessar B que pode acessar A, C também pode acessar A. Assim, a closure pode conter vários escopos; eles recursivamente contém o escopo das funções que os contêm. Isso é chamado ENCADEAMENTO DE ESCOPO.
*/
// function a(x) {
//     function b(y) {
//         function c(z) {
//             console.log(x+y+z)
//         }
//         c(3)
//     }
//     b(2)
// }
// a(1)

/*
Neste exemplo, c acessa y do b e x do a. Isso pode ser feito porque:

1 - B forma uma closure incluindo A, isto é, B pode acessar argumentos e variáveis de A.
2 - C forma uma closure incluindo B.
3 - Devido a closure B incluir A, a closure C inclui A também. C pode acessar tanto argumentos e variáveis de B como de A. Em outras palavras, C ENCADEIA o escopo de B e A, NESTA ORDEM.

O inverso, no entanto, não é verdadeiro.
*/
/*
CONFLITOS DE NOME
Quando dois argumentos ou variáveis nos escopos da closure têm o mesmo nome, há um conflito de nome. Mas escopos internos têm prioridade. Esta é a cadeia de escopo. O primeiro da cadeia é o escopo mais interno, e o último é o escopo mais externo.
*/
// function fora() {
//     var x = 10
//     function dentro(x) {
//         return x
//     }
//     return dentro
// }
// result = fora()(20)
// console.log(result)
/*
O conflito de nome acontece na declaração return x e está entre o parâmetro x de dentro e a variável x de fora. A cadeia de escopo aqui é {dentro, fora, objeto global}. Por isso o x de dentro tem precedência sobre o x de fora, e 20 (x de dentro) é retornado em vex de 10 (x de fora)
*/

/*
CLOSURES
Uma closure é criada quando a função interna é, de alguma forma, disponibilizada para qualquer escopo fora da função externa.
*/
// let pet = (nome) => { //A função externa define uma variável "nome"
//     let getNome = () => {
//         return nome         //A função interna tem acesso à variável "nome" da função externa
//     }
//     return getNome          //Retorna a função interna, expondo-a assim
// }
// myPet = pet("Vivie")
// console.log(myPet())        //Retorna "Vivie"

/*
Ela pode ser mais complexa que o código acima. Um objeto contendo métodos para manipular as variáveis da função externa pode ser devolvido.
*/
// let criarPet = (nome) => {
//     let sex
//     return {
//         setNome: (newNome) => {
//             nome = newNome
//         },
//         getNome: () => {
//             return nome
//         },
//         getSex: () => {
//             return sex
//         },
//         setSex: (newSex) => {
//             if(typeof newSex == "string" && (newSex.toLocaleLowerCase() == "macho" || newSex.toLocaleLowerCase() == "fêmea")) {
//                 sex = newSex
//             }
//         }
//     }
// }
// let pet = criarPet("Vivie")
// console.log(pet.getNome())  //Retorna "Vivie"
// pet.setNome("Oliver")
// pet.setSex("macho")
// console.log(pet.getNome())  //Retorna "Oliver"
// console.log(pet.getSex())   //Retorna "macho"
// pet.setSex("fêmea")
// console.log(pet.getSex())   //Retorna "fêmea"

/*
As variáveis internas da função interna atuam como armazenamento seguro para as funções internas. Elas armazenam "persistentes", mas seguros, os dados com os quais as funções internas irão trabalhar. As funções não tem que ser atribuídas a uma variável, ou ter um nome.
*/
// let getCode = (() => {
//     const secureCode = "0]Eal(eh&2"
//     return () => {
//         return secureCode
//     }
// })()
// console.log(getCode())

/*
Há, no entanto, uma série de armadilhas que se deve ter cuidado ao usar closures. Se uma função fechada define uma variável com o mesmo nome de uma variável em escopo externo, não há nenhuma maneira de se referir para a variável em um escopo externo novamente.
*/
// let createPet = (nome) => {     //Função externa define uma variável chamada "nome"
//     return {
//         setNome: (nome) => {    //Função fechada define uma variável chamada "nome"
//             nome = nome         //Como podemos acessar o "nome" definido pela função externa?
//         }
//     }
// }

/*
USANDO OBJETO DE ARGUMENTOS
Os argumentos de uma função são mantidos em um objeto do tipo array. Dentro de uma função, você pode endereçar os argumentos passados para ele conforme: arguments[i]

onde i é um número ordinal do argumento, começando com zero. Então, o primeiro argumento passado para a função seria arguments[0]. O número total de argumentos é indicado por arguments.length.

Usando o objeto arguments, você pode chamar a função com mais argumentos do que o formalmente declarado. Isso muitas vezes é útil se você não sabe de antemão quantos argumentos serão passados para a função. Você pode usar arguments.length para determinar a quantidade de argumentos passados para a função, e então acessar cada argumento usando o objeto arguments.

Por exemplo, considere uma função que concatena várias strings. O argumento formal para a função é uma string que especifica os caracteres que separam os itens para concatenar. A função definida como segue:
*/
// function myConcat(separador) {
//     let result = ""
//     for (let i = 1; i < arguments.length; i++) {
//         result += arguments[i] + separador
//     }
//     return result
// }
// console.log(myConcat(", ", "red", "orange", "blue"))

/*
PARÂMETROS DE FUNÇÃO
Há dois novos tipos de parâmetros: padrão e rest

PADRÃO
Em JavaScript, parâmetros padrões de funções são undefined. No entanto, em algumas situações pode ser útil definir um valor padrão diferente. Isto é onde os parâmetros padrão podem ajudar.

No passado, a estratégia geral para definir padrões era testar os valores de parâmetro no corpo da função e atribuir um valor se eles fossem undefined. Se, no exemplo a seguir, nenhum valor é fornecido para b na chamada, seu valor seria undefined ao avaliar a*b e a chamada para multiplicar retornaria NaN. No entanto, isso é pego com a segunda linha neste exemplo:
*/
// function multiplicar(a, b) {
//     b = typeof b !== "undefined"? b: 1
//     return a*b
// }
// console.log(multiplicar(50))    //Retorna 50
// /*
// Com parâmetros padrão, a verificação no corpo da função não é mais necessária. Agora você pode simplesmente colocar 1 como valor padrão para b no campo de declaração de parâmetros:
// */
// function vezes(a, b=1) {
//     return a*b
// }
// console.log(vezes(50))  //Retorna 50

/*
REST
Permite representar um número indefinido de argumentos como um ARRAY. É PRECISO USAR RETICÊNCIAS
*/
// function multiplicar(valor1, ...outros) {   //Parâmetro rest = ...outros
//     return outros.map(x => valor1 * x)
// }
// let arr = multiplicar(2, 1, 2, 3)
// console.log(arr)

/*
ARROW FUNCTIONS
Uma expressão função de seta (anteriormente conhecida como função de seta gorda) tem uma sintaxe pequena em comparação com a expressão de função e lexicalmente vincula o valor this. Funções de seta são sempre anônimas. 

Funções curtas:
Em alguns padrões funcionais, funções curtas são bem-vindas. Uma comparação:
*/
// let a = ["Hidrogênio", "Hélio", "Lítio", "Berílio"]

// let a2 = a.map(function(s){return s.length})
//     console.log(a2)

//     let a3 = a.map(s => s.length)
//     console.log(a3)

//As variáveis a2 e a3 retornam o mesmo resultado, mas a3 é mais curta.

/*
Léxico this:
Até as arrow functions, cada nova função definia seu próprio valor this. Isso pode ser irritante com um estilo de programação orientada a objetos. Exemplo:
*/
// function pessoa() {  //O construtor pessoa() define 'this' como sendo ele
//     this.idade = 0
//     setInterval(function crescer() {     //No modo não estrito, a função crescer define 'this' como o objeto global, o 
//         this.idade++                     //que é diferente do 'this' definido pelo construtor pessoa()
//     }, 1000)
// }
// let p = new pessoa()
// console.log(p)

//No ECMAScript 3/5, este problema foi resolvido atribuindo o valor em this a uma variável que poderia ser fechada:
// function pessoa() {
//     let self = this
//     self.idade = 0
//     setInterval(function crescer() {
//         self.idade++
//     }, 1000)
// }
// console.log(pessoa())

//Como alternativa, uma função vinculada poderia ser criada para que o valor da propriedade this seja passado para a função crescer().
// Arrow functions capturam o valor this do contexto delimitado, então o código a seguir funciona conforme o esperado.
// function pessoa() {
//     this.idade = 0
//     setInterval(() => {
//         this.idade++    //Propriedade 'this' refere ao objeto pessoa
//     }, 1000)
// }
// let p = new pessoa()
// console.log(p)
const nome = (n) => console.log(`O nome é: ${n}`)
nome("Felipe")
nome("Bruno")
nome("Lucas")
let nomeDoBancoDeDados = "João"
nome(nomeDoBancoDeDados)
//RETURN PROPORCIONA RECEBER VALORES DE VOLTA E É POSSÍVEL GUARDAR ESSE VALOR EM UMA NOVA VARIÁVEL!
function soma(a, b) {
    return a + b
}
let somar = soma(2, 5)
console.log(somar)