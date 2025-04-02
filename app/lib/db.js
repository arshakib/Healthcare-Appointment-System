

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
import mongoose from "mongoose";
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "team-project",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to db");
  } catch (error) {
    console.log(error);
  }
};

