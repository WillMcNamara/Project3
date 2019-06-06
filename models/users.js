const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  level: { type: Number, required: true, default: 0 },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
