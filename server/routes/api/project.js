// project/api

const express = require("express");
const router = express.Router();

const projectController = require("../../controllers/project.js");

// to use multipart mimtype datas
const multer = require("multer");
const upload = multer({ dest: "upload/project" });

// Create project
router.post("/", upload.array("imgs", 10), projectController.createProject);

// Read projects
router.get("/", projectController.readProjects);

module.exports = router;
