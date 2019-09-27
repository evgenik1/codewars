
function isDivisible(args) {
    var arr = [];

    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    for (var i = 1; i < arr.length; i++) {
        if ((arr[0] % arr[i]) != 0) {
            return false;
        }
    }
    return true;
}

console.log(isDivisible([100, 50, 25, 5, 1]));
console.log(isDivisible(8, 3, 4, 2, 5));



/*
 function isDivisible(args) {
    var arr = [];

    console.log('\n' + '----new----- ' + typeof (args));
    console.log(arguments.length);

    if (typeof (args) == "object") {

        console.log('typeof (args) == object ');

        for (var i = 0; i < arguments.length; i++) {
            arr.push(arguments[i]);
            console.log('arr[i] : ' + arr[i]);

        }
    } else {
        console.log('typeof (args) != object ');
        console.log('args: ' + args + arguments[2]);
        //        arr = args.slice;

    }

    console.log('typeof: ' + typeof (arr) + '/ arr: ' + arr);


    for (var i = 1; i < arr.length; i++) {
        console.log('arr[0] % arr[i] ' + (arr[0] % arr[i]) + 'arr[i]: ' + arr[i]);
        if ((arr[0] % arr[i]) != 0) {
            return false;
        }
    }
    return true;

}

console.log(isDivisible([100, 50, 25, 5, 1]));
console.log(isDivisible(8, 3, 4, 2, 5));
 */

