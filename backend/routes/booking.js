const express = require("express");
const router = express.Router();

//importing////////////////////////////////////////////////////////////
const { addBooking} = require("../controllers/roomBooking");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);

//Add a booking
router.post(
  "/room/book/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  addBooking
);


module.exports = router;
