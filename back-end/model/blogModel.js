const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    image: String,
    like:{type:Array,default:[]},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

module.exports = mongoose.model("Blog", blogSchema); // Utilisez une majuscule pour le nom du modèle
