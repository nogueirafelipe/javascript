// function myFunction(a, b) {
//     return a[b] ? true : false
// }
// console.log(myFunction({a: 1, b: 2, c: 3}, "a"))
// console.log(myFunction({a: 1, b: 2, c: 3}, 1))
// console.log(myFunction({a: 1, b: 2, c: 3}, "b"))

function myFunction(a,b){
    return Object.keys(a).includes(b)
}
console.log(myFunction({a: 1, b: 2, c: 3}, "b"))