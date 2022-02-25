function pageCount(n, p) {
    let result = 0;
    let half = n / 2;
    if (n % 2 == 0) {
        if (half == p) {
            result = Math.ceil((p - 1) / 2);
        } else if (half < p) {
            result = Math.round((n - p) / 2);
        } else if (half > p) {
            result = Math.ceil((p - 1) / 2);
        }
    } else if ((n - 1) % 2 == 0) {
        if (half < p) {
            result = Math.floor((n - p) / 2);
        } else if (half > p) {
            result = Math.ceil((p - 1) / 2);
        }
    }
    console.log(result);
}

pageCount(10, 10)
pageCount(6, 2) //1
pageCount(5, 4) //0
pageCount(5, 3) //1