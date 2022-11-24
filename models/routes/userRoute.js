const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { name, email, address, mobile, password } = req.body;

  const newUser = new User({ name, email, address, mobile, password });

  try {
    newUser.save();
    res.send("User has been registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });

    if (user.length > 0) {
      const loginUser = {
        _id: user[0]._id,
        name: user[0].name,
        email: user[0].email,
        address: user[0].address,
        mobile: user[0].mobile,
        isAdmin: user[0].isAdmin,
      };
      res.send(loginUser);
    } else {
      return res.status(400).json({ message: "User login is failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({ isAdmin: "false" });
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
