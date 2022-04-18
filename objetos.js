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
// let usuarios = [
//     {
//         nome: 'Felipe',
//         idade: 26
//     },
//     {
//         nome: 'João',
//         idade: 30
//     },
//     {
//         nome: 'Maria',
//         idade: 21
//     }
// ]
// //console.log(usuarios)

// let usuario6 = {
//     posicao: 0,
//     get atual() {
//         return usuarios[this.posicao]
//     },
//     set atual(posicao) {
//         this.posicao = posicao
//     },
//     proximo() {
//         ++this.posicao
//     },
//     anterior() {
//         --this.posicao
//     }
// }

// console.log(usuario6.atual)     //'atual' não está sendo chamado como uma função, para fazer isso (a função sendo chamada
// usuario6.proximo()              //como propriedade e só retornando um valor) é necessário usar a palavra reservada 'get'
//                                 //antes da função 'atual()' --> get atual()
// console.log(usuario6.atual)
// usuario6.proximo()

// console.log(usuario6.atual)
// console.log(usuario6.atual)
// usuario6.anterior()

// console.log(usuario6.atual)
// usuario6.anterior()

// console.log(usuario6.atual)
// //
// usuario6.atual = 1              //Para conseguir definir manualmente qual é a posição, é presico usar a palavra 
// console.log(usuario6.atual)     //reservada 'set'

// usuario6.atual = 0
// console.log(usuario6.atual)

/*
DESTRUCTING
*/
// let novoUsuario3 = {
//     nome: "Felipe",
//     idade: 26,
//     pais: "Brasil",
//     estado: "SP"
// }
// let {pais} = novoUsuario3
// console.log(pais)           //Entre chaves eu digo o nome da chave/propriedade que eu quero e a variável será criada com 
//                             //o valor contido na chave
//                             //É possível extrair mais de uma chave em uma única variável
// let {nome, idade} = novoUsuario3
// console.log(nome, idade)
// //var {nome da(s) chave(s)} = nome do objeto

// //Para fins de comparação, a maneira comum seria criar uma vriável para cada chave/propriedade:
// let identity = novoUsuario3.nome
// let age = novoUsuario3.idade
// let country = novoUsuario3.pais
// console.log(identity)
// console.log(age)
// console.log(country)

// //Ao usar destructing, é possível dar outro nome para a variável além do nome da chave extraída, basta colocar dois pontos depois do nome da chave e escrever o novo nome da variável:
// let {estado: state} = novoUsuario3
// console.log(state)

//É possível extrair chaves/propriedades de objetos aninhados, basta seguir a ordem do objeto:
// let novoUsuario4 = {
//     nome: {
//         primeiro: "Felipe",
//     }
// }

// //Jeito mais comum
// // let primeiro = novoUsuario4.nome.primeiro
// // console.log(primeiro)

// //Com destructing:
// let {nome: {primeiro}} = novoUsuario4
// console.log(primeiro)

// //Destructing com valor padrão (é igual ao default em function):
// let {nome: {ultimo = "Nogueira"}} = novoUsuario4        //Apesar de não existir a propriedade "ultimo" no objeto, vai
// console.log(ultimo)                                     //imprimir "Nogueira"

//Destructing como parâmetro de uma função:
// function imprimeUsuario({nome, idade, cidade}) {
//     console.log(nome)
//     console.log(idade)
//     console.log(cidade)
// }

// let usuarioFunction = {
//     nome: "Felipe",
//     idade: 26,
//     cidade: "São Paulo",
// }
// imprimeUsuario(usuarioFunction)

//Somando os dois exemplos anteriores, destructing com valor padrão como parâmetro de uma função:
// function mostrarUsuario({nome, idade, cidade, pais = "Brasil"}) {
//     console.log(nome)
//     console.log(idade)
//     console.log(cidade)
//     console.log(pais)
// }
// let usuarioFunction2 = {
//     nome: "Felipe",
//     idade: 26,
//     cidade: "São Paulo"
// }
// mostrarUsuario(usuarioFunction2)

// /*
// Métodos Object.keys() e Object.values():
// */
// console.log(Object.keys(usuarioFunction2))      //O parâmetro é o próprio objeto
// console.log(Object.values(usuarioFunction2))

/*
Iterando objetos com for:
*/
let usuarioFunction3 = {
    nome: "Felipe",
    idade: 26,
    cidade: "São Paulo",
    pais: "Brasil"
}
let props = Object.keys(usuarioFunction3)

for (let i = 0; i < props.length; i++) {
    console.log(props[i])                       //Imprime as chaves
    console.log(usuarioFunction3[props[i]])     //Imprime os valores de cada chave
}

//Iterando com for of:
for (let prop of props) {
    console.log(usuarioFunction3[prop])         //Imprime os valores de cada chave
}

//Iterando com for in (é o que vale mais a pena, é mais rápido):
// for (let x in usuarioFunction3) {
//     console.log(x, usuarioFunction3[x])
// }

//Método hasOwnProperty() - Serve para iterar apenas as propriedades que você mesmo definiu, não vai imprimir propriedades que venham por herança de alguma biblioteca (ou por qualquer outro imprevisto)
for (let x in usuarioFunction3) {
    if(usuarioFunction3.hasOwnProperty(x)) {    //Se a propriedade "x" foi definida dentro do objeto, e não herdada,
        console.log(x, usuarioFunction3[x])     //ele imprimirá o que está no console.log()
    }
}