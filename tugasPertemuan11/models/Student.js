// import database
const db = require("../config/database");

//membuat class model student
class Student {
    static all(){
        //menggunaksn promise buat menangani operasi asynchronous
        return new Promise((resolve, reject)=> {
            
            const query = "SELECT * FROM students";
            db.query(query,(err,results)=>{
            resolve(results);
        });
        });
    }

    static create(nama, nim, email, jurusan) {
        //menambahkan data baru ke tabel students
        const query = "INSERT INTO students (nama, email, nim, jurusan) VALUES (?, ?, ?, ?)";

        //promise digunakan agar dapat berjalan secara async
        return new Promise((resolve, reject) => {
            //eksekusi query param input pengguna
            db.query(query, [nama, nim, email, jurusan], (err, results) => {
                //mengembalikandata yg berhasil di tambah
                resolve({id: results.insertId, nama, nim, email, jurusan,created_at:new Date(),updated_at:new Date()});
            });
        });
    };

}
// export class student
module.exports = Student;