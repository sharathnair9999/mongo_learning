const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.qbfomtf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_training");
    const zips = database.collection("zips");

    // Query for a movie that has the title 'Back to the Future'
    const query = { city: "WILSONVILLE" };
    const city = await zips.findOne(query);

    console.log(city);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
