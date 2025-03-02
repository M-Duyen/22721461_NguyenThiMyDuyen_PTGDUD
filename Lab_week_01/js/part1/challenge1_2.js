let mark_w1 = 78;
let mark_t1 = 1.69;
let mark_w2 = 95;
let mark_t2 = 1.88;

let john_w1 = 92;
let john_t1 = 1.95;
let john_w2 = 85;
let john_t2 = 1.76;

const calculateBMI = (mass, height) => (mass / height ** 2).toFixed(2);
console.log('CODING CHALLEMGE #2')
console.log('DATA 1')
let mark_bmi1 = calculateBMI(mark_w1, mark_t1);
let john_bmi1 = calculateBMI(john_w1, john_t1);
let markHigherBMI_1 = mark_bmi1 > john_bmi1;

console.log('Mark has a higher BMI than John? ' + markHigherBMI_1);

console.log('DATA 2')
let mark_bmi2 = calculateBMI(mark_w2, mark_t2);
let john_bmi2 = calculateBMI(john_w2, john_t2)
let markHigherBMI_2 = mark_bmi2 > john_bmi2;
console.log('Mark has a higher BMI than John? ' + markHigherBMI_2);

console.log('CODING CHALLEMGE #2')
console.log('DATA 1')
if (mark_bmi1 > john_bmi1){
    console.log(`Mark's BMI (${mark_bmi1}) is higher than John's (${john_bmi1})`);    
}else{
    console.log(`John's BMI (${john_bmi1}) is higher than Mark's (${mark_bmi1_bmi1})`);    
    
}
console.log('DATA 2')
if(mark_bmi2 > john_bmi2){
    console.log(`Mark's BMI (${mark_bmi2}) is higher than John's (${john_bmi2})`);    
}else{
    console.log(`John's BMI (${john_bmi2}) is higher than Mark's (${mark_bmi2})`);    

}