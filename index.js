import express from "express";

import dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.post("/",(req,res)=>{
    const  {Name, Address} = req.body
    console.log(Name)
    console.log(Address)
    return res.json()
})

const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log("Server is running on port ${PORT}");
})