const express = require("express");
const router = express.Router();

const { orderFoodItem } = require("../controllers/foodBookingController");

//place new food item order route
router.post("/new-food-order", orderFoodItem);
module.exports = router;
