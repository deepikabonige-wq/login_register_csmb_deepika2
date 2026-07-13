const mongoose = require('mongoose');

const connectDB = async () => {
  try {
  
    const connString = "mongodb://localhost:27017/workshop_db";
    
    await mongoose.connect(connString);
    console.log('MongoDB connected successfully to LOCALHOST!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
