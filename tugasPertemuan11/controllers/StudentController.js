//Mengimpor data students dari file lain
const Students = require("../data/students");

// Class Untuk Mengatur operasi create,read,update & delete data students
class StudentController {

    //Menampilkan Dta Students
    index(req,res) {
        const data = {
            message: "Menampilkan Semua Students",
            data: Students,
        };
        res.json(data);

    }

    // Tambah Data Student Baru
    store(req,res) {
        const { name } = req.body;
        Students.push(name);
        const data = {
            message: "Menambahkan Data Student: ${name}",
            data: Students,
        };
        res.json(data);
    }

    //Mengedit Data Student Berdasarkan id
    update(req,res) {
        const { id } = req.params;
        const { name } = req.body;
        Students[id] = name; //Ubah data sesuai id
        const data = {
            message: "Mengedit Student ID ${id}, Nama ${name}",
            data: Students,
        };
        res.json(data);
    }
    // Menghapus Data Student Berdasarkan id
    destroy(req,res) {
        const { id } = req.params;
        Students.splice(id, 1); // Hapus data sesuai id
        const data = {
            message: "Menghapus Student ID ${id}",
            data: Students,
        };
        res.json(data);
    }
}
 //Buat object dari class StudentController
 const object = new StudentController();

 // ngekspor agar bisa dipakai di file lain
 module.exports = object;