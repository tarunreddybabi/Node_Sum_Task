const express = require("express");
const app = express();

const data=[{age:"25"},{age:"26"},{age:"27"}]

app.get("/sum",(req,res)=>{
    const sum=data.reduce((total,value)=>total+parseInt(value.age),0);
    res.json({totalAge:sum})
})

app.listen(2002,()=>{
    console.log("server is running")
})
