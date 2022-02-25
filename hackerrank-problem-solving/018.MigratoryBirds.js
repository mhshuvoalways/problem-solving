function migratoryBirds(arr) {
    arr.sort()
    let ans = arr[0], counter = 0, max = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] === arr[i - 1] ? counter++ : counter = 0;
        if (counter > max) {
            ans = arr[i]
            max = counter
        }
    }
    console.log(ans)
}

// migratoryBirds([1, 1, 2, 2, 3,]) // 1
// migratoryBirds([1, 4, 4, 4, 5, 3]) // 4
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]) // 3