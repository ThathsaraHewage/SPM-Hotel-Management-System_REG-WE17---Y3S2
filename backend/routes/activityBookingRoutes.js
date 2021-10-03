const express = require("express");
const router = express.Router();

const {AddBooking } = require("../controllers/BookingActivityController");

//Add new booking route
router.post("/new-book-activity", AddBooking);
module.exports = router;


