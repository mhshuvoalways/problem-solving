function hurdleRace(k, height) {
    let result = 0;
    const max = Math.max(...height);
    if (k < max) {
        result = max - k;
    }
    console.log(result);
}

// hurdleRace(1, [1, 2, 3, 3, 2]) // 2
// hurdleRace(4, [1, 6, 3, 5, 2]) // 2
hurdleRace(7, [2, 5, 4, 5, 2]) // 0