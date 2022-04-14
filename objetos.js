/*
Permite armazenar uma coleção de pares: chaves e valores
*/
// let usuario = {
//     nome: 'Felipe',
//     idade: 26,
//     cidade: 'São Paulo',
//     'ultimo-nome': 'Nogueira'
// }
// console.log(usuario)
// console.log(usuario.nome)
// console.log(usuario['ultimo-nome'])
// console.log(usuario.idade)
// console.log(usuario.cidade)
// console.log(typeof usuario)

// usuario.estado = 'SP'
// console.log(usuario)

// //É possível deletar uma propriedade. Basta usar a palavra reservada 'delete' seguida da chave que será deletada
// delete usuario.nome
// console.log(usuario)

// //É possível passar arrays, functions ou outros objetos como valores para as chaves
// usuario.hobbies = ['Futebol', 'Videogames', 'Filmes']
// console.log(usuario)

// usuario.competencias = {
//     linguagens: ['JavaScript', 'Python', 'PHP'],
//     instrumentosMusicais: ['Violão', 'Bateria', 'Guitarra']
// }
// console.log(usuario)
// console.log(usuario.competencias.linguagens[0])

//Usando uma função como valor:
// let usuario2 = {
//     digaOi: function(name) {
//         return 'Olá, ' + name + '!'
//     },
//     digaTchau: name => {return 'Tchau, ' + name + '!'}
// }
// console.log(usuario2.digaOi('Felipe'))
// console.log(usuario2.digaTchau("Felipe"))
// console.log(usuario2.digaOi('Bruno'))
// console.log(usuario2.digaTchau('Bruno'))

//Existe uma forma mais curta de escrever uma função dentro de um objeto:
// let usuario3 = {
//     digaOi(name) {return `Olá, ${name}!`}
// }
// console.log(usuario3.digaOi('Felipe'))
// console.log(typeof usuario3.digaOi)

// //Também é possível passar variáveis como valores para as chaves:
// let time = "São Paulo"
// let pessoa = {
//     nome: "Felipe",
//     time: time
// }
// console.log(pessoa)
// //Uma característica do ECMAScript 6 é: se o nome da chave é o mesmo nome da variável que será atribuída, existe uma forma mais curta de escrever
// let idade = 26
// let pessoa2 = {
//     nome: 'João',
//     idade
// }
// console.log(pessoa2)

//MESCLANDO 2 OU MAIS OBJETOS (com Object.assign):
// let usuario4 = {
//     nome: 'Felipe',
//     idade: 26
// }

// let extraInfo = {
//     pais: 'Brasil',
//     estado: 'SP'
// }

// let novoUsuario = Object.assign({}, usuario4, extraInfo)    //Object.assign gera um novo objeto ou altera um já existente
// console.log(novoUsuario)                                    //Aceita dois ou mais parâmetros. O primeiro é o objeto alvo
//                                                             //Se o objetivo é gerar um novo objeto, é preciso passar {}
//                                                             //O mais comum é gerar um objeto novo
// let outroUsuario = Object.assign(usuario4, extraInfo)
// console.log(outroUsuario)

//Existe uma outra forma, mais curta, para fazer o merge de objetos
// let novoUsuario2 = {    //O nome disso é spread, você está espalhando as 
//     ...usuario4,        //propriedades dos objetos no objeto novo
//     ...extraInfo
// }
// console.log(novoUsuario2)

//É possível passar uma variável como chave (o valor dessa variável vai ser o nome da chave):
// let lastName = 'sobrenome'
// let usuario5 = {
//     nome: 'Felipe',
//     [lastName]: 'Nogueira'      //A variável precisa estar entre colchetes [] e o nome da chave será 'sobrenome'
// }
// console.log(usuario5)

//Getters e Setters
let usuarios = [
    {
        nome: 'Felipe',
        idade: 26
    },
    {
        nome: 'João',
        idade: 30
    },
    {
        nome: 'Maria',
        idade: 21
    }
]
//console.log(usuarios)

let usuario6 = {
    posicao: 0,
    get atual() {
        return usuarios[this.posicao]
    },
    set atual(posicao) {
        this.posicao = posicao
    },
    proximo() {
        ++this.posicao
    },
    anterior() {
        --this.posicao
    }
}

console.log(usuario6.atual)     //'atual' não está sendo chamado como uma função, para fazer isso (a função sendo chamada
usuario6.proximo()              //como propriedade e só retornando um valor) é necessário usar a palavra reservada 'get'
                                //antes da função 'atual()' --> get atual()
console.log(usuario6.atual)
usuario6.proximo()

console.log(usuario6.atual)
console.log(usuario6.atual)
usuario6.anterior()

console.log(usuario6.atual)
usuario6.anterior()

console.log(usuario6.atual)
//
usuario6.atual = 1              //Para conseguir definir manualmente qual é a posição, é presico usar a palavra 
console.log(usuario6.atual)     //reservada 'set'

usuario6.atual = 0
console.log(usuario6.atual)