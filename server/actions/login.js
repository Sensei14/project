const Users = require("../schemas/user");
const express = require("express");

const login = express();

login.all("*", (req, res) => {
  let answer = {
    user: {},
    status: false
  };
  Users.find(
    {
      password: req.body.password,
      username: req.body.username
    },
    (error, users) => {
      if (error) return console.error(error);
      if (users.length < 1) {
        answer.status = false;
        res.send(answer);
      } else {
        answer.status = true;
        answer.user = users[0];
        res.send(answer);
      }
    }
  );
});

module.exports = login;
