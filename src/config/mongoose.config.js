import mongoose from "mongoose";

export const connectUsingMongoose = async () => {
    const url = "mongodb://localhost:27017/postaway";
    try{
      await mongoose.connect(url);
      console.log("Connected to MongoDB (using Mongoose)");
      }catch(err){
          console.log(err);
      }   
    };