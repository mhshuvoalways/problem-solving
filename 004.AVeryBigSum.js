function aVeryBigSum(ar) {
    var sumOfAr = 0;
    for (var i = 0; i < ar.length; i++) {
        sumOfAr = sumOfAr + ar[i];
    }
    return sumOfAr;
}
aVeryBigSum([2, 3, 5])