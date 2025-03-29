import mongoose from "mongoose";
// const {DB_USER, DB_PUSS} = process.env;

// export const connectToDatabase = "mongodb+srv://"+DB_USER+":"+DB_PUSS+"@cluster0.9njqe.mongodb.net/team-project?appName=Cluster0";

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
