// Fungsi ShowDownload akan menampilkan  pesan setelah  download selesai
const showDownload = (result) => {
        console.log("download selesai");
        console.log("hasil download:" + result);
    
}


// Fungsi download yang mensimulaikan proses download menggunakan promise
const download = () => {
        return new Promise((resolve) => {
        setTimeout(() => { //simulasi delay menggunakan setTimeout selama 5 detik
                const result = "windows-10.exe";
                resolve(result);
        }, 5000);//waktu tunggu selama 5dtk
});
};
// Fungsi utama bersifat async untuk menunggu proses download selesai
const main = async () => {
        const result = await download();
        showDownload(result);
};
main();