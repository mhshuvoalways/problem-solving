// start
// input array of an integers
// check positive or negative numbers with loop
// return positive and negative numbers
// end

function plusMinus(arr) {
    var positive = 0, negative = 0, zeros = 0;
    var proportions = {
        proportionofPositive: 0,
        proportionofNegative: 0,
        proportionofZero: 0
    };

    for (var i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) == 1) {
            positive++;
        } else if (Math.sign(arr[i]) == -1) {
            negative++;
        } else if (Math.sign(arr[i]) == 0) {
            zeros++;
        };
    };

    proportions.proportionofPositive = (positive / arr.length);
    proportions.proportionofNegative = (negative / arr.length);
    proportions.proportionofZero = (zeros / arr.length);

    Object.values(proportions).forEach(function (proportion) {
        console.log(proportion.toFixed(6))
    });
    return;
};

plusMinus([-4, 3, -9, 0, 4, 1])
// plusMinus([1, 2, 3, -1, -2, -3, 0, 0])