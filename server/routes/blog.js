const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

try {
  /**
   * MongoDB connection
   */
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
  // Check if the collections exist
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log(collections);
} catch (error) {
  console.error(`Error:: ${error.message} encountered connecting to MongoDB:: ${error}`);
} finally {
  await mongoose.disconnect();
  process.exit(1);
}