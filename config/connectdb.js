import mongoose from "mongoose";

const connectDb = async (DATABSE_URL)=>{
  console.log(DATABSE_URL)
    try{
      const DB_OPTIONS = {
         dbName: "todolist"
      }
      await mongoose.connect(DATABSE_URL,DB_OPTIONS);
      console.log('db connected')
      
    } catch(error){
      console.log(error)
    }
};
export {connectDb}