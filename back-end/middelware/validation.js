const {body,validationResult}=require('express-validator')

exports.registerValidation=[body("email","this email not valid").isEmail(),
    body("password","this password not valid").isStrongPassword({
    minLength:5,minLowercase:1,minUppercase:1,minNumbers:1
})]

exports.loginValidation=[body("email","this email not valid").isEmail()]

exports.passwordValidation=[
    body("password","this password not valid").isStrongPassword({
    minLength:5,minLowercase:1,minUppercase:1,minNumbers:1
})]
exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    if(errors.isEmpty()){
        next()
    }
    else{
        res.status(400).send({errors:errors.array()})
    }
}