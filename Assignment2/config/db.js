const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO URI:", process.env.MONGO_URI);
    console.log("Attempting MongoDB connection...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Atlas Connected");
  } catch (err) {
    console.error("Mongo Error:");
    console.error(err);
  }
};

module.exports = connectDB;