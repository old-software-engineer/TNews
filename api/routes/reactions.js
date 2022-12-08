const express = require("express");
const router = express.Router();
const reactionController = require("../controllers/reactions");

router.post("/create", reactionController.create)

router.post("/update", reactionController.update)

module.exports = router;
