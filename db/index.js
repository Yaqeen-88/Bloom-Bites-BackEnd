const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on("connected", () => {
  console.log(`✅ Succesfully connected to MongoDB database . . .`);
})

module.exports = mongoose
