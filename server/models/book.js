const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  description: String
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
