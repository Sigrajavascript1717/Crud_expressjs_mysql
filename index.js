const express = require('express');
const bodyParser = require('body-parser');
const db = require("./config/db"); // Memuat konfigurasi koneksi database
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint untuk membaca semua data mahasiswa
app.get('/mahasiswa', (req, res) => {
  db.query('SELECT * FROM mahasiswa_data', (err, result) => {
    if (err) {
      res.status(500).send('Terjadi kesalahan saat mengambil data mahasiswa');
      throw err;
    }
    res.send(result);
  });
});

// Endpoint untuk membaca data mahasiswa berdasarkan ID
app.get('/mahasiswa/:id', (req, res) => {
  const sql = `SELECT * FROM mahasiswa_data WHERE id = ?`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send('Terjadi kesalahan saat mengambil data mahasiswa');
      throw err;
    }
    if (result.length === 0) {
      res.status(404).send('Data mahasiswa tidak ditemukan');
    } else {
      res.send(result[0]);
    }
  });
});

// Endpoint untuk menambahkan data mahasiswa baru
app.post('/mahasiswa', (req, res) => {
  const { nim_siswa, nama_siswa, ukt_siswa } = req.body;
  const sql = `INSERT INTO mahasiswa_data (nim_siswa, nama_siswa, ukt_siswa) VALUES (?, ?, ?)`;
  db.query(sql, [nim_siswa, nama_siswa, ukt_siswa], (err, result) => {
    if (err) {
      res.status(500).send('Terjadi kesalahan saat menambahkan data mahasiswa');
      throw err;
    }
    res.send('Data mahasiswa berhasil ditambahkan');
  });
});

// Endpoint untuk memperbarui data mahasiswa berdasarkan ID
app.put('/mahasiswa/:id', (req, res) => {
  const { nim_siswa, nama_siswa, ukt_siswa } = req.body;
  const sql = `UPDATE mahasiswa_data SET nim_siswa = ?, nama_siswa = ?, ukt_siswa = ? WHERE id = ?`;
  db.query(sql, [nim_siswa, nama_siswa, ukt_siswa, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send('Terjadi kesalahan saat memperbarui data mahasiswa');
      throw err;
    }
    res.send('Data mahasiswa berhasil diupdate');
  });
});

// Endpoint untuk menghapus data mahasiswa berdasarkan ID
app.delete('/mahasiswa/:id', (req, res) => {
  const sql = `DELETE FROM mahasiswa_data WHERE id = ?`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send('Terjadi kesalahan saat menghapus data mahasiswa');
      throw err;
    }
    res.send('Data mahasiswa berhasil dihapus');
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
