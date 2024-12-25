// Ambil StudentController untuk mengatur fungsi routing
const StudentController = require("../controllers/StudentController");

// Gunakan express untuk membuat instance router
const express = require("express");
const router = express.Router();

// Route untuk halaman utama
router.get("/", (req, res) => {
    res.send("Hello Express");
});

// Route untuk menampilkan data semua students
router.get("/students", StudentController.index);

// Route untuk menambah data student baru
router.post("/students", StudentController.store);

// Route untuk memperbarui data student berdasrkab id
router.put("/students/:id", StudentController.update);

// Route untuk menghapus data student berdasrkan id
router.delete("/students/:id", StudentController.destroy);

// Mengekspor route untuk digunakan di file uytama
module.exports = router;