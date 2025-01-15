// import Model Alumni
const Alumni = require("../models/Alumni");
// buat class AlumniController
class AlumniController {
  async index(req,res) {
    //Menggunakan async/await umtuk memanggil method all daromodel Alumni
    const alumnis = await Alumni.all();
    if (alumnis.length > 0) {
        const data = {
            message: "Menampilkan Semua Alumni",
            data: alumnis,
        };
        // Mengirimkan sebuah respons dengan data Alumni
        res.status(200).json(data);
    } else {
        const data = {
            message: "Data Alumni Empty/Kosong",
        };
        // Mengirimkan sebuah respons jika data kosong
        res.status(200).json(data);
    }
    

}
 // Menyimpan data Alumni
 async store(req,res) {
  const { name, phone, address, graduation_year, status, company_name, position } = req.body;
  if (!name || !phone || !address || !graduation_year || !status || !company_name || !position) {
      const data = {
          message: "Semua Data Harus Di Kiirim",
          
      };
      // Mengirimkan sebuah respons jika data tidak lengkap
      res.status(422).json(data);
  }
  // Menmbahkan data alumni
  const alumni = await Alumni.create(req.body);
  const data = {
      message: "Menambahkan Data Almuni",
      data: alumni,
  };
  res.json(data);
}

//Mengedit Data Alumni Berdasarkan id
async update(req,res) {
  const { id } = req.params;
  const alumni = await Alumni.find(id);

  if (alumni) {
      // mengupdate data Alumni
      const alumni = await Alumni.update(id, req.body);
      const data = {
          message: "Mengedit Data Alumni",
          data: alumni,
      };
      // Mengirimkan sebuah respons jika data dipetrbarui
      res.status(200).json(data);
  } else {
      const data = {
          message: "Data Alumni Tidak Di Temukan",
      };
      // Mengirimkan sebuah respons jika data tidak di temukan
      res.status(404).json(data);
  }
  
}
// Menghapus Data Alumni Berdasarkan id
async destroy(req,res) {
  const { id } = req.params;
  const alumni = await Alumni.find(id);

  if (alumni) {
      // Menghapus data Alumni
      await Alumni.delete(id);
      const data = {
          message: "Menghapus Data Alumni",
          
      };
      // Mengirimkan sebuah respons jika berhasil diHapus
      res.status(200).json(data);
  } else {
      const data = {
          message: "Data Alumni Tidak Ditemukan",
          
      };
      // Mengirimkan sebuah respons jika data tidak  ditemukan
      res.status(404).json(data);
  }
  
}

// Menampilkan detail data Alumni berdasarkan id
async show(req,res) {
  const { id } = req.params;
  const alumni = await Alumni.find(id);

  if (alumni) {
      const data = {
          message: "Menampilkan Detail Alumni",
          data: alumni,
      };
      // Mengirimkan sebuah respons data Alumni
      res.status(200).json(data);
  } else {
      const data = {
          message: "Data Alumni Tidak Ditemukan",
          
      };
      // Mengirimkan sebuah respons jika data tidak  ditemukan
      res.status(404).json(data);
  }
  
}
//Mencari Alumni berdasarkan nama
async search(req,res) {
    const { name } = req.query;
    const alumni = await Alumni.searchByName(name);

    // Mengirimkan response dengan status dan pesan berdasarkan hasil pencrian alumni
    res.status(alumni.length > 0 ? 200 : 404).json({
        message: alumni.length > 0 ? "Hasil Pencarian Alumni" : "Data Alumni Tidak Ditemukan",
        data: alumni.length > 0 ? alumni : [],
    });
}

  // buat fungsi
}

// membuat object AlumniController
const object = new AlumniController();

// export object AlumniController
module.exports = object;
