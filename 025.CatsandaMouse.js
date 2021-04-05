function catAndMouse(x, y, z) {
    let result = '';
    let a = Math.abs(z - y);
    let b = Math.abs(z - x);
    if (b < a) {
        result = 'Cat A';
    } else if (b > a) {
        result = 'Cat B';
    } else {
        result = 'Mouse C';
    }
    console.log(result);
};
// catAndMouse(2, 5, 3)
catAndMouse(2, 5, 4) //Cat B
catAndMouse(1, 2, 3) //Cat B
catAndMouse(1, 3, 2) //Mouse C