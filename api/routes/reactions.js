const express = require("express");
const router = express.Router();
const reactionController = require("../controllers/reactions");

router.post("/create", reactionController.create)

router.put("/update", reactionController.update)

module.exports = router;
