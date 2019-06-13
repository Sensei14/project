const mysql = require("mysql");
const config = require("../config");

const connection = mysql.createConnection(config);

connection.connect();

connection.query("Select * from characters", (err, result) => {
  console.log(result);
});

connection.end;
