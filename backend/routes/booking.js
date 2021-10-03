const express = require("express");
const router = express.Router();

//importing////////////////////////////////////////////////////////////
const { placeBooking } = require("../controllers/BookingVenueController");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);

//Add a booking
router.post("/venue/book", placeBooking);

module.exports = router;
