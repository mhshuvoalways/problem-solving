// start
// input 
// loop
// return jumps
// end

function jumpingOnClouds(c) {
    var jumps = -1;
    for (var i = 0; i < c.length;) {
        if (c[i + 2] === 0) {
            i = i + 2;
        } else {
            i = i + 1;
        }
        jumps++;
    }
    return jumps;
}

jumpingOnClouds([0, 0, 0, 0, 1, 0]) //3
jumpingOnClouds([0, 0, 0, 1, 0, 0]) //3
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]) //4