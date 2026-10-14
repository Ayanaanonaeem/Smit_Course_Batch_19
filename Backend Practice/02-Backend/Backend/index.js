const express=require('express')
const app=express()
require('dotenv').config()
const port=2000

const jokes = [
  {
    id: 1,
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!"
  },
  {
    id: 2,
    setup: "Why did the developer go broke?",
    punchline: "Because he used up all his cache!"
  },
  {
    id: 3,
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs!"
  },
  {
    id: 4,
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn't know how to Express himself!"
  },
  {
    id: 5,
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!"
  }
];

app.get("/",(req,res)=>{
    
    res.send("hello")
   
})
app.get("/api/jokes",(req,res)=>{
    res.send(jokes)
})
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`);
    
})


