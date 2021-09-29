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
//Food routes
const foodRoutes = require("./routes/foodRoutes");
//activity routes
const activityRoutes = require("./routes/activityRoutes");
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
app.use("/api", venueRoutes );
//food item routes
app.use("/api", foodRoutes);
//activity routes
app.use("/api", activityRoutes);
//Port
const port = process.env.PORT || 8000;

//starting a server
app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
