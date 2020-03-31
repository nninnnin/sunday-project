// VISITOR ROUTER

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Guestpost = require('../models/guestpost');

const guestController = require('../controllers/visitor');

// Create guestpost
router.post('/',guestController.createPost);

// Read guestpost
router.get('/',guestController.readPost);

// Update guestpost (can use PUT with fetchAPI of JavaScript)
router.put('/:postId',guestController.updatePost);

// Delete guestpost (but use GET method cuz html form does not support DELETE method)
router.get('/:postId/delete',guestController.deletePost);

module.exports = router;