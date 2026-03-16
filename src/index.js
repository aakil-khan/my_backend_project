import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()
//   app.on("ERROR",()=> {
//     console.log("ERROR in Express:", error);
//  })

.then(() => {
    app.listen(process.env.PORT || 8000 , ()=> {
        console.log(`Server is running on Port ${process.env.PORT}`);
    })
})
.catch((error) =>  {
    console.log("MONGO database connection failed !!", error);
})
























// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from 'express';

// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("ERROR",()=> {
//         console.log("ERROR in Express:", error);
//         throw error
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`App is Listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("ERROR", error)
//         throw err 
//     }
// })()