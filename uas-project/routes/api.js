// import AlumniController
const AlumniController = require("../controllers/AlumniController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Alumni API Express");
});

// Membuat routing alumni
router.get("/alumnis", AlumniController.index);

// Route untuk menambah data Alumni baru
router.post("/alumnis", AlumniController.store);

// Route untuk memperbarui data Alumni berdasrkab id
router.put("/alumnis/:id", AlumniController.update);

// Route untuk menghapus data Alumni berdasrkan id
router.delete("/alumnis/:id", AlumniController.destroy);

// Route untuk menampilkan detail Alumni
router.get("/alumnis/:id", AlumniController.show);

// Routingvuntuk pencarian Alumni berdasarkan nama
router.get("/alumnis/search/:name", AlumniController.search);

// Routing untuk mendapatkan data Alumni berdasarkan status tertentu
router.get("/alumnis/status", AlumniController.findByStatus);
// export router
module.exports = router;
