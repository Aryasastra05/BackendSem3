
 // Import semua method FruitController

const { index, store, update, destroy } = require('./controller/FruitController');


const main = () => {
   //menampolkan daftar buah
   console.log("Method index - Menampilkan Buah");
   index();
    
    //menambahkan daftar buah pisang ke dalam fruits
    console.log("\nMethod store - Menambahkan Buah Pisang");
    store("Pisang");
   
    //mengupdate data buah pada index 0 berubah menjdi kelapa
    console.log("\nMethod update - Update data 0 Menjadi Buah Kelapa ");
    update(0, "Kelapa");

    //menghapus data buah pada index 0 
    console.log("\nMethod Destroy - Menghapus data pada index 0 ");
    destroy(0);
   
   
};

main();