const express = require("express");
const router = express.Router();

const projectController = require("../../controllers/project.js");

// to use multipart mimtype datas
const multer = require("multer");
const upload = multer({ dest: "uploads/project" });

// Create post
router.get("/", upload.array("imgs", 10), projectController.createProject);

module.exports = router;
