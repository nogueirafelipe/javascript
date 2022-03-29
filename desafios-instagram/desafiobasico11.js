function myFunction(a, b) {
    return [...new Set(a.concat(b))]
}
console.log(myFunction([1, 2, "a", "b"], ["a", 2, 9, 9, "b", 0]))