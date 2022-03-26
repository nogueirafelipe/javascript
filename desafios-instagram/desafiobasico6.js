//1ª maneira
// var num = 5

// function teste(num) {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(teste(num - 2))


//2ª maneira
var num = 5

function teste(num) {
    return num % 2 == 0 ? true : false
}

console.log(teste(num - 2))