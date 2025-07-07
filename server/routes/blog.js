const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');

const { addPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/blogController');





// POST /api/blog/
/**
 * * @swagger
 * * /api/blog/:
 * *   post:
 * *     summary: Create a new blog post
 * *     description: Create a new blog post with the provided title, content, and tags.
 * *     tags: [Blog]
 * *     requestBody:
 * *       required: true
 * *       content:
 * *         application/json:
 * *           schema:
 * *             type: object
 * *             properties:
 * *               title:
 * *                 type: string
 * *                 description: The title of the blog post.
 * 
 */
router.post('/blog', addPost);
  

router.get('/blog', getPosts);

module.exports = router;