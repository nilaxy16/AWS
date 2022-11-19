const express = require("express");
const router = express.Router();
//const Cloth = require("../models/clothModel");
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { total, currentUser, cartItems } = req.body;

  const neworder = new Order({
    name: currentUser.name,
    email: currentUser.email,
    userid: currentUser._id,
    orderItems: cartItems,
    shippingAddress: currentUser.address,
    mobile: currentUser.mobile,
    orderAmount: total,
  });

  try {
    neworder.save();

    res.send("Order is placed." + neworder);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});

router.post("/getuserorders", async (req, res) => {
  const { userid } = req.body;

  try {
    const orders = await Order.find({ userid: userid }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/getallorders", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.post("/update", async (req, res) => {
  const orderid = req.body.orderid;

  try {
    const updateOrder = await Order.findOne({ _id: orderid });
    updateOrder.isDelivered = true;
    await updateOrder.save();
    res.status(200).send("Order is delivered successfully");
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
