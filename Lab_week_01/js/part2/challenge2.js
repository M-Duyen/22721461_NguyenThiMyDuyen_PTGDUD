const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2)

const bills = [125, 555, 44]

const tips = bills.map(calcTip)
const total = bills.map((bill, i) => bill + tips[i])

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);