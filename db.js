const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://nilaxy99:anoyan1998@cluster0.g1ewdoj.mongodb.net/Cloth";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection is successful");
});

db.on("error", () => {
  console.log("Mongo DB Connection is failed");
});

module.exports = mongoose;
