function staircase(n) {
    for (var i = 1; i <= n; i++) {
        console.log('#'.repeat(i).padStart(n))
    }
}
staircase(6)