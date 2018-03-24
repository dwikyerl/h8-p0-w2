/*
  Logic Challenge - X dan O
*/

/**
 * @param {string} str - a sentence that only contains x or o
 */

function xo(str) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") xCount++;
    else if (str[i] === "o") oCount++;
  }
  return xCount === oCount;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true