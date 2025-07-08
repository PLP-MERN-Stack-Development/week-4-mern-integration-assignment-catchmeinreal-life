const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get('/blog', async (req, res) => {
    console.log(req.headers);
    try {
    //   const [blog] = await Task.find({});
    //   if (!blog) return res.status(400).json({ message: 'No Blogs at the moment' });
      res.status(200).json({ 
        message: 'Email verified successfully',
        data: blog,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;