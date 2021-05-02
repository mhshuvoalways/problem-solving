function jumpingOnClouds(c, k) {
    var i = 0, n = c.length, power = 100;
    do {
        var newI = (i + k) % n;
        if (c[newI] == 0) {
            power = power - 1;
        } else if (c[newI] == 1) {
            power = power - 1 - 2;
        }
        i = newI;
    } while (i != 0);
    // return power;
    console.log(power)
}

jumpingOnClouds([0, 0, 1, 0], 2) //96
jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2) //92
jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3) //80