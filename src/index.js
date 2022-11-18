import express from 'express';
import cors from 'cors';
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// config

const app = express();
app.use(cors());
app.use(express.json());



app.listen(5000,()=> console.log("Server Running in port 5000"))