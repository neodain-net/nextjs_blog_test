import mongoose, { mongo } from "mongoose";

// Mongoose Connection ready state
// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const checkMongoDB = async () => {
  if (mongoose && mongoose.connection && mongoose.connection.readyState) {
    console.log("[Mongoose:checkMongoDB] database connected");
  } else {
    console.log("[Mongoose:checkMongoDB] database >>>>> not connected");
  }
};

const closeMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.close(); // close 시, await를 앞에 붙이지 않으면 close 되지 않음
    // () => { process.exit(0); }
    console.log("[Mongoose:closeMongoDB] database >>>>> try close");
    checkMongoDB();
  }
};

const connect = async () => {
  // export default async function connect() {
  const db = await mongoose.connect(process.env.ATALAS_URL);
  // 아래 함수를 사용하면 [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client 오류 발생.
  // const db = await mongoose.connect(process.env.ATALAS_URL, (error) => {
  //   console.log(
  //     "[Mongoose] database error or database connection error : " + error
  //   );
  //   checkMongoDB();
  // });

  await checkMongoDB();
  if (mongoose.connection.readyState === 1) {
    console.log("[Mongoose:connect] Database Connected");
    // await closeMongoDB();
    return;
  }

  console.log(
    `[Mongoose:connect] MongoDB successfully connected...! ${process.env.ATALAS_URL}`
  );
};

export default connect;
