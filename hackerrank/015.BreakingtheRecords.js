function breakingRecords(scores) {
    var most = [scores[0]];
    var less = [scores[0]];
    var mostPoint = 0;
    var lessPoint = 0;
    for (var i of scores) {
        if (most < i) {
            most = i;
            mostPoint++;
            console.log(most)
        } else if (less > i) {
            less = i;
            lessPoint++;
        }
    }
    console.log(mostPoint, lessPoint)
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]) // 2, 4
// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]) // 4, 0