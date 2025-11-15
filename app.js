const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: "sql8.freesqldatabase.com",
    user: "sql8807974",
    password: "HkHxHIDR42",
    database: "sql8807974",
});

pool.getConnection(function(err, con) {
    if (err) throw err;
    console.log("Connected!");
    //...
});

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/new-table', (req, res) => {
    res.render('new-table'); 
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});


