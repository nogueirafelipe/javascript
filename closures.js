/*
Tira vantagem do lexical scope
Uma function criada dentro de outra, tem acesso às variáveis declaradas no escopo da function pai. Porém, o inverso não é válido, a function pai não tem acesso às variáveis declaradas no escopo da function filha.
*/
// function imprimeNome() {
//     let nome = "Felipe"
//     return function() {
//         return nome     //A variável "nome" foi criada no escopo anterior, mas a função filha consegue acessá-la
//     }
// }
// let fcn = imprimeNome()
// console.log(fcn())

// function imprimeIdade() {
//     return function() {
//         let idade = 26
//     }
    //return idade        //A variável "idade" foi criada no escopo interno, a função pai não tem acesso
// }
// let func = imprimeIdade()
// console.log(func())

//Funções privadas com closures
// function minhaBiblioteca() {
//     function aux(valor) {
//         return 10 + valor
//     }
//     return {
//         add5() {
//             return aux(5)
//         },
//         add7() {
//             return aux(7)
//         }
//     }
// }
// let biblioteca = minhaBiblioteca()
// console.log(biblioteca)
// console.log(biblioteca.add5())
// console.log(biblioteca.add7())

//Closures ajudam a evitar funções anônimas
//Funções anônimas atrapalham a leitura do código. Para entender o que uma função anônima faz, você precisa ler o bloco dela inteiro, já que ela não tem nome
//SetTimeout é tipo um "agendador". Depois de um tempo determinado, vai executar alguma coisa. Aceita alguns aparâmetros, mas existem dois mais importantes: 1º - a função que será executada, 2º - o tempo (é contado em milissegundos, por isso o 1000 no exemplo abaixo, 1000 milissegundos = 1 segundo)
function imprimeNomeCompleto(nome) {
    return function() {
        console.log(nome, "Nogueira")
    }
}

function inicializa() {
    let nome = "Felipe"
    setTimeout(imprimeNomeCompleto(nome), 1000)   //Ao invés de declarar uma função anônima como parâmetro do setTimeout, 
}                                           //é melhor declarar uma função antes e colocá-la como parâmetro, assim fica 
inicializa()                                //mais claro qual é o papel dela, porque vai ter um nome.
                                            //No entanto, é preciso ter cuidado com onde a variável a ser impressa será declarada, se for na função de baixo e o "console.log" estiver na função de cima, não vai funcionar, pois a variável foi criada no escopo de outra função(a função de cima não teria acesso a essa variável).
                                            //Uma forma de resolver seria passar a variável como parâmetro para a função que está sendo invocada, mas o setTimeout não funcionaria, por isso é preciso que a função invocada retorne uma outra função

//REVER ESSE FINAL!!!