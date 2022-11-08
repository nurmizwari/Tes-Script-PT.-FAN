let kalimat = "Kemarin Shopia per[gi ke mall.";
let karakter = "[]*_=!()&";

function word(kalimat) {
  let output = 1;
  for (let i = 0; i < kalimat.length; i++) {
    const el = kalimat[i];
    for (let j = 0; j < karakter.length; j++) {
      const char = karakter[j];
      if (char == el) {
        output--;
      }
    }
    if (el == " ") {
      output++;
    }
  }

  return output;
}

console.log(word(kalimat));
console.log(word("Saat meng*ecat tembok, Agung dib_antu oleh Raihan."));
console.log(word("Berapa u(mur minimal[ untuk !mengurus ktp?"));
console.log(word("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda."));
