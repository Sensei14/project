const express = require("express");
const toInventory = express();
const User = require("../schemas/user");

toInventory.post("/", (req, res) => {
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

  res.send("Dodano do plecaka");
});

module.exports = toInventory;
