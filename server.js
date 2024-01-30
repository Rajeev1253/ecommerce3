import express from "express";
const app= express();
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors';
//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
//routes
app.use('/api/v1/auth',authRoutes)



dotenv.config();
//connection
connectDB();
app.get("/",(req,res)=>{
    res.send(`<h1>Welcome to home page</h1>`)

})
const port=process.env.PORT|| 8080;
app.listen(port,()=>{
    console.log(`Server  is running in ${process.env.DEV_MODE} on ${port}`)
})