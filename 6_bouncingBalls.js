function bouncingBall(h, bounce, window) {
    var result = -1;
    if ((h > 0) && (0 < bounce) && (bounce < 1) && (window < h)) {
        while (!(h < window)) {
            h *= bounce;
            result += 2;
            //console.log(h + ': ' + window + ': ' + result);
        }
    }
    return result;
}

console.log(bouncingBall(3, 0.66, 1.5)); //3
console.log(bouncingBall(30, 0.66, 1.5)); // 15;
console.log(bouncingBall(30, 0.75, 1.5)); // 21

/*
Expected: 3, instead got: '3 - 0.66 - 1.5'
Expected: 15, instead got: '30 - 0.66 - 1.5'
Expected: 21, instead got: '30 - 0.75 - 1.5'
Expected: 3, instead got: '30 - 0.4 - 10'
Expected: 3, instead got: '40 - 0.4 - 10'
Expected: -1, instead got: '10 - 0.6 - 10'
Expected: -1, instead got: '40 - 1 - 10'
Expected: -1, instead got: '-5 - 0.66 - 1.5'
Expected: -1, instead got: '5 - -1 - 1.5'
Expected: -1, instead got: '98 - 9 - 9.8'
Expected: 5, instead got: '83 - 0.13 - 0.83'
Expected: 33, instead got: '109 - 0.75 - 1.09'
Expected: 9, instead got: '35.5 - 0.57 - 3.5'
Expected: 9, instead got: '35.5 - 0.57 - 3.5'
Expected: 5, instead got: '21 - 0.35 - 2.1'
Expected: 9, instead got: '12 - 0.6 - 1.5'
Expected: -1, instead got: '7.5 - 0.75 - 7.5'
Expected: 7, instead got: '10.5 - 0.6 - 1.5'
Expected: -1, instead got: '98 - 9 - 9.8'
Unhandled rejection TestError: Expected: 3, instead got: '3 - 0.66 - 1.5'
Unhandled rejection TestError: Expected: 3, instead got: '3 - 0.66 - 1.5' */