function choose(n, k) {
    var total = 0;
    var top = 1;
    var bottom = 1;
    if (n < k) return 0;
    if (n > 2 * k) {
        for (var i = 1; i <= k; i++) {
            top = Math.floor(top * (n - k + i));
        }
        for (var j = 1; j <= k; j++) {
            bottom = Math.floor(bottom * j);
        }
    }
    else {
        for (var i = 1; i <= (n - k); i++) {
            top = Math.floor(top * (k + i));
        }
        for (var j = 1; j <= (n - k); j++) {
            bottom = Math.floor(bottom * j);
        }
    }
    return Math.floor(top / bottom);
}

console.log(choose(83, 72));