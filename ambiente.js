function foo(i) {
    if (i >= 0) {
        console.log(`begin: ${i}`)
        foo(i - 1)
        console.log(`end: ${i}`)
    }
}
foo(3)