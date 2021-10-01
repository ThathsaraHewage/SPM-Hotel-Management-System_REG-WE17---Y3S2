const express = require("express");
const router = express.Router();

//importing////////////////////////////////////////////////////////////
const { placeBooking} = require("../controllers/BookingVenueController");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);

//Add a booking
router.post(
  "/venue/book/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  placeBooking
);


module.exports = router;
