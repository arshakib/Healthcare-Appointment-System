const { MongoClient, ServerApiVersion } = require('mongodb');

export const collectionNameObj = {
    userCollection: "users"
};

export default function dbConnect(collectionName){

    // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PUSS}@cluster0.9njqe.mongodb.net/?appName=Cluster0`;

    const uri = process.env.MONGODB_URI;

    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      return client.db('team-project').collection(collectionName);
}