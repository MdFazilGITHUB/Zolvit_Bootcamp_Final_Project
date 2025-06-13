const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const { hashPassword, comparePasswords } = require("../utils/passwordUtils");
const handleServerError = require("../utils/handleError"); // ✅ Import the utility

// Signup Controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ success: false, message: "User already exists" });

    const hashedPwd = await hashPassword(password);
    const user = await User.create({ name, email, password: hashedPwd });

    res.status(201).json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } catch (err) {
    handleServerError(res, "Signup failed", err);
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await comparePasswords(password, user.password);

    if (user && isMatch) {
      res.status(200).json({
        success: true,
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (err) {
    handleServerError(res, "Login failed", err);
  }
};

module.exports = { signup, login };
