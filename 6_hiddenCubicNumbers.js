function isCubic(s) {
    let sum = 0;
    let sStr = s.toString();
    for (let i = 0; i < sStr.length; i++) {
        sum += Math.pow(Number(sStr[i]), 3);
    }
    return (s == sum);
}

// return array of numbers (max 3 digits)
// добавляются только элементы isCubic
function TextTo3DigitsArray(s) {
    var s = s.toString();
    var array3Digits = [];
    for (i = 0; i < s.length; i += 3) {
        //array3Digits.push(Number(s.slice(i, i + 3)));
        if (isCubic(Number(s.slice(i, i + 3)))) {
            array3Digits.push(Number(s.slice(i, i + 3)));
        }
    }
    //console.log(array3Digits+' LENGTH: ' + array3Digits.length); 
    return array3Digits;
}


function isSumOfCubes(s) {
    var luckyArray = [];
    console.log('s: ' + s);
    var allDigitsArray = s.replace(/[^0-9\s]/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
    console.log('allDigitsArray: ' + allDigitsArray);

    for (let i = 0; i < allDigitsArray.length; i++) {
        console.log('allDigitsArray[' + i + ']: ' + allDigitsArray[i]);
        // Элемент массива состоит из 3 снаков и меньше
        if (allDigitsArray[i].length < 3) {
            if (isCubic(allDigitsArray[i])) {
                luckyArray.push(allDigitsArray[i]);
            }
            // Элемент массива состоит из более 3 знаков
        } else { //allDigitsArray[i].length >= 3
            let arr = TextTo3DigitsArray(allDigitsArray[i]);
            if (arr.length > 0) {
                for (j = 0; j < arr.length; j++) {
                    luckyArray.push(arr[j]);
                }
            }
        }

    }
    if (luckyArray.length > 0) {
        let returnText = '';
        sum = 0;
        for (let i = 0; i < luckyArray.length; i++) {
            returnText += luckyArray[i] + ' ';
            sum += Number(luckyArray[i]);
        }
        return returnText + sum + ' Lucky';
    }
    return "Unlucky";
}


//console.log(isSumOfCubes('73abcabc480abcabc439LuckyOnce upon430Lucky'));
console.log(isSumOfCubes('& 387xyz153169 & 458...15336?/!423xyz371221abc474...407223Lucky488?/!370407'));

/*

console.log('123 - ' + isCubic(123));
console.log('153 - ' + isCubic(153));
console.log('370 - ' + isCubic(370));
console.log('371 - ' + isCubic(371));
console.log('407 - ' + isCubic(407));

/*

console.log('TextTo3Digits: ' + TextTo3DigitsArray(1234567890) + ' LENGTH: ' + TextTo3DigitsArray(1234567890).length);
console.log('TextTo3Digits: ' + TextTo3DigitsArray(1));
console.log('TextTo3Digits: ' + TextTo3DigitsArray(12));
console.log('TextTo3Digits: ' + TextTo3DigitsArray(153));
console.log('TextTo3Digits: ' + TextTo3DigitsArray(371));
console.log('TextTo3Digits: ' + TextTo3DigitsArray(407));
console.log('TextTo3Digits: ' + TextTo3DigitsArray(123456));
console.log('TextTo3Digits: ' + TextTo3DigitsArray(1234567));
console.log('TextTo3Digits: ' + TextTo3DigitsArray(12345678));
console.log('TextTo3Digits: ' + TextTo3DigitsArray(123456789));
console.log('TextTo3Digits: ' + TextTo3DigitsArray('01000001234567890'));



73abcabc480abcabc439LuckyOnce upon430Lucky
xyz96abcLucky35abcLucky411a timexyz223... & 235Lucky
& 387xyz153169 & 458...15336?/!423xyz371221abc474...407223Lucky488?/!370407
 */

