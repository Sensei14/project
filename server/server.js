const express = require("express");
const port = 3001;
const server = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const login = require("./actions/login");
const register = require("./actions/register");
const items = require("./actions/items");
const changeEq = require("./actions/changeEq");
const Item = require("./schemas/item");
const toInventory = require("./actions/toInventory");

server.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/MyGame", {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("connected");
});

// ustawienie dostepu
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

server.get("/", (req, res) => {
  res.send("Server is running...");
});

server.use("/login", login);
server.use("/register", register);
server.use("/items", items);
server.use("/changeEq", changeEq);
server.use("/toInventory", toInventory);

// const i = new Item({
//   name: "metalowa tarcza",
//   type: "armor",
//   rank: "normal",
//   dmg_min: 0,
//   dmg_max: 0,
//   defence: 20,
//   vitality_bonus: 0,
//   strength_bonus: 0,
//   dexterity_bonus: 0,
//   agility_bonus: 0,
//   health_bonus: 0,
//   lvl_req: 1,
//   active: false
// });

// i.save();

server.listen(port, () => console.log(`Listening on port: ${port}`));
