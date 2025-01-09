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

    static async create(data) {
        const id = await new Promise((resolve, reject) => {
            //menambahkan data baru ke tabel students
        const sql = "INSERT INTO students SET ?";
        db.query(sql, data, (err, results) => {
            resolve(results.insertId);
        });

        });

        // mengambil data student berdasarkan id
        const student = this.find(id);
        // menembalikan yg baru ditambahkan
        return student;
    }    

        // mencari data mahasiswa berdasarkan id
        static find(id) {
            return new Promise((resolve, reject) => {
                // query sql untuk mencari data berdasarkan dengan id
                const sql = "SELECT * from students WHERE id = ?";
                db.query(sql, id, (err, results) => {
                    const [student] = results;
                    // mengembalikkan data
                    resolve(student);
                });
            });
        }
        
        // Meng update data mahasiswa berdasarkan id
        static async update(id, data) {
            await new Promise((resolve, reject) => {
                // quer sql untuuk update data
                const sql = "UPDATE students SET ? WHERE id = ?";
                db.query(sql, [data, id], (err, results) => {
                    resolve(results);
                });
            });

            // mengambil data yang telah di perbarui
            const student = await this.find(id);
            // mengembalikkan data yg telah di perbarui
            return student;
        }

        // Menghapus data mahasiswa berdarkan dengan id
        static delete(id) {
            return new Promise((resolve, reject) => {
                // Qery sql untuk mendelete data
                const sql = "DELETE FROM students WHERE id = ?";
                db.query(sql, id, (err, results) => {
                    resolve(results);
                });

            });
        }

}
// export class student
module.exports = Student;