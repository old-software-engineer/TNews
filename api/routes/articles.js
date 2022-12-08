const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articles");

router.get("/all", articleController.getAll);

router.get("/user", articleController.getByUserId);

router.get("/:id", articleController.getById);

router.post("/create", articleController.create)

module.exports = router;
