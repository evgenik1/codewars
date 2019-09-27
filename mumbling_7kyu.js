function accum(s) {

    var strAccum = '';
    console.log(s.length);

    for (i = 0; i < s.length; i++) {
        console.log(i);
        for (j = 0; j <= i; j++) {
            if (j == 0) {
                strAccum += s[i].toUpperCase() + '';
            } else {
                strAccum += s[i].toLowerCase() + '';
            }
        }
        if (i != s.length-1){
            strAccum += '-';
        } 
    }
    console.log(strAccum);
    return strAccum;
}

accum('hhfhfghf');
