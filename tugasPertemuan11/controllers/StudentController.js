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
        if (students.length > 0) {
            const data = {
                message: "Menampilkan Semua Students",
                data: students,
            };
            // Mengirimkan sebuah respons dengan data mahasiswa
            res.status(200).json(data);
        } else {
            const data = {
                message: "Data Students Empty/Kosong",
            };
            // Mengirimkan sebuah respons jika data kosong
            res.status(200).json(data);
        }
        

    }

    // Menyimpan data mahasiswa
    async store(req,res) {
        const { nama, nim, email, jurusan } = req.body;
        if (!nama || !nim || !email || !jurusan) {
            const data = {
                message: "Semua Data Harus Di Kiirim",
                
            };
            // Mengirimkan sebuah respons jika data tidak lengkap
            res.status(422).json(data);
        }
        
        // Menmbahkan data mahasiswa
        const student = await Student.create(req.body);
        const data = {
            message: "Menambahkan Data Student",
            data: student,
        };
        res.json(data);
    }

    //Mengedit Data Student Berdasarkan id
    async update(req,res) {
        const { id } = req.params;
        const student = await Student.find(id);

        if (student) {
            // mengupdate data mahasiswa
            const student = await Student.update(id, req.body);
            const data = {
                message: "Mengedit Data Student",
                data: student,
            };
            // Mengirimkan sebuah respons jika data dipetrbarui
            res.status(200).json(data);
        } else {
            const data = {
                message: "Data Student Tidak Di Temukan",
            };
            // Mengirimkan sebuah respons jika data tidak di temukan
            res.status(404).json(data);
        }
        
    }
    // Menghapus Data Student Berdasarkan id
    async destroy(req,res) {
        const { id } = req.params;
        const student = await Student.find(id);

        if (student) {
            // Menghapus data student
            await Student.delete(id);
            const data = {
                message: "Menghapus Data Student",
                
            };
            // Mengirimkan sebuah respons jika berhasil diHapus
            res.status(200).json(data);
        } else {
            const data = {
                message: "Data Student Tidak Ditemukan",
                
            };
            // Mengirimkan sebuah respons jika data tidak  ditemukan
            res.status(404).json(data);
        }
        
    }

    // Menampilkan detail data mahasiswa berdasarkan id
    async show(req,res) {
        const { id } = req.params;
        const student = await Student.find(id);

        if (student) {
            const data = {
                message: "Menampilkan Detail Student",
                data: student,
            };
            // Mengirimkan sebuah respons data mahasiswa
            res.status(200).json(data);
        } else {
            const data = {
                message: "Data Student Tidak Ditemukan",
                
            };
            // Mengirimkan sebuah respons jika data tidak  ditemukan
            res.status(404).json(data);
        }
        
    }
}
 //Buat object dari class StudentController
 const object = new StudentController();

 // ngekspor agar bisa dipakai di file lain
 module.exports = object;