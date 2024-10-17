const express=require('express')
const { addBlog, getBlog, likeBlog } = require('../controller/blogController')
const { isauth } = require('../middelware/isauth')


const blogRouter=express.Router()

blogRouter.post("/blog/addblog",isauth,addBlog)

blogRouter.get("/blog/getblog",getBlog)
blogRouter.post("/blog/likeblog/:id",likeBlog)

// blogRouter.delete("/blog/code-password",codePassword)
// blogRouter.put("/blog/update-password",updatePassword)
module.exports=blogRouter