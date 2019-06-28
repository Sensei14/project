const express = require("express");
const items = express();
const Item = require("../schemas/item");

items.get("/", (req, res) => {
  Item.find((err, items) => {
    if (err) return console.error(err);

    res.send(items);
  });
});

module.exports = items;
