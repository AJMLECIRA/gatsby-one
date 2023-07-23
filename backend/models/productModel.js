const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    edge: { type: String, required: true },
    glassType: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
