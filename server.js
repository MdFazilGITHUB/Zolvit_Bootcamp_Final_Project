const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
