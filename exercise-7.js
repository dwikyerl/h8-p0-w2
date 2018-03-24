// 1. Menyusun Barisan Bintang
/*
  Output:
  
  Jika rows1 = 5

  *
  *
  *
  *
  *
*/

console.log("\n1. Menyusun Barisan Bintang\n");

var rows1 = 3;

for (let i = 0; i < rows1; i++) {
  console.log("*");
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
/*
  Output:

  Jika rows2 = 5

  *****
  *****
  *****
  *****
  *****
*/

console.log("\n2. Menyusun Barisan Bintang Dengan Nested Looping\n");

var rows2 = 5;

for (let i = 0; i < rows2; i++) {
  let result = "";
  for (let j = 0; j < rows2; j++) {
    result += "*";
  }
  console.log(result);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
/*
  Output:

  Jika rows3 = 5

  *
  **
  ***
  ****
  *****
*/

console.log("\n3. Menyusun Barisan Tangga Bintang Dengan Nested Looping\n");

var rows3 = 6;

for (let i = 0; i < rows3; i++) {
  let result = "";
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  console.log(result);
}
