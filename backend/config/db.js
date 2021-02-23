import mongoose from 'mongoose'
const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(
      `MongoDB connected: ${(await conn).connection.host}`.cyan.underline
    )
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
