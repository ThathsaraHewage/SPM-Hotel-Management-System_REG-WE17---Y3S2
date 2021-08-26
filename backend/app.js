require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//my routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const activityRoutes = require("./routes/activityRoutes");
//database connection
const connectDB = require('./database/dbConnect');
connectDB();

//Middelware
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api", authRoutes );
app.use("/api", userRoutes );
app.use("/api", activityRoutes);
//Port
const port = process.env.PORT || 8000;

//starting a server
app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
});