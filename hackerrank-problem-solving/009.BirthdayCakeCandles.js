// function birthdayCakeCandles(candles) {
//     candles.sort();
//     var tallest = 0;
//     for (var i = 0; i < candles.length; i++) {
//         if (candles[i] === candles[candles.length - 1]) { // Here is the problem
//             tallest++;
//         }
//     }
//     return tallest;
// }
// var res = birthdayCakeCandles([0, 0, 0, 0])
// console.log(res)



function birthdayCakeCandles(candles) {
    console.log(...candles)
    var max = Math.max(...candles);
    var tallest = 0;
    for (var i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            tallest++;
        }
    }
    return tallest;
}
var res = birthdayCakeCandles([3, 1, 2, 3])
console.log(res)