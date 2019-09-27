function divisors(integer) {
    var arr = [];
    for (var i = 2; i <= integer / 2; i++) {
        if (integer % i == 0) {
            arr.push(i);
        }
    }
    if (arr != '') {
        return arr;
    } else {
        return integer + ' is prime';
    }

};

for (j = 2; j < 2000; j++) {
    console.log(j+ ': ' +divisors(j));
}