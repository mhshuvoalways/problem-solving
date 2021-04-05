function getMoneySpent(keyboards, drives, b) {
    let isValid = [];
    keyboards.forEach(k => {
        drives.forEach(d => {
            (k + d) <= b ? isValid.push(k + d) : null;
        })
    })
    console.log(isValid.length == 0 ? -1 : Math.max(...isValid));
}

// getMoneySpent([], [43], 0)
getMoneySpent([40, 50, 60], [5, 8, 12], 58) //58
// getMoneySpent([3, 1], [5, 2, 8], 10) //9
// getMoneySpent([4], [5], 5) //-1