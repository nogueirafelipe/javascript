function teste(a) {
    if (a.length < 3) {
        return []
    } else {
        a.splice(0, 3) //Remove 3 elementos à partir do índice 0 - CUIDADO: Retorna os elementos removidos, por isso foi preciso colocar -> return a <-
        return a
    }
}
console.log(teste([1, 2, 3, 4, 5, 6]))
console.log(teste([1, 2]))