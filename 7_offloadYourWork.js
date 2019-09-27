function workNeeded(projectMinutes, freelancers) {
    //console.log(projectMinutes + '* ' + freelancers);
    var sumMin = 0;

    for (i = 0; i < freelancers.length; i++) {
        console.log(freelancers[i]);
        console.log(freelancers[i][0]); //good
        console.log(freelancers[i][1]); //good
        console.log(freelancers[i][0] + freelancers[i][1]); //good
        console.log(freelancers[i][0] * 60 + freelancers[i][1]); //good
        sumMin += freelancers[i][0] * 60 + freelancers[i][1];
        //console.log(Number(freelansers[i][0]));//* 60 + Number(freelansers[i][1]);
        //console.log(freelancers[i][1]);
        //sumMin += Number(freelansers[i][0])// * 60 + Number(freelansers[i][1]);
        //        console.log(freelansers[i][0]);
        //      console.log(freelansers[i][1]);

    }
    if (projectMinutes <= sumMin) {
        return 'Easy Money!';
    }
    //let x = Math.floor(sumMin);

    return 'I need to work ' + Math.floor((projectMinutes - sumMin) / 60) + ' hour(s) and ' + (projectMinutes - sumMin) % 60 + ' minute(s)';
    console.log(sumMin);

}