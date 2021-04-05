// start
// input multidimensional array
// loop 
// sum and difference
// return
// end

var arr = [
    [1, 2, 3, 4], //length 1
    [4, 5, 6, 3], //length 2
    [7, 8, 9, 2], //length 3
    [5, 8, 9, 8], //length 4
];

console.log(arr[arr.length - 1])
function diagonalDifference(arr) {
    var leftToRight = 0;
    var rightToLeft = 0;
    console.log(arr[arr.length - 1 -2])

    for (var i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i];
        console.log(arr[i])
        rightToLeft += arr[arr.length - 1 - i][i]
        console.log(arr[arr.length - 1-i][i])
    }
    console.log(Math.abs(leftToRight - rightToLeft))
}

diagonalDifference(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr[arr.length - 1 -5])