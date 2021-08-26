const express = require("express");
const router = express.Router();

//importing////////////////////////////////////////////////////////////
const { getProductById,
        addNewRoomType ,
        getProduct,
        photo,
        removeProduct,
        updateProduct,
        getAllRooms,
        getAllUniqueCategories
} = require("../controllers/accomodationController");

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

//Add new room type route
router.post(
  "/new-room-type/add/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  addNewRoomType 
);

//read routes
router.get("/room/:productId", getProduct);
router.get("/product/photo/:productId", photo);
//update route
router.put("/room/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, updateProduct);
//delete routes
router.delete("/room/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, removeProduct);
//listing all research papers route
router.get("/room-types",getAllRooms);


module.exports = router;
