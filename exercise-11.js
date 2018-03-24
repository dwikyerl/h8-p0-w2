/*
  Logic Challenge - Balik Kata
*/

/**
 * @param {string} kata - an arbitrary sentence
 */

function balikKata(kata) {
  let result = "";
  for(let char of kata) {
    result = char + result;
  }

  return result;
}



// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


// Alternative Solution

// function balikKata(kata) {
//   return kata.split('').reverse().join('');
// }