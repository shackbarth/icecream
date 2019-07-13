var _ = require("lodash");
var prompt = require("prompt-promise");

function double(x) {
  return x * 2;
}

function addThree(x) {
  return x + 3;
}

(async function () {

  /*
  if (addThree(4) === 8) {
    console.log("impossible");
  } else if (addThree(4) === 7) {
    console.log("ok!");
  }
  */

  console.log(_.includes("234", "7"));


})();
