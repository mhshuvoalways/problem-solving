// start
// input step path
// loop
// condition
// return valleys
// end 

function countingValleys(steps, path) {
    var arrayPath = path.split('');
    var valleys = 0;
    var positions = 0;
    for (var i = 0; i < steps; i++) {
        if (arrayPath[i] === 'U') {
            positions++;
        } else if (arrayPath[i] === 'D') {
            positions--;
        }
        if (arrayPath[i] === 'U' && positions === 0) {
            valleys++;
        }
    }
    return valleys;
}
countingValleys(12, 'DDUUDDUDUUUD')