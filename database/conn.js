import mongoose from "mongoose";

export default async function connect() {
  const db = await mongoose.connect(process.env.ATALAS_URL);

  if (mongoose.connection.readyState === 1) {
    console.log("Database Connected");
    return;
  }

  console.log(`MongoDB successfully connected...! ${process.env.ATALAS_URL}`);
}
