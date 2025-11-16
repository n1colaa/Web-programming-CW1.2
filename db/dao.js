const mysql = require("mysql");

var pool = mysql.createPool({
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
