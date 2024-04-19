const mongoose =require("mongoose");
require("dotenv").config();

const dataConn=async()=>{
    try {
        const res=await mongoose.connect(process.env.DB);
        console.log("Database Connected..")
    } catch (error) {
        console.log("Failed to connect database.",error);
    }
}

module.exports=dataConn;