function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var applesLand = [];
    var orangesLand = [];
    var applesInRange = 0;
    var orangesInRange = 0;
    apples.forEach(function (apple) {
        applesLand.push(apple + a);
    })
    oranges.forEach(function (orange) {
        orangesLand.push(orange + b);
    })
    applesLand.forEach(function (al) {
        if (al >= s && al <= t) {
            applesInRange++;
        }
    })
    orangesLand.forEach(function (ol) {
        if (ol >= s && ol <= t) {
            orangesInRange++;
        }
    })
    console.log(applesInRange);
    console.log(orangesInRange);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
