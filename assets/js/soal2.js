function checkTypeNumber(givenNumber) {
    // jika tidak ada
    if ( !givenNumber ) {
        return "Error: Bro where is the parameter?";
    // jika tipe data bukan number
    } else if ( typeof givenNumber != "number" ) {
        return "Error: Invalid data type";
    // jika genap
    } else if ( givenNumber % 2 == 0 ) {
        return "GENAP";
    // jika ganjil
    } else {
        return "GANJIL";
    }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());