function sod(n) {
    var sum = 0;
    
    for (var i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sod(4));

function newFunction(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += sod(i);
    }
    return sum;
}

console.log(newFunction(10000));