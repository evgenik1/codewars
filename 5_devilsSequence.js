function xn(n) {
    var a, b, c;
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1;
    }
    var sum = 0;
    xn_1 = 1;
    xn_2 = 0;

    for (var i = 2; i <= n; i++) {
        a = (xn_1 + xn_2) / 2;
        xn_2 = xn_1;
        xn_1 = a;
    }
    return a;

}

function countSixes(n) {
    var nStr = xn(n).toString();
    var sum = 0;
    for (var i = 2; i < nStr.length; i++) {
        if (nStr[i] != '6') {
            return sum;
        } else {
            sum += 1;
        }

    }
}
console.log(xn(1400));
console.log(countSixes(1400));