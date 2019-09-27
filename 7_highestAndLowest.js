function highAndLow(numbers) {

    var arrNumbers = numbers.split(' ');
    var min = Number(arrNumbers[0]);
    var max = Number(arrNumbers[0]);

    for (var i = 1; i < arrNumbers.length; i++) {
        if (Number(arrNumbers[i]) < min) {
            min = Number(arrNumbers[i]);

        } else if (Number(arrNumbers[i]) > max) {
            max = Number(arrNumbers[i]);
        }
    }
    return max + ' ' + min;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));