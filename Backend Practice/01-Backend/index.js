const express=require('express')
const app=express()
require('dotenv').config()

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/twitter",(req,res)=>{
    res.send("Twitter here")
})
app.get("/youtube",(req,res)=>{
    res.send("Ayan aur code")
})

app.listen(process.env.PORT,()=>{
   console.log(`Example app listening on port ${process.env.PORT}`)
})