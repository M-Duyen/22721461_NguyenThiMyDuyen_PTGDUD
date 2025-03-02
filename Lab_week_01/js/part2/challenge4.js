console.log("Challenge 4");
const calcTip_4 = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2).toFixed(2);

const bills_4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips_4 =[]
const totals_4 = []

bills_4.forEach(element => {
    const tip = parseFloat(calcTip_4(element));
    tips_4.push(tip);
    totals_4.push(element + tip);
});
console.log("Bills:", bills_4);
console.log("Tips:", tips_4);
console.log("Totals:", totals_4)

const calcAverage_4 = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    })
    return sum / arr.length;
}
console.log("Average:", calcAverage_4(totals_4));