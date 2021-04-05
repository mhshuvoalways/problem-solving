function divisibleSumPairs(n, k, ar) {
    var result = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i , j)
            if (i < j && (ar[i] + ar[j]) % k == 0) {
                result++;
            }
        }

    }
    // return result;
    // console.log(result)
}

// divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]) // 5
divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]) // 3