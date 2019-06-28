const express = require("express");
const changeEq = express();
const User = require("../schemas/user");

changeEq.post("/", (req, res) => {
  const id = req.body._id;
  const replace = req.body;

  User.replaceOne(
    {
      _id: id
    },
    replace,
    err => {
      if (err) return console.error(err);
    }
  );

  res.send("Ekwipunek zmieniony");
});

module.exports = changeEq;
