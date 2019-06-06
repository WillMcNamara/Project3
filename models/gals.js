const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
});

const videosSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
});

const Images = mongoose.model("Images", imagesSchema);
const Videos = mongoose.model("Videos", videosSchema)

module.exports = Images, Videos;
