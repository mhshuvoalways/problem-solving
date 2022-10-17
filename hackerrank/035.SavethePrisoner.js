function saveThePrisoner(n, m, s) {
    let result = 0
    if (((m % n) + (s - 1)) % n == 0) {
        result = n
    } else {
        result = ((m % n) + (s - 1)) % n
    }
    console.log(result)
}

// saveThePrisoner(4, 6, 2) //3
// saveThePrisoner(7, 19, 2) //6
saveThePrisoner(3, 7, 3) //3
// saveThePrisoner(5, 2, 2) //3