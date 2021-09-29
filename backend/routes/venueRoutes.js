const express = require("express");
const router = express.Router();

//importing
const { getProductById,
        addNewVenueType ,
        getProduct,
        photo,
        removeProduct,
        updateProduct,
        getAllVenues
        
} = require("../controllers/venueController");

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

//Route to add new venue
router.post(
  "/new-venue-type/add/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  addNewVenueType 
);

//read routes
router.get("/venue/:productId", getProduct);
router.get("/product/photo/:productId", photo);
//route to update venue
router.put("/venue/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, updateProduct);
//route to delete venue
router.delete("/venue/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, removeProduct);
//route to list all venues
router.get("/venue-types",getAllVenues);


module.exports = router;
