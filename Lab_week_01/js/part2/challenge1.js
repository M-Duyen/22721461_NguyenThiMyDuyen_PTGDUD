const calAverage = (a, b, c) => ((a + b + c) / 3).toFixed(3);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `No one wins`;
    }
}

console.log('DATA 1')
const data1 = {
    dol: [44, 23, 71],
    koa: [65, 54, 49]
}
console.log(checkWinner(calAverage(...data1.dol), calAverage(...data1.koa)))


console.log('DATA 2')
const data2 = {
    dol: [85, 54, 41],
    koa: [23, 34, 27]
}
console.log(checkWinner(calAverage(...data2.dol), calAverage(...data2.koa))   
)