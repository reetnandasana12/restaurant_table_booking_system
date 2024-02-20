const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    email : {type : String, required: true } ,
    phone : {type : String, required: true } ,
    image: { type: String, required: true },
    location: { type: String, required: true },
    catagory: { type: String, required: true },
    opening: { type: String, required: true },
    closing: { type: String, required: true },
    foodType: { type: String, required: false },
    star: { type: String, required: false,default:5 },
    bookedTimeSlots: [
        {
            from: { type: String, required: true },
            to: { type: String, required: true }
        }
    ],
}, { timestamps: true });

const hotelModel = mongoose.model('resturant', hotelSchema);
module.exports = hotelModel;
