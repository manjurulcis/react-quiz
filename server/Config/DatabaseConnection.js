require("dotenv").config();
const mysql = require("mysql");
config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
const connection = mysql.createConnection(config);

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
