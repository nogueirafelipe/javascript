//1ª maneira
// function teste(text, flag = "start") {
//     if (flag == "start") {
//         return text.substr(0, 3)
//     } else if (flag == "end") {
//         return text.substr(-3)
//     } else if (text.length < 3) {
//         return text
//     }
// }
// console.log(teste("abcdefg", "start"))
// console.log(teste("abcdefg", "end"))
// console.log(teste("ab", "end"))
// console.log(teste("abcdefg"))

//2ª maneira
function teste(text, flag = "start") {
    if (text.length >= 3) {
        return flag === "start" ? text.slice(0, 3) : text.slice(-3)
    }
    return text
}
console.log(teste("abcdefg", "start"))
console.log(teste("abcdefg", "end"))
console.log(teste("ab", "end"))
console.log(teste("abcdefg"))