/*
ESCOPOS
Um escopo em JavaScript define a visibilidade das variáveis e funções. Dependendo de onde elas forem declaradas, elas podem ser visíveis ou não em outros lugares
*/
/*
ESCOPO GLOBAL
Tudo que é declarado no arquivo principal. Será acessível a toda a aplicação
*/
var nome = "Felipe "
console.log(nome)

function imprimeNome() {
    console.log(nome)
}
imprimeNome()

/*
ESCOPO LOCAL
As variáveis e funções declaradas nesse tipo de escopo só serão acessíveis a ele.
(Escopo de uma função, por exemplo)
*/
function imprimeIdade() {
    var idade = 26
    console.log(idade)
}
imprimeIdade()
//console.log(idade)  //Não vai funcionar!

//É possível declarar variáveis sem a palavra reservada "var", mas essa variável, mesmo estando no escopo de uma função, será enxergada fora. Será como se ela tivesse sido declarada no escopo global.
function imrimePais() {
    pais = "Brasil"
    console.log(pais)
}
imrimePais()
console.log(pais)   //Vai funcionar!

/*
ESCOPO DINÂMICO
Ao tentar imprimir um valor de por exemplo, uma variável, ele não sabe qual é esse valor até que a variável seja realmente executada. Ao rodar a aplicação, a engine do javascript vai descobrir qual é o valor daquela variável e vai imprimir.
O valor da variável vai mudar de acordo com quem a está chamando.
O maior exemplo de escopo dinâmico é a palavra reservada "this"
*/
function imprimeThis() {
    console.log(this)
}
function imprimeMensagem() {
    imprimeThis.call({msg: "Sou um objeto!"})   //this vale um objeto
}
function imprimeMensagem2() {
    imprimeThis.call(["Sou um array!"])         //this vale um array
}
imprimeMensagem()
imprimeMensagem2()
imprimeThis()

//ESCOPO LEXICAL
//Ao tentar imprimir/usar o valor de uma variável, ele já sabe qual é esse valor, porque ele já foi definido no escopo ou no escopo pai
function usuario() {
    var nome = "Felipe"
    return function() {
        var sobrenome = "Nogueira"
        console.log(nome, sobrenome)
    }
}
var user = usuario()    //Tem que guardar numa variável, porque a função está retornando algo
user()

//ESCOPO DE BLOCO
//Ao declarar condicionais ou loops são criados escopos de blocos dentro das chaves {}, e as variáveis criadas ali serão acessíveis só ali
//Se essas variáveis forem criadas com a palavra reservada "var", elas não respeitarão o escopo de bloco. Para isso existe a palavra reservada "let"
if (true) {
    var rua = "Geracina"
    let num = 116
    console.log(rua)
    console.log(num)
}
console.log(rua)
//console.log(num)    //Não vai funcionar!

//Diferente do "var", não é possível redeclarar uma variável "let". Porém, é possível reatribuir outro valor.
let cidade = "São Paulo"
console.log(cidade)
cidade = "Rio de Janeiro"
console.log(cidade)

//Se as variáveis estiverem em BLOCOS DIFERENTES, é possível ter duas variáveis let com nomes iguais. É como se fossem duas variáveis completamente diferentes
{
    let cidade = "Belo Horizonte"
    console.log(cidade)
}
//Esse bloco solto foi usado somente para fins de demonstração, ISSO NÃO É UTILIZADO!