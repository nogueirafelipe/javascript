/*
HOISTING
Ao criar um código em javascript, a engine da linguagem, ao ler o código, faz algumas modificações na ordem desse código. Uma delas é mover as declarações de variáveis e funções para o topo do escopo do qual elas pertencem.
*/
console.log(nome) 
var nome = "Felipe"         //A engine do javascript vai jogar a variável declarada com "var" para antes do console.log e
                            //definir o valor dessa variável para undefined, mesmo que a variável já tenha um valor
                            //Isso acontece porque a variável é dividida em dois pedaços: a declaraçao (var nome) e a atribuição de valor ("Felipe")
                            //A engine só vai jogar para cima a declaração, o valor vai continuar na mesma
/*
Vai ficar assim:
var nome
console.log(nome)
nome = "Felipe"
*/
//OBS.: Não é recomendado fazer hoisting em variáveis. Não há benefício a ser tirado disso.

/*
Hoisting em let e const
*/
//console.log(ddd)  //NÃO VAI FUNCIONAR!
let ddd = 11        //Diferentemente das variáveis declaradas com "var", as declaradas com "let" e "const" não vão sequer
                    //ser içadas para o topo do escopo
                    //A engine está enxergando a variável ddd, mas não é possível acessá-la antes da declaração
                    //Esse erro é conhecido como Temporal Dead Zone. É o gap entre a utilização da variável e a declaração dela

/*
Hoisting em funções
Existe uma diferença entre function expressions e function declarations
As function expressions são aquelas que são armazenadas em variáveis. Vai dar erro ou undefined ao tenar usá-las antes de declará-las.
Já as function declarations são as funções declaradas de forma tradicional. Vai funcionar normalmente.
*/
console.log(soma(1, 1))
function soma(a, b) {
    return a + b
}

/*
Hoisting no escopo de uma função
Vai dar erro ou undefined. É a mesma regra das variáveis.
*/
function testaHoisting() {
    console.log("testaHoisting", altura)
    var altura = 1.82
}
testaHoisting()

/*
Desvantagens:
Tem quem recomende não usar hoisting, porque pode atrapalhar na leitura do código, por exemplo, uma função é executada no topo do código e é preciso descer o código inteiro para descobrir o que ela faz.
*/

/*
Vantagens
Às vezes pode ajudar a entender o papel de uma função um pouco mais rápido. Por exemplo, o objetivo da função calcula() é retornar a função geraResultado(). Da maneira tradicional, esse return estaria no final da função, mas no começo ele ajuda a entender mais rápido o que essa função faz. Isso é chamado de código executável.
*/
function calcula() {
    return geraResultado()

    function soma(a, b) {
        return a + b
    }

    function geraResultado() {
        return soma(10, 5) / 3
    }
}
console.log(calcula())