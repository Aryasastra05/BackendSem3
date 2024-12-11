const Persiapan = () => {
    setTimeout(function(){
        console.log("Mempersiapkan Bahan...");

    }, 3000);
};

const Rebusair = () => {
    setTimeout(function(){
        console.log("Mempersiapkan...");

    }, 7000);
};
const Masak = () => {
    setTimeout(function(){
        console.log("Masak mie...");
        console.log("Selesai");

    }, 5000);
};
module.export = {Persiapan,Rebusair,Masak};