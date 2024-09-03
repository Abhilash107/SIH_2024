import connectDB from '../db/index.js'
import dotenv from "dotenv"


import { app } from '../src/app.js'

dotenv.config({
    path:'.env'
})

connectDB()
.then( ()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is listening on Port: ${process.env.PORT}`)
    })
} )
.catch( (err)=>{
    console.log("Database connection failed!!!", err);  
} )