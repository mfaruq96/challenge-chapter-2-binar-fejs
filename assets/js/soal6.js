function getAngkaTerbesarKedua(dataNumbers) {
    // jika tidak ada data
    if ( typeof (dataNumbers) === "undefined" ) return "Error: parameter undefined.";

    // proses cek angka terbesar
    let sortedNumber = dataNumbers
      .filter((value, index) => {
        return dataNumbers.indexOf(value) === index;
      })
      .sort(function (a, b) {
        return b - a;
      });
  
    return sortedNumber[0];
};

const dataAngka = [9, 4, -1, 7, 7, 4, 3, 2, 10, 8, 2];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua());