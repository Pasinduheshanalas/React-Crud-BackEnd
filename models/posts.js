const mongoose = require("mongoose");

//save posts
const postSchema = new mongoose.Schema({
  topic: {
    type: String,
    requred: true,
  },
  description: {
    type: String,
    requred: true,
  },
  postCategory: {
    type: String,
    requred: true,
  }
});

module.exports = mongoose.model("Posts", postSchema);
