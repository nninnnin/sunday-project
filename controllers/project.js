const mongoose = require("mongoose");
const Project = require("../models/project");

const ProjectController = {};

ProjectController.createProject = async (req, res) => {
  try {
    const { title, content, href } = req.body;
    const justinblog = new Project({
      _id: new mongoose.Types.ObjectId(),
      title: title,
      content: [
        {
          tapName: content.tapName,
          desc: content.desc,
          img: content.img,
        },
      ],
      href: href,
    });

    const result = await justinblog.save();

    console.log(result);

    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = ProjectController;
