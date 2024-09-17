
import dotenv from "dotenv"
 import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`Serve is running at port : ${process.env.PORT}`);

    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
    
})


/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import express from "express";

const app = express()
(async () => {
    try {
      await mongoose.connect('${process.env.MONGO_URL}/${DB_NAME}') 
      app.on("error" , (error) =>{
          console.log("ERR : ",error);
          throw error
          
      })

      app.listen(process.env.PORT, () =>{
          console.log(`app is listening on port $ {process.env.PORT}`);
          
      })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
        
        
    }
    
})
    */