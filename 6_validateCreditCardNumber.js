function validate(n) {

    var arrOfDigits = n.toString().split('');
    var i = 0;
    var sum = 0;
    console.log(arrOfDigits);

    while (i < arrOfDigits.length) {
        if (i % 2 != 0) {
            arrOfDigits[arrOfDigits.length - 1 - i] = arrOfDigits[arrOfDigits.length - 1 - i] * 2;
            console.log('arrOfDigits[arrOfDigits.length - 1 - i :' + arrOfDigits[arrOfDigits.length - 1 - i]);
            if (arrOfDigits[arrOfDigits.length - 1 - i] > 9) {

                arrOfDigits[arrOfDigits.length - 1 - i] = arrOfDigits[arrOfDigits.length - 1 - i] - 9;
            }
        }
        sum += Number(arrOfDigits[arrOfDigits.length - 1 - i]);
        i++;
    }

    console.log('arrOfDigits ' + arrOfDigits + '| sum: ' + sum);

    if (sum % 10 == 0) {
        return true
    } else {
        return false
    };

}

/* console.log(validate(1));
console.log(validate(13));
console.log(validate(134));
console.log(validate(2121));
console.log(validate(1230));
console.log(validate(12301));
 */console.log(validate(123012));
console.log(validate(79927398713));