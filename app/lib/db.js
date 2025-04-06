

// import mongoose from "mongoose";

// export const connectToDatabase = async()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log('connect to db');
//     } catch (error) {
//         console.log(error)
//     }
// }


// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// export const connectToDatabase = async () => {
//     try {
//         if (mongoose.connection.readyState === 1) {
//             return mongoose.connection.asPromise();
//         }

//         await mongoose.connect(MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("MongoDB Connected!");
//     } catch (error) {
//         console.error("MongoDB Connection Error:", error);
//     }
// };
// import mongoose from "mongoose";
// export const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "team-project",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("connect to db");
//   } catch (error) {
//     console.log(error);
//   }
// };

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local file");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("✅ MongoDB Connected Successfully!");
  return cached.conn;
}


