// return array of numbers (max 3 digits)
function TextTo3DigitsArray(s) {
    var s = s.toString();
    var array3Digits = [];
    for (i = 0; i < s.length; i += 3) {
        array3Digits.push(Number(s.slice(i, i + 3)));
        /* if (isCubic(Number(s.slice(i, i + 3)))) {
            array3Digits.push(Number(s.slice(i, i + 3)));
        } */
    }
    return array3Digits;
}
