function pickingNumbers(a) {
    let max = 0
    a.forEach(el => {
        const subArray = a.filter(subEl => el - subEl === 0 || el - subEl === 1);
        console.log(subArray)
        console.log(subArray.length)
        subArray.length > max ? max = subArray.length : null;
    });
    console.log(max);
}

pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]) //5
// pickingNumbers([4, 6, 5, 3, 3, 1]) //3
// pickingNumbers([1, 2, 2, 3, 1, 2]) //5