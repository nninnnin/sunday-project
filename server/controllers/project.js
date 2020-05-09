const mongoose = require("mongoose");
const Project = require("../models/project");

const ProjectController = {};

ProjectController.createProject = async (req, res) => {
  try {
    const { title, contents, href } = req.body;

    const project = new Project({
      _id: new mongoose.Types.ObjectId(),
      title: title,
      contents: contents,
      href: href,
    });

    const result = await project.save();

    console.log(result);

    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
};

ProjectController.readProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.send(projects);
  } catch (err) {
    console.log(err);
  }
};

module.exports = ProjectController;
