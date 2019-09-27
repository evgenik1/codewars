/* Test.assertSimilar(sumConsecutives([1,4,4,4,0,4,3,3,1]),[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
Test.assertSimilar(sumConsecutives([1,1,7,7,3]),[2,14,3], "on list [1,1,7,7,3] you get ")
Test.assertSimilar(sumConsecutives([-5,-5,7,7,12,0]),[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
Test.assertSimilar(sumConsecutives([3,3,3,3,1]),[12, 1], "on list [3,3,3,3,1] you get " ) */

function sumConsecutives(s) {
    var sum = 0;
    var newArr = [];

    for (var i = 1; i < s.length + 1; i++) {
        sum += s[i - 1];
        if (!(s[i - 1] == s[i])) {
            newArr.push(sum);
            sum = 0;
        } 
    }
    return newArr;
}

let s = [1, 4, 4, 4, 0, 4, 3, 3, 1]; // [1,12,0,4,6,1]
console.log(sumConsecutives(s));
console.log(sumConsecutives([1, 1, 7, 7, 3]));
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]));