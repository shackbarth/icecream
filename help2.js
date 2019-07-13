/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}
*/

var _ = require("lodash");

var i = _.random(0, 30);
while (i < 29) {
  console.log(i);
  i = _.random(0, 30);
}

console.log("final value: " + i);
