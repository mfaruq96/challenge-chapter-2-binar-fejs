function changeWord(selectedText, changedText, text) {
    // membuat variabel untuk mengambil text yang akan di ubah
    var text1 = text.replace(selectedText, changedText);
    // menjalankan variabel
    return text1;
};

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
