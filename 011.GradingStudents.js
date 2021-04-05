// if 3,8 = 2 else 4,9 = 1

function gradingStudents(grades) {
    var finalGrade = [];
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] > 37) {
            var string = grades[i].toString();
            if (string[1] === '3' || string[1] === '8') {
                finalGrade.push(grades[i] + 2);
            } else if (string[1] === '4' || string[1] === '9') {
                finalGrade.push(grades[i] + 1);
            } else {
                finalGrade.push(grades[i]);
            }
        } else {
            finalGrade.push(grades[i]);
        }
    }
    return finalGrade;
}

var res = gradingStudents([73, 68, 39, 33])
console.log(res)