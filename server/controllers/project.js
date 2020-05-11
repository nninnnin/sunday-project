const mongoose = require("mongoose");
const Project = require("../models/project");

const ProjectController = {};

ProjectController.createProject = async (req, res) => {
  try {
    const { title, contents, href } = req.body;

    const mappedContents = contents.map((content) => {
      const dataType = content.img.split(",")[0];
      const dataString = content.img.split(",")[1]; // base64 string
      const buf = new Buffer(dataString, "base64");

      const img = {
        data: buf,
        contentType: dataType,
      };

      content.img = img;
      return content;
    });

    const project = new Project({
      _id: new mongoose.Types.ObjectId(),
      title: title,
      contents: mappedContents,
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
