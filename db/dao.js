const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const pool = mysql.createPool({
    connectionLimit: 100,
    host: "sql8.freesqldatabase.com",
    user: "sql8807974",
    password: "HkHxHIDR42",
    debug: false,
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
    con.query("CREATE TABLE IF NOT EXISTS reservation(name VARCHAR(255), partySize INT(1), bookingDate VARCHAR(10), bookingTime VARCHAR(5), phoneNum VARCHAR(10), email VARCHAR(255), PRIMARY KEY (email))", (err)=>{
        con.release();
        if (err) throw err;
        console.log("Created table");
    })
})

router.post("/booking.html", function (req, res,) {
    console.log(req.fname);
    console.log(req.size);
    console.log(req.date);
    console.log(req.time);
    console.log(req.contactNum);
    console.log(req.email);
    pool.getConnection(function (err, con) {
      if (err) throw err;
      console.log("Connected");
        const sql = "INSERT INTO reservation (name, partySize, bookingDate , bookingTime, bookingTime, phoneNum, email) VALUES (req.fname, req.size, req.date, req.time, req.contactNum, req.email)";
        con.query(sql, function (err, result){
            con.release();
            if (err) throw err;
            console.log("1 record inserted!");
        })
    });
  });
