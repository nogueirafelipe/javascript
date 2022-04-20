/*
WHILE
Executa um código enquanto o teste for verdadeiro
*/
// let contador = 0
// while (contador < 6) {
//     console.log(contador)
//     contador++
// }

//While com break
//A palavra reservada break é usada para forçar a interrupção de um loop
// contador = 0
// while (contador < 6) {
//     if (contador === 3) {
//         break
//     }
//     console.log(contador)
//     contador++
// }

//Um exemplo de uso do loop while - EXERCÍCIO PING PONG
// contador = 0
// while (contador < 101) {
//     if (contador % 3 === 0 && contador % 5 === 0) {
//         console.log(`${contador} - PING PONG`)
//     } else if (contador % 3 === 0) {
//         console.log(`${contador} - PING`)
//     } else if (contador % 5 === 0) {
//         console.log(`${contador} - PONG`)
//     }
//     contador++
// }

/*
FOR
Começa com a inicialização, depois o teste e, por último, o incremento
*/
// for (let c = 0; c < 10; c++) {
//     console.log(c)
// }

//Iterando sobre arrays com for
// let numerosAleatorios = [3, 5, 8, 45, 16, 1, 32]
// for (let c = 0; c < numerosAleatorios.length; c++) {
//     console.log(`${c} - ${numerosAleatorios[c]}`)
// }

//Também é possível fazer decremento
// for (let n = numerosAleatorios.length - 1; n >= 0; n--) {
//     console.log(`${n} - ${numerosAleatorios[n]}`)
// }

//Não é necessário usar os três parâmetros dentro dos parênteses
// let i = 0
// for (; i < numerosAleatorios.length;) {
//     console.log(`Sem inicialização e sem incremento: ${numerosAleatorios[i]}`)
//     i++
// }

//Nem sempre é preciso ter um array ou números envolvidos, basta que seja uma expressão booleana
// let condicao = true
// for (let contador = 1; condicao; contador++) {
//     if (contador % 5 === 0) {
//         condicao = false
//     }
//     console.log(`Condição booleana simples: ${contador}`)
// }

//Assim como no while, o loop for também pode ser interrompido pela palavra reservada break
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break
//     }
//     console.log(`Utilizando break ${i}`)
// }

//Usando a palavra reservada continue
//Ele continua a fazer o loop, mas não executa o código
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log(`Utilizando continue`, i)
// }

//For of
//É um atalho para iterar arrays
//A diferença de for of para for in é que o for of retorna os valores do array, o for in retorna as chaves
// let numerosAleatorios = [3, 5, 8, 45, 16, 1, 32]
// for (let num of numerosAleatorios) {
//     console.log(num)
// }

//For dentro de outro for
//i vai valer 1 enquanto o loop de dentro (j) estiver rodando. Quando acabar, i passa a valer 2 e o loop interno vai rodar, e assim sucessivamente
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j % 2 === 0) {
//             continue
//         }
//         console.log(`i: ${i}, j: ${j}`)
//     }
// }

//Exercício ping pong com for
// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} - PING PONG`)
//     } else if (i % 3 === 0) {
//         console.log(`${i} - PING`)
//     } else if (i % 5 === 0) {
//         console.log(`${i} - PONG`)
//     }
// }