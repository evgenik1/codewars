function squareDigits(num) {

    var squreEveryDigit = '';
    var numString = num.toString();

    for (var i = 0; i < numString.length; i++) {
        squreEveryDigit += (Number(numString[i]) * Number(numString[i])) + '';

    }
    console.log('squreEveryDigit ' + squreEveryDigit);

    return squreEveryDigit;

};

squareDigits(25);
