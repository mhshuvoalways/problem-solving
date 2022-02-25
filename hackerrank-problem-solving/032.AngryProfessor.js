// attend = 0 and smaller than small
// not attend = bigger than 0

function angryProfessor(k, a) {
    let attend = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            attend++;
        }
    }
    return attend >= k ? 'NO' : 'YES'
}

// angryProfessor(3, [-2, -1, 0, 1, 2]) //YES
// angryProfessor(3, [-1, -3, 4, 2]) //YES
// angryProfessor(2, [0, -1, 2, 1]) //NO