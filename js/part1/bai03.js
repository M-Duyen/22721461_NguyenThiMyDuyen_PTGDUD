console.log("============= Coding Challenge #3 =============")

// Test Data for Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Test Data for Bonus 1
let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];

// Test Data for Bonus 2
let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];


function calculateAverage(scores) {
  let totalScore = scores.reduce((acc, score) => acc + score, 0);
  return totalScore / scores.length;
}


function determineWinner(dolphinsScores, koalasScores) {
  const dolphinsAvg = calculateAverage(dolphinsScores);
  const koalasAvg = calculateAverage(koalasScores);

  console.log(`Dolphins average score: ${dolphinsAvg.toFixed(2)}`);
  console.log(`Koalas average score: ${koalasAvg.toFixed(2)}`);

  if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
    console.log("Dolphins win the trophy!");
  } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
    console.log("Koalas win the trophy!");
  } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
    console.log("It's a draw! Both teams have the same score and they are both over 100!");
  } else {
    console.log("No team wins the trophy as neither team has a score of 100 or more.");
  }
}

// Test the function with Data 1
console.log("Data 1:");
determineWinner(dolphinsScores1, koalasScores1);

// Test the function with Bonus 1
console.log("\nData Bonus 1:");
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);

// Test the function with Bonus 2
console.log("\nData Bonus 2:");
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);
