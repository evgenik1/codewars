function countChar(string, char) {
    var position = 0;
    var count = 0;
    string = string.toLowerCase();
    char = char.toLowerCase();
    while (true) {
        var foundPos = string.indexOf(char, position);
        if (foundPos == -1) break;
        count++;
        position = foundPos + 1;
    }
    return count;
}
console.log(countChar('fizzbuzz', 'z'));