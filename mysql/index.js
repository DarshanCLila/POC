const mysql = require('mysql');
const config = require('../config');

const con = mysql.createConnection(config.mysql);

con.connect((err) => {
  if (err) throw err;
  console.log('Database Connected!');
});
module.exports = con;
