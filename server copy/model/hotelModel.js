const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email : {type : String } ,
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
    foodType: { type: String, required: true },
    star: { type: String, required: false,default:5 },
    // year: { type: Number, required: true }, // New attribute: Year
    // mileage: { type: Number, required: true }, // New attribute: Mileage (in km/liter)
    // carType: { type: String, required: true }, // New attribute: Car Type (Automatic/Manual)
    bookedTimeSlots: [
        {
            from: { type: String, required: true },
            to: { type: String, required: true }
        }
    ],
   // rentPerHour: { type: Number, required: true }
}, { timestamps: true });

const hotelModel = mongoose.model('hotels', hotelSchema);
module.exports = hotelModel;
