const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }) // options not to get warnings

  console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB
