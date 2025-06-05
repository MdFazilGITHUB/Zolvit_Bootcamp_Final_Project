const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
