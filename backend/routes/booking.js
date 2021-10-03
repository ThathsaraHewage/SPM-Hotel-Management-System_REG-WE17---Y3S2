const express = require("express");
const router = express.Router();

//importing////////////////////////////////////////////////////////////
const { placeVenueBooking} = require("../controllers/BookingVenueController");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);

//Add a booking
router.post( "/venue/book",placeVenueBooking);


module.exports = router;
