const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  type: String,
  rank: String,
  dmg_min: Number,
  dmg_max: Number,
  defence: Number,
  vitality_bonus: Number,
  strength_bonus: Number,
  dexterity_bonus: Number,
  agility_bonus: Number,
  health_bonus: Number,
  lvl_req: Number,
  active: Boolean
});

module.exports = mongoose.model("Item", itemSchema);
