import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express()

app.use(express.json({
    limit: "20kb"
}))

app.use(cookieParser())
app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}))

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}))


import getDataRouter from '../routes/festival.routes.js'

app.use("/api/v1/festivals", getDataRouter)

import userRouter from "../routes/user.routes.js"
app.use("/api/v1/users", userRouter)


export { app }