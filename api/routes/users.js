const express = require("express");
const passport = require("../utils/login");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/all", userController.getAllUsers);

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

module.exports = router;
