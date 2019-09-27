/* 

1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.
The number of steps to get the result is 1.
2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.
3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.
The number of steps to get the result is 1.
4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101.
 */

function seven(m) {
    let lastNumber = m;
    let countOfSteps = 0;
    console.log(lastNumber);
    while (lastNumber > 99)  {
        lastNumber = Math.floor(lastNumber / 10) - 2 * (lastNumber % 10);
        countOfSteps++;
        console.log(lastNumber + ' ; ' + countOfSteps);
    }
    return [lastNumber, countOfSteps];
}

console.log(seven(1488805));
console.log(seven(1318403));

console.log(seven(1338275));
console.log(seven(13816)); //[-5, 3]
