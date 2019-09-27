function nbYear(p0, percent, aug, p) {
   
    var nextYearPopulation = p0;
    var year = 0;
    do {
        nextYearPopulation = nextYearPopulation + Math.floor(nextYearPopulation * percent / 100) + aug;
        year++;
    } while (nextYearPopulation < p);

    console.log('year ', year);
    return year;
    
};

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));