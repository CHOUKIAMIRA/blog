const express=require("express")
const cors=require("cors")
const config=require("./config/config")
const userRouter=require("./router/userRouter")
const app=express()
const port=8000
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
config()
app.use("/",userRouter)
app.listen(port,()=>{
    console.log("server is running")
})