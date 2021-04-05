function utopianTree(n) {
    let height = 1;
    for (let i = 0; i < n; i++) {
        switch (i % 2 > 0) {
            case true:
                height++;
                break;
            case false:
                height = height * 2;
                break;
        }
    }
    console.log(height);
}
utopianTree(3)