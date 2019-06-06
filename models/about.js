const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  year: {type: Number, require: true },
  name: {type: String, require: true },
  division: {type: String, require: true},
  place: {type: String, require: true}
});

const boardSchema = new Schema({
  name: { type: String, require: true },
  title: { type: String, require: true, default: "Member at large"}
});

const Board = mongoose.model("Board", boardSchema);
const Results = mongoose.model("Results", resultsSchema);

module.exports = {
  Board: Board,
  Results: Results
}