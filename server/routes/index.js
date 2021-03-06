const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

// home
router.get("/", indexController.getPosts);

// profile
router.get("/profile", (req, res) => {
  res.render("profile");
});

// project
router.get("/project", (req, res) => {
  res.render("project_bundled");
});

// gallery
router.get("/gallery", (req, res) => {
  res.render("gallery");
});

//admin
router.get("/admin", (req, res) => {
  res.render("admin");
});

module.exports = router;
