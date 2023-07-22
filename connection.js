const mongoose = require("mongoose");

async function connectDB(url) {
  return await mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { connectDB };
