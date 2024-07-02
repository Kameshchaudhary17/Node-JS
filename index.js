import express from "express";

import db from "./DB.js";

import createRouter from "./routers/createRoute.js"

import dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(express.json())

app.use('/', createRouter)

app.get("/",(req,res)=>{
    res.send("get function")
})

// app.get("/",(req,res)=>{
//     res.send("hello world");
// })

// app.post("/",(req,res)=>{
//     const  {Name, Address} = req.body
//     console.log(Name)
//     console.log(Address)
//     return res.json(Name)
// })



const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port ${PORT}`);
})