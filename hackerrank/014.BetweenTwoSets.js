function getTotalX(a, b) {
    var result = 0;
    for (var i = 1; i <= 100; i++) {
        console.log(i)
        if (a.every(el => i % el == 0) && b.every(el => el % i == 0)) {
            console.log(i)
            result++
        }
    }
    return result;
}

var show = getTotalX([2, 6], [24, 36]) //2
// var show = getTotalX([2, 4], [16, 32, 96]) // 3
// var show = getTotalX([3, 4], [24, 48]) // 2
console.log(show)
