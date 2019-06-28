const User = require("../schemas/user");
const express = require("express");

const register = express();

register.post("/", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,

    character: {
      name: req.body.name,
      exp: 0,
      lvl: 1,
      health: 100,
      strength: 1,
      vitality: 1,
      dexterity: 1,
      agility: 1,
      dmg_min: 1,
      dmg_max: 2,
      defence: 0,
      eq: []
    }
  });

  user.save().then(() => {
    res.send({
      status: 1,
      text: "Użytkownik zarejestrowany"
    });
  });
});

module.exports = register;
