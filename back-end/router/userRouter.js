const express=require('express')
const { registerValidation, validation, loginValidation } = require('../middelware/validation')
const { register, login , getcurrent,getusers, confirmEmail, resetPassword, codePassword } = require('../controller/userController')
const { isauth } = require('../middelware/isauth')

const userRouter=express.Router()
userRouter.post("/blog/register",registerValidation,validation,register)
userRouter.post("/blog/login",loginValidation,validation,login)
userRouter.get("/blog/current",isauth,getcurrent)
userRouter.get("/blog/users",getusers)
userRouter.get("/blog/confirm/:token",confirmEmail)
userRouter.post("/blog/reset-password",resetPassword)
userRouter.post("/blog/code-password",codePassword)
module.exports=userRouter