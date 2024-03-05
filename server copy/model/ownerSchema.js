const mongoose = require("mongoose");


const ownerSchema = new mongoose.Schema({
    googleId:String,
    name:String,
    email:String,
    image:String,
    password:String
},{timestamps:true});

const ownerdb = new mongoose.model("owners",ownerSchema);

module.exports = ownerdb;