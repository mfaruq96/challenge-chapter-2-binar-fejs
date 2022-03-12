function isValidPassword(pwd) {
    // jika tidak ada password
    if ( typeof (pwd) === "undefined" ) return "ERROR : parameter undefined.";
    // jika password tidak ada string
    if ( typeof (pwd) !== "string" ) return "ERROR : Invalid data type.";

    // variabel untuk hufur kecil
    const LOWER_REGEX = /[a-z]/g;
    // variabel untuk huruf besar
    const UPPER_REGEX = /[A-Z]/g;
    // variabel untuk digit/karakter
    const DIGIT_REGEX = /\d/g;

    // cek minimal 8 karakter, ada huruf besar dan kecil, ada angka
    return (
    pwd.length > 8 &&
    LOWER_REGEX.test(pwd) &&
    UPPER_REGEX.test(pwd) &&
    DIGIT_REGEX.test(pwd)
    );
};

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());