const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.js')

// for image upload use Multer
const multer = require('multer');
const upload = multer({ dest: 'upload/'});


// Create
router.post('/',upload.single('postImage'),postController.createPost);


// Read
router.get('/',postController.getPosts);

router.get('/write',(req,res)=>{
    res.locals.post = null;
    res.render('write');
});

router.get('/update/:postId',postController.getPost);

router.get('/:postId',postController.getPost);


// // Update
router.put('/update/:postId',postController.updatePost);

// Delete
router.get('/delete/:postId',postController.deletePost);


module.exports = router;