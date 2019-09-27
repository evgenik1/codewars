/* uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */
function iterableType(iterable) {
    if (typeof (iterable) == 'string') {
        return 'string';
    }
    if (Array.isArray(iterable)) {
        return 'array';
    }
    return 'other';
}

var uniqueInOrder = function (iterable) {
    var newArray = [];
    if (iterable == '' || iterable == []) {
        return [];
    }
    newArray.push(iterable[0]);
    var k = 0;
    for (var i = 1; i < iterable.length; i++) {
        if (iterable[i] != newArray[k]) {
            newArray.push(iterable[i]);
            k++;
        }
    }
    return newArray;
}


console.log(uniqueInOrder('ssdddfsdfsdf'));
uniqueInOrder([1, 21, 31, 51, 51]);