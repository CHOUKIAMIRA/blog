const jwt=require("jsonwebtoken")
const users=require("../model/userModel")
exports.isauth=async(req,res,next)=>{
    const token = req.headers['token'];

    try {
        const secretkey="amira@90"
        const decode =jwt.decode(token,secretkey)
        if (decode){
            const user=await users.findOne({_id:decode.id})
            req.user=user
            next()
        }else{
            res.status(400).send({msg:"user not found"})
        }
    } catch (error) {
        res.status(500).send({msg:"user not auth",error}) 
    }
}