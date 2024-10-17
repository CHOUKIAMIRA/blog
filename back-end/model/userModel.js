const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image:{
    type:String,
    default:"https://thumbs.dreamstime.com/b/avatar-par-d%C3%A9faut-ic%C3%B4ne-profil-vectoriel-m%C3%A9dias-sociaux-utilisateur-portrait-176256935.jpg"
  },
  password: {
    type: String,
    required: true
  },
    isVerified: {
      type:Boolean,
      default:false
    },
    verificationToken:{
      type:String
    },
    codeReset: String,
    expiresAt: Date,
    createdAt: {
      type: Date,
      default: Date.now, 
    },
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
