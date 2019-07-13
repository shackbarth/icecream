const _ = require("lodash");
const prompt = require("prompt-promise");

(async function () {
  const solution = String(_.random(100, 1000));
  while(true) {
    let perfectCount = 0;
    let goodCount = 0;
    let badCount = 0;
    const guess = await prompt("Enter a guess:\n");
    if (guess.charAt(0) === solution.charAt(0)) {
      perfectCount++;
    } else if (guess.charAt(0) === solution.charAt(1) || guess.charAt(0) === solution.charAt(2)) {
      goodCount++;
    } else {
      badCount++;
    }
    if (guess.charAt(1) === solution.charAt(1)) {
      perfectCount++;
    } else if (guess.charAt(1) === solution.charAt(0) || guess.charAt(1) === solution.charAt(2)) {
      goodCount++;
    } else {
      badCount++;
    }
    if (guess.charAt(2) === solution.charAt(2)) {
      perfectCount++;
    } else if (guess.charAt(2) === solution.charAt(0) || guess.charAt(2) === solution.charAt(1)) {
      goodCount++;
    } else {
      badCount++;
    }
    if (perfectCount === 3) {
      console.log("You got it!");
      break;
    }
    if (perfectCount > 0) {
      console.log(`${perfectCount} perfect`);
    }
    if (goodCount > 0) {
      console.log(`${goodCount} good`);
    }
    if (badCount > 0) {
      console.log(`${badCount} bad`);
    }
  }
  process.exit(0);
})();
