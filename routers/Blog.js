const express = require('express')

const router = express.Router();
const blogController = require('../controllers/blogController');

router.get("/", blogController.getsBlog);
router.get("/:id", blogController.getBlog);
router.post("/", blogController.createBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router