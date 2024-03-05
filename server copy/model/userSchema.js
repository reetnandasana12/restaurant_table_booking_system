const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    googleId:String,
    name:String,
    email:String,
    image:String,
    password:String
},{timestamps:true});

const userdb = new mongoose.model("users",userSchema);

module.exports = userdb;

// const userDetailSchema = new mongoose.Schema({
// email:{
//             type:String,
//             required: true
// },
// password:{
//     type:String
// },

// })

// const collection = mongoose.model("collections",userDetailSchema)


// module.exports = collection;