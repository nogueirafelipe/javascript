let num = [5, 8, 2, 9, 3]
num[5] = 7
num.push(6)
num.sort()
/*for (let pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])
}*/
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
