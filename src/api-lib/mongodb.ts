import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environment variable');
}

const getMongoClient = async (): Promise<MongoClient> => {
  /**
   * Global is used here to maintain a cached connection across hot reloads
   * in development. This prevents connections growing exponentiatlly
   * during API Route usage.
   * https://github.com/vercel/next.js/pull/17666
   */
  if (!global.mongoClientPromise) {
    const client = new MongoClient(MONGODB_URI);
    // client.connect() returns an instance of MongoClient when resolved
    global.mongoClientPromise = client.connect();
  }
  return global.mongoClientPromise as Promise<MongoClient>;
};

const getMongoDb = async () => {
  const mongoClient = await getMongoClient();
  return mongoClient.db();
};

export default getMongoDb;
