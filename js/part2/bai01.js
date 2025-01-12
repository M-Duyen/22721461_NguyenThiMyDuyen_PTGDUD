const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

function checkWinner(avgDolhis, avgKoalas){
    if(avgDolhis >= 2*avgKoalas){
        console.log(`Dolphins win ( ${avgDolhis} vs. ${avgKoalas} )`)
    }else if(avgKoalas >= 2*avgDolhis){
        console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolhis} )`)
    }else{
        console.log(`NO team win!`)
    }
}

//Test data 1
let scorceDol1 = [44,23,71]
let scoreKoa1 = [65,54,49]

//Test data 2
let scorceDol2 = [85,54,41]
let scoreKoa2 = [23,34,27]

let avgDol1 = calcAverage(...scorceDol1)
let avgKoa1 = calcAverage(...scoreKoa1)

let avgDol2 = calcAverage(...scorceDol2)
let avgKoa2 = calcAverage(...scoreKoa2)

console.log('Test data 1')
checkWinner(avgDol1, avgKoa1)

console.log('Test data 2')
checkWinner(avgDol2, avgKoa2)


