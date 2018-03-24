// 1. Melakukan Looping Menggunakan While
/*
  Output :
  LOOPING PERTAMA
  2 - I love coding
  4 - I love coding
  6 - I love coding
  8 - I love coding
  10 - I love coding
  12 - I love coding
  14 - I love coding
  16 - I love coding
  18 - I love coding
  20 - I love coding
  LOOPING KEDUA
  20 - I will become fullstack developer
  18 - I will become fullstack developer                                                                              
  16 - I will become fullstack developer
  14 - I will become fullstack developer
  12 - I will become fullstack developer
  10 - I will become fullstack developer
  8 - I will become fullstack developer
  6 - I will become fullstack developer
  4 - I will become fullstack developer
  2 - I will become fullstack developer
*/

console.log("\n1. Melakukan Looping Menggunakan While\n");

let counter = 0;

console.log("LOOPING PERTAMA");

while (counter <= 18) {
  counter += 2;
  console.log(counter + " - I love coding");
}

console.log("LOOPING KEDUA");

while (counter >= 2) {
  console.log(counter + " - I will become fullstack developer");
  counter -= 2;
}

// 2. Melakukan Looping Menggunakan For
/*
  Output : 
  LOOPING PERTAMA
  1 - I love coding
  2 - I love coding
  3 - I love coding
  4 - I love coding
  5 - I love coding 
  6 - I love coding
  7 - I love coding
  8 - I love coding
  9 - I love coding
  10 - I love coding
  11 - I love coding
  12 - I love coding 
  13 - I love coding
  14 - I love coding
  15 - I love coding
  16 - I love coding
  17 - I love coding
  18 - I love coding
  19 - I love coding
  20 - I love coding
  LOOPING KEDUA
  20 - I will become fullstack developer
  19 - I will become fullstack developer
  18 - I will become fullstack developer
  17 - I will become fullstack developer
  16 - I will become fullstack developer
  15 - I will become fullstack developer
  14 - I will become fullstack developer
  13 - I will become fullstack developer
  12 - I will become fullstack developer
  11 - I will become fullstack developer
  10 - I will become fullstack developer
  9 - I will become fullstack developer
  8 - I will become fullstack developer
  7 - I will become fullstack developer
  6 - I will become fullstack developer
  5 - I will become fullstack developer
  4 - I will become fullstack developer
  3 - I will become fullstack developer
  2 - I will become fullstack developer
  1 - I will become fullstack developer
*/

console.log("\n2. Melakukan Looping Menggunakan For\n");

let counter2 = 1;

console.log("LOOPING PERTAMA");

for (counter2; counter2 <= 20; counter2++) {
  console.log(counter2 + " - I love coding");
}

console.log("LOOPING KEDUA");

for (counter2; counter2 >= 1; counter2--) {
  console.log(counter2 + " - I will become fullstack developer");
}

// 3. Angka Ganjil dan Genap
/*
  Output :
  //contoh - ganjil genap
  //counter sekarang = 1,
  //output
  "GANJIL"
  //counter sekarang = 2,
  //output
  "GENAP"
  // dan seterusnya :)

  //contoh - untuk pertambahan counter 2
  //counter sekarang = 1, 
  //output
  "" 
  //counter sekarang = 3, 
  //output
  "3 KELIPATAN 3" 
  // dan seterusnya :)

  //contoh - untuk pertambahan counter 5
  //counter sekarang = 1, 
  //output
  "" 
  //counter sekarang = 6, 
  //output
  "6 KELIPATAN 6" 
  // dan seterusnya :)

  //contoh - untuk pertambahan counter 9
  //counter sekarang = 1, 
  //output
  "" 
  //counter sekarang = 10, 
  //output
  "10 KELIPATAN 10" 
  // dan seterusnya :)
*/

console.log("\n3. Angka Ganjil dan Genap\n");

console.log("-GANJIL ATAU GENAP");

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log("GENAP");
  else console.log("GANJIL");
}

console.log("-PERTAMBAHAN 2");

for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) console.log(i + " kelipatan 3");
}

console.log("-PERTAMBAHAN 5");

for (let i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) console.log(i + " kelipatan 6");
}

console.log("-PERTAMBAHAN 9");

for (let i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) console.log(i + " kelipatan 10");
}


