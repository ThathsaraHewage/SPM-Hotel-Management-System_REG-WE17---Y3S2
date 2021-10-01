const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const bookingsSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim: true,
        required: true,
    },
    lastname:{
        type:String,
        trim: true,
        required: true,
    },
    address:{
        type:String,
        required: true,
        trim: true
    },
    city:{
        type:String,
        required: true,
        trim: true
    },
    hours:{
        type: Number,
        required: true
    },
    checkindate:{
        type:String,
        required: true,
        trim: true
    },
    holdersname:{
        type:String,
        required: true,
        trim: true
    },
    cardnumber:{
        type:String,
        required: true,
        trim: true
    },
    cvv:{
        type: Number,
        required: true
    },
    expdate:{
        type:String,
        required: true,
        trim: true
    }
},{timestamps: true});
module.exports = mongoose.model("ActivityBooking", bookingsSchema);