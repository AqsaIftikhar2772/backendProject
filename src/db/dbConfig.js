import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConfig = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`);
    console.log(`db connection successfully! ${db.connection.host}`);
  } catch (error) {
    console.log(`db connection faield ${error.message}`);
  }
};

export default dbConfig;
