var alice = [17, 28, 30]
var bob = [99, 16, 8]

function compareTriplets(a, b) {
    var alice = 0;
    var bob = 0;
    for (var i = 0; i < a.length; i++) {
        console.log(a[i] > b[i]);
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
}

compareTriplets(alice, bob)