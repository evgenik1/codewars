//"A" -- "T" *  "C" -- "G".
function DNAStrand(dna) {

    var newDna = '';
    console.log(dna.length);
    for (i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'T':
                newDna += 'A';
                break;
            case 'A':
                newDna += 'T';
                break;
            case 'C':
                newDna += 'G';
                break;
            case 'G':
                newDna += 'C';
                break;
            default:
                newDna += dna[i];
        }
    }
    return newDna;
}

console.log(DNAStrand('AAAATTTCCCGGG'));