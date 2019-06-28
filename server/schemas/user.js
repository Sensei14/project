const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  character: {
    name: String,
    exp: Number,
    lvl: Number,
    health: Number,
    strength: Number,
    vitality: Number,
    dexterity: Number,
    agility: Number,
    dmg_min: Number,
    dmg_max: Number,
    defence: Number,
    eq: []
  }
});

module.exports = mongoose.model("User", userSchema);
