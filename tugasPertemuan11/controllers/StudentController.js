//Mengimpor data students dari file lain
//const Students = require("../data/students");
const Student = require("../models/Student");
const Students = require("../models/Student");

// Class Untuk Mengatur operasi create,read,update & delete data students
class StudentController {

    //Menampilkan seluruh resource
    async index(req,res) {
        //Menggunakan async/await umtuk memanggil method all daromodel student
        const students = await Student.all();
        const data = {
            message: "Menampilkan Semua Students",
            data: students,
        };
        res.json(data);

    }

    // Tambah Data Student Baru
    async store(req,res) {
        const { nama, nim, email, jurusan } = req.body;
        //Memanfaatkan method create  untuk menambhkan data ke database
        const student = await Student.create(nama, nim, email, jurusan);
        const data = {
            message: "Menambahkan Data Student: ${name}",
            data: student,
        };
        res.json(data);
    }

    //Mengedit Data Student Berdasarkan id
    update(req,res) {
        const { id } = req.params;
        const { nama } = req.body;
        
        const data = {
            message: "Mengedit Student ID ${id}, Nama ${nama}",
            data: [],
        };
        res.json(data);
    }
    // Menghapus Data Student Berdasarkan id
    destroy(req,res) {
        const { id } = req.params;
        
        const data = {
            message: "Menghapus Student ID ${id}",
            data: [],
        };
        res.json(data);
    }
}
 //Buat object dari class StudentController
 const object = new StudentController();

 // ngekspor agar bisa dipakai di file lain
 module.exports = object;