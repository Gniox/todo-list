import "dotenv/config";
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected to DB");
  } catch (e) {
    console.log("error: " + e);
    throw e;
  }
};

module.exports = connectDb;
