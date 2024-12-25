// Import express dan routing
const express = require ("express");
const router = require("./routes/api.js");

//Buat object express
const app = express();

//Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
//menggunakan routing
app.use(router);

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

// Menjalankan server
const PORT = 3000;
app.listen(3000, () => {
    console.log("Server running at: http://localhost:3000:${PORT}");
});