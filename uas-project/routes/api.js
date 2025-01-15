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
router.put("/alumni/:id", AlumniController.update);

// Route untuk menghapus data Alumni berdasrkan id
router.delete("/alumni/:id", AlumniController.destroy);

// Route untuk menampilkan detail Alumni
router.get("/alumni/:id", AlumniController.show);

// export router
module.exports = router;
