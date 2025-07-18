const mongoose = require('mongoose');

connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB Atlas')
  } catch (error) {
    console.error('Error Connecting to MongoDB Atlas', error.message);
    process.exit(1);
  }
}


module.exports = connectDB;