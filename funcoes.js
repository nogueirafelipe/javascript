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
function fora() {
    var x = 10
    function dentro(x) {
        return x
    }
    return dentro
}
result = fora()(20)
console.log(result)
/*
O conflito de nome acontece na declaração return x e está entre o parâmetrox de dentro e a variável x de fora. A cadeia de escopo aqui é {dentro, fora, objeto global}. Por isso o x de dentro tem precedência sobre o x de fora, e 20 (x de dentro) é retornado em vex de 10 (x de fora)
*/