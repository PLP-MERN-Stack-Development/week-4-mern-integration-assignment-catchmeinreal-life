const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err.message)
);

// let user = await User.findOne({ email });
let collections = await mongoose.connection.db.User.find({});
console.log(collections);


/**
 * 
 */