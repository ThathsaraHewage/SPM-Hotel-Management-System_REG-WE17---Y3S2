require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//common routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
//Routes relates to venues
const venueRoutes = require("./routes/venueRoutes");
const booking = require("./routes/booking");
//Food routes
const foodRoutes = require("./routes/foodRoutes");
const foodBookingRoutes = require("./routes/foodBooking");
//activity routes
const activityRoutes = require("./routes/activityRoutes");
//accomodation routes
const accomodationRoutes = require("./routes/accomodationRoutes");
const accomodationBookingRoutes = require("./routes/Accomodationbooking");

//database connection
const connectDB = require("./database/dbConnect");
connectDB();

//Middelware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
//common routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
//Routes relates to venues
app.use("/api", venueRoutes);
app.use("/api", booking);
//food item routes
app.use("/api", foodRoutes);
app.use("/api", foodBookingRoutes);
//activity routes
app.use("/api", activityRoutes);
app.use("/api", accomodationRoutes);
app.use("/api", accomodationBookingRoutes);

//Port
const port = process.env.PORT || 8000;

//starting a server
app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
