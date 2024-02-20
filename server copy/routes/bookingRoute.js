const express = require("express");
const router = express.Router();
const Booking = require("../model/bookingSchema");

router.use(express.json());

router.post("/bookhotel", async (req, res) => {
    try{
     
      const newbooking = new Booking(req.body);
      await newbooking.save();

      res.send("Your booking is successfull");
   
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});


router.get("/getallbookings", async(req, res) => {

  try {

      const bookings = await Booking.find().populate("car");
      res.send(bookings);
      
  } catch (error) {
      return res.status(400).json(error);
  }

});

module.exports = router;
