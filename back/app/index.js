const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
const port = 8080;
app.listen(port, () =>{
  console.log("Welcome to fast-shopping api.");
});

const pool = mysql.createPool({
  connectionLimit: 10, //important
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});


app.get("/", async (req, res) => {
  res.json({ status: "ok"})
});

app.get("/products", async (req, res) => {
  const query = "SELECT * FROM products";
  pool.query(query,(err, data) => {
    if(err) {
      res.json({ status: "error", message: err });
    }
    res.json(data);
  });
});


app.post("/user", async (req, res) => {
  const { id, name, address, phone, email } = req.body;
  const data = {
    id_user: id,
    full_name: name,
    address: address,
    phone: phone,
    email: email
  }
  const query = "INSERT INTO users VALUES (?, ?, ?, ?, ?)";
  pool.query(query, Object.values(data), (err) => {
    if(err){
      res.json({ status: "error", message: err.code });
    }else {
      res.json({ status: "ok", data: data});
    }
  });
});