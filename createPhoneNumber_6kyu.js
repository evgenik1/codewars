//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");


function createPhoneNumber(numbers){
    phoneNumber = "(" + numbers.slice(0, 3).join('')  + ") " + numbers.slice(3,6).join('') + "-" + numbers.slice(6,10).join('');
    console.log(phoneNumber);
    return phoneNumber;
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


