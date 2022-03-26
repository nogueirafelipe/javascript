//1ª maneira
// function teste(a, b, c, d, e, f) {
//     var soma = a + b
//     var sub = soma - c
//     var mult = sub * d
//     var divi = mult / e
//     var res = divi ** f
//     return res
// }
// console.log(teste(6, 5, 4, 3, 2, 1))

//2ª maneira
function teste(a, b, c, d, e, f) {
    return (((a + b) - c) * d / e) ** f
}
console.log(teste(6, 5, 4, 3, 2, 1))

//Na ordem das operações, aquelas de mesmo nível são feitas da esquerda para a direita (por exemplo: *d / e)