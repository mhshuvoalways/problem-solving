function beautifulDays(i, j, k) {
    let beautifulDay = 0;
    for (let a = i; a <= j; a++) {
        let reverse = parseInt(a.toString().split('').reverse().join(''));
        let result = a - reverse;
        if (parseInt(result / k) === result / k) {
            beautifulDay++;
        }
    }
    console.log(beautifulDay);
}

beautifulDays(20, 23, 6);