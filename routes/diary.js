const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.js')

// Create

router.post('/',postController.createPost);


// Read
router.get('/',postController.getPosts);

router.get('/write',(req,res)=>{
    res.render('write');
});
router.get('/:postId',postController.getPost);
router.get('/update/:postId',postController.getPost);


// Update
router.put('/write/:postId',postController.updatePost);

// Delete
router.delete('/delete/:postId',postController.deletePost);


module.exports = router;