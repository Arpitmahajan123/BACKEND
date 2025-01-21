import mongoose from "mongoose"
import { DB_NAME } from "./constants";
import express from "express"
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
// Using 



















app.listen(process.env.PORT, () => {
    console.log(`Your App Is Running On Prit Number ${process.env.PORT}`);

});











