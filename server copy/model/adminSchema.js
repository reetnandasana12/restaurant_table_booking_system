const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String,
    password:String
},{timestamps:true});

const admindb = new mongoose.model("admin",adminSchema);

module.exports = admindb;