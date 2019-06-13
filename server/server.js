const mysql = require("mysql");
const express = require("express");
const port = 3001;
const server = express();

const config = require("./config");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "zaq1@WSX"
});

connection.connect(err => {
  if (err) return console.error(err);
});

connection.end;

server.get("/", (req, res) => {
  res.send("Server is running...");
});

server.listen(port, () => console.log(`Listening on port: ${port}`));
