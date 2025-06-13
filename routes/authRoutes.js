const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");
const { signupSchema, loginSchema } = require("../validators/auth");
const { signup, login } = require("../controllers/authControllers");

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);

module.exports = router;
