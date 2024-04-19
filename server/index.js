const express=require("express");
const cors=require("cors");
const dataConn = require("./database");
const postRouter=require("./router/postRouter");
const path=require("path");


const app=express();
dataConn();
app.use(express.static(path.resolve(__dirname,"dist")))

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(express.json())

app.use("/api",postRouter);

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"dist",'index.html'))
})





app.listen(2000,()=>console.log(`Your server is running on ${2000}`));