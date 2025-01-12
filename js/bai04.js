console.log("============= Coding Challenge #4 =============")

let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

function calculateTip(bill) {

    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    let total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}

console.log("Test Data 1:");
calculateTip(bill1);
calculateTip(bill2);
calculateTip(bill3);  
