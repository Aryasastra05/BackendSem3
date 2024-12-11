const download = () => {
    return new Promise((resolve, reject) =>{
        setTimeout (() => {
            if(status){
                resolve("download selesai");
            } else {
                reject("download gagal");
            }
        }, 5000);
    });

};
download()
.then((res) => {
    console.log(res);
})
.catch((err) =>{
    console.log(err);

});