const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

const clothsRoute = require("./routes/clothsRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.get("/", (req, res) => {
  res.send("Server working on " + port);
});

app.use("/api/clothdatas/", clothsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => "Server running on port");
