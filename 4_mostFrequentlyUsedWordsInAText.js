function topThreeWords(text) {
    var allTextArray = [];
    var allTextArray = text.toLowerCase().replace(/[^0-9a-zA-ZА-Яа-яЁё'\s]/g, '').trim().split(' ').sort();

    var result = allTextArray.reduce(function (acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    var sortable = [];

    for (var key in result) {
        sortable.push([key, result[key]]);
        console.log([key, result[key]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });

    console.log(allTextArray);
    console.log(result);
    console.log(sortable);

    resArray = [];

    if (sortable.length < 3) {
        for (var i = 0; i < sortable.length; i++) { resArray.push(sortable[i][0]); }
    } else {
        for (var i = 0; i < 3; i++) { resArray.push(sortable[i][0]); }
    }
    console.log('resArray: ' + resArray);
    return resArray;
}

topThreeWords("a a a  b  c c  d d d d  e e e e e");
topThreeWords("In a village of La Manch'a, the name o'f which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.");
topThreeWords("  '  ");
topThreeWords("  , e   .. ");
