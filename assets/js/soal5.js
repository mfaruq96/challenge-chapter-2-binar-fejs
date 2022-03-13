function getSpliteName(personName) {
    // jika tidak ada data
    if ( typeof (personName) === "undefined" ) return "Error: parameter undefined.";
    // cek string atau bukan
    if ( typeof (personName) !== "string" ) return "Error: Invalid Type.";
    // cek jika tidak ada karakter
    if ( personName.length === 0 ) return "Error: no characters.";
  
    // filter dan split nama
    let splitName = personName.split(" ").filter((item) => {
      return item.length > 0;
    });
  
    // variabel untuk cetak hasil
    let resultName = {
      firstName: null,
      middleName: null,
      lastName: null
    };
  
    // jika data lebih dari 3 kata
    if ( splitName.length > 3 ) {
      return "Error: This function for 3 characters only.";
    }
  
    resultName.firstName = splitName[0];
    if ( splitName.length === 3 ) {
      resultName.middleName = splitName[1];
      resultName.lastName = splitName[2];
    } else if ( splitName.length === 2 ) {
      resultName.lastName = splitName[1];
    }
  
    return resultName;
};

console.log(getSpliteName("Aldi Daniela"));
console.log(getSpliteName("Dwi Kuncoro"));
console.log(getSpliteName("Aurora"));
console.log(getSpliteName("Aurora Andi Anda"));
console.log(getSpliteName("Aurora Aureliya Sukma Darma"));
console.log(getSpliteName(0));