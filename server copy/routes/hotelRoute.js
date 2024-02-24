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
    console.log("11111111111111111111111");

    // Validate that the required fields are present in the request body
    const requiredFields = ['name', 'email', 'phone', 'own_id', 'image', 'location', 'catagory', 'opening', 'closing'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required.` });
      }
    }

    const newhotel = new Hotel({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      phone: req.body.phone,
      image: req.body.image,
      own_id: req.body.own_id,
      location: req.body.location,
      catagory: req.body.catagory,
      opening: req.body.opening,
      closing: req.body.closing,
      foodType: req.body.foodType,
      star: req.body.star,
      bookedTimeSlots: req.body.bookedTimeSlots,
      // Other fields...
    });

    await newhotel.save();

    console.log("122222222222222222222222222");
    res.send("Hotel added successfully");
  } catch (error) {
    console.error("Error saving hotel:", error);
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
