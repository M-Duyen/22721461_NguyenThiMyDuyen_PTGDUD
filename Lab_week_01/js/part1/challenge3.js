let dol_1 = 96
let dol_2 = 108
let dol_3 = 89

let koa_1 = 88
let koa_2 = 91
let koa_3 = 110

const calculateAvg = (score1, score2, score3) => ((score1 + score2 + score3) / 3).toFixed(3);

const comScore = (dol_avg, koa_avg) => {
    if (dol_avg > koa_avg && dol_avg >= 100) {
        console.log(`Dolphins win (${dol_avg} vs ${koa_avg})`);
    } else if (koa_avg > dol_avg && koa_avg >= 100) {
        console.log(`Koalas win (${koa_avg} vs ${dol_avg})`);
    } else if (dol_avg === koa_avg && dol_avg >= 100 && koa_avg >= 100) {
        console.log(`It's a draw (${dol_avg} vs ${koa_avg})`);
    }else{
        console.log(`No team wins`);
    }
}
console.log('CODING CHALLEMGE #3')
console.log('DATA 1')
let dol_avg1 = calculateAvg(dol_1, dol_2, dol_3);
let koa_avg1 = calculateAvg(koa_1, koa_2, koa_3);
comScore(dol_avg1, koa_avg1);

console.log('DATA BONUS 1')
let dol_b1_1 = 97
let dol_b1_2 = 112
let dol_b1_3 = 101

let koa_b1_1 = 109
let koa_b1_2 = 95
let koa_b1_3 = 123
comScore(calculateAvg(dol_b1_1, dol_b1_2, dol_b1_3), calculateAvg(koa_b1_1, koa_b1_2, koa_b1_3));   

console.log('DATA BONUS 2')
let dol_b2_1 = 97
let dol_b2_2 = 112
let dol_b2_3 = 101

let koa_b2_1 = 109
let koa_b2_2 = 95
let koa_b2_3 = 106
comScore(calculateAvg(dol_b2_1, dol_b2_2, dol_b2_3), calculateAvg(koa_b2_1, koa_b2_2, koa_b2_3));   
