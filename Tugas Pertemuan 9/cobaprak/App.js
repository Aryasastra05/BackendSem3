const nama = "Arya Sastra Digya";
const umur = "18";
const jurusan = "TI01";

console.log(nama,umur,jurusan);
console.log('=====');
console.log('contoh kondisional');
const nilai = 90;
let grade ="";
if(nilai > 90){
    grade = "A";

}
else if (nilai > 80){
    grade = "B";
}
else {
    grade = "C";
}
    console.log(`nilai anda: ${grade}`);
    // jenis jenis function
    //Arrow
    // declare
    //expression
    console.log(`contoh object`);
    const user = {
        name: "Arya Sastra Digya",
        address: "Jakim",
        age: 18,
        isMarried: true,
    }
    // console.log(user.name);
    const{name,address,age, isMarried} = user;
    console.log(name,address,age, isMarried);

        
    
