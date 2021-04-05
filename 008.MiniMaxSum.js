function miniMaxSum(arr) {
    var sortArray = arr.sort();
    var res1 = 0;
    var res2 = sortArray[sortArray.length - 1] - sortArray[0];
    for (var i = 0; i < sortArray.length - 1; i++) {
        res1 += sortArray[i];
        res2 += sortArray[i];
    }
    console.log(res1, res2);
}
// miniMaxSum([1, 2, 3, 4, 5]) //10, 14
// miniMaxSum([1, 3, 5, 7, 9]) //16, 24
miniMaxSum([7, 69, 2, 221, 8974]) //299 9271