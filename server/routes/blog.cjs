const dotenv = require('dotenv');
const mongoose = require('mongoose');


// Load environment variables
dotenv.config();

try {
  /**
   * MongoDB connection
   */
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log('connected to mongodb'))
    .catch(error => console.error('error connecting', error))
  
  // Check if the collections exist
  // const collections = mongoose.connection.db.listCollections().toArray();
  // console.log(collections);
} catch (error) {
  console.error(`Error:: ${error.message} encountered connecting to MongoDB:: ${error}`);
} finally {
  mongoose.disconnect();
  process.exit(1);
}