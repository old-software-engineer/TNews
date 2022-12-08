const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments");

router.post("/create", commentController.create)

router.post("/update", commentController.update)

module.exports = router;
