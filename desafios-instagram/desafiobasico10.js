function teste(a, order = "asc") {
    if (order == "asc") {
        return a.sort(function sortFunction(a, b) {
            return (a - b)
        })
    } else if (order == "desc") {
        return a.sort(function sortFunction(a, b) {
            return (b - a)
        })
    }
}


console.log(teste([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], "asc"))
console.log(teste([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "desc"))

//RESOLVIDO!!