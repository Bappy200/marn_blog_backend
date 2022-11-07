const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController");

router.post("/:blogid", commentController);

module.exports = router