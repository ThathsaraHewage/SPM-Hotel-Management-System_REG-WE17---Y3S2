const express = require("express");
const router = express.Router();

//importing////////////////////////////////////////////////////////////
const {
  getProductById,
  addNewFoodItem,
  getFoodItem,
  dinningPhoto,
  removeProduct,
  updateFoodItem,
  getAllFoodItems,
} = require("../controllers/foodController");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

const { getUserById } = require("../controllers/user");

//api
//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//Add new food item route
router.post(
  "/new-food-item/add/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  addNewFoodItem
);

//read routes
router.get("/food/:productId", getFoodItem);
router.get("/product/dinning-photo/:productId", dinningPhoto);
//update route
router.put(
  "/food/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateFoodItem
);
//delete routes
router.delete(
  "/food/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeProduct
);

router.get("/food-items", getAllFoodItems);

module.exports = router;
