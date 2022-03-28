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

function alpha(a, order = "asc") {
    if (order == "asc") {
        return a.sort()
    } else if (order == "desc") {
        return a.sort(function funcaoSort(a, b) {
            if (a > b) {
                return -1
            } else if (a < b) {
                return 1
            }
            return 0
        })
    }
}


// console.log(teste([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], "asc"))
// console.log(teste([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "desc"))

console.log(alpha(["macaco", "galinha", "cavalo", "cabra", "zebra", "hipopótamo"], "asc"))
console.log(alpha(["macaco", "galinha", "cavalo", "cabra", "zebra", "hipopótamo"], "desc"))
console.log(alpha(["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"], "asc"))
console.log(alpha(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'], "desc"))

//RESOLVIDO!!