const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const venueSchema = new mongoose.Schema({
    venueName:{
        type:String,
        trim: true,
        required: true,
    },
    venueType:{
        type:String,
        trim: true,
        required: true,
    },
    venueDescription:{
        type:String,
        required: true,
        trim: true
    },
    venueLocation:{
        type: String
    },
    occupacy:{
        type: String,
        required: true
    },
    area:{
        type:String,
        required: true,
    },
    features:{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        required: true
     },
    photo:{
        data: Buffer,
        contentType: String
    }
},{timestamps: true});

module.exports = mongoose.model("VenueTypes", venueSchema);