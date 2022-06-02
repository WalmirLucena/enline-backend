import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = '';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URL
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
