//narcissistic( 7 ), true
// 1634 (4 digits):  1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634


function narcissistic(value) {
    // Code me to return true or false
    var strLength = value.toString().length;
    var sum = 0;
    for (var i = 0; i < strLength; i++) {
        sum += Math.pow(+(value.toString()[i]), strLength);

    }
    console.log(strLength);
    console.log(sum);
    if (sum == value) {
        return true;
    } else {
        return false;
    }
}

//console.log(narcissistic(1634));