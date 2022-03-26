function teste(fullname, flag = "") {
    let array = fullname.split(" ")
    if (flag === "firstname") {
        return array[0]
    } else if (flag === "lastname") {
        return array[array.length - 1]
    } else if (flag.length == 0 || fullname == array[0]) {
        return fullname
    }
}
console.log(teste("João da Silva", "firstname"))
console.log(teste("João da Silva", "lastname"))
console.log(teste("João"))
//Não consegui resolver tudo