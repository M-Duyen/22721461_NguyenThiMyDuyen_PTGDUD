const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return (this.mass / this.height ** 2).toFixed(2)
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return (this.mass / this.height ** 2).toFixed(2)
    }
}


if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName} has a higher BMI (${mark.calcBMI()}) than ${john.fullName} (${john.calcBMI()})`)
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName} has a higher BMI (${john.calcBMI()}) than ${mark.fullName} (${mark.calcBMI()})`)
}else{
    console.log(`${john.fullName} and ${mark.fullName} have the same BMI (${mark.calcBMI()})`)
}