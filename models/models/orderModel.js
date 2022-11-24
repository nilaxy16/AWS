const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    userid: { type: String, required: true },
    orderItems: [],
    shippingAddress: { type: String, required: true },
    mobile: { type: Number, required: true },
    orderAmount: { type: Number, required: true },
    isDelivered: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
