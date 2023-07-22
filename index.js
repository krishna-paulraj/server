const express = require("express");
const { connectDB } = require("./connection");
const userRouter = require("./routes/user");

const PORT = 3000;
const app = express();

// Mongodb Connection

connectDB("mongodb://localhost:27017/sample");

// Middleware

app.use(express.urlencoded({ extended: false }));

// Routes

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server Started: ${PORT}`);
});
