function birthday(s, d, m) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        console.log(s.every(el => el))
        if (s.slice(i, i + m).reduce((x, y) => x + y) == d) {
            result++;
        }
    }
    console.log(result)
}

birthday([1, 2, 1, 3, 2], 3, 2) // here 2 is square

// var arr = [1, 2, 1, 3, 2]
// console.log(arr.slice(1, 5))