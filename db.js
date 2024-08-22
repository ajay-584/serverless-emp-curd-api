const mongoose = require('mongoose');
let isConnected;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return;
  }

  console.log('=> using new database connection');
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = mongoose.connection.readyState;
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw new Error('Could not connect to the database');
  }
};

module.exports = connectToDatabase;