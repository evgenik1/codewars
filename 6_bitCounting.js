var countBits = function (n) {
    return n.toString(n).split('1').length - 1;

    n.toString(2)
};

console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));

/*
Test.assertEquals(countBits(0), 0);
Test.assertEquals(countBits(4), 1);
Test.assertEquals(countBits(7), 3);
Test.assertEquals(countBits(9), 2);
Test.assertEquals(countBits(10), 2);
*/