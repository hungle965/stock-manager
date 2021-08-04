const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  password: "password",
  user: "root",
  database: "real_time_chat_room",
  host: "localhost",
  port: "3306",
  insecureAuth: true,
});

const real_time_chat_room_db = {};

real_time_chat_room_db.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM user`, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

real_time_chat_room_db.detail = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM user WHERE id = ?`, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

module.exports = real_time_chat_room_db;
