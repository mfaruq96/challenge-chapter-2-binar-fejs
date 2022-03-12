function checkEmail(email)
{
    // variabel regex
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // jika tidak ada email atau kosong
    if ( !email ) {
        return "ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)";
    // jika bukan data bukan email
    } else if ( typeof email == "number" ) {
        return "ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)";
    // jika data sesuai dengan regex
    } else if ( email.match(regex) ) {
        return "VALID";
    // jika data tidak sesuai dengan regex
    } else {
        return "INVALID";
    }
};

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail(3322));
console.log(checkEmail());