const data = (a, b) => {
    a += ""
    b += ""
    return a == b
}
console.log(data(
    new Date("2022/04/06 16:53:00"),
    new Date("2022/04/06 16:53:00")
))
//RESOLVIDO