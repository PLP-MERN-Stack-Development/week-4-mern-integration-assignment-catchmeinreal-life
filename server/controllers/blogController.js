

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Post = require('../models/Post');


const savePostManually = require('../utils/post.json');

// POST /api/auth/signup
const addPost = async (req, res) => {

  if (!req.body) return res.status(400).json({ message: 'Missing request body' });

  const { postData } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken =await crypto.randomBytes(32).toString('hex');

    user = new Post({ name, email, password: hashedPassword, verificationToken });
    await user.save();
    
    const verifyUrl = `${process.env.SERVER_URL}/verify/${verificationToken}`;
    
    /**
     * Store user data >> data.json
     * Send verification email >> mail.js
     * 
     */
    
    writeFileExample(verificationToken,email, verifyUrl, user);
    res.status(200).json({ message: 'Verification email sent. Please check your inbox.' });
      
    

  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 }); 

    res.status(200).json({
      success: true,
      count: posts.length,
      user: req.user,
      data: posts,
    });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ success: false, error: 'Server Error..', message : error.message });
  }
};

module.exports = {addPost, getPosts };
