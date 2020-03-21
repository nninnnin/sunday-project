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

// Update guestpost

// Delete guestpost
router.get('/:postId/delete',guestController.deletePost);

module.exports = router;