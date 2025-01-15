// import database
const db = require("../config/database");
// membuat class Alumni
class Alumni {
  static all(){
    //menggunaksn promise buat menangani operasi asynchronous
    return new Promise((resolve, reject)=> {
        
        const query = "SELECT * FROM alumni";
        db.query(query,(err,results)=>{
        resolve(results);
    });
    });
}

static async create(data) {
    const id = await new Promise((resolve, reject) => {
        //menambahkan data baru ke tabel Alumni
    const sql = "INSERT INTO alumni SET ?";
    db.query(sql, data, (err, results) => {
        resolve(results.insertId);
    });

    });

    // mengambil data Alumni berdasarkan id
    const alumni = this.find(id);
    // menembalikan yg baru ditambahkan
    return alumni;
}    

    // mencari data Alumni berdasarkan id
    static find(id) {
        return new Promise((resolve, reject) => {
            // query sql untuk mencari data berdasarkan dengan id
            const sql = "SELECT * from alumni WHERE id = ?";
            db.query(sql, id, (err, results) => {
                const [alumni] = results;
                // mengembalikkan data
                resolve(alumni);
            });
        });
    }
    
    // Meng update data Alumni berdasarkan id
    static async update(id, data) {
        await new Promise((resolve, reject) => {
            // quer sql untuuk update data
            const sql = "UPDATE alumni SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // mengambil data yang telah di perbarui
        const alumni = await this.find(id);
        // mengembalikkan data yg telah di perbarui
        return alumni;
    }

    // Menghapus data Alumni berdarkan dengan id
    static delete(id) {
        return new Promise((resolve, reject) => {
            // Qery sql untuk mendelete data
            const sql = "DELETE FROM alumni WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });

        });
    }

    // Mencari data Alumni berdasarkan nama
    static searchByName(name) {
        return new Promise(( resolve, reject) => {
            const sql = "SELECT FROM alumni WHERE name LIKE = ?";
            db.query(sql, ['%${name}%'], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
  // buat fungsi
}

// export class Alumni
module.exports = Alumni;
