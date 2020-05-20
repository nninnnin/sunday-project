const Post = require("../models/post");
const Guestpost = require("../models/guestpost");

const indexController = {};

indexController.getPosts = (req, res, next) => {
  Post.find()
    .sort({ _id: -1 })
    .limit(5)
    .exec()
    .then((posts) => {
      const result = {};
      result.posts = posts;

      Guestpost.find({ hidden: { $ne: true } })
        .sort({ _id: -1 })
        .limit(5)
        .exec()
        .then((visitors) => {
          result.visitors = visitors;
          return result;
        })
        .then((result) => {
          console.log(result);
          const posts = result.posts;
          const visitors = result.visitors;
          res.render("index", {
            posts: posts,
            visitors: visitors,
            imgs: [
              {
                id: 1,
              },
              {
                id: 2,
              },
              {
                id: 3,
              },
            ],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

module.exports = indexController;
