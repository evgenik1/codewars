function openOrSenior(data) {
    var arrOpenOrSenior = [];
    for (var i=0; i < data.length; i++) {
        if ((data[i][0] >= 55) && (data[i][1] > 7)) {
            arrOpenOrSenior.push('Senior');
        } else {
            arrOpenOrSenior.push('Open');
        }
    }
    return arrOpenOrSenior;
  
}

//console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));