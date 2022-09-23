const lodash = require("lodash");
const { add } = require("lodash");

const firstRandomNum = lodash.random(10, 100);
console.log(`first num: ${firstRandomNum}`);

console.log(add(5, 65));

// const secondRandomNum = lodash.random(10, 100, true);
// console.log(`line 11 - second num: ${secondRandomNum}`);

// const thirdRandomNum = lodash.random(10, 100, false);
// console.log(`line 12 - third num: ${thirdRandomNum}`);

// const forthRandomNum = lodash.random(10, "hallo");
// console.log(`line 13 - froth num: ${forthRandomNum}`);

// const fifthRandomNum = lodash.random(10);
// console.log(`line 14 - fifth num: ${fifthRandomNum}`);

// const sixthRandomNum = lodash.random("hallo");
// console.log(`line 15 - sixth num: ${sixthRandomNum}`);
