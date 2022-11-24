const mongoose = require("mongoose");

const clothSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    size: [],
    prices: [],
    material: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("clothdatas", clothSchema);
