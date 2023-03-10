// let siswa = {
//     nama : "adnan",
//     nik : 16030,
//     email : "atnandimas@gmail.com"
// }

// console.log(JSON.stringify(siswa));





/* menggunakan ajax*/
// json ke object

//stringify dari object ke json || parse dari json ke object

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let siswa = JSON.parse(this.responseText); 
//         console.log(siswa);
//     }
// }
// // menjalankan ajaxnya
// xhr.open('GET', 'coba.json', true);
// xhr.send();

/* menggunakan vanilla javascript jquery */ 
$.getJSON('coba.json', function (data) {
    console.log(data);
});