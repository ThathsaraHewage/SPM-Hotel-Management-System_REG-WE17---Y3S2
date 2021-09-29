const express = require("express");
const router = express.Router();

//importing////////////////////////////////////////////////////////////
const {
  getProductById,
  // addNewRoomType ,
  addNewFoodItem,
  getFoodItem,
  photo,
  removeProduct,
  updateFoodItem,
  getAllRooms,
  getAllUniqueCategories,
} = require("../controllers/foodController");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

const { getUserById } = require("../controllers/user");

//api
//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//Add new room type route
router.post(
  "/new-food-item/add/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  addNewFoodItem
);

//read routes
router.get("/food/:productId", getFoodItem);
router.get("/product/photo/:productId", photo);
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

router.get("/food-items", getAllRooms);

module.exports = router;
