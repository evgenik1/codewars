function initializeNames(name) {
    var newArr = name.split(' ');
    console.log(newArr);
    var name2 = '';
    if (newArr.length > 2) {
        name2 += newArr[0] + ' ';
        for (var i = 1; i < newArr.length - 1; i++) {
            name2 += newArr[i].slice(0, 1) + '. ';
        }
        name2 += newArr[newArr.length - 1];
        return name2;
    }
    return name;
}

console.log(initializeNames('Jack Ryan'));
console.log(initializeNames('Lois Mary Lane'));
console.log(initializeNames('Dimitri'));
console.log(initializeNames('Alice Betty Catherine Davis'));