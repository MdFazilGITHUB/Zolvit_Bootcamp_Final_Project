const bcrypt = require("bcrypt");

// Hash the password before saving
const hashPassword = async (plainPassword) => {
  if (typeof plainPassword !== "string" || plainPassword.trim() === "") {
    throw new Error("Password must be a non-empty string");
  }
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(plainPassword, salt);
  return hashed;
};

// Compare entered password with hashed one
const comparePasswords = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePasswords
};
