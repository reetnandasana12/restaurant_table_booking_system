const express = require("express");
const router = express.Router();
const Hotel = require("../model/hotelModel");

// Middleware to parse JSON data from the request body
router.use(express.json());

router.get("/getallhotels", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.send(hotels);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addhotel", async (req, res) => {
  try {
    const newhotel = new Hotel(req.body);
    await newhotel.save();
    res.send("Hotel added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/edithotel", async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ _id: req.body._id });
    hotel.name = req.body.name;
    hotel.image = req.body.image;
    hotel.email = req.body.email;
    hotel.fuelType = req.body.fuelType;
    hotel.rentPerHour = req.body.rentPerHour;
    hotel.capacity = req.body.capacity;

    await hotel.save();

    res.send("Hotel details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deletehotel", async (req, res) => {
  try {
    await Hotel.findOneAndDelete({ _id: req.body.hotelid });

    res.send("Hotel deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
