const mongoose = require("mongoose");

const URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/chatApp";

const connect = mongoose
  .connect(URI)
  .then(() => console.log("DB connected Successfully"))
  .catch((err) => {
    console.error(err);
  });

module.exports = connect;
