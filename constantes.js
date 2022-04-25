/*
CONST
É um tipo de variável declarada com a palavra reservada "const".
A diferença das constantes para as outras variáveis é o fato de seu valor não mudar. Uma constante não pode ser redeclarada, nem pode ter outro valor atribuído a ela.
*/
const anoNascimento = 1996
console.log(anoNascimento)

//Constantes têm escopo de bloco. Se for declarada no escopo de uma função, ela será visível para todo o escopo dessa função, mas não para o que estiver fora desse escopo, diferentemente das variáveis declaradas com "var".
if (true) {
    const nome = "Felipe"
    console.log(nome)
}
//console.log(nome) //Não vai funcionar!

//Constantes até podem ser redeclaradas, desde que estejam em escopos diferentes
const nome = "Naruto"
console.log(nome)   //A constante "nome" já existe no exemplo acima, mas está declarada no escopo do bloco if
                    //O javascript entende que são duas variáveis diferentes

//Constantes não aceitam reatribuição de seus valores, mas há uma peculiaridade. Se o valor da constante for um array ou um objeto, é possível adicionar valores ao array ou propriedades ao objeto.
const competencias = ["JavaScript", "Python", "PHP"]
console.log(competencias)

competencias.push("Java")
console.log(competencias)

competencias[1] = "C#"
console.log(competencias)

//Com objeto:
const usuario = {
    nome: "Felipe",
    idade: 26
}
console.log(usuario)

usuario.nome = "Francisco"
usuario.idade = 53
console.log(usuario)

usuario.cidade = "São Paulo"
console.log(usuario)