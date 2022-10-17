// start
// arr sort 
// loop 
// return newArr
// end

var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
    var matchingPairs = 0;
    var newArr = ar.sort();
    for (var i = 0; i < n; i++) {
        if (newArr[i] === newArr[i + 1]) {
            matchingPairs++;
            i++;
        }
    }
    return matchingPairs;
}
sockMerchant(9, ar)