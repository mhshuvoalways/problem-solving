function permutationEquation(p) {
    for (var x = 1, result = []; x <= p.length; x++) {
        result.push(p.findIndex(el => el == (p.findIndex(el => el == x) + 1)) + 1);
    }
    return result;
}

// permutationEquation([5, 2, 1, 3, 4]) //4,2,5,1,3
permutationEquation([2, 3, 1]) //2,3,1