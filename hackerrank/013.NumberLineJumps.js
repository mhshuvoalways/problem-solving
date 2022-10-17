function kangaroo(x1, v1, x2, v2) {
    var isCompleted = false;
    for (var i = 0; i < 10000; i++) {
        x1 += v1;
        x2 += v2;
        if (x1 == x2) {
            isCompleted = true;
            break;
        }
    }
    var res = isCompleted ? 'YES' : 'NO';
    return res;
}
var res = kangaroo(0, 2, 5, 3) 
console.log(res) //NO