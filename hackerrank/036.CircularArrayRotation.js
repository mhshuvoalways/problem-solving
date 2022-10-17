function circularArrayRotation(a, k, queries) {
    let querie = [];
    for (let i = 0; i < k; i++) {
        querie.push(a);
        querie[0].unshift(a[a.length - 1]);
        querie[0].pop();
    }
    return queries.map(q => {
        console.log(querie[0][q]);
    })
}

circularArrayRotation([3, 4, 5], 2, [1, 2]) //5, 3