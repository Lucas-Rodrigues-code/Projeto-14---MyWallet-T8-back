
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient('mongodb://localhost:27017');
try {
  await mongoClient.connect();
  
} catch (error) {
  console.log(error.message);
}
const db = mongoClient.db("wallet");

export { db };