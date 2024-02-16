const express=require("express")
const app=express()
app.use(express.json())

app.get("/login",(req,res)=>{
    res.send("hello")
})

app.listen(2001,()=>{
    console.log("server running")
})