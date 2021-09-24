var mysql = require("mysql");

// Buat koneksi ke database dbrestapi

const conn = mysql.createConnection({
  host: "localhost",
  username: "root",
  password: "",
  database: "dbrestapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = conn;
