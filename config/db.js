const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.OFFLINEMONGOURI);

    console.log(`Mongodb connected on:${conn.connection.host}:${process.env.NODE_ENV}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
