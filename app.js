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

function queryDatabase(query, callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            return callback(err, null);
        } else if (connection) {
            connection.query(query, (err, rows, fields) => {
                connection.release();
                if (err) {
                    return callback(true, err);
                }
                return callback(null, rows);
            });
        } else {
            return callback(true, "No connection");
        }
    });
}

pool.getConnection(function(err, con){
    if (err) throw err;
    console.log("Connected");
    con.query("CREATE TABLE IF NOT EXISTS reservation (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), partySize TINYINT, bookingDate VARCHAR(10), bookingTime VARCHAR(5), phoneNum VARCHAR(10), email VARCHAR(255) UNIQUE NOT NULL)", (err)=>{
        con.release();
        if (err) throw err;
        console.log("Created table");
    })
})

app.post("/", function (req, res,) {
    console.log(req.fname);
    console.log(req.size);
    console.log(req.date);
    console.log(req.time);
    console.log(req.contactNum);
    console.log(req.email);
    pool.getConnection(function (err, con) {
        if (err) throw err;
        console.log("Connected");
//        const sql = "INSERT INTO reservation (name, partySize, bookingDate , bookingTime, phoneNum, Email) VALUES ({req.fname}, '${req.size}', '${req.date}', '${req.time}', '${req.contactNum}', '${req.email}')";
//
  //      con.query(sql, function (err, result){
    //        con.release();
      //      if (err) throw err;
        //    console.log("1 record inserted!");
       // })
    });
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


