const calculateTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2)

let bill_1 = 275
let bill_2 = 40
let bill_3 = 430

let total_1 = bill_1 + calculateTip(bill_1)
let total_2 = bill_2 + calculateTip(bill_2)
let total_3 = bill_3 + calculateTip(bill_3)

console.log('CODING CHALLEMGE #4')
console.log('DATA 1')
console.log(`The bill was ${bill_1}, the tip was ${calculateTip(bill_1)}, and the total value ${total_1}`);
console.log(`The bill was ${bill_2}, the tip was ${calculateTip(bill_2)}, and the total value ${total_2}`);
console.log(`The bill was ${bill_3}, the tip was ${calculateTip(bill_3)}, and the total value ${total_3}`);
