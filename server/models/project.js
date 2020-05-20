const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  contents: [
    {
      tabName: { type: String, required: true },
      img: {
        data: Buffer,
        contentType: String,
      },
      desc: {
        type: String,
      },
    },
  ],
  href: {
    type: String,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
