const express = require("express");
const router = express.Router();

//importing
const { getProductById,
    addNewActivity ,
    getProduct,
    photo,
    removeProduct,
    updateProduct,
    getAllActivities,
    AddBooking,
} = require("../controllers/activityController");

const {
    isSignedIn,
    isAuthenticated,
    isAdmin
} = require("../controllers/auth");

const {
    getUserById
} = require("../controllers/user");



//api
//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//Add new activity route
router.post(
    "/new-activity/add/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    addNewActivity
);

//read routes
router.get("/activity/:productId", getProduct);
router.get("/product/photo/:productId", photo);
//update route
router.put("/activity/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, updateProduct);
//delete routes
router.delete("/activity/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, removeProduct);
//listing all activities route
router.get("/activities",getAllActivities);

//Add new booking route
router.post(
    "/new-booking/add/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    AddBooking
);


module.exports = router;
