/*
  Change the name whatever you want
  Peran :
  - Ksatria
  - Tabib
  - Penyihir
*/
const nama = 'Arthur'; 
const peran = 'Ksatria';

if(nama && peran) {
  console.log("Selamat datang di Dunia Proxytia, " + nama);
} else if (nama && !peran) {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else {
  console.log("Nama harus diisi!");
}

if (nama && peran === 'Ksatria') {
  console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
} else if (nama && peran === 'Tabib') {
  console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
} else if (nama && peran === 'Penyihir') {
  console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}