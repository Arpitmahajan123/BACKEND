// This Is Not A Consistent Way To Write Like This "Require" And "Import" In The Same File.
// require("dotenv").config({path: './env'})

import dotenv from "dotenv"
dotenv.config({path: './env'})

import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB from "./db/index.db.js";
import path from "path";
const app = express()

//=========================================================================
// 1st Approach.
// Using IIFE, Async-Await. 
/*
;( async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("Express Ka Error Hai Bhai", error);
            throw error
        })
    }
    catch(error){
        console.error("Error: ", error);
        throw err
    }
})()
*/

//=========================================================================


//=========================================================================
// 2nd Approach
// Using Connection.Instatce.connection.host()

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Your App Is Running On Port Number ${process.env.PORT} !!!`);
    });
})
.catch((error)=>{
    console.error("Error: ", error);
    
})


// app.listen(process.env.PORT, () => {
//     console.log(`Your App Is Running On Port Number ${process.env.PORT}`);

// });











