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
  res.render("index");
});

app.get('/new-table', (req, res) => {
    res.render('new-table'); 
});

app.get('/log-in', (req, res) => {
    res.render('log-in');
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Sandbox listening on http://0.0.0.0:${port}`);
});


