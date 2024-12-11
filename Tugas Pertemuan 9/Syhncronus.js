const {Persiapan,Rebusair,Masak} = require("./Persiapan.js");
const main = () => {
    setTimeout(function(){
    Persiapan();
    setTimeout(function(){
    Rebusair();
    setTimeout(function(){
    Masak();
}, 3000);
}, 5000);
}, 7000);
}
main();