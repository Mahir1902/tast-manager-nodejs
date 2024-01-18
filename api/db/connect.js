const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = (url) => {
   return mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    
}


module.exports = connectDB;
