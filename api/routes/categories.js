const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categories");

router.get("/all", categoryController.getAll);

router.post("/create", categoryController.create)

module.exports = router;
