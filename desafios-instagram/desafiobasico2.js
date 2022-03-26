function teste(a) {
    return typeof a
}
console.log(teste("5"))
console.log(teste(1))
console.log(teste(true))
console.log(teste([]))
console.log(teste())

//O operador typeof não precisa de parênteses