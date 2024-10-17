const express=require("express")
const cors=require("cors")
const config=require("./config/config")
const userRouter=require("./router/userRouter")
const blogRouter = require("./router/blogRouter")
const app=express()
const port=8000
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
config()
app.use("/",userRouter)
app.use("/api",blogRouter)
app.listen(port,()=>{
    console.log("server is running")
})