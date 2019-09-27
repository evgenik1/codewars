function mostFrequentDays(year) {
    //  Week starts with Monday.
    var daysOfWeeks = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
        //10: 'Sunday',   
    }

    var d = new Date(year, 0, 1);
    var d2 = new Date(year, 0, 2);
    var arrayOfDays = [];

    //console.log(d.getDay());

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        if (daysOfWeeks[d.getDay()] == daysOfWeeks[0]) {
            arrayOfDays.push(daysOfWeeks[d2.getDay()]);
            arrayOfDays.push(daysOfWeeks[d.getDay()]);
        } else {
            arrayOfDays.push(daysOfWeeks[d.getDay()]);
            arrayOfDays.push(daysOfWeeks[d2.getDay()]);
        }
       
    } else {
        arrayOfDays.push(daysOfWeeks[d.getDay()]);
    }
    return arrayOfDays;
}

console.log(mostFrequentDays(2016));
console.log(mostFrequentDays(8600));
