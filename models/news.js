const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
