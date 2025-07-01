
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ericmatutu125:7jq6qM%40125@nodetutorial.9cc3x.mongodb.net/blogDB?retryWrites=true&w=majority&appName=nodetutorial";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


module.exports = client;