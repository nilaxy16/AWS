const express = require("express");
const router = express.Router();
const Cloth = require("../models/clothModel");

router.get("/getallcloths", async (req, res) => {
  try {
    const cloths = await Cloth.find({});
    res.send(cloths);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/additem", async (req, res) => {
  const { name, size, price, material, image, description } = req.body;

  const newItem = new Cloth({
    name,
    size,
    price,
    material,
    image,
    description,
  });

  try {
    newItem.save();
    res.send("Item has been added successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
