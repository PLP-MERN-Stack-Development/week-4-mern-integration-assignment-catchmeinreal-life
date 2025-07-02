const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');

const writeFileExample = require('../utils/mail');

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  
  console.log('Raw req.body:', req.body);

  if (!req.body) return res.status(400).json({ message: 'Missing request body' });

  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken =await crypto.randomBytes(32).toString('hex');

    user = new User({ name, email, password: hashedPassword, verificationToken });
    await user.save();
    
    const verifyUrl = `${process.env.SERVER_URL}/verify/${verificationToken}`;
    
    // Send verification email
    
    writeFileExample(verificationToken,email, verifyUrl, user);
    res.status(200).json({ message: 'Verification email sent. Please check your inbox.' });
      
    

  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

// GET /api/auth/verify/:token
router.get('/verify/:token', async (req, res) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.token });
    if (!user) return res.status(400).json({ message: 'Invalid token' });

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ 
      message: 'Email verified successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  console.log('login req', req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    if (!user.isVerified) return res.status(401).json({ message: 'Please verify your email first.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
